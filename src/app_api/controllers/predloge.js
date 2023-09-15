const connection = require('../models/db');

const vrniVsi = (req, res) => {
    connection.query('SELECT avg(ocena) as ocena, predlogProjekta FROM ocena GROUP BY predlogProjekta ORDER BY ocena', (error, predlogeOcene) => {
        if (error) {
            return res.status(500).json(error);
        }
        connection.query('SELECT * FROM predlogprojekta ORDER BY datum DESC', (error, predloge) => {
            if (error) {
                return res.status(500).json(error);
            }
            let rezultat = [];
            let ocena = '';
            predloge.forEach(predlog => {
                ocena = '';
                for (let i = 0; i < predlogeOcene.length; i++) {
                    if (predlog.idPredlogProjekta === predlogeOcene[i].predlogProjekta) {
                        ocena = predlogeOcene[i].ocena
                        break;
                    }
                }
                rezultat.push({
                    predlog: predlog,
                    ocena: ocena ? ocena : 0
                })
            });
            res.status(200).json(rezultat);
        })
    });
}

const dodajPredlogProjekta = (req, res) => {
    if (!req.body.naslov || !req.body.sporocilo || !req.body.razred || !req.body.idUporabnik) {
        return res.status(400).json({ sporocilo: "Zahtevani so vsi podatki." });
    }

    connection.query(`SELECT * FROM uporabnik WHERE idUporabnik=${req.body.idUporabnik}`, (error, uporabnik) => {
        if (error) {
            return res.status(500).json(error);
        }

        let predlogProjekta = [
            req.body.naslov,
            req.body.sporocilo,
            req.body.razred,
            new Date(Date.now()),
            uporabnik[0].idUporabnik
        ]

        connection.query('INSERT INTO predlogprojekta (naslov, sporocilo, razred, datum, uporabnik) VALUES (?)', [ predlogProjekta ], (error, predlog) => {
            if (error) {
                return res.status(500).json(error);
            }
            res.status(200).json(predlog)
        });
    });
}

const vrniPredlogProjektaId = (req, res) => {
    const idPredlogProjekta = req.params.idPredlogProjekta
    if (!idPredlogProjekta) {
        return res.status(400).json({ sporocilo: "Ne najdem predlog projekta, idPredlogProjekta je obvezen parameter.", })
    }

    connection.query('SELECT avg(ocena) as ocena, predlogProjekta FROM ocena GROUP BY predlogProjekta ORDER BY ocena', (error, predlogeOcene) => {
        if (error) {
            return res.status(500).json(error);
        }
        connection.query(`SELECT * FROM predlogprojekta WHERE idPredlogProjekta='${idPredlogProjekta}'`, (error, predlog) => {
            if (error) {
                return res.status(500).json(error);
            }
            connection.query('SELECT * FROM uporabnik', (error, uporabniki) => {
                if (error) {
                    return res.status(500).json(error);
                }
                let rezultat = {};
                let avtor = {};
                let ocena = '';
                for (let i = 0; i < predlogeOcene.length; i++) {
                    if (predlog[0].idPredlogProjekta === predlogeOcene[i].predlogProjekta) {
                        ocena = predlogeOcene[i].ocena
                        break;
                    }
                }
                for (let i = 0; i < uporabniki.length; i++) {
                    if (predlog[0].uporabnik === uporabniki[i].idUporabnik) {
                        avtor = uporabniki[i]
                        break;
                    }
                }
                rezultat = {
                    predlog: predlog[0],
                    ocena: ocena ? ocena : 0,
                    avtor: avtor
                }

                res.status(200).json(rezultat);
            });
        })
    });
}

const aktiviraj = (req, res) => {
    const idPredlogProjekta = req.params.idPredlogProjekta
    if (!idPredlogProjekta) {
        return res.status(400).json({ sporocilo: "Ne najdem predlog projekta, idPredlogProjekta je obvezen parameter.", })
    }
    if (!req.body.jePotrjen) {
        return res.status(400).json({ sporocilo: "Zahtevani so vsi podatki." });
    }


    connection.query(`UPDATE predlogprojekta SET jePotrjen='${req.body.jePotrjen}' WHERE idPredlogProjekta=${idPredlogProjekta}`, (error, predlog) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(predlog);
    });
}

