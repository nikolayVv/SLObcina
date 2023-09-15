const connection = require('../models/db');

const vrniVsi = (req, res) => {
    connection.query('SELECT * FROM organizacija', (error, organizacije, fields) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(organizacije);
    });
};

const vrniOrganizacijaID = (req, res) => {
    if (!req.params.id)
        return res.status(400).json({ sporocilo: "Zahtevani so vsi podatki." });
    connection.query(`SELECT * FROM organizacija WHERE uporabnik=${req.params.id}`, (error, organizacija) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(organizacija);
    });
};

const izbrisiOrganizacijaID = (req, res) => {
    connection.query('DELETE FROM organizacija WHERE idorganizacija = ' + req.params.id, (error, odgovor, fields) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json({ sporocilo: odgovor });
    });
};

const dodajOrganizacija = (req, res) => {
    if (!req.body.naslov || !req.body.razred || !req.body.uporabnik )
        return res.status(400).json({ sporocilo: "Zahtevani so vsi podatki." });
    var sql = 'INSERT INTO organizacija (naslov, razred, uporabnik) VALUES (?)';
    let values = [req.body.naslov, req.body.razred, req.body.uporabnik];
    connection.query(sql, [values], (error, rezultat) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json({ sporocilo: "Organizacija dodana" });
    });
};

const vrniRazredi = (req, res) => {
    connection.query('SELECT razred FROM organizacija GROUP BY razred', (error, razredi) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(razredi);
    });
};

const vrniVsiFilter = (req, res) => {
    const razred = req.params.razred;
    if (!razred) {
        return res.status(400).json({ sporocilo: "Ne najdem organizacije, razred je obvezen parameter.", })
    }

    connection.query(`SELECT * FROM organizacija WHERE razred='${razred}'`, (error, razredi) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(razredi);
    });
}

module.exports = {
    vrniVsi,
    vrniOrganizacijaID,
    izbrisiOrganizacijaID,
    dodajOrganizacija,
    vrniRazredi,
    vrniVsiFilter
}