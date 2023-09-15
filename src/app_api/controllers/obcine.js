const connection = require('../models/db');

const mongoose = require("mongoose");
const imgModel = mongoose.model('Slika Obcine');

const vrniVsi = (req, res) => {
    connection.query('SELECT * FROM obcina', (error, obcine) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(obcine);
    })
}

const dodajObcina = (req, res) => {
    if (!req.body.naslov) {
        return res.status(400).json({ message: "Zahtevani so vsi podatki." });
    }

    let obcina = [
        req.body.naslov
    ]

    connection.query('INSERT INTO obcina (naslov) VALUES (?)', obcina, (error, obcina) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(obcina)
    });
}

const vrniObcinaId = (req, res) => {
    const idObcina = req.params.idObcina
    if (!idObcina) {
        return res.status(400).json({ sporocilo: "Ne najdem obcina, idObcina je obvezen parameter.", })
    }

    connection.query('SELECT * FROM obcina WHERE idObcina=?', idObcina, (error, obcina) => {
       if (error) {
           return res.status(500).json(error);
       }
       res.status(200).json(obcina[0]);
    });
}

const urediObcinaId = (req, res) => {
    const idObcina = req.params.idObcina
    if (!idObcina) {
        return res.status(400).json({ sporocilo: "Ne najdem obcina, idObcina je obvezen parameter.", })
    }
    if (!req.body.opis) {
        return res.status(400).json({ sporocilo: "Zahtevani so vsi podatki." });
    }


    connection.query(`UPDATE obcina SET opis='${req.body.opis}' WHERE idObcina=${idObcina}`, (error, obcina) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(obcina);
    });
}

const dodajSlikoObcina = (req, res) => {
    var obj = {
        obcina: req.params.idObcina,
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


const izbrisiSlikoObcina = (req, res) => {
    imgModel.findByIdAndDelete(req.params.idSlike, function (error, _) {
        if (error) {
            return res.status(500).json(error);
        } else {
            return res.status(204).json(null);
        }
    });
}

// const posodobiSlikoObcina = (req, res) => {
//     const idObcina = req.params.idObcina;
//     imgModel.findOne({"idObcina": idObcina}).exec((error, slika) => {
//         console.log(slika);
//         if (!slika) {
//             return res.status(404).json({
//                 message: "Can not find user with given id"
//             });
//         } else if (error) {
//             return res.status(500).json(error);
//         } else {
//             slika.slika = req.body.slika;
//             slika.idUporabnik = req.params.idUporabnik;
//
//             slika.save((error, slika) => {
//                 if (error) {
//                     return res.status(404).json(error);
//                 } else {
//                     return res.status(200).json({slika});
//                 }
//             });
//         }
//     });
// }

const vrniSlikeObcina = (req, res) => {
    const idObcina = req.params.idObcina;
    imgModel.find({"idObcina": idObcina})
        .select('slika _id')
        .exec((error, slike) => {
        if (error) {
            return res.status(500).json(error);
        } else {
            if (slike.length > 0) {
                return res.status(200).json(slike);
            } else {
                return res.status(404).json({sporocilo: "Za to občino ni slik"});
            }
        }
    });
    // console.log(result);
    // return res.status(200).json(result.slika);
}

module.exports = {
    dodajObcina,
    vrniObcinaId,
    vrniVsi,
    urediObcinaId,
    vrniSlikeObcina,
    dodajSlikoObcina,
    izbrisiSlikoObcina
}