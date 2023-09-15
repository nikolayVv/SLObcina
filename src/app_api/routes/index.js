const express = require("express");
const router = express.Router();
const ctrlAvtentikacija = require("../controllers/avtentikacija");
const ctrlObcine = require("../controllers/obcine");
const ctrlNovice = require("../controllers/novice");
const ctrlPredlogProjekta = require("../controllers/predloge");
const ctrlOrganizacije = require("../controllers/organizacije");
const ctrlUporabniki = require("../controllers/uporabniki");
const ctrlOcene = require("../controllers/ocene")

const jwt = require("express-jwt").expressjwt;
const avtentikacija = jwt({
    secret: process.env.JWT_GESLO,
    userProperty: "payload",
    algorithms: ["HS256"],
});



/* Avtentikacija */
router.post("/registracija", ctrlAvtentikacija.registracija);
router.post("/prijava", ctrlAvtentikacija.prijava);

/* Uporabniki */
router.get("/uporabnik", ctrlUporabniki.vrniVsi);
router.route("/uporabnik/:idUporabnik")
    .get(ctrlUporabniki.vrniUporabnikId)
    .put(ctrlAvtentikacija.urediUporabnikId)
    .delete(ctrlUporabniki.izbrisiUporabnikId);
router.post("/uporabnik/img", ctrlUporabniki.dodajSlikoUporabnik);
router.get("/uporabnik/img/:idUporabnik", ctrlUporabniki.vrniSlikoUporabnik);
router.put("/uporabnik/img/:idUporabnik", ctrlUporabniki.posodobiSlikoUporabnik);

/* Organizacije */
router.get("/organizacije", ctrlOrganizacije.vrniVsi);
router.get("/organizacije/:id", ctrlOrganizacije.vrniOrganizacijaID);
router.post("/organizacije", ctrlOrganizacije.dodajOrganizacija);
router.delete("/organizacije/:id", ctrlOrganizacije.izbrisiOrganizacijaID);
router.get("/razredi", ctrlOrganizacije.vrniRazredi);
router.get("/organizacije/:razred/filter", ctrlOrganizacije.vrniVsiFilter)

/* Obcine */
router.route("/obcina")
    .post(ctrlObcine.dodajObcina)
    .get(ctrlObcine.vrniVsi);
router.route("/obcina/:idObcina")
    .get(ctrlObcine.vrniObcinaId)
    .put(ctrlObcine.urediObcinaId);
router.post("/obcina/img/:idObcina", ctrlObcine.dodajSlikoObcina);
router.get("/obcina/img/:idObcina", ctrlObcine.vrniSlikeObcina);
router.delete("/obcina/img/:idSlike", ctrlObcine.izbrisiSlikoObcina);

/* Novice */
router.get("/novice", ctrlNovice.vrniVsi);
router.get("/novice/filter", ctrlNovice.vrniNoviceFilter);
router.get("/novice/:id", ctrlNovice.vrniNovicaID);
router.post("/novice", ctrlNovice.dodajNovica);
router.put("/novice/:id", ctrlNovice.urediNovicaID);
router.delete("/novice/:id", ctrlNovice.izbrisiNovicaID);
router.post("/novice/img/:idNovica", ctrlNovice.dodajSlikoNovica);
router.put("/novice/img/:idNovica", ctrlNovice.posodobiSlikoNovica);
router.get("/novice/img/:idNovica", ctrlNovice.vrniSlikoNovica);

/* Predloge */
router.get("/predlogProjekta/filter", ctrlPredlogProjekta.vrniPredlogProjektaFilter);
router.get("/predlogProjekta/:ime/filter", ctrlPredlogProjekta.vrniPredlogProjektaFilterIme)
router.route("/predlogProjekta")
    .post(ctrlPredlogProjekta.dodajPredlogProjekta)
    .get(ctrlPredlogProjekta.vrniVsi);
router.route("/predlogProjekta/:idPredlogProjekta")
    .get(ctrlPredlogProjekta.vrniPredlogProjektaId)
    .put(ctrlPredlogProjekta.aktiviraj)
    .delete(ctrlPredlogProjekta.izbrisiPredlogProjektaId);
router.put("/predlogProjekta/:idPredlogProjekta/uredi", ctrlPredlogProjekta.urediPredlogProjektaId)

/* Ocene */
router.get("/predlogProjekta/:idPredlogProjekta/ocene/:idUporabnik", ctrlOcene.vrniOcena)
router.post("/ocene", ctrlOcene.dodajOcena);
router.put("/ocene/:idOcena", ctrlOcene.urediOcena);

module.exports = router

