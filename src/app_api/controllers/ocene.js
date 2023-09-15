const connection = require('../models/db');

const vrniOcena = (req, res) => {
    const idPredlogProjekta = req.params.idPredlogProjekta
    const idUporabnik = req.params.idUporabnik
    if (!idPredlogProjekta) {
        return res.status(400).json({ sporocilo: "Ne najdem predlog projekta, idPredlogProjekta in idUporabnik sta obvezen parameter.", })
    }

    connection.query(`SELECT * FROM ocena WHERE predlogProjekta='${idPredlogProjekta}' AND uporabnik='${idUporabnik}'`, (error, ocena) => {
       if (error) {
           res.status(500).json(error);
       }
       res.status(200).json(ocena);
    });
}

const dodajOcena = (req, res) => {
    if (!req.body.ocena || !req.body.uporabnik || !req.body.predlogProjekta) {
        return res.status(400).json({ sporocilo: "Zahtevani so vsi podatki." });
    }

    let ocena = [
        req.body.predlogProjekta,
        req.body.uporabnik,
        req.body.ocena
    ]

    connection.query('INSERT INTO ocena (predlogProjekta, uporabnik, ocena) VALUES (?)', [ ocena ], (error, ocena) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(ocena)
    });
}

const urediOcena = (req, res) => {
    const idOcena = req.params.idOcena;
    if (!idOcena) {
        return res.status(400).json({ sporocilo: "Ne najdem predlog ocena, idOcena je obvezen parameter.", })
    }
    if (!req.body.ocena) {
        return res.status(400).json({ sporocilo: "Zahtevani so vsi podatki." });
    }

    connection.query(`UPDATE ocena SET ocena='${req.body.ocena}' WHERE idocena=${idOcena}`, (error, ocena) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(ocena);
    });
}

module.exports = {
    vrniOcena,
    dodajOcena,
    urediOcena
}