# Predlog projekta &rarr; Občinski obveščevalnik

## Povzetek projekta

Marsikdo izmed nas je v svoji občini že kdaj opazil napake, poškodbe/ovire na prometni infrastrukturi ali se spomnil ideje, ki bi izboljšala življenje vseh občanov, ampak ni vedel kako bi to sporočil ustrezni osebi znotraj občine.
Da bi omogočili boljšo komunikacijo med občani in vodstvom občine ter z digitalizacijo optimizirali in pospešili delovanje občin, želimo razviti aplikacijo, ki bo rešila ta problem.
Spletna aplikacija bo namenjena vsem občinam in njihovim občanom, kjer bo vsak nov registriran uporabnik ob registraciji izbral občino prebivališča in mu bo tako omogočena boljša komunikacija z svojo občino.
Vsak občan bo lahko pošiljal predloge, ki se navezujejo na njegovo občino prebivališča, glasoval med več predlogi ostalih občanov in bral opozorila ter novice, ki bodo objavljene z strani predstavnika občine.
Le-ta pa bo preveril verodostojnost, s strani občanov, prejetih predlogov ter jih nato posredoval ustrezni organizaciji znotraj občine (cestno podjetje, komunala...).

Na trgu obstajajo podobne rešitve, ki pa niso dostopne vsem občinam, oziroma niso standardizirane za vse občine ali pa so razširjenje na celo državo, kjer pa se zbirajo predlogi, ki jih občina sama ni zmožna odpraviti.

## 1. Projektna ideja

### 1.1 Ozadje

Slovenijo sestavlja 212 občin, ki se med seboj močno razlikujejo tako po številu prebivalcev, kot tudi po stopnji digitalizacije.
Ne glede na njihovo raznolikost, imajo vse občine skupno nalogo, to je zagotovitev zadovoljstva ter kvalitete življenja svojih občanov.
Pri tem ima ključno vlogo komunikacija med občani in upravitelji občine, navsezadnje pa tudi komunikacija med samimi občani.
Na ta način imajo občani možnost izmenjave mnenj in sprejemanje skupnih odločitev glede potreb njihove občine, medtem ko upravitelji
dobijo dober pregled nad interesi in željami občanov ter možnost ažurnega odpravljanja težav.

Na opisanem področju imajo nekatere večje in bolj razvite občine prednost, saj na spletnih straneh omogočajo oddajo predlogov,
pa čeprav v nekoliko okrnjeni obliki - običajno se omogoča le oddaja predlogov neposredno upravitelju. Na tem področju obstaja možnost
izboljšav, eno izmed njih predstavlja naša standardizirana rešitev, ki bi omogočala komunikacijo z upravitelji v vsaki občini,
ne glede na stopnjo njene razvitosti. Prav tako bi naša rešitev izboljšala uporabniško izkušnjo, saj bi med drugim omogočali
tudi možnost komunikacije med občani in dodali možnost spremljanja večjega števila občin.

### 1.2 Področje in motivacija

Verjetno smo se že vsi srečali s poškodovano infrastrukturo v domači občini ali v občini, v kateri študiramo/delamo. Moti nas, ker je postopek opozarjanja na napako kompliciran, počasen in pogosto predolgo čakamo na popravilo. Ali pa želimo predlagati kakšno izboljšavo, ampak moramo za to uporabiti počasna komunikacijska sredstva.

Zelo majhen delež občin uporablja preprost spletni sistem za oddajanje predlogov za popravke/izboljšave. Ker ljudje nimajo časa in volje, da bi se ukvarjali z kontaktiranjem občine, pogosto vodilni sploh niso seznanjeni z stanjem infrastrukture v nekaterih delih občine. Zato želimo razviti splošno rešitev za več občin. Rešitev bi pomagala tako občinam kot njihovim prebivalcem ali ljudem, ki v občini delajo/študirajo.

### 1.3 Namen

Namen projekta je:

- Povečanje učinkovitosti komunikacije med občani in občinskimi organi
- Omogočanje boljšega pregleda nad delovanjem občin
- Zagotavljanje hitro in enostavno posredovanje predlogov občanov
- Večja preglednost nad dejavnostmi občin
- Zagotavljanje vseh želenih informacij na enem mestu
- Povečanje sodelovanja občanov pri odločitvah o projektih

### 1.4 Cilji

- Nameščen in testiran informacijski sistem.
- Izdelan in dokumentiran logični model baze.
- Izdelan in dokumentiran fizični model baze.
- Izdelana in dokumentirana spletna aplikacija.
- API, ki ga lahko uporabljajo zunanji uporabniki.
- Vodič za pomoč novim uporabnikom.
- Vsaj 50 objav v prvih dveh mesecih.
- Vsaj 100 uporabnikov v prvih treh mesecih.

### 1.5 Smernice za rešitev

- Dostopnost preko spleta
- Zagotavljanje varstva osebnih podatkov po ZVOP in GDPR
- Skladnost z 10 Nielsonovimi principi
- Podpora HTML5
- Prilagodljivost različnih brskalinikov
- Prilagodljivost različnih naprav

### 1.6 Končni uporabniki

- Uporabniki bodo lahko vsi prebivalci občin in zaposleni na občinskem uradu.
- Končni uporabniki bodo imeli mešana znanja, od ljudi ki uporabljajo samo socialna omrežja pa vse do izobraženih računalničarjev. Pričakovano je samo osnovno znanje uporabe telefona ali računalnika.
- Koristi bo imel vsak prebivalec občine, ker se bodo s predlogi spreminjale, urejale občine in njihova okolica, ter s tem lajšale vsakodnevno življenje vsem.

## 2. Projektni načrt

### 2.1 Povzetek razdelitve projekta na aktivnosti

Projekt je razdeljen na 20 aktivnosti, ki so razdeljene na štiri glavne sklope, označene z črkami A, B, C in D.

Sklop A v splošnem predstavlja aktivnosti, ki se nanašajo na opredelitev projekta in njegovo organizacijo. V tem sklopu
projekta člani skupine zajamejo vse zahteve, si med seboj porazdelijo delo in skrbijo za usklajenost dela.

Sklop B predstavlja aktivnosti, ki morajo biti opravljene pred začetkom programiranja. V tem sklopu projekta člani skupine
določijo izgled končne rešitve, arhitekturo projekta, shemo podatkovne baze in specifikacijo projekta.

