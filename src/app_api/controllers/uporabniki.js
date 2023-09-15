const connection = require('../models/db');

const mongoose = require("mongoose");
const imgModel = mongoose.model('Slika Uporabnika');

const vrniVsi = (req, res) => {
    connection.query('SELECT * FROM uporabnik', (error, uporabniki) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(uporabniki);
    })
}

const vrniUporabnikId = (req, res) => {
    const idUporabnik = req.params.idUporabnik
    if (!idUporabnik) {
        return res.status(400).json({ sporocilo: "Ne najdem uporabnik, idUporabnik je obvezen parameter.", })
    }

    connection.query(`SELECT * FROM uporabnik WHERE idUporabnik='${idUporabnik}'`, (error, uporabnik) => {
        if (error) {
            return res.status(500).json(error);
        }
        if (!uporabnik[0]) {
            return res.status(404).json({ sporocilo: "Ne najdem uporabnik s podanim enoličnim identifikatorjem idUporabnik." })
        }
        connection.query(`SELECT COUNT(*) as stPredlogov FROM predlogprojekta WHERE uporabnik='${uporabnik[0].idUporabnik}' AND jePotrjen='1'`, (error, predlog) => {
            if (error) {
                return res.status(500).json(error);
            }
            uporabnik[0].stPredlogov = predlog[0].stPredlogov;
            res.status(200).json(uporabnik[0]);
        })
    });
}

const izbrisiUporabnikId = (req, res) => {
    const idUporabnik = req.params.idUporabnik
    if (!idUporabnik) {
        return res.status(400).json({ sporocilo: "Ne najdem uporabnik, idUporabnik je obvezen parameter.", })
    }

    connection.query(`DELETE FROM uporabnik WHERE idUporabnik='${idUporabnik}'`, (error, uporabnik) => {
       if (error) {
           return res.status(500).json(error);
       }
       res.status(201).json(null);
    });
};

const dodajSlikoUporabnik = (req, res) => {
    var obj = {
        idUporabnik: req.body.idUporabnik,
        slika: req.body.slika
    }
    imgModel.create(obj, (error, result) => {
        if (error) {
            return res.status(500).json(error);
        } else {
            return res.status(201).json(result);
        }
    });
}

const posodobiSlikoUporabnik = (req, res) => {
    const idUporabnik = req.params.idUporabnik;
    imgModel.findOne({"idUporabnik": idUporabnik}).exec((error, slika) => {
        console.log(slika);
        if (!slika) {
            return res.status(404).json({
                message: "Can not find user with given id"
            });
        } else if (error) {
            return res.status(500).json(error);
        } else {
            slika.slika = req.body.slika;
            slika.idUporabnik = req.params.idUporabnik;

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

const vrniSlikoUporabnik = (req, res) => {
    const idUporabnik = req.params.idUporabnik;
    imgModel.find({"idUporabnik": idUporabnik}).exec((error, result) => {
        if (error) {
            return res.status(500).json(error);
        } else {
            if (result.length > 0) {
                return res.status(200).json(result[0].slika);
            } else {
                return res.status(404).json(null);
            }
        }
    });
    // console.log(result);
    // return res.status(200).json(result.slika);
}

module.exports = {
    vrniVsi,
    vrniUporabnikId,
    izbrisiUporabnikId,
    dodajSlikoUporabnik,
    vrniSlikoUporabnik,
    posodobiSlikoUporabnik
}