const connection = require('../models/db');

const mongoose = require("mongoose");
const imgModel = mongoose.model('Slika Novic');

const vrniVsi = (req, res) => {
    connection.query('SELECT * FROM novica', (error, novice, fields) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json( novice );
    });
};

const vrniNovicaID = (req, res) => {
    if (!req.params.id)
        return res.status(400).json({ sporocilo: "Zahtevani so vsi podatki." });
    connection.query('SELECT * FROM novica WHERE idnovica = ' + req.params.id, (error, novica, fields) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json( novica[0] );
    });
};

const urediNovicaID = (req, res) => {
    if (!req.body.naslov || !req.body.vsebina)
        return res.status(400).json({ sporocilo: "Zahtevani so vsi podatki." });
    var sql = 'UPDATE novica SET naslov = \"' + req.body.naslov +'\", vsebina = \"' + req.body.vsebina + '\" WHERE idnovica = ' + req.params.id;
    connection.query(sql, (error, odgovor, fields) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json({ sporocilo: odgovor });
    });
};

const izbrisiNovicaID = (req, res) => {
    connection.query('DELETE FROM novica WHERE idnovica = ' + req.params.id, (error, odgovor, fields) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json({ sporocilo: odgovor });
    });
};

const dodajNovica = (req, res) => {
    if (!req.body.naslov || !req.body.vsebina || !req.body.uporabnik )
        return res.status(400).json({ sporocilo: "Zahtevani so vsi podatki." });
    var sql = 'INSERT INTO novica (naslov, vsebina, datumobjave, uporabnik) VALUES (?)';
    let values = [req.body.naslov, req.body.vsebina, new Date(Date.now()), req.body.uporabnik];
    connection.query(sql, [values], (error, rezultat) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(rezultat);
    });
};

const vrniNoviceFilter = (req, res) => {
    connection.query('SELECT * FROM novica ORDER BY datumobjave DESC LIMIT 4', (error, novice) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(novice);
    });
};

const dodajSlikoNovica = (req, res) => {
    var obj = {
        idNovica: req.params.idNovica,
        slika: req.body.slika
    }
    console.log(obj);
    imgModel.create(obj, (error, result) => {
        if (error) {
            return res.status(500).json(error);
        } else {
            return res.status(201).json(result);
        }
    });
}

const posodobiSlikoNovica = (req, res) => {
    const idNovica = req.params.idNovica;
    imgModel.findOne({"idNovica": idNovica}).exec((error, slika) => {
        // console.log(slika);
        if (!slika) {
            return res.status(404).json({
                message: "Can not find news with given id"
            });
        } else if (error) {
            return res.status(500).json(error);
        } else {
            slika.slika = req.body.slika;
            slika.idNovica = req.params.idNovica;

            slika.save((error, slika) => {
                if (error) {
                    return res.status(404).json(error);
                } else {
                    return res.status(200).json({slika});
                }
            });
        }
    });
}

const vrniSlikoNovica = (req, res) => {
    const idNovica = req.params.idNovica;
    imgModel.findOne({"idNovica": idNovica})
        .select('slika')
        .exec((error, slika) => {
            if (error) {
                return res.status(500).json(error);
            } else {
                if (slika) {
                    return res.status(200).json(slika);
                } else {
                    return res.status(404).json({sporocilo: "Za to novico ni slik"});
                }
            }
        });
    // console.log(result);
    // return res.status(200).json(result.slika);
}

module.exports = {
    vrniVsi,
    vrniNovicaID,
    urediNovicaID,
    izbrisiNovicaID,
    dodajNovica,
    vrniNoviceFilter,
    dodajSlikoNovica,
    vrniSlikoNovica,
    posodobiSlikoNovica
}