Sklop C predstavlja aktivnosti, ki zajemajo implementacijo in testiranje spletne aplikacije. V tem sklopu projekta člani
skupine izdelajo zaslonske maske, poslovno logiko, poskrbijo za ustrezno komunikacijo s podatkovno bazo in tudi vključijo
komunukacijo z zunanjim API. Na koncu vse elemente aplikacije povežejo med seboj, prenesejo v testno okolje, izvedejo
testiranje aplikacije in po potrebi odpravijo težave.

Sklop D predstavlja aktivnosti, kjer člani skupine aplikacijo prenesejo v produkcijsko okolje in odpravijo napake povezane
s prenosom iz testnega okolja. Poleg tega poskrbijo tudi za ustrezno dokumentacijo projekta.

### 2.2 Načrt posameznih aktivnosti

Pri računanju obsega aktivnosti 1 ČM predstavlja 60 ur dela na mesec.

| **Oznaka aktivnosti**                               | A1                                                                                                                                           |
| :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 21.3.2022                                                                                                                                    |
| **Predvideni datum zaključka izvajanja aktivnosti** | 20.5.2022                                                                                                                                    |
| **Trajanje**                                        | 42 dni                                                                                                                                       |
| **Naziv aktivnosti**                                | Projektno vodenje                                                                                                                            |
| **Obseg aktivnosti v ČM**                           | (42 dni \* 3 ure na dan) / 60 ur na mesec = 2,10                                                                                             |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Pregled nad projektom in dodeljevanje nalog                                                                                                  |
| **Opis aktivnosti**                                 | Vodja podrobno spremlja napredek projekta, skrbi za dodeljevanje nalog ostalim članom skupine in njihovo usklajenost                         |
| **Morebitne odvisnosti in omejitve**                | Ni na kritični poti                                                                                                                          |
| **Pričakovani rezultati aktivnosti**                | Napredovanje projekta v skladu z določenimi roki oddaje, enakomerna porazdelitev dela v skupini in usklajenost posameznih aktivnosti (OO A1) |

| **Oznaka aktivnosti**                               | A2                                                                                   |
| :-------------------------------------------------- | :----------------------------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 21.3.2022                                                                            |
| **Predvideni datum zaključka izvajanja aktivnosti** | 1.4.2022                                                                             |
| **Trajanje**                                        | 10 dni                                                                               |
| **Naziv aktivnosti**                                | Zajem zahtev                                                                         |
| **Obseg aktivnosti v ČM**                           | (10 dni \* 3 ure na dan) / 60 ur na mesec = 0,50                                     |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Zasnova končne rešitve                                                               |
| **Opis aktivnosti**                                 | Člani skupine izvedejo zajem in specifikacijo zahtev ter oblikujejo koncept produkta |
| **Morebitne odvisnosti in omejitve**                | Je na kritični poti                                                                  |
| **Pričakovani rezultati aktivnosti**                | Specifikacija zahtev in koncept produkta (OO A2)                                     |

| **Oznaka aktivnosti**                               | B1                                                                                                                                        |
| :-------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 4.4.2022                                                                                                                                  |
| **Predvideni datum zaključka izvajanja aktivnosti** | 22.4.2022                                                                                                                                 |
| **Trajanje**                                        | 14 dni                                                                                                                                    |
| **Naziv aktivnosti**                                | Grafični vmesnik                                                                                                                          |
| **Obseg aktivnosti v ČM**                           | (14 dni \* 3 ure na dan) / 60 ur na mesec = 0,70                                                                                          |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Izdelava pogledov strani                                                                                                                  |
| **Opis aktivnosti**                                 | Izdelava pogleda za vsako stran, ki bo dosegljiva v končni rešitvi. Prav tako izdelava pogleda za vsako ključno funkcionalnost aplikacije |
| **Morebitne odvisnosti in omejitve**                | A2. Ni na kritični poti                                                                                                                   |
| **Pričakovani rezultati aktivnosti**                | Izdelani končni pogledi aplikacije (OO B1)                                                                                                |

| **Oznaka aktivnosti**                               | B2                                                                                                            |
| :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 4.4.2022                                                                                                      |
| **Predvideni datum zaključka izvajanja aktivnosti** | 8.4.2022                                                                                                      |
| **Trajanje**                                        | 5 dni                                                                                                         |
| **Naziv aktivnosti**                                | Določitev arhitekture                                                                                         |
| **Obseg aktivnosti v ČM**                           | (5 dni \* 3 ure na dan) / 60 ur na mesec = 0,25                                                               |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Določiti arhitekturo projekta                                                                                 |
| **Opis aktivnosti**                                 | Določitev arhitekture projekta, ki bo ustrezala zahtevanim funkcionalnostim in bo za projekt najbolj primerna |
| **Morebitne odvisnosti in omejitve**                | A2. Ni na kritični poti                                                                                       |
| **Pričakovani rezultati aktivnosti**                | Določiti ustrezno arhitekturo projekta (OO B2)                                                                |

| **Oznaka aktivnosti**                               | B3                                                                                           |
| :-------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 4.4.2022                                                                                     |
| **Predvideni datum zaključka izvajanja aktivnosti** | 15.4.2022                                                                                    |
| **Trajanje**                                        | 10 dni                                                                                       |
| **Naziv aktivnosti**                                | Definiranje podatkovne baze                                                                  |
| **Obseg aktivnosti v ČM**                           | (10 dni \* 3 ure na dan) / 60 ur na mesec = 0,50                                             |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Določiti shemo podatkovne baze                                                               |
| **Opis aktivnosti**                                 | Člani skupine določijo shemo za obe podatkovni bazi, določijo entitete in povezave med njimi |
| **Morebitne odvisnosti in omejitve**                | A2. Je na kritični poti.                                                                     |
| **Pričakovani rezultati aktivnosti**                | Ustvarjena shema podatkovne baze (OO B3)                                                     |

