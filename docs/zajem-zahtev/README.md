# Dokument zahtev

|                             |                                                         |
| :-------------------------- | :------------------------------------------------------ |
| **Naziv projekta**          | SLObčina |
| **Člani projektne skupine** | Eva Bizilj, Klemen Jerman, Miha Širovnik, Nikolay Vasilev, Andraž Zrimšek |
| **Kraj in datum**           | Ljubljana, 1. 4. 2022                                    |

## Povzetek projekta

**Aplikacija SLObčina** bo omogočala boljši pregled nad delovanjem posamezne občine ter izboljšala komunikacijo med občani in občinskimi organi. </br >
Izdelali smo diagram primerov uporabe, v katerem smo predvideli 6 uporabniških vlog, ki se nanašajo na občane, zaposlene na občinskem uradu in neregistrirane uporabnike, 27 funkcionalnosti ter 2 zunanja sistema (Google Calendar, Novice). </br >
Aplikacija bo uporabljala zunanji sistem Google Calendar za funkcionalnosti povezane z dogodki ter nudila vmesnik preko katerega bodo zunanji sistemi lahko dostopali do funkcionalnosti naše aplikacije, ki so povezane z novicami (pregled, brisanje, urejanje in dodajanje novic).
V okviru našega projekta smo upoštevali tudi nekaj varnostnih postopkov, zakonov, tehnologij ter metodologij, ki smo jih zapisali v delu dokumenta, ki se nanaša na nefunkcionalne zahteve.
Osnutke zaslonskih mask, ki povezujejo uporabnike aplikacije z našo aplikacijo ter opis sistemskih vmesnikov, ki zajemajo povezavo med našo aplikacijo in zunanjim sistemom, smo zajeli v sklopu protipiranja vmesnikov. 

## 1. Uvod
**SLObčina** je aplikacija, ki je namenjena občanom ter zaposlenim na občinskem uradu ter tudi ostalim prebivalcem Slovenije, ki želijo izvedeti več o posamezni občini. 

Namen aplikacije je, da poveča učinkovitost komunikacije med občani in občinskimi organi, omogoči boljši pregled nad delovanjem občine, poveča sodelovanje občanov pri odločitvah o projektih ter zagotovi vse potrebne informacije za občane na enem mestu. 

Aplikacija nudi različne funkcionalnosti, ki pa so odvisne od tipa uporabnika. <br /> V naši aplikaciji je le teh **6** in sicer: **neregistrirani uporabnik**, **občan**, **upravljalec predlogov (organizacija)**, **upravljalec dogodkov**, **upravljalec novic** ter **administrator**. <br /> 

Funkcionalnosti aplikacije lahko v grobem razdelimo na: 
* <b>upravljanje z uporabniški računi</b> <br />
Vsi uporabniki razen neregistrirani uporabnik, ki se mora najprej registrirati, se lahko prijavijo v spletno aplikacijo ter uredijo svoj uporabniški profil. Administrator, upravljalec dogodkov, upravljalec predlogov in upravljalec novic ne opravijo postopka registracije, ker njihovi uporabniški profili niso ustvarjeni na spletni strani. Vsi prijavljeni uporabniki lahko urejajo svoj profil, administrator pa lahko ureja in briše vse uporabniške profile. 

* <b>pregled delovanja izbrane občine</b> <br />
Vsi uporabniki aplikacije lahko dostopajo do podatkov izbrane občine (osnovni podatki in organizacije), fotogalerije, dogodkov in novic ter si ogledajo predloge projektov občanov. Za ažurne informacije o občini ter fotogalerijo je zadolžen administrator. 

* <b> komunikacijo med občani in zaposlenimi na občinskih organih ter sodelovanje občanov pri odločitvah o projektih v občini</b> <br />
Komunikacija med občani in občinskimi organi je zelo pomembna. Na ta način imajo občani možnost, da podajo predlog projekta za izboljšanje življenja v občini, zaposleni v občinskih organih pa dobijo boljši pregled nad željami občanov in možnost ažurnega odpravljanja težav v občini. <br />
Občani lahko oddajo predlog projekta in glasujejo zanje ter na spletno stran dodajo sliko. Imajo pa tudi možnost, da sihronizirajo koledar v svoji Google Calendar aplikaciji s koledarjem v aplikaciji. <br /> 
Upravljalec predlogov (organizacija) lahko dostopa do vseh funkcionalnosti, ki so povezane s predlogi projektov občanov, ki spadajo v razred v katerega spada tudi organizacija za katero je zadolžen posamezen upravljalec predlogov (organizacija). <br />
Upravljalec dogodkov lahko dostopa do vseh funkcionalnosti, ki so povezane z dogodki v občini (urejanje, brisanje, dodajanje in ogled dogodka).  <br />
Upravljalec novic pa lahko dostopa do vseh funkcionalnosti, ki so povezane z novicami v občini (urejanje, brisanje, dodajanje in ogled novice). 

Naslednje funkcionalnosti, ki jih ima naša aplikacija, opišemo v razdelku **Funkcionalne zahteve**: </br >
registracija uporabnika (PU1), prijava uporabnika (PU2), odjava uporabnika (PU3), urejanje uporabniškega profila (PU4), brisanje uporabniškega profila (PU5), dodajanje novice (PU6), urejanje novice (PU7), ogled novice (PU8), brisanje novice (PU9), dodajanje predloga projekta (PU10), ogled predloga projekta (PU11), urejanje predloga projekta (PU12), ogled podatkov občine (PU13), urejanje podatkov občine (PU14), ogled uporabniškega profila (PU15), dodajanje fotografije (PU16), prikaz seznama uporabnikov (PU17), brisanje fotografije (PU18), ogled fotografije (PU19), urejanje dogodka (PU20), brisanje dogodka (PU21), dodajanje dogodka (PU22), ogled dogodka (PU23), ocenjevanje predloga projekta (PU24), filtriranje predlogov projektov (PU25), izbira občine (PU26), sinhronizacija dogodkov z aplikacijo Google Calendar (PU27).

Da bo naša aplikacija karseda uporabna, varna ter zanesljiva se poleg funkcionalnih zahtev zahteva še nekaj **nefunkcionalnih zahtev**. 
Pričakuje se, da aplikacija omogočala sočasno delo najmanj 500 uporabnikom sistema, pri čemer odzivni časi ne smejo prekoračiti 3 sekund, aplikacija pa mora biti dosegljiva najmanj 97 odstotkov časa. Poleg tega se tudi pričakuje, da ima pri uporabi aplikacije s strani uporabnikov, vsak uporabnik dostop le do svojih funkcionalnosti. Končna rešitev aplikacije bo v obliki SPA ter bo vsebovala manj kot 15 interaktivnih gumbov na stran.
Pri registraciji uporabnika se bo preverjala verodostojnost podatkov. Med razvojem aplikacije bo za upravljanje s programsko kodo uporabljeno orodje Git ter proces RUP. Da bo aplikacija čim bolj enostavna za uporabo, bo dosegljiva na spletnem mestu. Poskrbeli bomo tudi, da bo skladna z splošno uredbo o varstvu podatkov (GDPR) in z zakonom o varstvu osebnih podatkov (ZVOP). 

Aplikacija bo za delovanje funkcionalnosti povezanih z dogodki v občini uporabljala **zunanji sistem Google Calendar**. Prav tako pa bo nudila **API**, preko katerega bodo zunanji sistemi (npr. **Novice**) lahko dostopali do funkcionalnosti naše aplikacije in sicer do dodajanja, brisanja, urejanja in ogleda novic.

## 2. Uporabniške vloge

Aplikacija nudi različne funkcionalnosti, ki pa so odvisne od tipa uporabnika. </br > V naši aplikaciji je le teh **6** in sicer: </br >
- **Neregistrirani uporabnik** je oseba, ki:
  - ima dostop do registracije
  - lahko izbere občino in dostopa do novic, predlogov projektov, fotografij, dogodkov ter podatkov in organizacij izbrane občine
- **Občan je oseba**, ki: 
  - ima dostop do prijave in odjave
  - lahko uredi svoj uporabniški profil in si ogleda uporabniške profile registriranih uporabnikov
  - lahko izbere občino in dostopa do novic, predlogov projektov, fotografij, dogodkov ter podatkov in organizacij izbrane občine
  - lahko dodaja, ogleda in ocenjuje predloge projektov
  - lahko dodaja in pregleduje fotografije v fotogaleriji
  - lahko sinhronizira koledar v aplikaciji s koledarjem v svoji Google Calendar aplikaciji
- **Upravljalec predlogov (organizacija)** je zaposleni na občinskem uradu, ki je zadolžen za posamezno organizacijo v občini in: 
  - ima dostop do prijave in odjave
  - lahko uredi svoj uporabniški profil in si ogleda uporabniške profile registriranih uporabnikov
  - lahko izbere občino in dostopa do novic, predlogov projektov, fotografij, dogodkov ter podatkov in organizacij izbrane občine
  - lahko ureja in pregleduje predloge projektov, ki spadajo v razred v katerega spada organizacija za katero je zadolžen
- **Upravljalec dogodkov** je zaposleni na občinskem uradu, ki: 
  - ima dostop do prijave in odjave
  - lahko uredi svoj uporabniški profil in si ogleda uporabniške profile registriranih uporabnikov
  - lahko izbere občino in dostopa do novic, predlogov projektov, fotografij, dogodkov ter podatkov in organizacij izbrane občine
  - lahko ureja, dodaja, briše in pregleduje dogodke ter sinhronizira koledar v aplikaciji s koledarjem v svoji Google Calendar aplikaciji
- **Upravljalec novic** je zaposleni na občinskem uradu, ki: 
  - ima dostop do prijave in odjave
  - lahko uredi svoj uporabniški profil in si ogleda uporabniške profile registriranih uporabnikov
  - lahko izbere občino in dostopa do novic, predlogov projektov, fotografij, dogodkov ter podatkov in organizacij izbrane občine
  - lahko ureja, dodaja, briše in pregleduje novice
- **Administator** je zaposleni na občinskem uradu, ki: 
  - ima dostop do prijave in odjave
  - lahko uredi, pregleduje in izbriše katerikoli uporabniški profil v aplikaciji
  - lahko izbere občino in dostopa do novic, predlogov projektov, fotografij, dogodkov ter podatkov in organizacij izbrane občine
  - lahko ureja podatke o občini
  - lahko ureja, dodaja, briše in pregleduje fotografije občine

## 3. Slovar pojmov

| Pojem | Definicija | 
| :------------- | :-------------------------------------------- |
| **Uporabnik** | Neregistrirani uporabnik, občan, upravljalec predlogov (organizacija), upravljalec dogodkov, upravljalec novic, administrator. |
| **Uporabniška vloga** | Opredeljuje glavne tipe uporabnikov (glej pojem uporabnik) aplikacije glede na funkcionalnosti, ki jih imajo na voljo. |
| **Registracija** | Postopek pri katerem si neregistrirani uporabnik ustvari uporabniški profil, po uspešno končanem postopku postane občan in lahko nadaljuje s prijavo. |
| **Potrditveno geslo** | V postopku registracije mora uporabnik geslo zapisati dvakrat, da se zmanjša možnost napake pri vpisu gesla v vnosno polje.  |
| **Prijava** | Postopek preko katerega se registrirani uporabnik prijavi s svojimi podatki v sistem.  |
| **Uporabniški profil (tudi uporabniški račun)** | Uporabniški profil (tudi uporabniški račun) je osebni profil registriranih uporabnikov, kjer so zapisani njegovi podatki. |
| **Občan** | Registrirani uporabnik.  |
| **Zaposleni na občinskem organu** | Župan, občinski svet in nadzorni odbor.|
| **Administrator** | Zaposleni na občinskem organu. Zadolžen je za pravilno delovanje aplikacije, urejanje in brisanje vseh profilov uporabnikov, urejanje fotografij ter podatkov o posamezni občini.|
| **Upravljalec predlogov (organizacija)** | Zaposleni na občinskem organu, ki je zadolžen za predloge projektov, ki spadajo v razred v katerega spada organizacija za katero je zadolžen. |
| **Upravljalec dogodkov** | Zaposleni na občinskem organu, ki je zadolžen za urejanje, brisanje in dodajanje dogodkov.|
| **Upravljalec novic** | Zaposleni na občinskem organu, ki je zadolžen za objavljanje in urejanje novic.|
| **Predlog projekta** | Mnenje občanov o možnih izboljšavah v občini in poročanje poškodbah na občinski infrastrukturi.|
| **Organizacija** | Organizacija, ki deluje znotraj občine in spada v nek splošni razred organizacij (npr. v razred organizacija Kultura spada organizacija z imenom Kulturno društvo Ljubljana). |
| **Dogodek** | Objava o prireditvah, zabavah in srečanjih v občini.  |
| **Koledar** | Sistematična razdelitev leta na dneve, tedne in mesece.  |
| **Novica** | Informacija, o preteklih in prihodnjih dogodkih in dogajanjih znotraj občine, objavljena na spletni strani v obliki članka.   |
| **API** | Aplikacijski programski vmesnik do zunanjih sistemov (ang. application programming interface).|
| **Request body** | Podatki, ki jih odjemalec pošlje APIju.|
| **Zunanji sistem** | Sistem do katerega dostopa aplikacija, da pridobi potrebne podatke, a ni del aplikacije. |
| **Fotogalerija** | Seznam fotografij dogodkov, oseb ali kraja.|
| **Deležniki v občini** | Občani in občinski organi.|
| **SPA** | Aplikacija, ki se izvaja znotraj ene spletne strani (ang. single page application). |
| **Git** | Porazdeljen sistem za upravljanje z izvorno kodo.  |
| **RUP** | Tehnološki okvir za razvoj programske opreme (ang. Rational Unified Process). |
| **GDPR** | Splošna uredba o varstvu podatkov je uredba Evropske unije, na podlagi katere so Evropski parlament, Evropski svet in Evropska komisija okrepili in poenotili zaščito podatkov o vseh osebah znotraj Evropske unije. |
| **ZVOP-2** | Zakon o varstvu osebnih podatkov. |
| **Registracijski obrazec** | Obrazec, v katerega neregistriran uporabnik vnese potrebne podatke za registracijo.  |
| **Obrazec** | Vnosno polje oz. grafični element, v katerega uporabnik vpiše podatke. |
| **Domača stran** | Začetna stran aplikacije.  |
| **Obvezni atributi** | Vnosna polja v obrazcu, ki ne smejo biti brez vrednosti oz. je določeno, kakšne vrednosti lahko imajo.  |
| **Navigacijski meni** | Zgornja vrstica aplikacije, ki vsebuje nabor gumbov in omogoča, da se uporabnik lahko sprehaja med maskami. |
| **Spustni seznam** | Spustni seznam je podoben polju s seznamom, ki uporabnikom omogoča, da izberejo eno vrednost s seznama. |

## 4. Diagram primerov uporabe


**Diagram primerov uporabe z vsemi funkcionalnostmi** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DPU_vse_funkcionalnosti.puml))

![DPU](https://teaching.lavbic.net/plantuml/png/rPVDJXin4CVl-nHMUe53918Q2bA5n4UfAbKGbURKzk3iEejt7JloEg5AooFq8VeYFPNtwjYR_SZ6wpLmgWGeZF-_6Njc_94ifNo19PwZAGxJM8ebZqB1X4HAOfx14E4go4fLH6PuoTHdybsTCHhpEGoZ4FuGMLCjCnBYZA0V0QhvlJ1-x--e8jekP4HaRdirkZe_VdS1LYobkC-DKmPay51p-nzC4OTAoFCQbqkQ0cl0W96PGaeWIUCxXI8gIQYeu45W8DIx9fB4D5EImi8fMYw4n5DEqnx26Ie7OMXIZ1JapVJlByoDxcOQObxO9mk9Lop1Z8He8Kd4H2nMN_cUa36uMUEG9dZVO3Nbk13Ql4Gm4ALYrOGkDtORmyMAXatWMXiBzLaqfzmi3luroYrB8NilHCm8kW2UHpWNvhR2LAPIUoT6m4IA6IUvfHWVYxbu_0D9nYdqZT5fqvhJCsq80bqRp7Mqtkr7dLxASSzqKrs7-f6uv_t-ATgx0MsKBvMWB-F9yRVzBl6c8XW-Y8Ia2cjkCF00HOGL91i9Cp4JRt3OpSs44h74Cvhao4atajVRp6peZ715MTwuuBjijM9by4ax6BaSV5XF0QylQNXazF1ZRVuD2-YdpQ1kvshRvEaiN9XzKGitbY1UDUL38wzhTIOYY_BGffn8afWC5Dh7tod92poZp72lRTmb53IffwxH4mVMQPa2jKSQZDoXcjrmP0q29sj2Lkrp6reNT4lvdHJ54LEU6cYDy8911i4gK6Cx6szlydh1xzO9K7bsrQq5STIlXV2kOmj_BcdMmO-yubjtkZEqPrUqq5tTqRNU9gLFGS1ijujVITsaex9kqBl0dcxiszPh2NxrslPZBhCd9x11-IMl0JqdSGqNLOzLj-MHRzWAUTE1b3rP8ITT6NbEBOgNpvFBiGlwLMINUqvHBD7zLkyta_gxuQ2RAujLvmRTNDLBTT0ZrI-ye7GFRByyqTl-Sj5_iMExqxQtc5tjA88TS6JV3hId7P2j1pVIW7FJM-Mj-zsgjh-zhTBMKy7PC3zFjxyUj1uYJc7pzDyLrrzHkwEsotTNvNehDzN1mpy0)

Zgornji diagram primerov uporabe smo zaradi preglednosti razdelili na **tri** diagrame primerov uporabe:
* funkcionalnosti **neregistriranega uporabnika ter občana**
* funkcionalnosti **vseh upravljalcev (upravljalec novic, upravljalec dogodkov, upravljalec predlogov projektov (organizacija))**
* funkcionalnosti **administratorja** 


**Diagram primerov uporabe s funkcionalnostmi neregistriranega uporabnika in občana** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DPU_neregistrirani_uporabnik_obcan.puml))

