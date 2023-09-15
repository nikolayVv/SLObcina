const mongoose = require("mongoose");

const slikaObcineShema = new mongoose.Schema({
    obcina: { type: String, required: true },
    slika: { type: String, required: true }
});

const slikaNovicShema = new mongoose.Schema({
    idNovica: { type: String, required: true },
    slika: { type: String, required: true }
});

const slikaUporabnikaShema = new mongoose.Schema({
    idUporabnik: { type: String, required: true },
    slika: { type: String, required: true }
});

mongoose.model('Slika Uporabnika', slikaUporabnikaShema, 'Slike uporabnika')
mongoose.model('Slika Novic', slikaNovicShema, 'Slike Novic');
mongoose.model('Slika Obcine', slikaObcineShema, 'Slike Obcine');