| **Oznaka aktivnosti**                               | B4                                                                                                                                                          |
| :-------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 19.4.2022                                                                                                                                                   |
| **Predvideni datum zaključka izvajanja aktivnosti** | 29.4.2022                                                                                                                                                   |
| **Trajanje**                                        | 8 dni                                                                                                                                                       |
| **Naziv aktivnosti**                                | Specifikacija REST API                                                                                                                                      |
| **Obseg aktivnosti v ČM**                           | (8 dni \* 3 ure na dan) / 60 ur na mesec = 0,40                                                                                                             |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Podrobna specifikacija REST API                                                                                                                             |
| **Opis aktivnosti**                                 | Člani skupine opredelijo REST API, ki ga bodo pri projektu potrebovali. Pri tem določijo endpointe za vse CRUD operacije, na katerih bo storitev dosegljiva |
| **Morebitne odvisnosti in omejitve**                | B3. Je na kritični poti.                                                                                                                                    |
| **Pričakovani rezultati aktivnosti**                | Izdelana specifikacija REST API (OO B4)                                                                                                                     |

| **Oznaka aktivnosti**                               | B5                                                                                                                                               |
| :-------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 4.4.2022                                                                                                                                         |
| **Predvideni datum zaključka izvajanja aktivnosti** | 8.4.2022                                                                                                                                         |
| **Trajanje**                                        | 5 dni                                                                                                                                            |
| **Naziv aktivnosti**                                | Načrtovanje komunikacije z zunanjim API                                                                                                          |
| **Obseg aktivnosti v ČM**                           | (5 dni \* 3 ure na dan) / 60 ur na mesec = 0,25                                                                                                  |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Opredeliti uporabo zunanjega API                                                                                                                 |
| **Opis aktivnosti**                                 | Člani skupine določijo, pri katerih funkcionalnostih bo uporaba zunanjega API potrebna in opredelijo na kakšen način ga bodo v projekt vključili |
| **Morebitne odvisnosti in omejitve**                | A2. Ni na kritični poti                                                                                                                          |
| **Pričakovani rezultati aktivnosti**                | Izdelan načrt za komunikacijo z zunanjim API (OO B5)                                                                                             |

| **Oznaka aktivnosti**                               | C1                                                                                                                           |
| :-------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 25.4.2022                                                                                                                    |
| **Predvideni datum zaključka izvajanja aktivnosti** | 6.5.2022                                                                                                                     |
| **Trajanje**                                        | 8 dni                                                                                                                        |
| **Naziv aktivnosti**                                | Implementacija zaslonskih mask                                                                                               |
| **Obseg aktivnosti v ČM**                           | (8 dni \* 3 ure na dan) / 60 ur na mesec = 0,40                                                                              |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Izdelati statične zaslonske maske                                                                                            |
| **Opis aktivnosti**                                 | Implementacija pogleda vseh mask, ki bodo dosegljive v končni rešitvi. Maske se implementirajo po navodilih iz aktivnosti B1 |
| **Morebitne odvisnosti in omejitve**                | B1. Ni na kritični poti                                                                                                      |
| **Pričakovani rezultati aktivnosti**                | Narejene statične zaslonske maske (OO C1)                                                                                    |

| **Oznaka aktivnosti**                               | C2                                                                                                     |
| :-------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 19.4.2022                                                                                              |
| **Predvideni datum zaključka izvajanja aktivnosti** | 26.4.2022                                                                                              |
| **Trajanje**                                        | 6 dni                                                                                                  |
| **Naziv aktivnosti**                                | Implementacija prve transakcijske baze                                                                 |
| **Obseg aktivnosti v ČM**                           | (6 dni \* 3 ure na dan) / 60 ur na mesec = 0,30                                                        |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Vzpostavitev prve podatkovne baze                                                                      |
| **Opis aktivnosti**                                 | Po shemi podatkovne baze, ki smo jo naredili v sklopu aktivnosti B3 vzpostavimo glavno podatkovno bazo |
| **Morebitne odvisnosti in omejitve**                | B3. Ni na kritični poti                                                                                |
| **Pričakovani rezultati aktivnosti**                | Dosegljiva podatkovna baza (OO C2)                                                                     |

| **Oznaka aktivnosti**                               | C3                                                                                                                                                                                                                                                                     |
| :-------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 21.4.2022                                                                                                                                                                                                                                                              |
| **Predvideni datum zaključka izvajanja aktivnosti** | 29.4.2022                                                                                                                                                                                                                                                              |
| **Trajanje**                                        | 6 dni                                                                                                                                                                                                                                                                  |
| **Naziv aktivnosti**                                | Implementacija druge transakcijske baze (sprejeti predlogi)                                                                                                                                                                                                            |
| **Obseg aktivnosti v ČM**                           | (6 dni \* 3 ure na dan) / 60 ur na mesec = 0,30                                                                                                                                                                                                                        |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Vzpostavitev druge podatkovne baze                                                                                                                                                                                                                                     |
| **Opis aktivnosti**                                 | Po shemi podatkovne baze, ki smo jo naredili v sklopu aktivnosti B3 vzpostavimo drugo podatkovno bazo. Druga podatkovna baza bo simulirala predpomnilnik, kjer se bodo nahajali izključno sprejeti predlogi. Na ta način bomo izboljšali performance končne aplikacije |
| **Morebitne odvisnosti in omejitve**                | B3. Ni na kritični poti                                                                                                                                                                                                                                                |
| **Pričakovani rezultati aktivnosti**                | Vzpostavljena druga podatkovna baza (OO C3)                                                                                                                                                                                                                            |

| **Oznaka aktivnosti**                               | C4                                                                                                            |
| :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 3.5.2022                                                                                                      |
| **Predvideni datum zaključka izvajanja aktivnosti** | 10.5.2022                                                                                                     |
| **Trajanje**                                        | 6 dni                                                                                                         |
| **Naziv aktivnosti**                                | Implementacija REST API                                                                                       |
| **Obseg aktivnosti v ČM**                           | (6 dni \* 3 ure na dan) / 60 ur na mesec = 0,30                                                               |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Implementacija REST API vmesnika                                                                              |
| **Opis aktivnosti**                                 | Po specifikaciji REST API iz aktivnosti B4 implementiramo REST API vmesnik za komunikacijo s podatkovno bazo. |
| **Morebitne odvisnosti in omejitve**                | B4. Je na kritični poti                                                                                       |
| **Pričakovani rezultati aktivnosti**                | Implementiran REST API vmesnik (OO C4)                                                                        |