![DPU](https://teaching.lavbic.net/plantuml/png/rLJDRjD04BxxAKRX0WTB9AMbIAXI6oX2GgIYv8GuZBqRP-tDJhJU92ZGH-X3y2ASw7interJnt8I94v8bcLzyttV_EoioqAPELgSGO9faLbQ696I9WlEeYav98sBoYrBo0akjFiilxbBhJ8pup2a_9AsmLgKCiLImlS86hv3xxkQAYShdAoGDc1FJg-lpjyE6KLhQHN0HBCokclO_WSbOkh8NZLqWT8cT2QCj9muS0HMPLC7GbcPEaKcYhm8UX-bbPagdLNSk8B5d2mcHXKzm1AsGGwDwqYj72M_xz5utYX9qTJu3SteuHTxOS7ZyV4AMXjrMG4rxHrHfYKCKKiZCF02LaFR4ccfKka9cWhKHWOaYgfcq5GslTiFLJtAO8_7pnDjfeHOqCh4yGKy7J5PWF5w-78pFl_wx1XvRgNGb25_K2uBXvMkt_yB8Gbq1Is1V6K-N__ak6v2ZZAB4vK7oQlZ4a4PYS9NDZYOuLhfSDJilMcC2znqnb-LmUaXW_VhXENDbWPdp6T1vx8qb9ysqLJb-BXdOPe-8pz-aHgQ6ylaPPi-yFGsToGwg2UTrB6LkHz1JNxuMSXmmXEblV15f_0D7sdU75vhAvuVKRMFzgox4_wpv7AvFy-WkxfRPQQMZ5g76OUbu4DT0yur3uHHWjQzytOlw_dlNa1u7SVnOXxltx9z_7-hX8rtBZfKfWUkx-CecFVZOlTtitSnExdHtHy0)

**Diagram primerov uporabe s funkcionalnostmi upravljalcev** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DPU_upravljalci.puml))

![DPU](https://teaching.lavbic.net/plantuml/png/rPN1Rjf048RlVeeHlIG7f4AQD9MgI84qLQMgGKevjJqCzcBMNdRGUe6ADe-GX-YBzDIyLzUxCInciGyzzOBGxF_DsF_CZekSomKgdCC4upnLj9H9J88KQ8MoC4TCwgZOgX8snQNGdzbtVIruAkVc66BpmvIdMXOineB1ZmYyl4ERTptZcfLnKWbJBlRY_7Pm-MveegWKhLrm8WmPFNXf_uD7n5YJ6dYSazG5mOAHO5CDca3nTAOXuOh5cfEC8Wj1PxnGk18P2XR3Gh54K4ghh_A4L8gIRp3c6Pvs00lmbADA6CgIc8CafrKTkdcEXnX9AnxNWKzbi5AFQ4vFloK7p8tfLbg6Df9Vbu5Azfue5Go6XfS9EfsBLQ5AQRCpAn2Kev3CHQAej0XbcQPp__5kykUHI-pOfleLeTjDQ2sxLt0oKiQa5S9oGGedakS8NqRZ_hVJ0wGYxf80SDO0Z1NBK6PiYppzobcAfcKqvSBYhvhgcRT9dCkir5wsQfzdmLR8MAvjYLwldQC4jUaoa3NELkkTjM9JqfGgdFBC4MzQ2JTcpkcc_BTSQCMLDMyxuDLRcNybVzx0VzXC3Es_Jl_2o8q-T2427GixwQPZFuiTG6-kReoNBiUkSnUMEuGEokwGrot8GF6YXZZxQuzNNM3l2RVL_6wyhDVRWGSbVQxNpkqSyS5-EtZFvKnHjT2sEmesW0jXxf-94jIMXvUxT69_ZS3RxdBH_UV4uQJ79ZoiRcX266XmFmmSjzqWUziJIg1nT8FoerCRL8UtML1wTBOR1-RdrVx7vUZjQHJMbyA1E7hu2m00)

**Diagram primerov uporabe s funkcionalnostmi administratorja** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/DPU_administrator.puml))

