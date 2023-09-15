const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const connection = require('../models/db');

const registracija = (req, res) => {
    if (!req.body.ime || !req.body.priimek || !req.body.email || !req.body.datumRojstva || !req.body.geslo || !req.body.idObcina) {
        return res.status(400).json({ sporocilo: "Zahtevani so vsi podatki." });
    }

    connection.query('SELECT * FROM obcina WHERE idObcina=?', req.body.idObcina, (error, obcina) => {
        if (error) {
            return res.status(500).json(error);
        }

        connection.query(`SELECT * FROM uporabnik WHERE email='${req.body.email}'`, (error, uporabnik) => {
            if (error) {
                return res.status(500).json(error);
            }
            if (uporabnik[0]) {
                return res.status(404).json({ sporocilo: "Vpisali ste e-mail, ki je že uporabljen v sistemu" })
            }
            let { nakljucnaVrednost, zgoscenaVrednost } = setPassword(req.body.geslo);
            let novUporabnik = [
                req.body.ime,
                req.body.priimek,
                req.body.email,
                new Date(req.body.datumRojstva),
                req.body.vloga ? req.body.vloga : 'obcan',
                zgoscenaVrednost,
                nakljucnaVrednost,
                new Date(Date.now()),
                obcina[0].idObcina,
                req.body.naslov,
                req.body.mesto,
                req.body.telefonskaStevilka
            ];

            connection.query('INSERT INTO uporabnik (ime, priimek, email, rojstniDatum, vloga, zgoscenaVrednost, nakljucnaVrednost, registriranOd, obcina, naslov, mesto, telefonskaStevilka) VALUES (?)', [ novUporabnik ] , (error, odgovor) => {
                if (error) {
                    return res.status(500).json(error);
                }
                connection.query(`SELECT * FROM uporabnik WHERE email='${req.body.email}'`, (error, uporabnik) => {
                    if (error) {
                        return res.status(500).json(error);
                    }
                    if (!uporabnik[0]) {
                        return res.status(404).json({ sporocilo: "Ne najdem uporabnik s podanim emailom." })
                    }
                    res.status(200).json({ zeton: generateJwt(uporabnik[0])});
                });
            })
        });
    });


}

const setPassword = function (password) {
    let randomValue = crypto.randomBytes(16).toString("hex");
    let hashValue = crypto.pbkdf2Sync(password, randomValue, 1000, 64, "sha512").toString("hex");
    return { nakljucnaVrednost: randomValue, zgoscenaVrednost: hashValue };
};

const checkPassword = function (password, randomValue, hashValue) {
    let hashValueNew = crypto.pbkdf2Sync(password, randomValue, 1000, 64, "sha512").toString("hex");
    return hashValue === hashValueNew;
}

const generateJwt = function (user) {
    console.log(user);
    const validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + 1);

    //TODO add public key to the token or maybe DID?
    return jwt.sign(
        {
            id: user.idUporabnik,
            email: user.email,
            ime: user.ime + " " + user.priimek,
            vloga: user.vloga,
            exp: parseInt(validUntil.getTime() / 1000)
        },
        process.env.JWT_GESLO
    )
}

const prijava = (req, res) => {
    if (!req.body.email || !req.body.geslo) {
        return res.status(400).json({ sporocilo: "Zahtevani so vsi podatki." });
    }

    connection.query('SELECT * FROM uporabnik WHERE email=?', req.body.email, (error, uporabnik) => {
        if (error) {
            return res.status(500).json(error);
        }
        if (!uporabnik[0]) {
            return res.status(401).json({ sporocilo: "Napačno uporabniško ime ali geslo." })
        }
        if (!checkPassword(req.body.geslo, uporabnik[0].nakljucnaVrednost, uporabnik[0].zgoscenaVrednost)) {
            return res.status(401).json({ sporocilo: "Napačno uporabniško ime ali geslo." })
        }
        res.status(200).json({ zeton: generateJwt(uporabnik[0]) });
    });
};

const urediUporabnikId = (req, res) => {
    const idUporabnik = req.params.idUporabnik
    if (!idUporabnik) {
        return res.status(400).json({ sporocilo: "Ne najdem uporabnik, idUporabnik je obvezen parameter.", })
    }


    connection.query(`SELECT * FROM uporabnik WHERE idUporabnik=${idUporabnik}`, (error, uporabnik) => {
        if (error) {
            return res.status(500).json(error);
        }
        if (!uporabnik[0]) {
            return res.status(404).json({ sporocilo: "Ne najdem uporabnik s podanim enoličnim identifikatorjem idUporabnik." })
        }

        var sql = `UPDATE uporabnik SET telefonskaStevilka='${req.body.telefonskaStevilka ?? ""}', naslov='${req.body.naslov ?? ""}', mesto='${req.body.mesto ?? ""}', opis='${req.body.opis ?? ""}', obcina='${req.body.obcina ?? ""}' WHERE idUporabnik=${idUporabnik}`;
        if (req.body.staroGeslo || req.body.novoGeslo) {
            if (!req.body.staroGeslo || !req.body.novoGeslo) {
                return res.status(400).json({ sporocilo: "Zahtevani so staro in novo geslo." });
            } else {
                if (!checkPassword(req.body.staroGeslo, uporabnik[0].nakljucnaVrednost, uporabnik[0].zgoscenaVrednost)) {
                    return res.status(404).json({ sporocilo: "Napačno staro geslo." });
                }
                let { nakljucnaVrednost, zgoscenaVrednost } = setPassword(req.body.novoGeslo);
                sql = `UPDATE uporabnik SET telefonskaStevilka='${req.body.telefonskaStevilka ?? ""}', naslov='${req.body.naslov ?? ""}', mesto='${req.body.mesto ?? ""}', opis='${req.body.opis ?? ""}', obcina='${req.body.obcina ?? ""}', zgoscenaVrednost='${zgoscenaVrednost}', nakljucnaVrednost='${nakljucnaVrednost}' WHERE idUporabnik=${idUporabnik}`;
            }
        }

        connection.query(sql, (error, odgovor) => {
            if (error) {
                return res.status(500).json(error);
            }
            res.status(200).json(odgovor);
        });
    });

};

module.exports = {
    prijava,
    registracija,
    urediUporabnikId
}