| **Oznaka aktivnosti**                               | C5                                                                                                                                                           |
| :-------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 3.5.2022                                                                                                                                                     |
| **Predvideni datum zaključka izvajanja aktivnosti** | 10.5.2022                                                                                                                                                    |
| **Trajanje**                                        | 6 dni                                                                                                                                                        |
| **Naziv aktivnosti**                                | Implementacija komunikacije z zunanjim API                                                                                                                   |
| **Obseg aktivnosti v ČM**                           | (6 dni \* 3 ure na dan) / 60 ur na mesec = 0,30                                                                                                              |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Vključitev zunanjega API                                                                                                                                     |
| **Opis aktivnosti**                                 | Skladno z načrtom za komunikacijo z zunanjim API iz aktivnosti B5, člani skupine implementirajo tiste funkcionalnosti, ki temeljijo na uporabi zunanjega API |
| **Morebitne odvisnosti in omejitve**                | B5. Ni na kritični poti                                                                                                                                      |
| **Pričakovani rezultati aktivnosti**                | Zunanji API vključen v aplikacijo (OO C5)                                                                                                                    |

| **Oznaka aktivnosti**                               | C6                                                                |
| :-------------------------------------------------- | :---------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 11.4.2022                                                         |
| **Predvideni datum zaključka izvajanja aktivnosti** | 6.5.2022                                                          |
| **Trajanje**                                        | 17 dni                                                            |
| **Naziv aktivnosti**                                | Implementacija zalednega dela                                     |
| **Obseg aktivnosti v ČM**                           | (17 dni \* 3 ure na dan) / 60 ur na mesec = 0,85                  |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Implementacija poslovne logike aplikacije                         |
| **Opis aktivnosti**                                 | Člani skupine implementirajo preostale funkcionalnosti aplikacije |
| **Morebitne odvisnosti in omejitve**                | B2. Ni na kritični poti                                           |
| **Pričakovani rezultati aktivnosti**                | Implementiran zaledni del aplikacije (OO C6)                      |

| **Oznaka aktivnosti**                               | C7                                                                                    |
| :-------------------------------------------------- | :------------------------------------------------------------------------------------ |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 11.5.2022                                                                             |
| **Predvideni datum zaključka izvajanja aktivnosti** | 12.5.2022                                                                             |
| **Trajanje**                                        | 2 dni                                                                                 |
| **Naziv aktivnosti**                                | Testiranje APIja                                                                      |
| **Obseg aktivnosti v ČM**                           | (2 dni \* 3 ure na dan) / 60 ur na mesec = 0,1                                        |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Testiranje API vmesnika                                                               |
| **Opis aktivnosti**                                 | Člani skupine s testnimi poizvedbami preverijo, če vse končne točke ustrezno delujejo |
| **Morebitne odvisnosti in omejitve**                | C4. Je na kritični poti                                                               |
| **Pričakovani rezultati aktivnosti**                | Delujoče končne točke (OO C7)                                                         |

| **Oznaka aktivnosti**                               | C8                                                             |
| :-------------------------------------------------- | :------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 13.5.2022                                                      |
| **Predvideni datum zaključka izvajanja aktivnosti** | 16.5.2022                                                      |
| **Trajanje**                                        | 1,5 dni                                                        |
| **Naziv aktivnosti**                                | Testiranje zalednega dela                                      |
| **Obseg aktivnosti v ČM**                           | (1,5 dni \* 3 ure na dan) / 60 ur na mesec = 0,075             |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Testiranje funkcionalnosti aplikacije                          |
| **Opis aktivnosti**                                 | Preverimo, da implementirane funkcionalnosti ustrezno delujejo |
| **Morebitne odvisnosti in omejitve**                | C1, C2,C3, C5, C6, C7 . Je na kritični poti                    |
| **Pričakovani rezultati aktivnosti**                | Delujoč zadelni del aplikacije (OO C8)                         |

| **Oznaka aktivnosti**                               | C9                                                                                                                        |
| :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 9.5.2022                                                                                                                  |
| **Predvideni datum zaključka izvajanja aktivnosti** | 13.5.2022                                                                                                                 |
| **Trajanje**                                        | 5 dni                                                                                                                     |
| **Naziv aktivnosti**                                | Implementacija posredovanja predlogov                                                                                     |
| **Obseg aktivnosti v ČM**                           | (5 dni \* 3 ure na dan) / 60 ur na mesec = 0,25                                                                           |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Možnost posredovanja predlogov zunanjim izvajalcem                                                                        |
| **Opis aktivnosti**                                 | Člani skupine implementirajo funkcionalnost, kjer lahko upravitelj občine posreduje sprejete predloge zunanjim izvajalcem |
| **Morebitne odvisnosti in omejitve**                | C6. Ni na kritični poti                                                                                                   |
| **Pričakovani rezultati aktivnosti**                | Delujoče posredovanje predlogov (OO C9)                                                                                   |

| **Oznaka aktivnosti**                               | C10                                                                               |
| :-------------------------------------------------- | :-------------------------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 17.5.2022                                                                         |
| **Predvideni datum zaključka izvajanja aktivnosti** | 18.5.2022                                                                         |
| **Trajanje**                                        | 1,5 dni                                                                           |
| **Naziv aktivnosti**                                | Integracija v testno okolje                                                       |
| **Obseg aktivnosti v ČM**                           | (1,5 dni \* 3 ure na dan) / 60 ur na mesec = 0,075                                |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Povezava posameznih delov aplikacije                                              |
| **Opis aktivnosti**                                 | Komponente aplikacije zapišemo v docker container in ga prenesemo v testno okolje |
| **Morebitne odvisnosti in omejitve**                | C8. Je na kritični poti                                                           |
| **Pričakovani rezultati aktivnosti**                | Delujoča aplikacija v testnem okolju (OO C10)                                     |

| **Oznaka aktivnosti**                               | C11                                                                      |
| :-------------------------------------------------- | :----------------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 18.5.2022                                                                |
| **Predvideni datum zaključka izvajanja aktivnosti** | 19.5.2022                                                                |
| **Trajanje**                                        | 1,5 dni                                                                  |
| **Naziv aktivnosti**                                | Testiranje aplikacije v testnem okolju                                   |
| **Obseg aktivnosti v ČM**                           | (1,5 dni \* 3 ure na dan) / 60 ur na mesec = 0,075                       |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Testiranje celotne aplikacije                                            |
| **Opis aktivnosti**                                 | Člani skupine preverijo delovanje celotne aplikacije in odpravijo napake |
| **Morebitne odvisnosti in omejitve**                | C10. Je na kritični poti                                                 |
| **Pričakovani rezultati aktivnosti**                | Pravilno delujoča aplikacija v testnem okolju (OO C11)                   |