![DPU](https://teaching.lavbic.net/plantuml/png/rLFDRjD04BxxAKRX0WSV4bee4a9g0aL8Y5Q2dX27iNVihhtPiSRh10Nr4NW8tgMy5sjlKpbH4lkAP5dojz_FxCouBhMjK7092QPbBjnObR9X0ITeQtz4raNr4qjHXernt-YdkpGwjqj_3Ab_aVHOJKqfrWI_8kZvBZhVzPrsrE8iYYHWpywlvXSV5Xv54Lu7C35U6TttRF-34Z5rBFEUBb3s2GS38qEP0ySWEhzpeBHGwZJRAEf4CBbKIsrrxQ_jFoU0DUmWMzf7vjmGBD2GLHY80Tj2M-ONNkcKEeBX4esbW4HH6ussjPby_NoTFFpM5YTTitOY8LQyjd4SluFdDw8BN24q5GicLfS8tszkPpzUd19TgmEQbwSrjq85seAUL7__b9GZLCAPDft3sMc7kUXwmE5ye6xV6WMswrPBlnX3huIKuP1JKEcweEbqb9GLkf9NmDqikipfs3uT59-DYJtUd-b0Wzxxp92UiUDSCDD527vrMkZNgCGDrBInkEnjXY-_LRyUETdzr543sXUz6IDIdBDwNFQ1YLnfuqHB64fO1d-jnsq85vmDzFNJ9l46_KdEGaFzi_kJmrklQAhuM9rUiFFJGqi-kjpt_m00)

## 5. Funkcionalne zahteve

**Prioriteto posamezne funkcionalnosti** smo določili s pomočjo metode [**MoSCoW**](https://www.agilebusiness.org/content/moscow-prioritisation).

### Registracija uporabnika (PU1)

#### Povzetek funkcionalnosti
**Neregistrirani uporabnik** se lahko registrira in s tem pridobi dostop do več funkcionalnosti. V postopku registracije izpolni registracijski obrazec pri čemer so ime, priimek, datum rojstva, e-poštni naslov, geslo, potrditveno geslo ter občina obvezni atributi. Po želji pa lahko vpiše tudi naslov prebivališča (mesto, naslov) ter svojo telefonsko številko.  

#### Osnovni tok (O1.1)
1. Neregistrirani uporabnik klikne na gumb “Registracija” v navigacijskem meniju. 
2. Aplikacija neregistriranemu uporabniku prikaže registracijski obrazec.
3. Neregistriran uporabnik v registracijski obrazec vpiše svoje ime in priimek, datum rojstva, e-poštni naslov, geslo, potrditveno geslo ter izbere občino iz spustnega seznama. Po želji lahko vpiše tudi naslov prebivališča (mesto, naslov) ter telefonsko številko, ki nista obvezna atributa. 
4. Neregistriran uporabnik pritisne na gumb "Registracija" s čimer odda registracijski obrazec.
5. Aplikacija preveri ustreznost obveznih atributov.
6. Vpisani podatki so ustrezni.
7. Po potrjeni registraciji aplikacija neregistriranega uporabnika preusmeri na domačo stran. 

#### Alternativni tok 1 (A1.1)
1. Neregistrirani uporabnik klikne na gumb “Prijava” v navigacijskem meniju. 
2. Aplikacija neregistriranemu uporabniku prikaže obrazec za prijavo.
3. Neregistrirani uporabnik klikne na gumb "Registracija" v spodnjem delu obrazca za prijavo.
4. Aplikacija neregistriranemu uporabniku prikaže registracijski obrazec.
5. Neregistriran uporabnik v registracijski obrazec vpiše svoje ime in priimek, datum rojstva, e-poštni naslov, geslo, potrditveno geslo ter izbere občino iz spustnega seznama. Po želji lahko vpiše tudi naslov prebivališča (mesto, naslov) ter telefonsko številko, ki nista obvezna atributa. 
6. Neregistriran uporabnik pritisne na gumb "Registracija" s čimer odda registracijski obrazec.
7. Aplikacija preveri ustreznost obveznih atributov.
8. Vpisani podatki so ustrezni.
9. Po potrjeni registraciji aplikacija neregistriranega uporabnika preusmeri na domačo stran. 

#### Alternativni (izjemni) tok 2 (A1.2)
1. Neregistriran uporabnik klikne na gumb “Registracija” v navigacijskem meniju. 
2. Aplikacija neregistriranemu uporabniku prikaže registracijski obrazec.
3. Neregistriran uporabnik v registracijski obrazec vpiše svoje ime in priimek, datum rojstva, e-poštni naslov, geslo, potrditveno geslo ter izbere občino iz spustnega seznama. Po želji lahko vpiše tudi naslov prebivališča (mesto, naslov) ter telefonsko številko, ki nista obvezna atributa. 
4. Neregistriran uporabnik pritisne na gumb "Registracija" s čimer odda registracijski obrazec.
5. Aplikacija preveri ustreznost obveznih atributov.
6. Vpisani podatki niso ustrezni. Aplikacija neregistriranemu uporabniku prikaže ustrezno sporočilo, da v registracijski obrazec ni vnesel ustreznih vrednosti za obvezne atribute.

#### Pogoji
Pri funkcionalnosti Registracija uporabnik ne sme biti prijavljen v aplikacijo. Če je prijavljen, mu ta funkcionalnost ni na voljo. 

#### Posledice
Ob uspešni registraciji neregistrirani uporabnik dobi uporabniško vlogo občan in se lahko v aplikacijo prijavi s svojimi podatki, ki jih je določil pri registraciji.

#### Posebnosti
Neregistrirani uporabnik mora v obrazec za registracijo vpisati: e-poštni naslov, ki mora ustrezati regularnemu izrazu za e-naslov ter še ni uporabljen v aplikaciji; geslo, ki je daljše od 8 znakov in vsebuje vsaj eno veliko črko; potrditveno geslo, ki se ujema z geslom. Neregistrirani uporabnik pa mora biti starejši od 18 let. 
Podatki vpisani v postopku registracije se pošiljajo po varni povezavi in so hranjeni z ustreznimi varnostnimi postopki.

#### Prioritete identificiranih funkcionalnosti
MUST have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T1.1 | prikaz registracijskega obrazca | O1.1 | domača stran aplikacije | klik na gumb “Registracija” v navigacijskem meniju | aplikacija prikaže registracijski obrazec |
| T1.2 | dodajanje novega uporabnika v aplikacijo | O1.1 | neregistrirani uporabnik se ne nahaja v aplikaciji | izpolnjen registracijski obrazec, obvezni atributi v registracijskem obrazcu ustrezajo zahtevam, klik na gumb "Registracija" | neregistrirani uporabnik je dodan v aplikacijo |
| T1.3 | prikaz obrazca za prijavo | A1.1 | domača stran aplikacije | klik na gumb “Prijava” v navigacijskem meniju | aplikacija neregistriranemu uporabniku prikaže obrazec za prijavo 
| T1.4 | prikaz registracijskega obrazca | A1.1 | prazen obrazec za prijavo | klik na gumb "Registracija" | aplikacija neregistriranemu uporabniku prikaže registracijski obrazec |
| T1.5 | prazen registracijski obrazec | A1.2 | prazna nekatera obvezna vnosna polja |  klik na gumb "Registracija" | aplikacija obvesti neregistriraga uporabniku, da je pustil obvezna polja prazna s sporočilom "Polje je obvezno" pod vsakim praznim obveznim poljem  |
| T1.6 | vnešen e-poštni naslov že obstaja v aplikaciji | A1.2 | prazno polje za e-poštni naslov | vnos že uporabljenega e-poštnega naslova, klik na gumb “Registracija” | aplikacija obvesti neregistriranega uporabnika, da vnešen e-poštni naslov že obstaja v sistemu s sporočilom "Vpisali ste e-mail, ki je že uporabljen v sistemu" |
| T1.7 | vnešen e-poštni naslov ni v veljavni obliki | A1.2 | prazno polje za e-poštni naslov | vnos e-poštnega naslova, ki ni v pravi obliki, klik na gumb "Registracija" | aplikacija obvesti neregistriranega uporabnika, da vnešen e-poštni naslov ni v pravi obliki s sporočilom "Vnešen e-poštni naslov ni v veljavni obliki" |
| T1.8 | preverjanje, ali je uporabnik starejši od 18 let | A1.2 |  prazno polje za rojstni datum | vnos rojstnega datuma (mlajši od 18 let), klik na gumb "Registracija" | aplikacija obvesti neregistriranega uporabnika, da ne ustreza starostni omejitvi s sporočilom "Vpisana starost ne ustreza zahtevam (18+)"  |
| T1.9 | vnešeno geslo ni v ustrezni obliki | A1.2 | prazno polje za geslo | vnos gesla, ki je dolgo manj kot 8 znakov in ne vsebuje vsaj ene velike črke, klik na gumb "Registracija" | aplikacija obvesti neregistriranega uporabnika, da vnešeno geslo ni v ustrezni obliki s sporočilom "Geslo ne ustreza pogojem (vsaj 8 znakov, vsaj 1 veliko črko)" |
| T1.10 | vnešeno potrditveno geslo se ne ujema z geslom | A1.2 | prazno polje za potrditveno geslo | vnos potrditvenega gesla, ki se ne ujema z geslom, klik na gumb "Registracija" | aplikacija obvesti neregistriranega uporabnika, da se geslo in potrditveno geslo ne ujemata s sporočilom "Vnešeno geslo ni enako potrditvenemu geslu" |


### Prijava uporabnika (PU2) 
V primeru uporabe Prijava uporabnika (PU2) so pod pojmom **uporabnik** mišljene naslednje uporabniške vloge: **občan**, **administrator**, **upravljalec predlogov (organizacija)**, **upravljalec novic** in **upravljalec dogodkov**.   

#### Povzetek funkcionalnosti
**Uporabnik** se lahko prijavi v aplikacijo s svojimi podatki, določenimi ob registraciji (občan) oz. kreiranju uporabniškega računa (administrator, upravljalec predlogov (organizacija), upravljalec novic in upravljalec dogodkov), in s tem pridobi dostop do vseh funkcionalnosti njegovih uporabniških vlog. Pri prijavi izpolni obrazec s svojim e-poštnim naslovom in geslom. 

#### Osnovni tok (O2.1)
1. Uporabnik klikne na gumb “Prijava” v navigacijskem meniju.
2. Aplikacija prikaže obrazec za prijavo.
3. Uporabnik v obrazec vnese e-poštni naslov in geslo, ki ju je določil pri registraciji oz. sta mu bila določena ob kreiranju uporabniškega računa.
4. Uporabnik pritisne na gumb "Prijava" s čimer odda obrazec za prijavo.
5. Aplikacija preveri ustreznost e-poštnega naslova in gesla z uporabo ustreznega algoritma.
6. Vnešeni podatki so ustrezni, aplikacija uporabnika prijavi v aplikacijo ter ga preusmeri na domačo stran.  

#### Alternativni tok 1 (A2.1)
1. Uporabnik klikne na gumb “Registracija” v navigacijskem meniju. 
2. Aplikacija uporabniku prikaže registracijski obrazec.
3. Uporabnik klikne na gumb "Prijava" v spodnjem delu registracijskega obrazca.
2. Aplikacija prikaže obrazec za prijavo.
3. Uporabnik v obrazec vnese e-poštni naslov in geslo, ki ju je določil pri registraciji oz. sta mu bila določena ob kreiranju uporabniškega računa.
4. Uporabnik pritisne na gumb "Prijava" s čimer odda obrazec za prijavo.
5. Aplikacija preveri ustreznost e-poštnega naslova in gesla z uporabo ustreznega algoritma.
6. Vnešeni podatki so ustrezni, aplikacija uporabnika prijavi v aplikacijo ter ga preusmeri na domačo stran. 

#### Alternativni (izjemni) tok 2 (A2.2)
1. Uporabnik klikne na gumb “Prijava” v navigacijskem meniju.
2. Aplikacija prikaže obrazec za prijavo.
3. Uporabnik v obrazec vnese drugačen e-poštni naslov in/ali geslo kot sta bila določena pri registraciji oz. sta mu bila določena ob kreiranju uporabniškega računa.
4. Uporabnik pritisne na gumb "Prijava" s čimer odda obrazec za prijavo.
5. Aplikacija preveri ustreznost e-poštnega naslova in gesla z uporabo ustreznega algoritma. 
6. Vnešeni podatki niso ustrezni, aplikacija zavrne prijavo uporabnika in prikaže ustrezno sporočilo. 

#### Pogoji
Za uporabo funkcionalnosti Prijava uporabnika mora uporabnik že uspešno zaključiti registracijo (občan) oz. mu mora biti dodeljen uporabniški račun (administrator, upravljalec predlogov (organizacija), upravljalec dogodkov, upravljalec novic). Če je uporabnik prijavljen, mu ta funkcionalnost ni na voljo. 

#### Posledice
Po uspešni prijavi uporabnik pridobi dostop do več funkcionalnosti aplikacije glede na njegovo uporabniško vlogo.

#### Posebnosti
Podatki o prijavi se pošiljajo po varni povezavi in so hranjeni z ustreznimi varnostnimi praksami.

#### Prioritete identificiranih funkcionalnosti
MUST have

#### Sprejemni testi

| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T2.1 | prikaz obrazca za prijavo | O2.1 | domača stran aplikacije | klik na gumb “Prijava” v navigacijskem meniju | aplikacija prikaže obrazec za prijavo | 
| T2.2 | prijava uporabnika v aplikacijo | O2.1 | uporabnik ni prijavljen v spletno aplikacijo | vnos e-poštnega naslova in gesla, klik na gumb "Prijava" | uporabnik je prijavljen v aplikacijo, aplikacija ga preusmeri na domačo stran |
| T2.3 | prikaz obrazca za prijavo | A2.1 | prazen registracijski obrazec | klik na gumb "Prijava" | aplikacija uporabniku prikaže obrazec za prijavo 
| T2.4 | prijava uporabnika v aplikacijo | A2.1 | uporabnik ni prijavljen v spletno aplikacijo | vnos e-poštnega naslova in gesla, klik na gumb "Prijava" | uporabnik je prijavljen v aplikacijo, aplikacija ga preusmeri na domačo stran |
T2.5 | prijava uporabnika z napačnim e-poštnim naslovom | A2.2 | prazno vnosno polje za e-poštni naslov | vnos napačnega e-poštnega naslova, klik na gumb "Prijava" | aplikacija obvesti uporabnika, da uporabnik s tem uporabniškim profilom ne obstaja s sporočilom "Napačen e-naslov ali geslo" |
T2.6 | prijava uporabnika z napačnim geslom | A2.2 | prazno vnosno polje za geslo | vnos napačnega gesla, klik na gumb "Prijava" | aplikacija obvesti uporabnika, da uporabnik s tem uporabniškim profilom ne obstaja s sporočilom "Napačen e-naslov ali geslo" |

### Odjava uporabnika (PU3)

V primeru uporabe Odjava uporabnika (PU3) so pod pojmom **uporabnik** mišljene naslednje uporabniške vloge: **občan**, **administrator**, **upravljalec predlogov (organizacija)**, **upravljalec novic** in **upravljalec dogodkov**.   

#### Povzetek funkcionalnosti
**Uporabnik** se lahko odjavi iz aplikacije. Z odjavo pridobi uporabniško vlogo neregistrirani uporabnik. 

#### Osnovni tok (O3.1)
1. Uporabnik klikne na gumb “Odjava” v navigacijskem meniju. 
2. Aplikacija uporabnika odjavi iz aplikacije ter ga preumeri na domačo stran.  

#### Alternativni tok 
Alternativnih tokov pri funkcionalnosti Odjava uporabnika aplikacija ne podpira. 

#### Pogoji
Za uporabo funkcionalnosti Odjava uporabnika mora biti uporabnik registriran in prijavljen v aplikaciji. 

#### Posledice
Uporabnik po odjavi dobi uporabniško vlogo neregistrirani uporabnik. Dostopa lahko le do funkcionalnosti neregistriranega uporabnika. 

#### Posebnosti
Posebnosti ni. 

#### Prioritete identificiranih funkcionalnosti
MUST have

#### Sprejemni testi

| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T3.1 | odjava uporabnika iz aplikacije | O3.1 | uporabnik je prijavljen v aplikacijo, nahaja se na domači strani | klik na gumb “Odjava” | aplikacija uporabnika odjavi iz aplikacije | 
| T3.2 | preusmeritev odjavljenega uporabnika na domačo stran | O3.1 | uporabnik je prijavljen v aplikacijo, nahaja se na strani "O občini" | klik na gumb “Odjava” | aplikacija uporabnika odjavi iz aplikacije ter ga preusmeri na domačo stran | 
| T3.3 | sprememba izgleda domače strani po odjavi uporabnika| O3.1 | uporabnik je prijavljen v aplikacijo, nahaja se na domači strani | klik na gumb “Odjava” | odjavljen uporabnik dobi funkcionalnosti neregistriranega uporabnika (sprememba izgleda domače strani) | 


### Urejanje uporabniškega profila (PU4) 

V primeru uporabe Urejanje uporabniškega profila (PU4) so pod pojmom **uporabnik** mišljene naslednje uporabniške vloge: **občan**, **administrator**, **upravljalec predlogov (organizacija)**, **upravljalec novic** in **upravljalec dogodkov**.   

#### Povzetek funkcionalnosti
Občan, administrator, upravljalec predlogov, upravljalec novic in upravljalec dogodkov lahko urejajo svoj uporabniški profil. Administrator pa ima še dostop do urejanja vseh uporabniških profilov. 

#### Osnovni tok (O4.1)
1. Uporabnik klikne na gumb “Moj profil” v navigacijskem meniju.
2. Aplikacija ga preusmeri na njegov uporabniški profil.
3. Uporabnik klikne na gumb “Uredi profil”.
4. Aplikacija odpre obrazec za urejanje vnosnih polj uporabniškega profila, kjer so že izpolnjena polja s trenutnimi vrednostmi. 
5. Uporabnik spremeni željene podatke. 
6. Uporabnik klikne na gumb “Shrani”, ki shrani morebitne spremembe.  
7. Aplikacija preveri, če imajo vsa vnosna polja obrazca dovoljeno vrednost.  
8. Aplikacija shrani morebitne spremembe podatkov.

#### Alternativni tok 1 (A4.1)
1. Administrator klikne na gumb “Uporabniki”.
2. Aplikacija ga preusmeri na seznam vseh uporabnikov. 
3. Administrator izbere uporabnika iz seznama uporabnikov aplikacije s pritiskom na gumb "Odpri profil". 
4. Aplikacija odpre novo stran s podatki izbranega uporabnika. 
5. Administrator klikne na gumb “Uredi profil”.
6. Aplikacija odpre obrazec za urejanje vnosnih polj uporabniškega profila, kjer so že izpolnjena polja s trenutnimi vrednostmi. 
7. Administrator spremeni željene podatke uporabnika. 
8. Administrator klikne na gumb “Shrani”, ki shrani morebitne spremembe.  
9. Aplikacija preveri, če imajo vsa vnosna polja obrazca dovoljeno vrednost.  
10. Aplikacija shrani morebitne spremembe podatkov.

#### Alternativni tok 2 (A4.2)
1. Administrator klikne na gumb “Predlogi” v navigacijskem meniju.
2. Aplikacija ga preusmeri na seznam predlogov.
3. Administrator klikne na izbran predlog. 
4. Aplikacija prikaže obrazec s podatki o predlogu. 
5. Administrator klikne na gumb "Odpri profil".
6. Aplikacija ga preusmeri na uporabniški profil lastnika predloga. 
7. Administrator klikne na gumb “Uredi profil”.
8. Aplikacija odpre obrazec za urejanje vnosnih polj uporabniškega profila, kjer so že izpolnjena polja s trenutnimi vrednostmi. 
9. Administrator spremeni željene podatke. 
10. Administrator klikne na gumb “Shrani”, ki shrani morebitne spremembe.  
11. Aplikacija preveri, če imajo vsa vnosna polja obrazca dovoljeno vrednost.  
12. Aplikacija shrani morebitne spremembe podatkov.

#### Alternativni tok 3 (A4.3)
**Predlog projekta x**: posamezni predlog projekta </br >
**Akter**: občan, ki je lastnik predloga projekta x </br >

1. Akter klikne na gumb “Predlogi” v navigacijskem meniju.
2. Aplikacija ga preusmeri na seznam predlogov.
3. Akter klikne na predlog projekta x. 
4. Aplikacija prikaže obrazec s podatki o predlogu projekta x. 
5. Akter klikne na gumb "Odpri profil".
6. Aplikacija ga preusmeri na akterjev uporabniški profil.
7. Akter klikne na gumb “Uredi profil”.
8. Aplikacija odpre obrazec za urejanje vnosnih polj uporabniškega profila, kjer so že izpolnjena polja s trenutnimi vrednostmi. 
9. Akter spremeni željene podatke. 
10. Akter klikne na gumb “Shrani”, ki shrani morebitne spremembe.  
11. Aplikacija preveri, če imajo vsa vnosna polja obrazca dovoljeno vrednost.  
12. Aplikacija shrani morebitne spremembe podatkov.

#### Alternativni tok 4 (A4.4)
**Organizacija x**: posamezni profil upravljalca predlogov oz. organizacije </br >
**Upravljalec organizacije x**: upravljalec predlogov (organizacija), ki mu pripada organizacija x </br >

1. Upravljalec organizacije x klikne na gumb “O občini” v navigacijskem meniju.
2. Aplikacija ga preusmeri na podatke o občini. 
3. Upravljalec organizacije x v spustnem seznamu izbere razred v katero spada organizacija x. 
4. Aplikacija prikaže seznam organizacij, ki pripadajo izbranemu razredu. 
5. Upravljalec organizacije x klikne na organizacijo x. 
6. Aplikacija ga preusmeri na uporabniški profil upravljalca organizacije x. 
7. Upravljalec organizacije x klikne na gumb “Uredi profil”.
8. Upravljalec organizacije x odpre obrazec za urejanje vnosnih polj uporabniškega profila, kjer so že izpolnjena polja s trenutnimi vrednostmi. 
9. Upravljalec organizacije x spremeni željene podatke. 
10. Upravljalec organizacije x klikne na gumb “Shrani”, ki shrani morebitne spremembe.  
11. Aplikacija preveri, če imajo vsa vnosna polja obrazca dovoljeno vrednost.  
12. Aplikacija shrani morebitne spremembe podatkov.

#### Alternativni tok 5 (A4.5)
1. Administrator klikne na gumb “O občini” v navigacijskem meniju.
2. Aplikacija ga preusmeri na podatke o občini. 
3. Administrator v spustnem seznamu izbere razred organizacij. 
4. Aplikacija prikaže seznam organizacij, ki pripadajo izbranemu razredu. 
5. Administrator klikne na posamezno organizacijo. 
6. Aplikacija ga preusmeri na uporabniški profil upravljalca izbrane organizacije. 
7. Administrator klikne na gumb “Uredi profil”.
8. Aplikacija odpre obrazec za urejanje vnosnih polj uporabniškega profila, kjer so že izpolnjena polja s trenutnimi vrednostmi. 
9. Administrator spremeni željene podatke. 
10. Administrator klikne na gumb “Shrani”, ki shrani morebitne spremembe.  
11. Aplikacija preveri, če imajo vsa vnosna polja obrazca dovoljeno vrednost.  
12. Aplikacija shrani morebitne spremembe podatkov.

#### Alternativni (izjemni) tok 6 (A4.6)
1. Uporabnik klikne na gumb “Moj profil”.
2. Aplikacija ga preusmeri na njegov uporabniški profil.
3. Uporabnik klikne na gumb “Uredi profil”.
4. Uporabnik odpre obrazec za urejanje vnosnih polj uporabniškega profila, kjer so že izpolnjena polja s trenutnimi vrednostmi. 
5. Uporabnik spremeni željene podatke. 
6. Uporabnik klikne na gumb “Shrani”, ki shrani morebitne spremembe.  
7. Aplikacija preveri, če imajo vsa vnosna polja obrazca dovoljeno vrednost.  
8. Aplikacija ne shrani morebitnih sprememb podatkov, ker vsa vnosna polja obrazca nimajo dovoljene vrednosti. 

#### Pogoji
Za uporabo funkcionalnosti Urejanje uporabniškega profila mora biti uporabnik registriran in prijavljen v aplikaciji. 

#### Posledice
Uporabniki z uporabniško vlogo občan, upravljalec predlogov, upravljalec novic in upravljalec dogodkov ter administrator lahko urejajo svoj uporabniški profil. Administrator pa lahko polega urejanje svojega uporabniškega profila, ureja tudi vse ostale uporabniške profile v sistemu. 

#### Posebnosti
Podatki vpisani v postopku urejanja uporabniškega profila se pošiljajo po varni povezavi in so hranjeni z ustreznimi varnostnimi postopki.

#### Prioritete identificiranih funkcionalnosti
MUST have

#### Sprejemni testi

| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T4.1 | prikaz uporabniškega profila | O4.1 | domača stran aplikacije | klik na gumb “Moj profil” | aplikacija prikaže uporabniški profil |
| T4.2 | prikaz obrazca za urejanje uporabniškega profila | O4.1 | stran z uporabniškim profilom | klik na gumb “Uredi profil” | aplikacija prikaže obrazec za urejanje uporabniškega profila |
| T4.3 | urejanje uporabniškega profila | O4.1 | obrazec za urejanje uporabniškega profila z izpolnjenimi polji s trenutnimi vrednostmi | sprememba vrednosti polj, vsa polja imajo ustrezne vrednosti, klik na gumb “Shrani” | aplikacija prikaže uporabniški profil s spremenjenimi vrednostmi |
| T4.4 | prikaz seznama uporabnikov | A4.1 | domača stran aplikacije | klik na gumb “Uporabniki” | aplikacija prikaže seznam uporabnikov |
| T4.5 | prikaz uporabniškega profila | A4.1 | seznam uporabnikov | klik na gumb “Odpri profil” | aplikacija prikaže uporabniški profil |
| T4.6 | prikaz obrazca za urejanje uporabniškega profila | A4.1 | stran z uporabniškim profilom | klik na gumb “Uredi profil” | aplikacija prikaže obrazec za urejanje uporabniškega profila |
| T4.7 | prikaz seznama predlogov projektov | A4.2 | domača stran aplikacije | klik na gumb “Predlogi” | aplikacija prikaže seznam predlogov |
| T4.8 | prikaz lastnega predloga projekta | A4.2 | seznam predlogov projektov | klik na lasten predlog projekta | aplikacija prikaže lasten predlog projekta |
| T4.9 | prikaz uporabniškega profila | A4.2 | izbran lasten predlog projekta | klik na gumb “Odpri profil” | aplikacija prikaže uporabniški profil |
| T4.10 | prikaz obrazca za urejanje uporabniškega profila | A4.2 | stran z uporabniškim profilom | klik na gumb “Uredi profil” | aplikacija prikaže obrazec za urejanje uporabniškega profila |
| T4.11 | urejanje uporabniškega profila | A4.2 | obrazec za urejanje uporabniškega profila z izpolnjenimi polji s trenutnimi vrednostmi | sprememba vrednosti polj, vsa polja imajo ustrezne vrednosti, klik na gumb “Shrani” | aplikacija prikaže uporabniški profil s spremenjenimi vrednostmi |
| T4.12 | prikaz seznama predlogov projektov | A4.3 | domača stran aplikacije | klik na gumb “Predlogi” | aplikacija prikaže seznam predlogov |
| T4.13 | prikaz posameznega predloga projekta | A4.3 | seznam predlogov projektov | klik na predlog projekta | aplikacija prikaže izbran predlog projekta |
| T4.14 | prikaz uporabniškega profila | A4.3 | izbran predlog projekta | klik na gumb “Odpri profil” | aplikacija prikaže uporabniški profil |
| T4.15 | prikaz obrazca za urejanje uporabniškega profila | A4.3 | stran z uporabniškim profilom | klik na gumb “Uredi profil” | aplikacija prikaže obrazec za urejanje uporabniškega profila |
| T4.16 | urejanje uporabniškega profila | A4.3 | obrazec za urejanje uporabniškega profila z izpolnjenimi polji s trenutnimi vrednostmi | sprememba vrednosti polj, vsa polja imajo ustrezne vrednosti, klik na gumb “Shrani” | aplikacija prikaže uporabniški profil s spremenjenimi vrednostmi |
| T4.17 | prikaz podatkov o občini | A4.4 | domača stran aplikacije | klik na gumb “O občini” | aplikacija prikaže podatke o občini |
| T4.18 | prikaz seznama organizacij posameznega razreda | A4.4 | seznam organizacij | klik na spustni seznam in izbira razreda organizacij | aplikacija prikaže seznam organizacij izbranega razreda |
| T4.19 | prikaz lastnega uporabniškega profila organizacije | A4.4 | seznam izbranega razreda organizacij  | klik na lastno organizacijo | aplikacija prikaže lastni uporabniški profil upravljalca predlogov izbrane organizacije |
| T4.20 | prikaz obrazca za urejanje uporabniškega profila | A4.4 | stran z uporabniškim profilom | klik na gumb “Uredi profil” | aplikacija prikaže obrazec za urejanje uporabniškega profila |
| T4.21 | urejanje uporabniškega profila | A4.4 | obrazec za urejanje uporabniškega profila z izpolnjenimi polji s trenutnimi vrednostmi | sprememba vrednosti polj, vsa polja imajo ustrezne vrednosti, klik na gumb “Shrani” | aplikacija prikaže uporabniški profil s spremenjenimi vrednostmi |
| T4.22 | prikaz podatkov o občini | A4.5 | domača stran aplikacije | klik na gumb “O občini” | aplikacija prikaže podatke o občini |
| T4.23 | prikaz seznama organizacij posameznega razreda | A4.5 | seznam organizacij | klik na spustni seznam in izbira razreda organizacij | aplikacija prikaže seznam organizacij izbranega razreda |
| T4.24 | prikaz uporabniškega profila organizacije | A4.5 | seznam izbranega razreda organizacij  | klik na izbrano organizacijo | aplikacija prikaže uporabniški profil upravljalca predlogov izbrane organizacije |
| T4.25 | prikaz obrazca za urejanje uporabniškega profila | A4.5 | stran z uporabniškim profilom | klik na gumb “Uredi profil” | aplikacija prikaže obrazec za urejanje uporabniškega profila |
| T4.26 | urejanje uporabniškega profila | A4.5 | obrazec za urejanje uporabniškega profila z izpolnjenimi polji s trenutnimi vrednostmi | sprememba vrednosti polj, vsa polja imajo ustrezne vrednosti, klik na gumb “Shrani” | aplikacija prikaže uporabniški profil s spremenjenimi vrednostmi |
| T4.27 | vnos napačnega gesla | A4.6 | prazno polje za geslo| vnos napačnega gesla, klik na gumb “Shrani” | aplikacija prikaže sporočilo "Napačno geslo", podatki se ne shranijo |
| T4.28 | vnos ne veljavne oblike gesla | A4.6 | prazno polje za geslo| vnos gesla, ki ni v pravi obliki, klik na gumb “Shrani” | aplikacija prikaže sporočilo "Geslo ne ustreza pogojem (vsaj 8 znakov, vsaj 1 veliko črko)", podatki se ne shranijo |

### Brisanje uporabniškega profila (PU5)

#### Povzetek funkcionalnosti
**Administrator** lahko izbriše uporabniški profil uporabnika aplikacije. 

#### Osnovni tok (O5.1)
1. Administrator klikne na gumb “Uporabniki” v navigacijskem meniju. 
2. Aplikacija ga preusmeri na seznam vseh uporabnikov.
3. Administrator izbere uporabnika iz seznama uporabnikov aplikacije. 
4. Administrator klikne na gumb “Izbriši”.
5. Aplikacija izbriše uporabnika iz seznama uporabnikov.

#### Alternativni tok 1 (A5.1)
1. Administrator klikne na gumb “Uporabniki”.
2. Aplikacija ga preusmeri na seznam vseh uporabnikov. 
3. Administrator izbere uporabnika iz seznama uporabnikov aplikacije s pritiskom na gumb "Odpri profil". 
4. Aplikacija odpre nov gumb s podatki izbranega uporabnika. 
5. Administrator klikne na gumb “Izbriši”.
6. Aplikacija izbriše uporabnika in administratorja preusmeri na domačo stran. 

#### Alternativni tok 2 (A5.2)
1. Administrator klikne na gumb “Predlogi” v navigacijskem meniju.
2. Aplikacija ga preusmeri na seznam predlogov.
3. Administrator klikne na izbran predlog. 
4. Aplikacija prikaže obrazec s podatki o predlogu. 
5. Administrator klikne na gumb "Odpri profil".
6. Aplikacija ga preusmeri na uporabniški profil lastnika predloga. 
7. Administrator klikne na gumb “Izbriši”.
8. Aplikacija izbriše uporabnika in administratorja preusmeri na domačo stran. 

#### Alternativni tok 3 (A5.3)
1. Administrator klikne na gumb “O občini” v navigacijskem meniju.
2. Aplikacija ga preusmeri na podatke o občini. 
3. Administrator v spustnem seznamu izbere razred organizacij. 
4. Aplikacija prikaže seznam organizacij, ki pripadajo izbranemu razredu. 
5. Administrator klikne na posamezno organizacijo. 
6. Aplikacija ga preusmeri na uporabniški profil upravljalca izbrane organizacije. 
7. Administrator klikne na gumb “Izbriši”.
8. Aplikacija izbriše uporabnika in administratorja preusmeri na domačo stran. 

#### Pogoji
Za uporabo funkcionalnosti Brisanje uporabniškega profila mora biti administrator registriran in prijavljen v aplikaciji.  

#### Posledice
Izbrisan uporabnik nima več uporabniškega profila v aplikaciji. Do aplikacije lahko dostopa kot neregistrirani uporabnik. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
WOULD have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T5.1 | pregled uporabnikov | O5.1 | začetna stran aplikacije | klik na gumb “Uporabniki” | aplikacija odpre novo stran s seznamom vseh uporabnikov aplikacije |
| T5.2 | izbris uporabnika | O5.1 | seznam uporabnikov | klik na gumb "Izbriši" pri izbranem uporabniku | aplikacija izbriše izbranega uporabnika iz seznama uporabnikov |
| T5.3 | prikaz seznama uporabnikov | A5.1 | domača stran aplikacije | klik na gumb “Uporabniki” | aplikacija prikaže seznam uporabnikov |
| T5.4 | prikaz uporabniškega profila | A5.1 | seznam uporabnikov | klik na gumb “Odpri profil” | aplikacija prikaže uporabniški profil |
| T5.5 | izbris uporabnika | A5.1 | seznam uporabnikov | klik na gumb "Izbriši" pri izbranem uporabniku | aplikacija izbriše izbranega uporabnika iz seznama uporabnikov |
| T5.6 | prikaz seznama predlogov projektov | A5.2 | domača stran aplikacije | klik na gumb “Predlogi” | aplikacija prikaže seznam predlogov |
| T5.7 | prikaz predloga projekta | A5.2 | seznam predlogov projektov | klik na predlog projekta | aplikacija prikaže predloga projekta |
| T5.8 | prikaz uporabniškega profila | A5.2 | izbran predlog projekta | klik na gumb “Odpri profil” | aplikacija prikaže uporabniški profil |
| T5.9 | izbris uporabnika | A5.2 | seznam uporabnikov | klik na gumb "Izbriši" pri izbranem uporabniku | aplikacija izbriše izbranega uporabnika iz seznama uporabnikov |
| T5.10 | prikaz podatkov o občini | A5.3 | domača stran aplikacije | klik na gumb “O občini” | aplikacija prikaže podatke o občini |
| T5.11 | prikaz seznama organizacij posameznega razreda | A5.3 | seznam organizacij | klik na spustni seznam in izbira razreda organizacij | aplikacija prikaže seznam organizacij izbranega razreda |
| T5.12 | prikaz uporabniškega profila organizacije | A5.3 | seznam izbranega razreda organizacij  | klik na izbrano organizacijo | aplikacija prikaže uporabniški profil upravljalca predlogov izbrane organizacije |
| T5.13 | izbris uporabnika | A5.3 | seznam uporabnikov | klik na gumb "Izbriši" pri izbranem uporabniku | aplikacija izbriše izbranega uporabnika iz seznama uporabnikov |


### Dodajanje novice (PU6)

#### Povzetek funkcionalnosti
**Upravljalec novic** lahko doda novico. 

#### Osnovni tok (O6.1)
1. Upravljalec novic pritisne gumb "Novice".
2. Aplikacija prikaže seznam novic. 
3. Upravljalec novic pritisne gumb "Dodaj novice". 
4. Aplikacija prikaže obrazec za dodajanje novice.
5. Upravljalec novic izpolni obrazec za dodajanje novice s podatki o novici.
6. Upravljalec novic klikne na gumb "Shrani".
7. Aplikacija preveri veljavnost vnosnih polj. 
8. Vsa vnosna polja imajo veljavno vrednost, zato aplikacija prikaže novico v seznamu novic. 

#### Alternativni (izjemni) tok 1 (A6.1)
1. Upravljalec novic pritisne gumb "Novice".
2. Aplikacija prikaže seznam novic. 
3. Upravljalec novic pritisne gumb "Dodaj novice". 
4. Aplikacija prikaže obrazec za dodajanje novice.
5. Upravljalec novic izpolni obrazec za dodajanje novice s podatki o novici.
6. Upravljalec novic klikne na gumb "Shrani".
7. Aplikacija preveri veljavnost vnosnih polj. 
8. Vsa vnosna polja nimajo veljavne vrednosti, zato aplikacija prikaže obvestilo, da dodajanje novic ni bilo uspešno.

#### Pogoji
Za uporabo funkcionalnosti Dodajanje novice mora biti upravljalec novic registriran in prijavljen v aplikaciji. 

#### Posledice
V aplikaciji se prikaže nova novica.

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
MUST have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T6.1 | prikaz seznama novic | O6.1 | domača stran aplikacije | klik na gumb "Novice" | aplikacija prikaže seznam novic |
| T6.2 | prikaz obrazca za dodajanje novice | O6.1 | stran s seznamom vseh novic | klik na gumb "Dodaj novice" | aplikacija prikaže obrazec za dodajanje novice |
| T6.3 | dodajanje novice | O6.1 | obrazec za dodajanje novice | izpolnjen obrazec s podatki o novici, vsa vnosna polja imajo veljavno vrednost, klik na gumb "Shrani " | aplikacija prikaže novico v seznamu novic |
| T6.4 | prazen obrazec za dodajanje novic | A6.1 | prazna nekatera obvezna vnosna polja |  klik na gumb "Shrani" | aplikacija obvesti upravljalca novic, da je pustil obvezna polja prazna s sporočilom "Polje je obvezno" pod vsakim praznim obveznim poljem  |
| T6.5 | preverjanje, ali dodana slika ustreza veljavnim formatom | A6.1 | izpolnjen obrazec s podatki o novici in dodan napačni format slike |  klik na gumb "Shrani" | aplikacija obvesti upravljalca novic, da je bilo dodajanje novice neuspešno s sporočilom "Datoteka mora biti v formatu .png ali .jpg"  |

### Urejanje novice (PU7)

#### Povzetek funkcionalnosti
**Upravljalec novic** lahko uredi novico. 

#### Osnovni tok (O7.1)
1. Upravljalec novic izbere gumb “Novice” v navigacijskem meniju. 
2. Aplikacija prikaže seznam vseh novic. 
3. Upravljalec novic izbere novico.
4. Aplikacija prikaže izbrano novico. 
5. Upravljalec novic klikne na gumb "Uredi".
6. Aplikacija prikaže obrazec za urejanje novice, kjer so že izpolnjena vnosna polja s trenutnimi vrednostmi. 
7. Upravljalec spremeni podatke in izbere možnost shranjevanja sprememb s pritiskom na gumb "Shrani".
8. Aplikacija novici posodobi podatke in posodobljeno novico prikaže v seznamu novic. 

#### Alternativni (izjemni) tok (A7.1)
1. Upravljalec novic izbere gumb “Novice” v navigacijskem meniju. 
2. Aplikacija prikaže seznam vseh novic. 
3. Upravljalec novic izbere novico.
4. Aplikacija prikaže izbrano novico. 
5. Upravljalec novic klikne na gumb "Uredi".
6. Aplikacija prikaže obrazec za urejanje novice, kjer so že izpolnjena vnosna polja s trenutnimi vrednostmi. 
7. Upravljalec spremeni podatke in izbere možnost shranjevanja sprememb s pritiskom na gumb "Shrani".
8. Aplikacija prikaže obvestilo, da urejanje novice ni bilo uspešno, ker so bila nekatera vnosna polja brez vrednosti. 

#### Pogoji
Za uporabo funkcionalnosti Urejanje novice mora biti upravljalec novic registriran in prijavljen v aplikaciji. 

#### Posledice
V seznamu novic se prikaže posodobljena novica. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
SHOULD have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T6.1 | prikaz seznama novic | O7.1 | domača stran aplikacije | klik na gumb "Novice" | aplikacija prikaže seznam novic |
| T6.2 | prikaz posamezne novice | O7.1 | seznam vseh novic | klik na posamezno novico | aplikacija prikaže izbrano novico |
| T6.3 | prikaz obrazca za urejanje izbrane novice | O7.1 | izbrana novica | klik na gumb "Uredi" | aplikacija prikaže obrazec za urejanje novice |
| T6.4 | urejanje izbrane novice | O7.1 | obrazec za urejanje novice | izpolnjen obrazec s podatki o novici, vsa vnosna polja imajo veljavno vrednost, klik na gumb "Shrani " | aplikacija prikaže posodobljeno novico v seznamu novic |
| T6.5 | prazen obrazec za urejanje novic | A7.1 | prazna nekatera obvezna vnosna polja |  klik na gumb "Shrani" | aplikacija obvesti upravljalca novic, da je pustil obvezna polja prazna s sporočilom "Polje je obvezno" pod vsakim praznim obveznim poljem  |
| T6.6 | preverjanje, ali dodana slika ustreza veljavnim formatom | A7.1 | izpolnjen obrazec s podatki o novici in dodan napačni format slike |  klik na gumb "Shrani" | aplikacija obvesti upravljalca novic, da je bilo urejanje novice neuspešno s sporočilom "Datoteka mora biti v formatu .png ali .jpg"  |


### Ogled novice (PU8)

V primeru uporabe Ogled novice (PU8) so pod pojmom **uporabnik** mišljene naslednje uporabniške vloge: **neregistrirani uporabnik**, **občan**, **administrator**, **upravljalec predlogov (organizacija)**, **upravljalec novic** in **upravljalec dogodkov**.   

#### Povzetek funkcionalnosti
**Uporabnik** si lahko ogleda novice, ki jih je objavil upravljalec novic. 

#### Osnovni tok (O8.1)
1. Uporabnik klikne na gumb “Novice” v navigacijskem meniju. 
2. Aplikacija prikaže seznam vseh novic. 
3. Uporabnik izbere novico. 
4. Aplikacija prikaže podrobnosti o izbrani novici. 

#### Alternativni tok
Alternativnih tokov pri funkcionalnosti Ogled novice aplikacija ne podpira. 

#### Pogoji
Ni pogojev. 

#### Posledice
Uporabnik lahko vidi podatke o izbrani novici. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
MUST have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T8.1 | prikaz seznama novic | O8.1 | domača stran aplikacije | klik na gumb “Novice” | aplikacija prikaže seznam vseh novic  |
| T8.2 | prikaz podrobnosti o izbrani novici | O8.1 | seznam vseh novic | uporabnik izbere novico s klikom na njo | aplikacija prikaže podrobnosti o izbrani novici |

### Brisanje novice (PU9)

#### Povzetek funkcionalnosti
**Upravljalec novic** lahko izbriše novico. 

#### Osnovni tok (O9.1)
1. Upravljalec novic klikne na gumb “Novice” v navigacijskem meniju. 
2. Aplikacija prikaže seznam vseh novic. 
3. Upravljalec novic izbere novico, ki jo želi izbrisati. 
4. Aplikacija prikaže podrobnosti o izbrani novici. 
5. Upravljalec novic klikne na gumb "Izbriši"
6. Aplikacija izbrano novico izbriše iz seznama novic. 

#### Alternativni tok
Alternativnih tokov pri funkcionalnosti Brisanje novice aplikacija ne podpira. 

#### Pogoji
Za uporabo funkcionalnosti Brisanje novice mora biti upravljalec novic registriran in prijavljen v aplikaciji. 

#### Posledice
Izbrisane novice ni več v seznamu novic. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
COULD have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T9.1 | prikaz seznama novic | O9.1 | domača stran aplikacije | klik na gumb “Novice” | aplikacija prikaže seznam vseh novic  |
| T9.2 | prikaz podrobnosti o izbrani novici | O9.1 | seznam vseh novic | uporabnik izbere novico s klikom nanjo | aplikacija prikaže podrobnosti o izbrani novici |
| T9.3 | brisanje izbrane novice | O9.1 | izbrana novica | uporabnik klikne na gumb "Izbriši" | aplikacija izbriše novico iz seznama novic |

### Dodajanje predloga projekta (PU10)

#### Povzetek funkcionalnosti
**Občan** lahko objavi predlog projekta v aplikacijo. Preden je le-ta dodan v seznam predlogov projektov, ga mora potrditi upravljalec predlogov (organizacija). 

#### Osnovni tok (O10.1)
1. Občan klikne na gumb "Predlogi" v navigacijskem meniju. 
2. Aplikacija prikaže seznam vseh predlogov projektov. 
3. Občan klikne na gumb "Dodaj predlog".
4. Aplikacija prikaže obrazec za dodajanje predloga projekta. 
6. Občan izpolni obrazec s podatki o predlogu projekta.
7. Občan pritisne na gumb "Shrani" s čimer odda obrazec za dodajanje predloga projekta. 
8. Aplikacija preveri ustreznost obveznih atributov.
9. Vsa vnosna polja imajo veljavno vrednost, zato aplikacija prikaže predlog projekta v seznamu predlogov projekta, ki je viden samo upravljalcu predlogov (organizaciji), ker je trenutno deaktiviran. 

#### Alternativni (izjemni) tok 1 (A10.1)
1. Občan klikne na gumb "Predlogi" v navigacijskem meniju. 
2. Aplikacija prikaže seznam vseh predlogov projektov. 
3. Občan klikne na gumb "Dodaj predlog".
4. Aplikacija prikaže obrazec za dodajanje predloga projekta. 
6. Občan izpolni obrazec s podatki o predlogu projekta.
7. Občan pritisne na gumb "Shrani" s čimer odda obrazec za dodajanje predloga projekta. 
8. Aplikacija preveri ustreznost obveznih atributov.
9. Vsa vnosna polja nimajo veljavne vrednosti, zato aplikacija prikaže obvestilo, da dodajanje predloga projekta ni bilo uspešno.

#### Pogoji
Za uporabo funkcionalnosti Dodajanje predloga projekta mora biti občan registriran in prijavljen v aplikaciji. 

#### Posledice
Predlog projekta postane viden v seznamu predlogov projektov, ki je viden samo upravljalcu predlogov (organizaciji).

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
MUST have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T10.1 | prikaz seznama predlogov projektov | O10.1 | domača stran aplikacije | klik na gumb "Predlogi" | aplikacija prikaže seznam predlogov projektov |
| T10.2 | prikaz obrazca za dodajanje predloga projektov | O10.1 | stran s seznamom vseh predlogov projektov | klik na gumb "Dodaj predlog" | aplikacija prikaže obrazec za dodajanje predloga projekta |
| T10.3 | dodajanje predloga projekta | O10.1 | obrazec za dodajanje predloga projekta | izpolnjen obrazec s podatki o predlogu projekta, vsa vnosna polja imajo veljavno vrednost, klik na gumb "Shrani " | aplikacija prikaže predlog projekta v seznamu predlogov projektov, ki je viden samo upravljalcu predlogov (organizaciji) |
| T10.4 | prazno polje pri obveznem polju "Naslov predloga" | A10.1 | prikazan obrazec za dodajanje predlogov projektov | vsa polja imajo veljavno vrednost razen polje "Naslov predloga", klik na gumb "Shrani" | aplikacija obvesti uporabnika, da je pustil obvezno polje "Naslov predloga" prazno s sporočilom "Polje je obvezno"  |
| T10.5 | prazno polje pri obveznem polju "Predlog" | A10.1 | prikazan obrazec za dodajanje predlogov projektov | vsa polja imajo veljavno vrednost razen polje "Predlog", klik na gumb "Shrani" | aplikacija obvesti uporabnika, da je pustil obvezno polje "Predlog" prazno s sporočilom "Polje je obvezno"  |
| T10.6 | ni izbrana vrednost pri spustnem seznamu za "Razred organizacije" | A10.1 | prikazan obrazec za dodajanje predlogov projektov | vsa polja imajo veljavno vrednost, ni izbrana vrednost pri spustnem seznamu za "Razred organizacije",  klik na gumb "Shrani" | aplikacija obvesti uporabnika, ni izbral vrednosti pri spustnem seznamu za "Razred organizacije" s sporočilom "Polje je obvezno"  |

### Ogled predloga projekta (PU11)

V primeru uporabe Ogled predloga projekta (PU11) so pod pojmom **uporabnik** mišljene naslednje uporabniške vloge: **neregistrirani uporabnik**, **občan**, **administrator**, **upravljalec novic** in **upravljalec dogodkov**.   

#### Povzetek funkcionalnosti
**Uporabnik** si lahko ogleda vse predloge projektov, ki so bili potrjeni s strani upravljalca predlogov (organizacije). **Upravljalec predlogov (organizacija)** pa si lahko ogleda tudi vse nepotrjene predloge projektov, ki pripadajo njegovi organizaciji. 

#### Osnovni tok (O11.1)
1. Uporabnik klikne na gumb “Predlogi” v navigacijskem meniju. 
2. Aplikacija prikaže seznam vseh potrjenih predlogov projektov, v primeru upravljalca predlogov (organizacije) pa tudi nepotrjene predloge projektov. 
3. Uporabnik izbere predlog projekta.
4. Aplikacija prikaže podrobnosti o izbranem predlogu projekta. 

#### Alternativni tok
Alternativnih tokov pri funkcionalnosti Ogled predloga projekta aplikacija ne podpira. 

#### Posledice
Uporabnik lahko vidi vse potrjene predloge projektov, upravljalec predlogov (organizacija) pa tudi nepotrjene predloge projektov, ki se nanašajo na njegovo organizacijo. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
MUST have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T11.1 | prikaz seznama potrjenih predlogov projekta | O11.1 | domača stran aplikacije | uporabnik klikne na gumb “Predlogi” | aplikacija prikaže seznam potrjenih predlogov projektov  |
| T11.2 | prikaz podrobnosti o izbranem predlogu projekta | O11.1 | seznam potrjenih predlogov projektov | uporabnik izbere predlog projekta s klikom nanj | aplikacija prikaže podrobnosti o izbranem predlogu projekta|
| T11.3 | prikaz seznama vseh predlogov projekta | O11.1 | domača stran aplikacije | upravljalec predlogov (organizacija) klikne na gumb “Predlogi” | aplikacija prikaže seznam vseh predlogov projektov  |
| T11.4 | prikaz podrobnosti o izbranem predlogu projekta | O11.1 | seznam vseh predlogov projektov | uporabnik izbere predlog projekta s klikom nanj | aplikacija prikaže podrobnosti o izbranem predlogu projekta|

### Urejanje predloga projekta (PU12)

#### Povzetek funkcionalnosti
**Upravljalec predlogov (organizacija)** lahko uredi predlog projekta, ki je bil dodan v aplikacijo s strani občana in pripada njegovi organizaciji. 

#### Osnovni tok (O12.1)
1. Upravljalec predlogov (organizacija) klikne na gumb “Predlogi” v navigacijskem meniju. 
2. Aplikacija prikaže seznam vseh predlogov projektov.
3. Upravljalec predlogov (organizacija) izbere predlog projekta. 
4. Aplikacija prikaže izbran predlog projekta. 
5. Upravljalec predlogov (organizacija) klikne na gumb "Uredi". 
6. Aplikacija prikaže obrazec za urejanje predloga projekta, kjer so že izpolnjena vnosna polja z vrednostmi, ki so bili vnešene pri dodajanju predloga projekta s strani občana. 
7. Upravljalec predlogov (organizacija) uredi podatke in izbere možnost shranjevanja sprememb s klikom na gumb "Uredi". 
8. Aplikacija preveri ustreznost obveznih atributov.
9. Vsa vnosna polja imajo veljavno vrednost, zato aplikacija prikaže posodobljen predlog projekta v seznamu predlogov projektov.

#### Alternativni tok 1 (A12.1)
1. Upravljalec predlogov (organizacija) klikne na gumb “Predlogi” v navigacijskem meniju. 
2. Aplikacija prikaže seznam vseh predlogov projektov.
3. Upravljalec predlogov (organizacija) izbere predlog projekta. 
4. Aplikacija prikaže izbran predlog projekta. 
5. Predlog projekta ni etično sporen in ustreza zakonom za varstvo osebnih podatkov, zato upravljalec predlogov (organizacija) klikne na gumb "Aktiviraj". 
6. Aplikacija izbran predlog projekta prikaže v seznamu predlogov projektov.

#### Alternativni tok 2 (A12.2)
1. Upravljalec predlogov (organizacija) klikne na gumb “Predlogi” v navigacijskem meniju. 
2. Aplikacija prikaže seznam vseh predlogov projektov.
3. Upravljalec predlogov (organizacija) izbere predlog projekta. 
4. Aplikacija prikaže izbran predlog projekta. 
5. Predlog projekta je etično sporen in/ali ne ustreza zakonom za varstvo osebnih podatkov, zato upravljalec predlogov (organizacija) klikne na gumb "Deaktiviraj". 
6. Aplikacija izbran predlog ne prikaže v seznamu predlogov projektov.

#### Alternativni (izjemni) tok 3 (A12.3)
1. Upravljalec predlogov (organizacija) klikne na gumb “Predlogi” v navigacijskem meniju. 
2. Aplikacija prikaže seznam vseh predlogov projektov.
3. Upravljalec predlogov (organizacija) izbere predlog projekta. 
4. Aplikacija prikaže izbran predlog projekta. 
5. Upravljalec predlogov (organizacija) klikne na gumb "Uredi". 
6. Aplikacija prikaže obrazec za urejanje predloga projekta, kjer so že izpolnjena vnosna polja z vrednostmi, ki so bili vnešene pri dodajanju predloga projekta s strani občana. 
7. Upravljalec predlogov (organizacija) uredi podatke in izbere možnost shranjevanja sprememb s klikom na gumb "Uredi". 
8. Aplikacija preveri ustreznost obveznih atributov.
9. Vsa vnosna polja nimajo veljavne vrednosti, zato aplikacija prikaže obvestilo, da urejanje predloga projekta ni bilo uspešno.

#### Pogoji
Za uporabo funkcionalnosti Urejanje predloga projekta mora biti upravljalec predlogov (organizacija) registriran in prijavljen v aplikaciji. 

#### Posledice
V aplikaciji se prikaže posodobljen seznam predlogov projektov. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
MUST have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T12.1 | prikaz seznama predlogov projektov | O12.1 | domača stran aplikacije | klik na gumb "Predlogi" | aplikacija prikaže seznam predlogov projektov |
| T12.2 | prikaz izbranega predloga projekta | O12.1 | stran s seznamom vseh predlogov projektov | klik na izbran predlog projekta | aplikacija prikaže podrobnosti o izbranem predlogu projekta |
| T12.3 | prikaz obrazca za urejanje predloga projektov | O12.1 | prikazan izbran predlog projekta  | klik na gumb "Uredi" | aplikacija prikaže obrazec za urejanje predloga projekta  |
| T12.4 | urejanje predloga projekta | O12.1 | obrazec za urejanje predloga projekta | izpolnjen obrazec s podatki o predlogu projekta, vsa vnosna polja imajo veljavno vrednost, klik na gumb "Uredi " | aplikacija prikaže posodobljen predlog projekta v seznamu predlogov projektov, ki je viden samo upravljalcu predlogov (organizaciji) |
| T12.5 | prikaz seznama predlogov projektov | A12.1 | domača stran aplikacije | klik na gumb "Predlogi" | aplikacija prikaže seznam predlogov projektov |
| T12.6 | prikaz izbranega predloga projekta | A12.1 | stran s seznamom vseh predlogov projektov | klik na izbran predlog projekta | aplikacija prikaže podrobnosti o izbranem predlogu projekta |
| T12.7 | aktiviranje izbranega predloga projekta | A12.1 | prikazan izbran predlog projekta | klik na gumb "Aktiviraj" | aplikacija izbran predlog projekta prikaže v seznamu predlogov projektov |
| T12.8 | prikaz seznama predlogov projektov | A12.2 | domača stran aplikacije | klik na gumb "Predlogi" | aplikacija prikaže seznam predlogov projektov |
| T12.9 | prikaz izbranega predloga projekta | A12.2 | stran s seznamom vseh predlogov projektov | klik na izbran predlog projekta | aplikacija prikaže podrobnosti o izbranem predlogu projekta |
| T12.10 | deaktiviranje izbranega predloga projekta | A12.2 | prikazan izbran predlog projekta | klik na gumb "Deaktiviraj" | aplikacija izbran predlog projekta ne prikaže v seznamu predlogov projektov |
| T12.11 | prikaz seznama predlogov projektov | A12.3 | domača stran aplikacije | klik na gumb "Predlogi" | aplikacija prikaže seznam predlogov projektov |
| T12.12 | prikaz izbranega predloga projekta | A12.3 | stran s seznamom vseh predlogov projektov | klik na izbran predlog projekta | aplikacija prikaže podrobnosti o izbranem predlogu projekta |
| T12.13 | prikaz obrazca za urejanje predloga projektov | A12.3 | prikazan izbran predlog projekta  | klik na gumb "Uredi" | aplikacija prikaže obrazec za urejanje predloga projekta  |
| T12.14 | prazen obrazec za urejanje predloga projekta | A12.3 | prazna nekatera obvezna vnosna polja | klik na gumb "Uredi" | aplikacija obvesti uporabnika, da je pustil obvezna polja prazna s sporočilom "Polje je obvezno" pod vsakim praznim obveznim poljem  |


### Ogled podatkov občine (PU13)

V primeru uporabe Ogled podatkov občine (PU13) so pod pojmom **uporabnik** mišljene naslednje uporabniške vloge: **neregistrirani uporabnik**, **občan**, **administrator**, **upravljalec predlogov (organizacija)**, **upravljalec novic** in **upravljalec dogodkov**.   

#### Povzetek funkcionalnosti
**Uporabnik** si lahko ogleda podatke o občini.  

#### Osnovni tok (O13.1)
1. Uporabnik klikne na gumb "O občini" v navigacijskem meniju. 
2. Aplikacija prikaže podatke o občini. 

#### Alternativni tok
Alternativnih tokov pri funkcionalnosti Ogled podatkov občine aplikacija ne podpira. 

#### Pogoji
Ni pogojev. 

#### Posledice
Uporabnik lahko vidi podatke o občini. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
SHOULD have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T13.1 | prikaz podatkov o občini | O13.1 | domača stran aplikacije | uporabnik klikne na gumb “O Občini” | aplikacija prikaže podatke o občini |
| T13.2 | spreminjanje trenutne občine | O13.1 | stran o "O občini" | administrator klikne na spustni seznam občin in izbere drugo občino | aplikacija prikaže spremenjene podatke o občini |

### Urejanje podatkov občine (PU14)

#### Povzetek funkcionalnosti
**Administrator** lahko uredi podatke o občini. 

#### Osnovni tok (O14.1)
1. Administrator klikne na gumb "O občini" v navigacijskem meniju. 
2. Aplikacija prikaže stran s podatki o občini. 
3. Administrator klikne na gumb za "Uredi podatke". 
4. Aplikacija prikaže obrazec za urejanje podatkov o občino, kjer so že izpolnjena vnosna polja s trenutnimi vrednostmi. 
5. Administrator spremeni podatke in izbere možnost shranjevanja spremembe s klikom na gumb "Shrani". 
6. Aplikacija preveri ustreznost obveznih atributov.
7. Vsa vnosna polja imajo veljavno vrednost, zato aplikacija prikaže posodobljene podatke občine. 

#### Alternativni (izjemni) tok 1 (A14.1)
1. Administrator klikne na gumb "O občini" v navigacijskem meniju. 
2. Aplikacija prikaže stran s podatki o občini. 
3. Administrator klikne na gumb za "Uredi podatke". 
4. Aplikacija prikaže obrazec za urejanje podatkov o občino, kjer so že izpolnjena vnosna polja s trenutnimi vrednostmi. 
5. Administrator spremeni podatke in izbere možnost shranjevanja spremembe s klikom na gumb "Shrani". 
6. Aplikacija preveri ustreznost obveznih atributov.
7. Vsa vnosna polja nimajo veljavne vrednosti, zato aplikacija prikaže obvestilo, da urejanje podatkov o občini ni bilo uspešno.

#### Pogoji
Za uporabo funkcionalnosti Urejanje podatkov občine mora biti administrator registriran in prijavljen v aplikaciji. 

#### Posledice
V aplikaciji se prikažejo posodobljeni podatki občine. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
SHOULD have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T14.1 | prikaz podatkov o občini | O14.1 | domača stran aplikacije | klik na gumb "O občini" | aplikacija prikaže podatke o občini |
| T14.2 | prikaz obrazca za urejanje podatkov o občini | O14.1 | stran o "O občini" | klik na gumb "Uredi podatke" | aplikacija prikaže obrazec za urejanje podatkov o občini  |
| T14.3 | urejanje podatkov o občini  | O14.1 | obrazec za urejanje podatkov o občini | izpolnjen obrazec s podatki o občini, vsa vnosna polja imajo eljavno vrednost, klik na gumb "Shrani" | aplikacija prikaže posodobljene podatke o občini |
| T14.4 | prikaz podatkov o občini | A14.1 | domača stran aplikacije | klik na gumb "O občini" | aplikacija prikaže podatke o občini |
| T14.5 | prikaz obrazca za urejanje podatkov o občini | A14.1 | stran o "O občini" | klik na gumb "Uredi podatke" | aplikacija prikaže obrazec za urejanje podatkov o občini  |
| T14.6 | prazno polje za urejanje podatkov o občini | A14.1 | prazna nobvezno polje |  klik na gumb "Uredi" | aplikacija obvesti administratorja, da je pustil obvezno polje prazno s sporočilom "Polje je obvezno" pod obveznim poljem  |


### Ogled uporabniškega profila (PU15)

V primeru uporabe Ogled uporabniškega profila (PU15) so pod pojmom **uporabnik** mišljene naslednje uporabniške vloge: **občan**, **administrator**, **upravljalec predlogov (organizacija)**, **upravljalec novic** in **upravljalec dogodkov**.

#### Povzetek funkcionalnosti
**Uporabnik** si lahko ogleda podatke o organizacijah v izbrani občini. 

#### Osnovni tok (O15.1)
1. Uporabnik klikne na gumb “Moj profil” v navigacijskem meniju.
2. Aplikacija ga preusmeri na njegov uporabniški profil.

#### Alternativni tok 1 (A15.1)
1. Administrator klikne na gumb “Uporabniki”.
2. Aplikacija ga preusmeri na seznam vseh uporabnikov. 
3. Administrator izbere uporabnika iz seznama uporabnikov aplikacije s pritiskom na gumb "Odpri profil". 
4. Aplikacija odpre novo stran s podatki izbranega uporabnika. 

#### Alternativni tok 2 (A15.2)
1. Uporabnik klikne na gumb “Predlogi” v navigacijskem meniju.
2. Aplikacija ga preusmeri na seznam predlogov.
3. Uporabnik klikne na izbran predlog. 
4. Aplikacija prikaže obrazec s podatki o predlogu. 
5. Uporabnik klikne na gumb "Odpri profil".
6. Aplikacija ga preusmeri na uporabniški profil lastnika predloga. 

#### Alternativni tok 3 (A15.3)
**Predlog projekta x**: posamezni predlog projekta </br >
**Akter**: občan, ki je lastnik predloga projekta x </br >

1. Akter klikne na gumb “Predlogi” v navigacijskem meniju.
2. Aplikacija ga preusmeri na seznam predlogov.
3. Akter klikne na predlog projekta x. 
4. Aplikacija prikaže obrazec s podatki o predlogu projekta x. 
5. Akter klikne na gumb "Odpri profil".
6. Aplikacija ga preusmeri na akterjev uporabniški profil.

#### Alternativni tok 4 (A15.4)
**Organizacija x**: posamezni profil upravljalca predlogov oz. organizacije </br >
**Upravljalec organizacije x**: upravljalec predlogov (organizacija), ki mu pripada organizacija x </br >

1. Upravljalec organizacije x klikne na gumb “O občini” v navigacijskem meniju.
2. Aplikacija ga preusmeri na podatke o občini. 
3. Upravljalec organizacije x v spustnem seznamu izbere razred v katero spada organizacija x. 
4. Aplikacija prikaže seznam organizacij, ki pripadajo izbranemu razredu. 
5. Upravljalec organizacije x klikne na organizacijo x. 
6. Aplikacija ga preusmeri na uporabniški profil upravljalca organizacije x. 

#### Alternativni tok 5 (A15.5)
1. Uporabnik klikne na gumb “O občini” v navigacijskem meniju.
2. Aplikacija ga preusmeri na podatke o občini. 
3. Uporabnik v spustnem seznamu izbere razred organizacij. 
4. Aplikacija prikaže seznam organizacij, ki pripadajo izbranemu razredu. 
5. Uporabnik klikne na posamezno organizacijo. 
6. Aplikacija ga preusmeri na uporabniški profil upravljalca izbrane organizacije.  

#### Pogoji
Ni pogojev. 

#### Posledice
Uporabnik si lahko ogleda vse uporabniške profile uporabnikov (tudi svojega).

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
MUST have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T15.1 | prikaz uporabniškega profila | O15.1 | domača stran aplikacije | klik na gumb “Moj profil” | aplikacija prikaže uporabniški profil |
| T15.2 | prikaz uporabniškega profila | O15.1 | stran s predlogi projektov | klik na gumb “Moj profil” | aplikacija prikaže uporabniški profil |
| T15.3 | prikaz seznama predlogov projektov | A15.2 | domača stran aplikacije | klik na gumb “Predlogi” | aplikacija prikaže seznam predlogov |
| T15.4 | prikaz lastnega predloga projekta | A15.2 | seznam predlogov projektov | klik na lasten predlog projekta | aplikacija prikaže lasten predlog projekta |
| T15.5 | prikaz uporabniškega profila | A15.2 | izbran lasten predlog projekta | klik na gumb “Odpri profil” | aplikacija prikaže uporabniški profil 
| T15.6 | prikaz seznama predlogov projektov | A15.3 | domača stran aplikacije | klik na gumb “Predlogi” | aplikacija prikaže seznam predlogov |
| T15.7 | prikaz posameznega predloga projekta | A15.3 | seznam predlogov projektov | klik na predlog projekta | aplikacija prikaže izbran predlog projekta |
| T15.8 | prikaz uporabniškega profila | A15.3 | izbran predlog projekta | klik na gumb “Odpri profil” | aplikacija prikaže uporabniški profil |
| T15.9 | prikaz podatkov o občini | A15.4 | domača stran aplikacije | klik na gumb “O občini” | aplikacija prikaže podatke o občini |
| T15.10 | prikaz seznama organizacij posameznega razreda | A15.4 | seznam organizacij | klik na spustni seznam in izbira razreda organizacij | aplikacija prikaže seznam organizacij izbranega razreda |
| T15.11 | prikaz lastnega uporabniškega profila organizacije | A15.4 | seznam izbranega razreda organizacij  | klik na lastno organizacijo | aplikacija prikaže lastni uporabniški profil upravljalca predlogov izbrane organizacije |
| T15.12 | prikaz podatkov o občini | A15.5 | domača stran aplikacije | klik na gumb “O občini” | aplikacija prikaže podatke o občini |
| T15.13 | prikaz seznama organizacij posameznega razreda | A15.5 | seznam organizacij | klik na spustni seznam in izbira razreda organizacij | aplikacija prikaže seznam organizacij izbranega razreda |
| T15.14 | prikaz uporabniškega profila organizacije | A15.5 | seznam izbranega razreda organizacij  | klik na izbrano organizacijo | aplikacija prikaže uporabniški profil upravljalca predlogov izbrane organizacije |

### Dodajanje fotografije (PU16)

V primeru uporabe Dodajanje fotografije (PU16) so pod pojmom **uporabnik** mišljene naslednje uporabniške vloge: **občan** in **administrator**.

#### Povzetek funkcionalnosti
**Uporabnik** lahko doda fotografijo v fotogalerijo.  

#### Osnovni tok (O16.1)
1. Uporabnik izbere gumb gumb “O občini” v navigacijskem meniju. 
2. Aplikacija prikaže stran s podatki o občini, organizacijami ter fotogalerijo. 
3. Uporabnik izbere gumb "Dodaj fotografijo" za dodajanje fotografije.
4. Aplikacija prikaže obrazec za dodajanje fotografije. 
5. Uporabnik doda veljaven format fotografije v vnosno poljo za fotografijo.
6. Aplikacija doda fotografijo v fotogalerijo in fotografija postane vidna vsem.

#### Alternativni (izjemni) tok (A16.1)
1. Uporabnik izbere gumb gumb “O občini” v navigacijskem meniju. 
2. Aplikacija prikaže stran s podatki o občini, organizacijami ter fotogalerijo. 
3. Uporabnik izbere gumb "Dodaj fotografijo" za dodajanje fotografije.
4. Aplikacija prikaže obrazec za dodajanje fotografije. 
5. Uporabnik doda neveljaven format fotografije v vnosno poljo za fotografijo.
6. Aplikacija ne doda fotografijo v fotogalerijo.

#### Pogoji
Za uporabo funkcionalnosti Dodajanje fotografije mora biti uporabnik prijavljen v aplikaciji. 

#### Posledice
Dodana fotografija postane vidna vsem uporabnikom aplikacije. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
COULD have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T16.1 | prikaz strani s fotogalerijo | O16.1 | domača stran aplikacije | klik na gumb "O občini" | aplikacija prikaže stran s fotogalerijo |
| T16.2 | prikaz obrazca za dodajanje fotografije | O16.1 | prikaz strani "O občini" | klik na gumb "Dodaj fotografijo" | aplikacija prikaže obrazec za dodajanje fotografije |
| T16.3 | dodajanje fotografije | O16.1 | prikaz obrazca za dodajanje fotografije | dodana fotografija ima veljaven format, klik na gumb "Shrani" | aplikacija prikaže fotografijo v fotogaleriji |
| T16.4 | prikaz strani s fotogalerijo | A16.1 | domača stran aplikacije | klik na gumb "O občini" | aplikacija prikaže stran s fotogalerijo |
| T16.5 | prikaz obrazca za dodajanje fotografije | A16.1 | prikaz strani "O občini" | klik na gumb "Dodaj fotografijo" | aplikacija prikaže obrazec za dodajanje fotografije |
| T16.6 | dodajanje fotografije | A16.1 | prikaz obrazca za dodajanje fotografije | dodana fotografija nima veljavnega format, klik na gumb "Shrani" | fotografije ne shrani, aplikacija prikaže sporočilo "Datoteka mora biti v formatu .png ali .jpg" |

### Prikaz seznama uporabnikov (PU17)

#### Povzetek funkcionalnosti
**Administrator** lahko vidi seznam registriranih uporabnikov aplikacije (občan, upravljalec predlogov (organizacija), upravljalec novic, upravljalec dogodkov). 

#### Osnovni tok (O17.1)
1. Administrator klikne na gumb “Uporabniki” v navigacijskem meniju. 
2. Aplikacija administratorju prikaže seznam vseh registriranih uporabnikov. 

#### Alternativni tok
Alternativnih tokov pri funkcionalnosti Prikaz seznama uporabnikov aplikacija ne podpira. 

#### Posledice
Administrator vidi seznam registriranih uporabnikov aplikacije. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
SHOULD have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T17.1 | prikaz seznama uporabnikov | O17.1 | administrator je na domači strani | klik na gumb "Uporabniki" | aplikacija prikaže seznam vseh registriranih uporabnikov|
| T17.2 | prikaz seznama uporabnikov | O17.1 | administrator je na strani "Predlogi" | klik na gumb "Uporabniki" | aplikacija prikaže seznam vseh registriranih uporabnikov |

### Brisanje fotografije (PU18)

#### Povzetek funkcionalnosti
**Administrator** lahko izbriše fotografijo iz aplikacije. 

#### Osnovni tok (O18.1)
1. Administrator klikne na gumb “O občini” v navigacijskem meniju. 
2. Aplikacija prikaže stran s podatki o občini, kjer je prikazan seznam fotografij (fotogalerija). 
3. Administrator klikne na gumb "Izbriši" na fotografiji, ki jo želi izbrisati.
4. Aplikacija izbrano fotografijo izbriše iz fotogalerije. 

#### Alternativni tok
Alternativnih tokov pri funkcionalnosti Brisanje fotografije aplikacija ne podpira. 

#### Pogoji
Za uporabo funkcionalnosti Brisanje fotografije mora biti administrator registriran in prijavljen v aplikaciji. 

#### Posledice
Izbrisane fotografije ni več v fotogaleriji.  

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
COULD have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T18.1 | prikaz strani s fotogalerijo | O18.1 | domača stran aplikacije | klik na gumb "O občini" | aplikacija prikaže stran s fotogalerijo |
| T18.2 | izbris izbrane fotografije | O18.1 | prikaz strani s fotogalerijo | klik na gumb "Izbriši" na fotografiji, ki jo administrator želi izbrisati | aplikacija izbriše fotografijo iz aplikacije | 

### Ogled fotografije (PU19)

V primeru uporabe Ogled fotografije (PU19) so pod pojmom **uporabnik** mišljene naslednje uporabniške vloge: **neregistrirani uporabnik**, **občan**, **administrator**, **upravljalec predlogov (organizacija)**, **upravljalec novic** in **upravljalec dogodkov**.

#### Povzetek funkcionalnosti
**Uporabnik** si lahko ogleda fotografije v fotogaleriji. 

#### Osnovni tok (O19.1)
1. Administrator klikne na gumb “O občini” v navigacijskem meniju. 
2. Aplikacija prikaže stran s podatki o občini, kjer je prikazan seznam fotografij (fotogalerija). 

#### Alternativni tok
Alternativnih tokov pri funkcionalnosti Ogled fotografije aplikacija ne podpira. 

#### Pogoji
Ni pogojev. 

#### Posledice
Vsi uporabniki lahko vidijo podrobnosti izbrane fotografije. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
COULD have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T19.1 | prikaz fotografij v fotogaleriji | O19.1 | domača stran aplikacije | uporabnik klikne na gumb “O Občini” | aplikacija prikaže fotografije v fotogaleriji |
| T19.2 | prikaz fotografij v fotogaleriji | O19.1 | stran "Predlogi" | uporabnik klikne na gumb “O Občini” | aplikacija prikaže fotografije v fotogaleriji |


### Urejanje dogodka (PU20)

#### Povzetek funkcionalnosti
**Upravljalec dogodkov** lahko uredi dogodek, ki ga je dodal v koledar dogodkov. 

#### Osnovni tok (O20.1)
1. Upravljalec dogodkov izbere enega izmed dogodkov v koledarju. 
2. Upravljalec dogodkov klikne na gumb "Uredi". 
3. Aplikacija prikaže obrazec za urejanje dogodka, kjer so že izpolnjena vnosna polja s trenutnimi vrednostmi. 
4. Upravljalec dogodkov spremeni nekatere podatke o izbranem dogodku. 
5. Upravljalec dogodkov klikne gumb "Shrani".
6. Aplikacija preveri ustreznost obveznih atributov.
7. Vsa vnosna polja imajo veljavno vrednost.
8. Aaplikacija prikaže posodobljen dogodek v koledarju. 

#### Alternativni (izjemni) tok 1 (A20.1)
1. Upravljalec dogodkov izbere enega izmed dogodkov v koledarju. 
2. Upravljalec dogodkov klikne na gumb "Uredi". 
3. Aplikacija prikaže obrazec za urejanje dogodka, kjer so že izpolnjena vnosna polja s trenutnimi vrednostmi. 
4. Upravljalec dogodkov spremeni nekatere podatke o izbranem dogodku. 
5. Upravljalec dogodkov klikne gumb "Shrani".
6. Aplikacija preveri ustreznost obveznih atributov.
7. Vsa vnosna polja imajo veljavno vrednost.
8. Aplikacija prikaže obvestilo, da urejanje dogodka ni bila uspešno, ker so bila nekatera obvezna vnosna polja brez vrednosti. 

#### Pogoji
Za uporabo funkcionalnosti Urejanje dogodka mora biti upravljalec dogodkov registriran in prijavljen v aplikaciji. 

#### Posledice
Izbran dogodek ima spremenjene podatke. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
SHOULD have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T20.1 | prikaz izbranega dogodka | O20.1 | domača stran aplikacije | klik na datum v koledarju | prikažejo se podrobnosti o izbranem dogodku |
| T20.2 | prikaz obrazca za urejanje dogodka | O20.1 | podrobnosti o izbranem dogodku | klik na gumb "Uredi" | prikaže se obrazec za urejanje dogodka |
| T20.3 | urejanje dogodka, ko imajo vsa vnosna polja ustrezno vrednost | O20.1 | vsa vnosna polja pri urejanju dogodka imajo ustrezno vrednost | klik na gumb "Shrani" | prikaže se posodobljen dogodek
| T20.4 | prikaz izbranega dogodka | A20.1 | domača stran aplikacije | klik na datum v koledarju | prikažejo se podrobnosti o izbranem dogodku |
| T20.5 | prikaz obrazca za urejanje dogodka | A20.1 | podrobnosti o izbranem dogodku | klik na gumb "Uredi" | prikaže se obrazec za urejanje dogodka |
| T20.6 | prazen obrazec za urejanje dogodka | A20.1 | prazna nekatera obvezna vnosna polja |  klik na gumb "Shrani" | aplikacija obvesti uporabnika, da je pustil obvezna polja prazna s sporočilom "Vsa polja so obvezna" |


### Brisanje dogodka (PU21)

#### Povzetek funkcionalnosti
**Upravljalec dogodkov** lahko izbriše dogodek, ki ga je dodal v koledar dogodkov. 

#### Osnovni tok (O21.1)
1. Upravljalec dogodkov izbere enega izmed dogodkov v koledarju. 
2. Upravljalec dogodkov klikne gumb "Izbriši".
3. Aplikacija izbriše dogodek v koledarju in upravljalca dogodkov preusmeri na domačo stran. 

#### Alternativni tok
Alternativnih tokov pri funkcionalnosti Brisanje dogodka aplikacija ne podpira. 

#### Pogoji
Za uporabo funkcionalnosti Brisanje dogodka mora biti upravljalec dogodkov registriran in prijavljen v aplikaciji. 

#### Posledice
Izbrisanega dogodka ni več v koledarju. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
SHOULD have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T21.1 | prikaz izbranega dogodka | O21.1 | domača stran aplikacije | klik na datum v koledarju | prikažejo se podrobnosti o izbranem dogodku |
| T21.2 | brisanje dogodka | O21.1 | podrobnosti o izbranem dogodku | klik na gumb "Izbriši" | aplikacija izbriše dogodek iz aplikacije |


### Dodajanje dogodka (PU22)

#### Povzetek funkcionalnosti
**Upravljalec dogodkov** lahko doda dogodek, ki ga organizira občina. 

#### Osnovni tok (O22.1)
1. Upravljalec dogodkov klikne na gumb "Dodaj dogodek". 
2. Aplikacija prikaže obrazec za dodajanje dogodka.
3. Upravljalec dogodkov izpolni obrazec za dodajanje dogodka.
4. Upravljalec dogodkov klikne gumb "Shrani".
5. Aplikacija preveri ustreznost obveznih atributov.
6. Vsa vnosna polja imajo veljavno vrednost.
7. Aplikacija prikaže dogodek v koledarju. 

#### Alternativni (izjemni) tok 1 (A22.1)
1. Upravljalec dogodkov klikne na gumb "Dodaj dogodek". 
2. Aplikacija prikaže obrazec za dodajanje dogodka.
3. Upravljalec dogodkov izpolni obrazec za dodajanje dogodka.
4. Upravljalec dogodkov klikne gumb "Shrani".
5. Aplikacija preveri ustreznost obveznih atributov.
6. Vsa vnosna polja nimajo veljavne vrednosti.
7. Aplikacija prikaže obvestilo, da je dodajanje dogodka ni bilo uspešno, ker so bila nekatera obvezna vnosna polja brez vrednosti. 

#### Pogoji
Za uporabo funkcionalnosti Dodajanje dogodka mora biti upravljalec dogodkov registriran in prijavljen v aplikaciji. 

#### Posledice
Nov dogodek je dodan v aplikacijo in viden vsem uporabnikom aplikacije.  

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
SHOULD have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T22.1 | prikaz obrazca za dodajanje dogodka | O22.1 | podrobnosti o izbranem dogodku | klik na gumb "Dodaj dogodek" | prikaže se obrazec za dodajanje dogodka |
| T22.2 | dodajanje dogodka | O22.1 | obrazec za dodajanje dogodka | izpolnjen obrazec s podatki o dogodku, vsa vnosna polja imajo veljavno vrednost, klik na gumb "Shrani " | aplikacija prikaže dogodek v koledarju |
| T22.3 | prikaz obrazca za dodajanje dogodka | A22.1 | podrobnosti o izbranem dogodku | klik na gumb "Dodaj dogodek" | prikaže se obrazec za dodajanje dogodka |
| T22.4 | prazen obrazec za urejanje dogodka | A22.1 | prazna nekatera obvezna vnosna polja |  klik na gumb "Shrani" | aplikacija obvesti uporabnika, da je pustil obvezna polja prazna s sporočilom "Vsa polja so obvezna" |

### Ogled dogodka (PU23)

V primeru uporabe Ogled dogodka (PU23) so pod pojmom **uporabnik** mišljene naslednje uporabniške vloge: **neregistrirani uporabnik**, **občan**, **administrator**, **upravljalec predlogov (organizacija)**, **upravljalec novic** in **upravljalec dogodkov**.

#### Povzetek funkcionalnosti
**Uporabnik** si lahko ogleda dogodke, ki jih je dodal upravljalec dogodkov v koledar. 

#### Osnovni tok (O23.1)
1. Uporabnik izbere pobarvan datum in ga pritisne.
2. Aplikacija prikaže podatke o dogodku. 

#### Alternativni tok
Alternativnih tokov pri funkcionalnosti Ogled dogodka aplikacija ne podpira. 

#### Pogoji
Ni pogojev. 

#### Posledice
Uporabnik lahko vidi podatke o izbranem dogodku. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
SHOULD have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T23.1 | prikaz izbranega dogodka | O23.1 | domača stran aplikacije | klik na pobarvan datum v koledarju | prikažejo se podrobnosti o izbranem dogodku |
| T23.2 | prikaz nobenega dogodka | O23.1 | domača stran aplikacije | klik na nepobarvan datum v koledarju | ne zgodi se nič |  


### Ocenjevanje predloga projekta (PU24)

#### Povzetek funkcionalnosti
**Občan** lahko glasuje za najboljši predlog projekta. 

#### Osnovni tok (O24.1)
1. Občan klikne na “Predlogi”.
2. Aplikacija prikaže seznam vseh potrjenih predlogov projektov. 
3. Občan izbere potrjen predlog projekta.
4. Aplikacija prikaže podrobne podatke o izbranem predlogu. 
5. Občan v spustnem seznamu izbere oceno med 1 - 10, kjer je privzeta ocena 0. V primeru, da je izbrani projekt že ocenil, se prikaže njegova ocena. 
6. Občan klikne na “Oceni”.
7. Aplikacija shrani novo oz. posodobljeno oceno v podatkovno bazo in preusmeri uporabnika na seznamom vseh predlogov projektov.

#### Alternativni tok
Alternativnih tokov pri funkcionalnosti Ocenjevanje predloga projekta aplikacija ne podpira. 

#### Pogoji
Za uporabo funkcionalnosti Ocenjevanje predloga projekta mora biti občan registriran in prijavljen v aplikaciji. 

#### Posledice
Izbranemu predlogu projekta se ocena zviša oz. zniža.

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
MUST have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T24.1 | prikaz seznama potrjenih predlogov projekta | O24.1 | domača stran aplikacije | občan klikne na gumb “Predlogi” | aplikacija prikaže seznam potrjenih predlogov projektov  |
| T24.2 | prikaz podrobnosti o izbranem predlogu projekta | O24.1 | seznam potrjenih predlogov projektov | občan izbere predlog projekta s klikom nanj | aplikacija prikaže podrobnosti o izbranem predlogu projekta |
| T24.3 | ocenitev predloga projekta | O24.1 | podrobnosti o izbranem predlogu projekta | občan v spustnem seznamu izbere oceno med 1 - 10, klik na gumb "Oceni" | aplikacija predlogu projekta zviša oz. zniža oceno |
| T24.4 | prikaz seznama potrjenih predlogov projekta | O24.1 | domača stran aplikacije | občan klikne na gumb “Predlogi” | aplikacija prikaže seznam potrjenih predlogov projektov  |
| T24.5 | prikaz ocenjenega predloga projekta | O24.1 | seznam potrjenih predlogov projektov | občan izbere predlog projekta, ki ga je že ocenil | aplikacija prikaže podrobnosti projekta in oceno občana za ta projekt |

 
### Filtriranje predlogov projektov (PU25)

V primeru uporabe Filtriranje predlogov projektov (PU25) so pod pojmom **uporabnik** mišljene naslednje uporabniške vloge: **neregistrirani uporabnik**, **občan**, **administrator**, **upravljalec predlogov (organizacija)**, **upravljalec novic** in **upravljalec dogodkov**.

#### Povzetek funkcionalnosti
**Uporabnik** lahko filtrira predloge projektov glede na naslednje kriterije: 
- **naslov predloga projekta** ali ime **razreda organizacije** in 
- **datum objave predloga projekta** ali **oceno predloga projekta** </br>

#### Osnovni tok (O25.1)
1. Uporabnik klikne na gumb “Predlogi” v navigacijskem meniju. 
2. Aplikacija prikaže stran s seznami predlogov projektov urejenih po datumu. 
3. Uporabnik v iskalno polje napiše naslov predloga projekta ali ime razreda organizacije. 
4. Aplikacija na podlagi vnešenih vrednosti prikaže filtriran seznam predlogov projektov. 

#### Alternativni tok 1 (A25.1)
1. Uporabnik klikne na gumb “Predlogi” v navigacijskem meniju. 
2. Aplikacija prikaže stran s seznami predlogov projektov urejenih po datumu. 
3. Uporabnik izbere možnost razvrstitve po oceni, ko pritisne gumb "Razvrsti po oceni".
4. Aplikacija na podlagi vnešenih vrednosti prikaže filtriran seznam predlogov projektov. 

#### Alternativni (izjemni) tok 2 (A25.2)
1. Uporabnik klikne na gumb “Predlogi” v navigacijskem meniju. 
2. Aplikacija prikaže stran s seznami predlogov projektov urejenih po datumu. 
3. Uporabnik v iskalno polje napiše naslov predloga projekta ali ime razreda organizacije, ki ne obstaja. 
4. Aplikacija na podlagi vnešenih vrednosti prikaže filtriran seznam predlogov projektov, ki je prazen.
5. Aplikacija prikaže masko za obveščanje uporabnikov o stanju aplikacije z ustreznim sporočilom. 

#### Pogoji
Ni pogojev. 

#### Posledice
Prikazan seznam predlogov projektov se posodobi glede na izbrane vrednosti.

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
WOULD have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T25.1 | prikaz seznama predlogov projekta | O25.1 | domača stran aplikacije | uporabnik klikne na gumb “Predlogi” | aplikacija prikaže seznam  predlogov projektov urejenih po datumu objave predloga projekta  |
| T25.2 | prikaz seznama filtriranih predlogov projekta po naslovu predloga projekta ali imenu razreda organizacije | O25.1 | domača stran aplikacije | uporabnik v iskalno polje napiše naslov predloga projekta ali ime razreda organizacije | aplikacija prikaže filtriran seznam predlogov projekta po naslovu predloga projekta ali imenu razreda organizacije ter urejen po datumu objave predloga projekta | 
| T25.3 | prikaz seznama predlogov projekta | A25.1 | domača stran aplikacije | uporabnik klikne na gumb “Predlogi” | aplikacija prikaže seznam  predlogov projektov urejenih po datumu  |
| T25.4 | prikaz seznama predlogov projekta urejenih po oceni | A25.1 | domača stran aplikacije | uporabnik klikne na gumb "Uredi po oceni" | aplikacija prikaže seznam  predlogov projektov urejenih po oceni | 
| T25.5 | prikaz seznama predlogov projekta | A25.2 | domača stran aplikacije | uporabnik klikne na gumb “Predlogi” | aplikacija prikaže seznam  predlogov projektov urejenih po datumu objave predloga projekta  |
| T25.6 | prikaz sporočila, da takšni predlogi projektov ne obstajajo | A25.2 | domača stran aplikacije | uporabnik v iskalno polje napiše naslov predloga projekta ali ime razreda organizacije, ki ne obstaja | aplikacija prikaže masko za obveščanje uporabnikov o stanju aplikacije z ustreznim sporočilom  | 


### Izbira občine (PU26)

V primeru uporabe Izbira občine (PU26) so pod pojmom **uporabnik** mišljene naslednje uporabniške vloge: **neregistrirani uporabnik**, **občan**, **administrator**, **upravljalec predlogov (organizacija)**, **upravljalec novic** in **upravljalec dogodkov**.

#### Povzetek funkcionalnosti
**Uporabnik** lahko izbere občino v spustnem seznamu v navigacijskem meniju in s tem dostopa do podatkov izbrane občine.

#### Osnovni tok (O26.1)
1. Uporabnik izbere občino v spustnem seznamu v navigacijskem meniju.
2. Aplikacija uporabnika spremeni podatke aplikacije. 

#### Pogoji
Ni pogojev. 

#### Posledice
Uporabnik aplikacije vidi podatke izbrane občine. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
MUST have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: |
| T26.1 | prikaz podatkov izbrane občine | O26.1 | domača stran aplikacije | klik na gumb "O občini" | aplikacija prikaže podatke izbrane občine | 
| T26.2 | spreminjanje podatkov izbrane občine | O26.1 | stran s podatki o občini | spreminjanje izbrane občine z izbirom občine v spustnem seznamu v navigacijskem meniju | aplikacija prikaže spremenjene podatke izbrane občine | 

**TODO PU27**
### Sinhronizacija dogodkov z aplikacijo Google Calendar (PU27)

V primeru uporabe Sinhronizacija dogodkov z aplikacijo Google Calendar (PU27) so pod pojmom **uporabnik** mišljene naslednje uporabniške vloge: **občan** in **upravljalec dogodkov**.

#### Povzetek funkcionalnosti
**Uporabnik** lahko sinhronizira dogodke v aplikaciji z aplikacijo Google Calendar. 

#### Osnovni tok (O27.1)
1. Uporabnik izbere gumb “Sinhroniziraj” na domači strani aplikacije.
2. Aplikacija preveri, če je uporabnik prijavljen z gmail računom.
3. Izvede se sinhronizacija dogodkov z aplikacijo Google Calendar. 

#### Alternativni (izjemni) tok 1 (A27.1)
1. Uporabnik izbere gumb “Sinhroniziraj” na domači strani aplikacije.
2. Aplikacija se ne odzove. 

#### Pogoji
Za uporabo funkcionalnosti Sinhronizacija dogodkov z aplikacijo Google Calendar mora biti uporabnik registran in prijavljen v aplikacijo z Google uporabniškim računom (gmail). 

#### Posledice
Uporabnik ima sinhroniziran koledar aplikacije z svojo aplikacijo Google Calendar. 

#### Posebnosti
Ni posebnosti. 

#### Prioriteta identificiranih funkcionalnosti
WOULD have

#### Sprejemni testi
| **Oznaka testa** | **Funkcija, ki se testira** | **Oznaka toka** | **Začetno stanje sistema** | **Vhod** | **Pričakovan rezultat** |
| :-------------: | :----------------------: | :----------------------: | :---------------------: | :---: | :------------------: | 
| T27.1 | sinhronizacija dogodkov aplikacije z aplikacijo Google Calendar | O27.1 | dogodki v aplikaciji in aplikacija Google Calendar nista sinhronizirana | občan klikne na gumb “Sinhroniziraj” | dogodki v aplikaciji in aplikacija Google Calendar sta sinhronizirana | 
| T27.2 | sinhronizacija dogodkov aplikacije z aplikacijo Google Calendar | O27.1 | dogodki v aplikaciji in aplikacija Google Calendar nista sinhronizirana | upravljalec dogodkov klikne na gumb “Sinhroniziraj” | dogodki v aplikaciji in aplikacija Google Calendar sta sinhronizirana | 
| T27.3 | nedelovanje gumba "Sihroniziraj" v primeru, da občan ni registriran v aplikacijo z gmail računom | A27.1 | domača stran aplikacije, občan vpisan brez gmaila | občan klikne na gumb “Sinhroniziraj” | aplikacija se ne odzove | 
| T27.4 | sinhronizacija dogodkov aplikacije z aplikacijo Google Calendar v primeru, da občan ni registriran v aplikacijo z gmail računom  | A27.1 | dogodki v aplikaciji in aplikacija Google Calendar nista sinhronizirana | občan klikne na gumb “Sinhroniziraj” | dogodki v aplikaciji in aplikacija Google Calendar nista sinhronizirana | 

## 6. Nefunkcionalne zahteve

Nefunkcionalne zahteva naše aplikacije smo razdelili v 3 glavne skupine:</br> 
- **6.1 Zahteve izdelka** </br>
  - **6.1.1** Sistem mora omogočati sočasno delo najmanj 500 uporabnikom sistema. Odzivni časi ne smejo prekoračiti 3s.
  - **6.1.2** Aplikacija neregistriranim uporabnikom in registriranim uporabnikom ne sme dovoliti dejanj drugih uporabnikov kot je upravljalec predlogov, upravljalec dogodkov, upravljalec novic in administrator. 
  - **6.1.3** Aplikacija mora biti dosegljiva najmanj 97 odstotkov časa. 
  - **6.1.4** Končna aplikacija bo SPA (Single Page Application).
  - **6.1.5** Dodajanje novega predloga projekta, novice ali fotografije ne sme kakorkoli vplivati na delovanje aplikacije. 
  - **6.1.6** Vsak prenos iz podatkovne baze ne sme preseči 2 s. 
  - **6.1.7** Vsak pogled v spletni aplikaciji mora vsebovati manj kot 15 interaktivnih gumbov. 
  
- **6.2 Organizacijske zahteve** </br >
  - **6.2.1** Pri registraciji uporabnika mora sistem preveriti verodostojnost podatkov (npr. veljaven e-poštni naslov, starost nad 18 let, geslo dolgo več kot 8 znakov z vsaj eno veliko črko, ...).
  - **6.2.2** Med razvojem aplikacije bo za upravljanje s programsko kodo uporabljeno orodje Git.
  - **6.2.3** Uporaba procesa objektnega razvoja RUP.
  
- **6.3 Zunanje zahteve** </br>
  - **6.3.1** Aplikacija mora biti dosegljiva na javno dostopnem spletnem mestu.
  - **6.3.2** Aplikacija mora biti zavezana GDPR (General Data Protection Regulation), s čimer varuje osebne podatke uporabnikov. Naš sistem v Sloveniji deluje v skladu z ZVOP-2 (tj. Zakon o varstvu osebnih podatkov). 
  - **6.3.3** Aplikacija mora biti primerna za uporabnike brez računalniško-tehničnega znanja. Uporabnik mora spoznati funkcionalnost aplikacije po 15 minutah uporabe. 

## 7. Prototipi vmesnikov

### 7.1 Osnutki zaslonskih mask

#### 7.1.1 Domača stran

**Akterji**: Neregistriran uporabnik

![Domača stran](/docs/gradivo/img/DomacaStranNeregistriran.png)

**Akterji**: Prijavljen občan

![Domača stran](/docs/gradivo/img/DomacaStranObcan.png)

**Akterji**: Prijavljen upravljalec dogodkov

![Domača stran](/docs/gradivo/img/DomacaStranUpravljalecDogodkov.png)

**Akterji**: Prijavljen administrator

![Domača stran](/docs/gradivo/img/DomacaStranAdministrator.png)

**Akterji**: Prijavljeni upravljalec predlogov (organizacija), upravljalec novic

![Domača stran](/docs/gradivo/img/DomacaStranOstali.png)

#### 7.1.2 Maska za obveščanje uporabnikov o stanju aplikacije

**Akterji**: Administrator, neregistrirani uporabnik, občan, upravljalec predlogov (organizacija), upravljalec novic, upravljalec dogodkov

![Ogled dogodka](/docs/gradivo/img/PU25(Obrazec).PNG)

#### 7.1.3 Registracija uporabnika (PU1)

**Akterji**: Neregistriran uporabnik

##### 7.1.3.1 Registracija

![Gumb](/docs/gradivo/img/PU1(Gumb1).png) 
![Gumb](/docs/gradivo/img/PU1(Gumb2).png)

![Registracija uporabnika](/docs/gradivo/img/PU1(Obrazec).png)

##### 7.1.3.2 Sporočila o napakah

![A1.2](/docs/gradivo/img/PU1(A1.2).PNG)
![A1.3](/docs/gradivo/img/PU1(A1.3).PNG)
![A1.5](/docs/gradivo/img/PU1(A1.5).PNG)
![A1.6](/docs/gradivo/img/PU1(A1.6).PNG)
![A1.7](/docs/gradivo/img/PU1(A1.7).PNG)
![A1.8](/docs/gradivo/img/PU1(A1.8).PNG)

#### 7.1.4 Prijava uporabnika (PU2)

**Akterji**: Občan, administrator, upravljalec dogodkov, upravljalec novic, upravljalec predlogov (organizacija)

##### 7.1.4.1 Prijava

![Gumb](/docs/gradivo/img/PU2(Gumb1).PNG) 
![Gumb](/docs/gradivo/img/PU2(Gumb2).PNG)

![Prijava uporabnika](/docs/gradivo/img/PU2(Obrazec).png)

##### 7.1.4.2 Sporočila o napakah

![A2.6-A2.10](/docs/gradivo/img/PU2(A2.6-A2.10).PNG)

#### 7.1.5 Odjava uporabnika (PU3)

**Akterji**: Občan, administrator, upravljalec novic, upravljalec predlogov (organizacija), upravljalec dogodkov

![Gumb](/docs/gradivo/img/PU3(Gumb).PNG) 

#### 7.1.6 Urejanje uporabniškega profila (PU4)

##### 7.1.6.1 Urejanje

![Gumb](/docs/gradivo/img/PU4(Gumb).png)

###### 7.1.6.1.1 Urejanje svojega profila

**Akterji**: Občan, administrator, upravljalec dogodkov, upravljalec novic

![Urejanje svojega uporabniškega profila](/docs/gradivo/img/PU4(Obrazec2).png)

**Akterji**: Upravljalec predlogov (organizacija)

![Urejanje svojega uporabniškega profila](/docs/gradivo/img/PU4(Obrazec1).png)

###### 7.1.6.1.2 Urejanje profila drugih uporabnikov

**Akterji**: Administrator

![Urejanje svojega uporabniškega profila](/docs/gradivo/img/PU4(Obrazec4).png)
![Urejanje svojega uporabniškega profila](/docs/gradivo/img/PU4(Obrazec3).png)

##### 7.1.6.2 Sporočila o napakah

![A4.1-A4.2,A4.4-A4.7](/docs/gradivo/img/PU4(Izjema1).png)
![A4.1-A4.2,A4.4-A4.7](/docs/gradivo/img/PU1(A1.5).PNG)

#### 7.1.7 Brisanje uporabniškega profila (PU5)

**Akterji**: Administrator

![Brisanje uporabniškega profila](/docs/gradivo/img/PU5(Gumb).png)

#### 7.1.8 Dodajanje novice (PU6)

**Akterji**: Upravljalec novic

##### 7.1.8.1 Dodajanje

![Gumb](/docs/gradivo/img/PU6(Gumb).PNG)

![Dodajanje novice](/docs/gradivo/img/PU6(Obrazec).png)

##### 7.1.8.2 Sporočila o napakah

![A6.1](/docs/gradivo/img/PU6(Izjema1).PNG)
![A6.1](/docs/gradivo/img/PU6(Izjema2).PNG)

#### 7.1.9 Urejanje novice (PU7)

**Akterji**: Upravljalec novic

##### 7.1.9.1 Urejanje

![Gumb](/docs/gradivo/img/PU21(Gumb).PNG)

![Urejanje novice](/docs/gradivo/img/PU7(Obrazec).png)

##### 7.1.9.2 Sporočila o napakah

![A6.1](/docs/gradivo/img/PU6(Izjema1).PNG)
![A6.1](/docs/gradivo/img/PU6(Izjema2).PNG)

#### 7.1.10 Ogled novice (PU8)

##### 7.1.10.1 Ogled seznam novic

![Gumb](/docs/gradivo/img/Novice(Gumb1).PNG)
![Gumb](/docs/gradivo/img/Novice(Gumb2).PNG)

**Akterji**: Neregistrani uporabnik 

![Ogled novice](/docs/gradivo/img/NoviceNeregistriran.png)

**Akterji**: Občan, upravljalec predlogov (organizacija), upravljalec dogodkov

![Ogled novice](/docs/gradivo/img/NoviceOstali.png)

**Akterji**: Administrator

![Ogled novice](/docs/gradivo/img/NoviceAdministrator.png)

**Akterji**: Upravljalec novic

![Ogled novice](/docs/gradivo/img/NoviceUpravljalecNovic.png)

##### 7.1.10.2 Ogled posamezne novice

![Gumb](/docs/gradivo/img/Novice(Gumb3).PNG)

**Akterji**: Neregistrani uporabnik, občan, upravljalec predlogov (organizacija), upravljalec dogodkov, administrator

![Ogled novice](/docs/gradivo/img/PU8(Obrazec2).png)

**Akterji**: Upravljalec novic

![Ogled novice](/docs/gradivo/img/PU8(Obrazec1).png)

#### 7.1.11 Brisanje novice (PU9)

**Akterji**: Upravljalec novic

![Gumb](/docs/gradivo/img/PU22(Gumb).PNG)

#### 7.1.12 Dodajanje predloga projekta (PU10)

**Akterji**: Občan

##### 7.1.12.1 Dodajanje

![Gumb](/docs/gradivo/img/PU10(Gumb).PNG)

![Dodajanje predloga](/docs/gradivo/img/PU10(Obrazec).png)

##### 7.1.12.2 Sporočila o napakah

![Izjema](/docs/gradivo/img/PU10(Izjema).PNG)

#### 7.1.13 Ogled predloga projekta (PU11)

##### 7.1.13.1 Ogled seznama predlogov projektov

![Gumb](/docs/gradivo/img/PU11(Gumb1).PNG)
![Gumb](/docs/gradivo/img/PU11(Gumb2).PNG)

**Akterji**: Neregistran uporabnik 

![Ogled predloga](/docs/gradivo/img/PredlogiNeregistriran.png)

**Akterji**: Upravljalec predlogov (organizacija)

![Ogled predloga](/docs/gradivo/img/PredlogiUpravljalecPredlogov.png)

**Akterji**: Upravljalec novic, upravljalec dogodkov

![Ogled predloga](/docs/gradivo/img/PredlogiOstali.png)

**Akterji**: Administrator

![Ogled predloga](/docs/gradivo/img/PredlogiAdministrator.png)

**Akterji**: Občan

![Ogled predloga](/docs/gradivo/img/PredlogiObcan.png)

##### 7.1.13.2 Ogled posameznega predloga

![Gumb](/docs/gradivo/img/PU11(Gumb3).PNG)

**Akterji**: Neregistran uporabnik

![Ogled predloga](/docs/gradivo/img/PredlogNeregistriran.png)

**Akterji**: Občan

![Ogled predloga](/docs/gradivo/img/PredlogObcan.png)

**Akterji**: Upravljalec predlogov (organizacija) [nepotrjeni predlogi projektov]

![Ogled predloga](/docs/gradivo/img/PredlogUpravljalecPredlogov(Nepotrjen).png)

**Akterji**: Upravljalec predlogov (organizacija) [potrjeni predlogi projektov]

![Ogled predloga](/docs/gradivo/img/PredlogUpravljalecPredlogov(Potrjen).png)

**Akterji**: Upravljalec dogodkov

![Ogled predloga](/docs/gradivo/img/PredlogUpravljalecDogodkov.png)

**Akterji**: Administrator

![Ogled predloga](/docs/gradivo/img/PredlogAdministrator.png)

#### 7.1.14 Urejanje predloga projekta (PU12)

**Akterji**: Upravljalec predlogov (organizacija)

##### 7.1.14.1 Urejanje

![Gumb](/docs/gradivo/img/PU12(Gumb).PNG)

![Urejanje predloga](/docs/gradivo/img/PU12(Obrazec).png)

##### 7.1.14.2 Sporočila o napakah

![Izjema](/docs/gradivo/img/PU10(Izjema).PNG)

#### 7.1.15 Ogled podatkov občine (PU13)

![Gumb](/docs/gradivo/img/PU20(Gumb).PNG)

**Akterji**: Neregistriran uporabnik

![Ogled podatkov občine](/docs/gradivo/img/FotografijeNeregistriran.png)

**Akterji**: Administrator

![Ogled podatkov občine](/docs/gradivo/img/FotografijeAdministrator.png)

**Akterji**: Občan

![Ogled podatkov občine](/docs/gradivo/img/FotografijeObcan.png)

**Akterji**: Upravljalec predlogov (organizacija), upravljalec dogodkov, upravljalec novic

![Ogled podatkov občine](/docs/gradivo/img/FotografijeOstali.png)

#### 7.1.16 Urejanje podatkov občine (PU14)

**Akterji**: Administrator

##### 7.1.16.1 Urejanje

![Gumb](/docs/gradivo/img/PU14(Gumb).png)

![Urejanje podatkov občine](/docs/gradivo/img/PU14(Obrazec).png)

##### 7.1.16.2 Sporočila o napakah

![Izjema](/docs/gradivo/img/PU14(Izjema).png)

#### 7.1.17 Ogled uporabniškega profila (PU15)

![Gumb](/docs/gradivo/img/PU15(Gumb1).PNG)
![Gumb](/docs/gradivo/img/PU15(Gumb4).png)

##### 7.1.17.1 Ogled svojega profila

![Gumb](/docs/gradivo/img/PU15(Gumb2).PNG)

**Akterji**: Administrator, upravljalec dogodkov, upravljalec novic, občan

![Ogled profila](/docs/gradivo/img/PU15(Obrazec4).png)

**Akterji**: Upravljalec predlogov (organizacija)

![Ogled profila](/docs/gradivo/img/PU15(Obrazec5).png)

##### 7.1.17.2 Ogled profila drugih uporabnikov

**Akterji**: Administrator

![Gumb](/docs/gradivo/img/PU15(Gumb3).png)

![Ogled profila](/docs/gradivo/img/PU15(Obrazec6).png)

![Ogled profila](/docs/gradivo/img/PU15(Obrazec1).png)

**Akterji**: Upravljalec predlogov (organizacija), upravljalec dogodkov, upravljalec novic, občan

![Ogled profila](/docs/gradivo/img/PU15(Obrazec2).png)

**Akterji**: Neregistriran uporabnik, upravljalec predlogov (organizacija), upravljalec dogodkov, upravljalec novic, občan

![Ogled profila](/docs/gradivo/img/PU15(Obrazec3).png)

#### 7.1.18 Dodajanje fotografije (PU16)

**Akterji**: Občan, administrator

##### 7.1.18.1 Dodajanje

![Dodajanje fotografije](/docs/gradivo/img/PU17(Gumb).png)

![Dodajanje fotografije](/docs/gradivo/img/PU17(Obrazec).png)

##### 7.1.18.2 Sporočila o napakah

![Dodajanje fotografije](/docs/gradivo/img/PU6(Izjema2).PNG)

#### 7.1.19 Prikaz seznama uporabnikov (PU17)

**Akterji**: Administrator

![Gumb](/docs/gradivo/img/Prikaz(Gumb).png)

![Prikaz seznam uporabnikov](/docs/gradivo/img/Prikaz.png)

#### 7.1.20 Brisanje fotografije (PU18)

**Akterji**: Administrator

![Brisanje fotografije](/docs/gradivo/img/PU19(Gumb).PNG)

#### 7.1.21 Ogled fotografije (PU19)

![Gumb](/docs/gradivo/img/PU20(Gumb).PNG)

**Akterji**: Neregistriran uporabnik

![Ogled fotografije](/docs/gradivo/img/FotografijeNeregistriran.png)

**Akterji**: Administrator

![Ogled fotografije](/docs/gradivo/img/FotografijeAdministrator.png)

**Akterji**: Občan

![Ogled fotografije](/docs/gradivo/img/FotografijeObcan.png)

**Akterji**: Upravljalec predlogov (organizacija), upravljalec dogodkov, upravljalec novic

![Ogled fotografije](/docs/gradivo/img/FotografijeOstali.png)

#### 7.1.22 Urejanje dogodka (PU20)

**Akterji**: Upravljalec dogodkov

##### 7.1.22.1 Urejanje

![Gumb](/docs/gradivo/img/PU21(Gumb).PNG)
![Urejanje dogodka](/docs/gradivo/img/PU21(Obrazec).png)

##### 7.1.22.2 Sporočila o napakah

![A22.1](/docs/gradivo/img/PU23(A23.1).png)

#### 7.1.23 Brisanje dogodka (PU21)

**Akterji**: Upravljalec dogodkov

![Gumb](/docs/gradivo/img/PU22(Gumb).PNG)

#### 7.1.24 Dodajanje dogodka (PU22)

**Akterji**: Upravljalec dogodkov

##### 7.1.24.1 Dodajanje

![Gumb](/docs/gradivo/img/PU23(Gumb).PNG)

![Dodajanje dogodka](/docs/gradivo/img/PU23(Obrazec).png)

##### 7.1.24.2 Sporočila o napakah

![A23.1](/docs/gradivo/img/PU23(A23.1).png)

#### 7.1.25 Ogled dogodka (PU23)

![Gumb](/docs/gradivo/img/PU24(Gumb).PNG)

**Akterji**: Neregistrirani uporabnik, občan, upravljalec predlogov (organizacija), administrator, upravljalec novic

![Ogled dogodka](/docs/gradivo/img/PU24(Obrazec1).png)

**Akterji**: Upravljalec dogodkov

![Ogled dogodka](/docs/gradivo/img/PU24(Obrazec2).png)

#### 7.1.26 Ocenjevanje predloga projekta (PU24)

**Akterji**: Občan

![Ocenjevanje predloga](/docs/gradivo/img/PU26(Gumb).png)

#### 7.1.27 Filtriranje predlogov projektov (PU25)

**Akterji**: Neregistrirani uporabnik, občan, upravljalec predlogov (organizacija), administrator, upravljalec novic, upravljalec dogodkov

![Filtriranje predlogov](/docs/gradivo/img/PU27(Obrazec).PNG)

#### 7.1.28 Izbira občine (PU26)

**Akterji**: Neregistrirani uporabnik, občan, administrator, upravljalec predlogov (organizacija), upravljalec novic in upravljalec dogodkov

![Gumb](/docs/gradivo/img/PU28(Gumb).PNG)

#### 7.1.29 Sinhronizacija dogodkov z aplikacijo Google Calendar (PU27)

**Akterji**: Občan, upravljalec dogodkov

![Gumb](/docs/gradivo/img/PU29(Gumb).PNG)

### 7.2 Sistemski vmesniki

#### 7.2.1 Zunanji sistem: Google Calendar

Naša aplikacija bo uporabljala zunanji sistem Google Calendar za naslednje funkcionalnosti:
- **sihronizacija dogodkov z Google Calendar aplikacijo** </br >
  Upravljalec dogodkov in občan lahko sihronizirata dogodke izbrane občine z njuno Google Calendar aplikacijo s klikom na gumb "Sihroniziraj". 
  Ko klikneta na gumb "Sihroniziraj", lahko določita kateri koledar občine želita sihronizirati s svojo aplikacijo. Izvede se klic                  https://www.googleapis.com/calendar/v3/users/me/calendarList, s katerim aplikacija doda izbrani koledar v njuno aplikacijo. Request body klica vključuje samo id koledarja, ki ga pridobimo iz podatkovne baze, glede na njuno odločitev glede občine.
- **ogled dogodka** </br >
Ko uporabnik aplikacije izbere funkcionalnost ogled dogodkov izbrane občine, aplikacija izvede GET klic na https://www.googleapis.com/calendar/v3/calendars/[calendarId]/events, kjer [calendarId] pridobimo glede na izbrano občino. S tem klicom aplikacija pridobi seznam dogodkov v občini, ki jih potem prikaže.
- **urejanje dogodka** </br >
Ko upravljalec dogodkov želi urediti dogodek, klikne na izbran dogodek. Aplikacija spremeni zaslonsko masko na tisto, ki se uporablja pri dodajanju dogodka, a z vrednostmi izbranega dogodka. Upravljalec dogodkov lahko nato spremeni poljubne atribute dogodka ter ga shrani s klikom na gumb. Aplikacija pošlje PUT klic na https://www.googleapis.com/calendar/v3/calendars/[calendarId]/events/[eventId], kjer [calendarId] pridobimo glede na izbrano občino, [eventId] pa glede na izbran dogodek. 
Ostali podatki se podajo v request body-ju:
  - start: začetek
  - end: konec
  - summary: naslov dogodka
  - description: opis dogodka
  - location: lokacija
- **dodajanje dogodka** </br >
Ko upravljalec dogodkov klikne na gumb dodaj dogodek, mu aplikacija prikaže obrazec v katerega vpiše atribute dogodka: čas (začetek in konec) dogodka, naslov dogodka, opis dogodka (opcijsko) in lokacijo dogodka (opcijsko, navaden tekst). Aplikacija izvede POST klic na https://www.googleapis.com/calendar/v3/calendars/[calendarId]/events. 
[calendarId] se določi glede na občino upravljalca dogodkov. 
Ostali podatki se podajo v request body-ju:
  - start: začetek
  - end: konec
  - summary: naslov dogodka
  - description: opis dogodka
  - location: lokacija  
- **brisanje dogodka** </br >
Ko upravljalec dogodkov želi izbrisati dogodek, klikne na izbran dogodek. Aplikacija spremeni zaslonsko masko na tisto, ki se uporablja pri dodajanju dogodka, a z vrednostmi izbranega dogodka. Upravljalec dogodkov lahko nato dogodek izbriše s pritiskom na gumb izbriši. Aplikacija pošlje DELETE klic na https://www.googleapis.com/calendar/v3/calendars/[calendarId]/events/[eventId], kjer [calendarId] pridobimo glede na izbrano občino, [eventId] pa glede na izbran dogodek.


#### 7.2.2 Izpostavljen REST API

Zunanji sistem **Novice** bo uporabljal naš REST API, ki omogočal naslednje 4 funkcionalnosti: 
- **ogled novice** </br >
Ogled novic bo pridobljen z GET klicom na naš API, kjer bo parameter identifikacija (ime) občine. API bo vrnil vse shranjene novice, ki pripadajo določeni občini. Klic bo prosto dostopen in ne bo potreboval dodatne identifikacije.
- **dodajanje novice** </br >
Dodajanje novice bo izvedeno s POST klicom na API, parameter bo identifikacija (ime) občine. Request body APIja bo vseboval naslov in vsebino novice. Vseboval bo tudi ključ, ki ga bomo dodelili samo avtoriziranim virom Novice (npr. mariborinfo.com za MO Maribor). Če je vir Novice avtoriziran za izbrano občino glede na ključ, bo aplikacija dodala novico z naslovom in vsebino podano v request body-ju.
- **urejanje novice** </br >
S PUT klicom lahko vir Novice zahteva spremembo že objavljene novice. Parametra klica sta identifikacija (ime) občine in identifikacijska številka novice. Request body vsebuje naslov in/ali vsebino novice (potrebno vsaj eno). Vseboval bo tudi ključ vira Novice. Aplikacija bo preverila, če je vir Novice avtoriziran za izbrano občino glede na ključ, če obstaja id novice v občini in če je originalen avtor novice enak, kot ta, ki zahteva spremembo. V primeru, da vse to drži bo posodobila novico, tako da polja podana v request body-ju (naslov in/ali vsebino) spremeni.
- **brisanje novice** </br >
API bo omogočal brisanje novice preko DELETE klica. Parametra klica sta identifikacija (ime) občine in identifikacijska številka novice. Request body vsebuje samo ključ vira Novice. Aplikacija bo preverila, če je vir Novice avtoriziran za izbrano občino glede na ključ, če obstaja id novice v občini in če je originalen avtor novice enak, kot ta, ki zahteva spremembo. V primeru, da vse to drži bo izbrisala izbrano novico.

### 7.3 Vmesniki do naprav
Nimamo vmesnikov do naprav.

## Reference
[1] Agile Business Consortium. 2019. “The DSDM Agile Project Framework.” 2019. https://www.agilebusiness.org/content/moscow-prioritisation.
