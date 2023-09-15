// const passport = require("passport");
// const LokalnaStrategija = require("passport-local").Strategy;
// const mongoose = require("mongoose");
// const Uporabnik = mongoose.model("Uporabnik");
//
// passport.use(
//     new LokalnaStrategija(
//         {
//             usernameField: "email",
//             passwordField: "geslo",
//         },
//         (email, geslo, pkKoncano) => {
//             Uporabnik.findOne(
//                 { elektronskiNaslov: email },
//                 (napaka, uporabnik) => {
//                     if (napaka) return pkKoncano(napaka);
//                     if (!uporabnik || !uporabnik.preveriGeslo(geslo))
//                         return pkKoncano(null, false, {
//                             sporočilo: "Napačno uporabniško ime ali geslo.",
//                         });
//                     return pkKoncano(null, uporabnik);
//                 }
//             );
//         }
//     )
// );