| **Oznaka aktivnosti**                               | D1                                                                                                                                                    |
| :-------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 19.5.2022                                                                                                                                             |
| **Predvideni datum zaključka izvajanja aktivnosti** | 20.5.2022                                                                                                                                             |
| **Trajanje**                                        | 1,5 dni                                                                                                                                               |
| **Naziv aktivnosti**                                | Postavitev produkcijske aplikacije                                                                                                                    |
| **Obseg aktivnosti v ČM**                           | (1,5 dni \* 3 ure na dan) / 60 ur na mesec = 0,075                                                                                                    |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Aplikacija pripravljena na uporabo                                                                                                                    |
| **Opis aktivnosti**                                 | Člani skupine aplikacijo iz testnega okolja prenesejo v produkcijsko okolje. Preverijo če je pri prenosu prišlo do novih težav in jih tudi odpravijo. |
| **Morebitne odvisnosti in omejitve**                | C11. Je na kritični poti                                                                                                                              |
| **Pričakovani rezultati aktivnosti**                | Javno objavljena aplikacija (OO D1)                                                                                                                   |

| **Oznaka aktivnosti**                               | D2                                                                                                                                                                                              |
| :-------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Predvideni datum pričetka izvajanja aktivnosti**  | 17.5.2022                                                                                                                                                                                       |
| **Predvideni datum zaključka izvajanja aktivnosti** | 19.5.2022                                                                                                                                                                                       |
| **Trajanje**                                        | 3 dni                                                                                                                                                                                           |
| **Naziv aktivnosti**                                | Dokumentacija                                                                                                                                                                                   |
| **Obseg aktivnosti v ČM**                           | (3 dni \* 3 ure na dan) / 60 ur na mesec = 0,15                                                                                                                                                 |
| **Seznam ciljev aktivnosti (kaj želite doseči)**    | Priprava dokumentacije                                                                                                                                                                          |
| **Opis aktivnosti**                                 | Člani skupine pripravijo dokumentacijo za že implementiran API vmesnik, iz katere je natančno razviden namen posameznih API klicev. Za lažje razumevanje pripravijo tudi nekaj testnih poizvedb |
| **Morebitne odvisnosti in omejitve**                | C7. Ni na kritični poti                                                                                                                                                                         |
| **Pričakovani rezultati aktivnosti**                | Dostopna dokumentacija (OO D2)                                                                                                                                                                  |

### 2.3 Seznam izdelkov

| Oznaka izdelka | Ime izdelka                              | Datum izdaje |
| :------------- | :--------------------------------------- | :----------- |
| OO A1          | Načrt projektnega vodenja                | 20.5.2022    |
| OO A2          | Specifikacija zahtev in koncept produkta | 1.4.2022     |
| OO B1          | Narejeni končni pogledi                  | 22.4.2022    |
| OO B2          | Določena arhitektura                     | 8.4.2022     |
| OO B3          | Shema podatkovne baze                    | 15.4.2022    |
| OO B4          | Specifikacija REST API                   | 29.4.2022    |
| OO B5          | Načrt komunikacije z zunanjim API        | 8.4.2022     |
| OO C1          | Implementirane zaslonske maske           | 6.5.2022     |
| OO C2          | Vzpostavljena podatkovna baza            | 26.4.2022    |
| OO C3          | Vzpostavljena druga podatkovna baza      | 29.4.2022    |
| OO C4          | Implementiran REST API vmesnik           | 10.5.2022    |
| OO C5          | Vključena komunikacija z zunanjim API    | 10.5.2022    |
| OO C6          | Implementiran zaledni del                | 6.5.2022     |
| OO C7          | Testiran REST API                        | 12.5.2022    |
| OO C8          | Testiran zaledni del                     | 16.5.2022    |
| OO C9          | Implementirano posredovanje predlogov    | 13.5.2022    |
| OO C10         | Aplikacija v testnem okolju              | 18.5.2022    |
| OO C11         | Testirana aplikacija v testnem okolju    | 19.5.2022    |
| OO D1          | Javno objavljena spletna aplikacija      | 20.5.2022    |
| OO D2          | Dostopna dokumentacija aplikacije        | 19.5.2022    |

### 2.4 Časovni potek projekta - Ganttov diagram

![Ganttov diagram](https://teaching.lavbic.net/plantuml/svg/dLDTZzem47pthrZffFO9aJWVvAHJfIRqdielGFVW8mv92JQoVMfHTV-zTXB2ER2KLaWMsPsT6OzjlMl4WIcsXrUssMsLV1Db8Lkfm2Wcj6rnOKZTb1mgASsh_4N8apR7bdyXMoQCMJPiwyP_4m3Jx7dR2Dvz07otVtkkXugwNrTzbiBqLJjtjALtDydqRfZA9puUU5ObLJbbJ9xpx5inZ3EbvCzBLG-pRrgkZHpT_O_EffMQbnZ1rKsspROsuqxVoTDyI8ySbFp1DmQqOSfeC3K76ce3ie8LKviQQ40fC5425-NG3qpTzuzTbsXctbJ9Zjf6m0TxH5jBav83puDuJXVGQB-Op0FweKZMNyENaoU7c0NHZ8QTZvPfMumZSFGMI35WPxYlnREWhpa9buZDhn6WEgdyBCKCECBFsWrVajYzhdDwBph8B3gw5nqcYC5r7diSbXBrzuXo9F_WcgmBFnARq7LuCWjIYwPt6tJeSoG9z5UaCbpzPMDsRX93Z7eA0oo6uXm3ZNpnv0QT7KnzSNexa8M7BcvOfPZLLGXpA4Bu10LrI-IMn2sfMwm2qs1HBr2pmu6BGUfqKkIoHV5MXBSIl9NYhSNOAZ8lYnL-bS8KFRP7FyyKvuZSvGr6UEWE-NJ6rWewbw7QeVyM73lAWhw_vPG4Zu6YjtTvVcUnTtd7kAzP-WC0)

**Ganttov diagram** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/Gantt.puml))

### 2.5 Odvisnosti med aktivnosti - Graf PERT