const urediPredlogProjektaId = (req, res) => {
    const idPredlogProjekta = req.params.idPredlogProjekta
    if (!idPredlogProjekta) {
        return res.status(400).json({ sporocilo: "Ne najdem predlog projekta, idPredlogProjekta je obvezen parameter.", })
    }
    if (!req.body.razred) {
        return res.status(400).json({ sporocilo: "Zahtevani so vsi podatki." });
    }

    connection.query(`UPDATE predlogprojekta SET razred='${req.body.razred}' WHERE idPredlogProjekta=${idPredlogProjekta}`, (error, predlog) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(predlog);
    });
}

const vrniPredlogProjektaFilter = (req, res) => {
    connection.query('SELECT avg(ocena) as ocena, predlogProjekta FROM ocena GROUP BY predlogProjekta ORDER BY ocena DESC LIMIT 3', (error, predlogeOcene) => {
        if (error) {
            return res.status(500).json(error);
        }
        let ids = [];
        predlogeOcene.forEach(predlog => {
            ids.push(predlog.predlogProjekta);
        })
        connection.query('SELECT * FROM predlogprojekta WHERE idPredlogProjekta IN (?)', [ids], (error, predloge) => {
            if (error) {
                return res.status(500).json(error);
            }
            connection.query('SELECT * FROM uporabnik', (error, uporabniki) => {
                if (error) {
                    return res.status(500).json(error);
                }
                let rezultat = [];
                let avtor = {};
                let ocena = '';
                predloge.forEach(predlog => {
                    avtor = {};
                    ocena = '';
                    for (let i = 0; i < predlogeOcene.length; i++) {
                        if (predlog.idPredlogProjekta === predlogeOcene[i].predlogProjekta) {
                            ocena = predlogeOcene[i].ocena
                            break;
                        }
                    }
                    for (let i = 0; i < uporabniki.length; i++) {
                        if (predlog.uporabnik === uporabniki[i].idUporabnik) {
                            avtor = uporabniki[i]
                            break;
                        }
                    }
                    rezultat.push({
                        predlog: predlog,
                        avtor: avtor,
                        ocena: ocena ? ocena : 0
                    })
                });
                res.status(200).json(rezultat);
            });
        })
    });
};

const vrniPredlogProjektaFilterIme = (req, res) => {
    const ime = req.params.ime
    if (!ime) {
        return res.status(400).json({ sporocilo: "Ne najdem predlog projekta, ime je obvezen parameter.", })
    }
    let sql = `SELECT * FROM predlogprojekta WHERE naslov LIKE '%${ime}%'`;
    if (ime === "vsi") {
        sql = 'SELECT * FROM predlogprojekta';
    }

    connection.query('SELECT avg(ocena) as ocena, predlogProjekta FROM ocena GROUP BY predlogProjekta ORDER BY ocena', (error, predlogeOcene) => {
        if (error) {
            return res.status(500).json(error);
        }
        connection.query(sql, (error, predloge) => {
            if (error) {
                return res.status(500).json(error);
            }
            let rezultat = [];
            let ocena = '';
            predloge.forEach(predlog => {
                ocena = '';
                for (let i = 0; i < predlogeOcene.length; i++) {
                    if (predlog.idPredlogProjekta === predlogeOcene[i].predlogProjekta) {
                        ocena = predlogeOcene[i].ocena
                        break;
                    }
                }
                rezultat.push({
                    predlog: predlog,
                    ocena: ocena ? ocena : 0
                })
            });
            res.status(200).json(rezultat);
        })
    });
}

const izbrisiPredlogProjektaId = (req, res) => {
    const idPredlogProjekta = req.params.idPredlogProjekta
    if (!idPredlogProjekta) {
        return res.status(400).json({ sporocilo: "Ne najdem predlog projekta, idPredlogProjekta je obvezen parameter.", })
    }

    connection.query(`DELETE FROM predlogprojekta WHERE idPredlogProjekta='${idPredlogProjekta}'`, (error, predlog) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(204).json(null);
    })
}

module.exports = {
    dodajPredlogProjekta,
    vrniPredlogProjektaId,
    vrniVsi,
    aktiviraj,
    urediPredlogProjektaId,
    vrniPredlogProjektaFilter,
    vrniPredlogProjektaFilterIme,
    izbrisiPredlogProjektaId
}