![Graf PERT](https://teaching.lavbic.net/plantuml/png/fLR1Sfim5BphAzuaLwS12G5EFPunSdlghJtsGepiCYRG4MJQJfr_hyGJmYB1CquFXlLYTj_RXv3ROrd_p5N-18_vxdXGpNDTYAPg57GghrjzITOTgUI-Wwu1LHv-T52KIkwwiga9QNTv9I7ua1AoQhi_bLoJjiixkItpWn7zIm1ofPfVFGBuKjOIvHyhxQUv5_92LlVsNjAwShuQcVwkR5BOhKptV5-OAuqgfB8i_vobduHMEnCfv3v_hhflydUtgSf3_QIRWPq-I0L0i5IusOGtaBUm2U41LbPzOS_h4q14uGI1_XZmlJwPHe8poWcjTgQKXo9NHoMBzOQkxdjcZVeKRlTx6SluOwLZ67xMcoA_i6TZ6WuE1anC3ULCCwm-cwi-ZEmTG2Edr7FcG5CjDIXHLA9lA_519-IlTSBbg3E98MDU31cxEWQiti_1SNEkaUyQNUEQMkq-dZDJnxd8EAhpcV3Voin0eER0pkSeS8vYRewfdI0mwiLloW4MZpK97AEO6IF4hf5uh2cmvVXA39NOVojDXYFyuOYhXXExfYD_E0FdoiVX27wXV1n6w0_dTH0nAiLpQomPf2R3CSlYOX297qHoJH3KzjiRd0NXk3dJr3TDhrgG2sxLWIKBxXkFh4jkYHxB2mk4zOqaJehRh_XodUaX3Fmcz7DtVHS9dfP-5oCxQnvEpCDtc9j78mgc4OxiZFdMzzw-mnhrfzlP6JjOR_5LifrxbJ0tz352vhhejqQYjxsxkxNUdnoY3Z67E25w1pDGX4HOb98CBukOwBNNewL3-Zy7qSyktXCGymGWDWAei0s9tcvwWsX0WX91dRxb617CSHmH9u8xBa8K4M5HGlHYxJteW4Jw3m00)

**Graf PERT** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/PERT.puml))

## 3. Obvladovanje tveganj

### 3.1 Identifikacija in analiza tveganj

Tabela tveganj:

| Naziv tveganja                        | Vpliva na          | Opis tveganja                                                                                     | Tip tveganja   | Verjetnost nastopa tveganja | Posledice nastopa tveganja |
| :------------------------------------ | :----------------- | :------------------------------------------------------------------------------------------------ | :------------- | :-------------------------- | :------------------------- |
| Neprimerna programska oprema **(T1)** | projekt in produkt | Narobe smo ocenili katero programsko opremo bomo potrebovali                                      | ocenjevanje    | majhna                      | dopustne                   |
| Podcenjena kločina dela **(T2)**      | projekt in produkt | Podcenili smo celoten obseg dela in pride do zamud                                                | ocenjevanje    | zmerna                      | dopustne                   |
| Odsotnost člana **(T3)**              | projekt            | člani ni dosegljiv zaradi različnih razlogov                                                      | ljudje         | visoka                      | resne                      |
| Nemotiviransot članov **(T4)**        | projekt            | Člani skupine pri delu niso motivirani, zato je delo počasneje dokončano                          | ljudje         | majhna                      | resne                      |
| Slaba orodja za testiranje **(T5)**   | projekt            | Izbrana orodja za testiranje ne omogočajo dobrega testiranja in posledično so v aplikaciji napake | orodja         | zmerna                      | resne                      |
| Okvara strojne opreme **(T6)**        | projekt            | Napaka strojne infrastrukture                                                                     | orodja         | majhna                      | resne                      |
| Konkurenčen produkt **(T7)**          | posel              | Na trg pride konkurenčen produkt preden je naš primeren za uporabo                                | organizacijsko | zmerna                      | dopustne                   |
| Razdelitev dela **(T8)**              | projekt in produkt | Delo ni dobro razdeljeno na sodelujoče, kar pomeni čakanja in preveč/premalo dela za posameznike  | organizacijsko | visoka                      | resne                      |
| Prešibek strežnik **(T9)**            | produkt in projekt | Strežnik, ki bo aplikacijo serviral ni dovolj zmogljiv za zahteve                                 | tehnologija    | majhna                      | dopustne                   |
| Počasna podatkovna baza **(T10)**     | projekt in produkt | Podatkovna baza ni prolagojena na izvanje pogostih operacij                                       | tehnologija    | zmerna                      | dopustne                   |
| Sabo definirane zahteve **(T11)**     | projekt in produkt | Slabo definirane zahteve, ki pomenijo počasneje razvijanje aplikacije                             | zahteve        | visoka                      | resne                      |
| Spremembe zahtev **(T12)**            | projekt in produkt | Nove zahteve potrebujejo spremembe v izvorni kodi                                                 | zahteve        | zmerna                      | resne                      |

### 3.2 Načrtovanje tveganj

Načrt za obladovanje tveganj:

| Tveganje                              | Strategija                                                                                                                                     |
| :------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| Odsotnost člana **(T3)**              | S preostalimi člani ekipe se bomo dogovorili kako bo najlažje prevzeti delo odsotnega člana.                                                   |
| Razdelitev dela **(T8)**              | Vodja projekta skliče sestanek in ponovno razdeli delo glede na do sedaj opažene kompetence.                                                   |
| Slabo definirane zahteve **(T11)**    | Skliče se sestanek in zahteve se definirajo bolj podrobno.                                                                                     |
| Podcenjena količina dela **(T2)**     | Dogovor s stranko za podaljševanje dobavnega roka, ali pa znižanje komplelsnosti aplikacije.                                                   |
| Spremembe zahtev **(T12)**            | Skliče se sestanek in se dogovori o najbol učinkovitem vpeljevanju novih/spremenjenih zahtev                                                   |
| Nemotiviranost članov **(T4)**        | Pogovori se s člani ekipe in jim pomagaj zastaviti vidne cilje in vspostaviti dobro počutje.                                                   |
| Slaba orodja za testiranje **(T5)**   | Poiščejo se boljša orodja za testiranje, takšna ki nimajo problemov ki so jih povzročala trenutna.                                             |
| Okvara strojne opreme **(T6)**        | Okvarjeno strojno opremo se zamenja z novo, za preprečevanje izguba kode se uporablja Git.                                                     |
| Neprimerna programska oprema **(T1)** | Priskrbeti je potrebno dodatno programsko opremo, kar lahko povzroči dodatne stroške. Če je le možno se uporabi odprtokodno programsko opremo. |
| Konkurenčen produkt **(T7)**          | Aplikacijo bomo oglaševali, naredili čim bolj uporabniku prjazno.                                                                              |
| Prešibek strežnik **(T9)**            | Strežnik bomo nadgradili oziroma ga zamenjali za bolj zmogljivega.                                                                             |
| Počasna podatkovna baza **(T10)**     | Podatkovno bazo bomo zamenjali z bazo ki bo bolj primerna pogosto izvajajočim se klicem.                                                       |

## 4. Upravljanje projekta

| Opravilo                      | Karmen | Matej | Timotej Z. | Miha | Timotej B. |
| :---------------------------- | :----- | :---- | :--------- | :--- | :--------- |
| Zajem zahtev                  | 20%    | 20%   | 20%        | 20%  | 20%        |
| Izbira arhitekture            | 20%    | 20%   | 20%        | 20%  | 20%        |
| Izgled                        | 5%     | 5%    | 30%        | 5%   | 55%        |
| Načrtovanje PB                | 40%    | 20%   | 0%         | 40%  | 0%         |
| Uporaba API-jev               | 10%    | 60%   | 10%        | 10%  | 10%        |
| Implementacija UI             | 0%     | 0%    | 50%        | 0%   | 50%        |
| Implementacija PB             | 35%    | 35%   | 0%         | 30%  | 0%         |
| Implementacija REST API       | 35%    | 35%   | 0%         | 30%  | 0%         |
| Implementacija zunanjega API  | 25%    | 25%   | 10%        | 30%  | 10%        |
| Implementacija zalednega dela | 0%     | 20%   | 20%        | 20%  | 20%        |
| Testiranje API                | 0%     | 50%   | 0%         | 50%  | 0%         |
| Testiranje zalednega dela     | 0%     | 0%    | 50%        | 0%   | 50%        |
| Integracija v testno okolje   | 0%     | 50%   | 0%         | 50%  | 0%         |
| Testiranje aplikacije         | 20%    | 20%   | 20%        | 20%  | 20%        |
| Postavitev v produkcijo       | 10%    | 10%   | 10%        | 30%  | 40%        |
| Priprava dokumentacija        | 100%   | 0%    | 0%         | 0%   | 0%         |
| Upravljanje projekta          | 10%    | 10%   | 10%        | 10%  | 60%        |

**Usklajevanje dela v skupini**

Delo v skupini bomo usklajevali preko redne komunikacije (preko komunikacijskih kanalov) in po potrebi s sestanki, ki bodo potekali v živo ali video klica.
S tem se bomo seznanili o že opravljenem delu, predlagali popravke in si pomagali, če bo to potrebno.
V primeru napačne porazdelitve dela, zaradli slabo ocenjene težavnosti, se bodo ostali člani pridružili delu na problemu.

## 6. Finančni načrt - COCOMO II ocena

| Tip funkcionalnosti | Naziv funkcionalnosti              | Obseg | Utež |
| :------------------ | :--------------------------------- | :---- | :--- |
| EI                  | Registracija v sistem              | L     | 3    |
| EI                  | Prijava v sistem                   | L     | 3    |
| EI                  | Dodajanje predloga                 | L     | 3    |
| EI                  | Glasovanje na predlogu             | L     | 3    |
| EO                  | Posredovanje predloga              | L     | 4    |
| EQ                  | Prikaz uporabnikovega profila      | L     | 3    |
| EI                  | Dodajanje obvestila/novice         | L     | 3    |
| EQ                  | Prikaz seznama predlogov/novic     | L     | 3    |
| ILF                 | (1.) Transakcijska podatkovna baza | L     | 7    |
| ILF                 | (2.) Transakcijska podatkovna baza | L     | 7    |
| EIF                 | REST API                           | L     | 5    |
| EIF                 | Zunanji API                        | L     | 5    |

Seštevek uteži: 49

Za razvoj funkcionalnosti bomo uporabili JavaScript, iz česar sledi izračun za SLOC: 49 \* 47 = 2303 SLOC

**Napor** = A _ Obseg<sup>B</sup> _ M

| Dejavnost | Vrednost    | Utež |
| :-------- | :---------- | :--- |
| PREC      | nizka       | 4    |
| FLEX      | nizka       | 4    |
| RESL      | zelo visoka | 1    |
| TEAM      | zelo nizka  | 5    |
| PMAT      | visoka      | 1,8  |

**Izračun PMAT** = 5 - ((0,9 + 0,9 + 0,9 + 0,25 + 0, 75 + 0,9 + 0,75 + 0,75 + 0,1 + 0,1 + 0,5 + 0,9 + 0,9 + 0,5 + 0,1 + 0,9 + 0,75 + 0,75) \* 5 / 18) = 1,7778

**B** = 1,01 + 0,01 \* 15,8 = 1,168

| Dejavnik | Ocena       | Razpon uteži | Utež |
| :------- | :---------- | :----------- | :--- |
| PERS     | nominalna   | 1,5 - 0,5    | 1,0  |
| PREX     | visoka      | 1,5 - 0,5    | 1,4  |
| RCPX     | visoka      | 0,5 - 1,5    | 1,1  |
| RUSE     | zelo nizka  | 0,5 - 1,5    | 0,5  |
| PDIF     | nominalna   | 0,5 - 1,5    | 1,0  |
| SCED     | nominalna   |              | 1,0  |
| FCIL     | zelo visoka | 1,5 - 0,5    | 0,6  |

**M** = 0,462

**Napor** = A _ Obseg <sup>B</sup> _ M = 2,94 _ 2,303 <sup>1,168</sup> _ 0,462 = 3,598

Celoten projekt zahteva 3,598 ČM dela.
Kar pretvorimo v naše delavne ure: (160 / 60) \* 3,598 = **9,595 ČM**

| Aktivnost  | Naziv                                      | Obseg (ČM) | Predvideni stroški dela (€) | Predvideni stroški investicij (€) | Predvideni potni stroški (€) | Predvideni posredni stroški (€) | Skupno (€)  |
| :--------- | :----------------------------------------- | :--------- | :-------------------------- | :-------------------------------- | :--------------------------- | :------------------------------ | :---------- |
| A1         | Projektno vodenje                          | 2,1        | 1890                        | 7500                              | 200                          | 189                             | 9779        |
| A2         | Zajem zahtev                               | 0,5        | 450                         | 0                                 | 0                            | 45                              | 495         |
| B1         | Grafični vmesnki                           | 0,7        | 630                         | 0                                 | 0                            | 63                              | 693         |
| B2         | Arhitektura (način implementacije)         | 0,25       | 225                         | 0                                 | 0                            | 22,5                            | 247,5       |
| B3         | Definiranje podatkovne baze                | 0,5        | 450                         | 0                                 | 0                            | 45                              | 495         |
| B4         | Specifikacija API                          | 0,4        | 360                         | 0                                 | 0                            | 36                              | 396         |
| B5         | Načrtovanje komunikacije z zunanjim API    | 0,25       | 225                         | 0                                 | 0                            | 22,5                            | 247,5       |
| C1         | Implementacija zaslonskih mask             | 0,4        | 360                         | 0                                 | 0                            | 36                              | 396         |
| C2         | Implementacija prve transakcijske baze     | 0,3        | 270                         | 0                                 | 0                            | 27                              | 297         |
| C3         | Implementacija druge transakcijske baze    | 0,3        | 270                         | 0                                 | 0                            | 27                              | 297         |
| C4         | Implementacija API                         | 0,3        | 270                         | 0                                 | 0                            | 27                              | 297         |
| C5         | Implemenatcija komunikacije z zunanjim API | 0,3        | 270                         | 0                                 | 0                            | 27                              | 297         |
| C6         | Implementacija zalednega dela              | 0,85       | 765                         | 0                                 | 0                            | 76,5                            | 841,5       |
| C7         | Testiranje API                             | 0,1        | 90                          | 0                                 | 0                            | 9                               | 99          |
| C8         | Testiranje zalednega dela                  | 0,075      | 67,5                        | 0                                 | 0                            | 6,75                            | 74,25       |
| C9         | Implementacija posredovanja podatkov       | 0,25       | 225                         | 0                                 | 0                            | 22,5                            | 247,5       |
| C10        | Integracija v testno okolje                | 0,075      | 67,5                        | 0                                 | 0                            | 6,75                            | 74,25       |
| C11        | Testiranje aplikacije v testnem okolju     | 0,075      | 67,5                        | 0                                 | 0                            | 6,75                            | 74,25       |
| D1         | Postavitev produkcijske aplikacije         | 0,075      | 67,5                        | 0                                 | 0                            | 6,75                            | 74,25       |
| D2         | Dokumentacija                              | 0,15       | 135                         | 0                                 | 0                            | 13,5                            | 148,5       |
| **Skupno** | **Vse aktivnosti**                         | **7,95**   | **7155**                    | **7500**                          | **200**                      | **715,5**                       | **15570,5** |

**Dodatna razlaga stroškov**

| Aktivnost      | Tip stroška                   | Opis stroška                                                                                                                                                                                  | Strošek (€) |
| :------------- | :---------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| Vse aktivnosti | Predvideni stroški dela       | Cena urne postavke bo pri našem projektu znašala 15€. En človek mesec (ČM) predstavlja 60 delavnih ur, kar pomeni, da en ČM stane 900€. <br/>(1 ČM = 60 ur = 4 tedni _ 5 dni/teden _ 3 h/dan) | 7290        |
| Vse aktivnosti | Predvideni posredni stroški   | Za posredni stroške predvidevamo, da bodo znašali 10% stroškov dela na aktivnosti.                                                                                                            | 729         |
| A1             | Predvideni potni stroški      | Na projektu se bo delalo od doma, kar ne prinaša potnih stroškov. Pri projektu bomo imeli štiri zagovore, kjer bomo za vsakega izplačali 10€ potnih stroškov. (10€ _ 5 članov _ 4 zagovori)   | 200         |
| A1             | Predvideni stroški investicij | Pet računalnikov po 1500€ za delo od doma.                                                                                                                                                    | 7500        |

## Reference

[1]: R. H. Thayer, E. Yourdon, **Software Engineering Project**, IEEE Computer Society, Los Alamitos, 2001.

[2]: D. Lavbič, Skripta TPO, 2021


## :interrobang: Dodatni komentarji izvajalcev predmeta

**Problemska domena** projekta (tj. **Občinski obveščevalnik**) je bila **izbrana s pomočjo glasovanja** vseh študentov in izvajalcev pri predmetu TPO. To ne pomeni, da je predlagan projekt s tehnične plati brezhiben in da ne vsebuje napak oz. da je bil najbolje ocenjen. Pri vašem delu v okviru 2. LP, 3. LP in 4. LP vam tako opredeljuje zgolj problemsko domeno, ki jo lahko v nadaljevanju implementirate iz svojega zornega kota, kar pomeni, da bodo skupine dale poudarek na različne vidike sistema, ki ga bodo na koncu tudi implementirale.

Omenjen predlog projekta je takšen, kot ga je pripravila zmagovalna skupina, kjer so zgolj odstranjeni deli o sodelujočih članih projekta. Pri nadaljnjem delu tako bodite dodatno pozorni na naslednje pomanjkljivosti tega projektnega predloga:

* :exclamation: Pri **opisu projektne ideje** so prisotne naslednje pomanjkljivosti:
  * v razdelku ozadje se govori o motivaciji, kar ni ustrezno,
  * pred cilji manjka uvodni stavek (slike, tabele oz. alineje niso nikoli vključene samostojno, vedno jih v besedilu omenimo oz. referenciramo),
* :exclamation: Pri **povzetku razdelitve projekta na aktivnosti** bi lahko zaradi boljše preglednosti dodali izris sklopov na diagramu Gantt.
* :exclamation: Pri **obvladovanju tveganj** so prisotne naslednje pomanjkljivosti:
  * ni navedene uporabljene preslikovalne tabele pri urejanju tveganj po izpostavljenosti,
  * manjka strategija za obvladovanje tveganj.
* :exclamation: Pomanjkljivosti **finančnega načrta, COCOMO II ocene**:
  * tabela za izračun funkcijskih točk po funkcionalnostih je brez vsakega opisa, kaj se v tabeli nahaja,
  * izračun vrednosti za PMAT je visoka (utež 1,8), kar pomeni, da naj bi bil proces razvoja po CMM zelo dobro definiran.