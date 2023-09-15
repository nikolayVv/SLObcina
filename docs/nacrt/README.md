# Načrt sistema

|                             |                                                         |
| :-------------------------- | :------------------------------------------------------ |
| **Naziv projekta**          | Občinski Obveščevalnik |
| **Člani projektne skupine** | Eva Bizilj, Klemen Jerman, Miha Širovnik, Nikolay Vasilev, Andraž Zrimšek |
| **Kraj in datum**           | Ljubljana, 1. 5. 2022                                    |

## Povzetek

**Dokument načrta sistema** prikazuje 3 sklope načrta programske rešitve aplikacije. 

V okviru **načrta arhitekture** smo prikazali **3 različne poglede** (**logični**, **fizični** in **razvojni**), ki prikazujejo splošno zgradbo spletne aplikacije iz različnih perspektiv. Pri tem smo uporabili postavitvene, paketne in komponentne diagrame. Arhitekturni vzorec **model-pogled-krmilnik (MVC)** smo uporabili za **logični pogled**.

V okviru **načrta strukture** smo naredili **razredni diagram**, ki predstavlja podrobnejšo strukturo sistema. Na njem smo označili **4 načrtovalske vzorce**, ki jih bomo uporabljali tekom razvoja aplikacije. Nato smo opisali razrede ter njegove atribute (ime, podatkovni tip, pomen in zalogo vrednosti) in metode (ime, imena in tipi parametrov, tip rezultatov in pomen). 

V zadnjem delu dokumenta smo opisali **načrt obnašanja** naše aplikacije, kjer so prikazani **diagrami zaporedja**. Vsak diagram zaporedja predstavlja en tok dogodkov primera uporabe iz diagrama primerov uporabe, ki smo ga opisali v dokumentu zajema zahtev.

## 1. Načrt arhitekture
V sklopu **načrta arhitekture** so prikazani trije pogledi na arhitekturo sistema in sicer **logični**, **razvojni** in **fizični**. 

### Pogled 1: Logični pogled
**Logični pogled** prikazuje ključne abstrakcije v sistemu v obliki objektov oz. razredov. Za prikaz smo uporabili postavitveni diagram in **vzorec model-pogled-krmilnik (MVC)**. Sistem smo strukturirali v **tri** logične komponente, ki medsebojno sodelujejo:
  * **model** (upravitelj sistemskih podatkov in povezanih operacij na teh podatkih)
  * **pogled** (opredelitelj in upravitelj načina predstavitve podatkov uporabnikov) 
  * **krmilnik** (upravitelj uporabniške interakcije, ki le te prenese v pogled in model)

Dodali pa smo še pomožno komponento **sistemski vmesniki**, ki prikazuje interakcijo med komponento krmilniki in sistemskim vmesnikom **SVGoogleCalendar API**. 

Vse komponente so povezane preko **brskalnika**, ker drugače ne moremo dostopati do spletne aplikacije.

![Logični pogled](https://teaching.lavbic.net/plantuml/png/RL91Ri8m4Bpx5POuvmSj4XI4eX22S8jKK0ycML8JnqPE0Yf_u17z2_rN7MA7nC8NMxFZtPtPhGg8QG6uClTWfkWFnbk4C7xP3SSh4epc2pz0w0kXcAe4PofdNB2CuG5dwNTv_x15cXoiGh_c-WYzweC2mrnJpX8QimD5dZujleAK5QLw4bag3PqSyECe5TtfXyk5XClK8I_aYSKE5krkLoOSS29JcK3MohjKWee3M-TGz4G2Y4ObySdxD2I1ZzVXb7JaalLCofJ36-KW4ghmQEctQOzr9B7fnho29jiocisd4vjY4tOyAJ8MxHIzGDnql0adCgUtAoKwBYpMM2LSgZNhxpTZIoNtZDi8WOkWUMkcFFK3nauNlllPrfG9BUkyTwf5hRrQSgCvryPoA_aJE9VdHdGOJQPpgzaPQnI37L5tXeIpp3nxOunKIWMxT7R8TAL57o0hwtRiRdk9F0jl-DXWPAVYLKUD6nvwRBYdwjPro10V7pZiorwgpYTJff6FcilhaTqbQ-iypMTgEP_-0G00)

Izvorna koda digrama :bar_chart: [PlantUML](../gradivo/plantuml/logicniPogled.puml)

V nadaljevanju so podrobno prikazani naslednji **podsistemi**: 
* **avtentikacija**
* **uporabnik**
* **predlog**
* **novica** 
* **občina**
* **dogodek** 

#### Podsistem 1: Avtentikacija
Podsistem **Avtentikacija** vključuje upravljanje z dvema pogledoma **ZMRegistracijkiObrazec** in **ZMPrijavniObrazec**. 
**KrmilnikRegistracija** in **KrmilnikPrijava** smo za večjo preglednost združili v **KrmilnikAvtentikacija**. KrmilnikAvtentikacija pošlje zahtevo za prikaz obrazca za registracijo oz. za prikaz obrazca za prijavo, v katerega uporabniki sistema vnesejo potrebne podatke. Pogleda nato pošljeta zahtevo po izvedbi dane funkcionalnosti (registracija oz. prijava uporabnika v sistem), s katero upravlja krmilnik avtentikacije (KrmilnikRegistracija, KrmilnikPrijava). Po izvedeni funkcionalnosti se podatki prenašajo skozi model **Uporabnik**, kateri z njimi nato upravlja in tudi vrne sporočilo o pravilni prijavi krmilniku avtentikacije.

![Podsistem 1: Avtentikacija](https://teaching.lavbic.net/plantuml/png/rPFFRjGm4CRlVehHzafH5ieVLN8bAgGU409HSQ2hFSmciyaqNjjot9JDQX-6X-6z6cT34bOXLJaWeLoS-JoVlryyANBM5XrkGB4clxK4nldCYA8Jj4ce80ilNqM3gaETX-hPwpT2qTg3D-0upJmax2ZsRBG0WIbf3n_SXfNc_5tfwrVECUPRWXCLjbyvtC92x7OYuTIXpU0ATkAmMbXCPBGK6XPhLYesoZZPTnL-gqW6XHBOe4jPomWo2Xla6TnpuZFv0eeCBKchaBMdxnxMHdkD6vApQzJ5DJbUpvfYmHN9-HmKhaZ9sLXgd2t5NkptOjd1VQ6K2--2Md-TJok75SKjtAMwewV3DLsJSFFdKOiNLdyBUFDnD7kFs19-TZLugVypjgFK0weMwz8LEOOBXfEtKNX49tsrnk6gaPhKtqWfS_zqshRl7_1sYGUSux_TwUd57sRs7E06CqybGeLWNTrHWGbYt5HStsL0Z7i4z_5p1-xM05Sb9IiUUj94uECHV2ogRVORSTmt5MyatS66G4pGTcCqUbYlJj1rbtSExqs2jwXhuUvN4P_LEQWaTwYNcdx-8CrP7JH1dvjIzECwnTTO_sPREis3mWC0)

Izvorna koda digrama :bar_chart: [PlantUML](../gradivo/plantuml/logicniPogledAvtentikacija.puml)

#### Podsistem 2: Uporabnik
Podsistem **Uporabnik** vključuje upravljanje z dvema pogledoma **ZMUporabniškiProfil** in ZMSeznamUporabnikov. 
**KrmilnikUporabnik** pošlje zahtevo za prikaz uporabniškega profila pogledu ZMUporabniškiProfil, le-ta krmilniku glede na zahtevano funkcionalnost (urejanje profila, brisanje profila) pošlje določeno zahtevo. KrmilnikUporabnik pošlje zahtevo za prikaz seznama uporabnikov pogledu ZMSeznamUporabnikov, ki prikaže uporabnike. 
Podatki o uporabniku se prenašajo skozi model **Uporabnik**, kateri z njimi nato upravlja in tudi vrača odgovore oz. podatke na zahtevo KrmilnikUporabnik. Model Uporabnik je generalizacija modela **Organizacija**, tako da lahko Organizacija uporablja metode in atribute Uporabnika. 

![Podsistem 2: Uporabnik](https://teaching.lavbic.net/plantuml/png/rPNDQjj04CVl-nI3UusBN58efkeX148ffG7JGkFwCBR6qbYhNR6xLcgvVfWyJDuhMbUMbCfEIG-5uCiod__VpAvbKrOv6in0iYAtoGcqSOaMjd4e7P6b7CxV1XshGPKUh9AM3fm6mt7Y86932yTQ2H0OatBmoMGi5QTVSsrmNXtWbVIXLmOtC1NRhOWuDfWdS0LRyViqpJ4AWvbGC5sob0ijjGdRBEisaaBleGWoD36hC824V41u3hSSkIHy0pR1dC9S8Yj7FnqijN8ACme74rHsGeQNWxtHSadXQ0GIvoJ3GK_nO2PsOhSJimRguAf6ScrqfQI6kf1hUZxKFkj9gD7heCRofty5k_byq7r_Tn3UijLe4oghMWsxBbu8MaztZ-pF6_YTfDItpsUgy_u3rP4RMBDyCJ4gBd71AtmnE5tHFQ8BOrEK--sy2_nFYFvVnt3uuSZR6yCD9euAX18XDvnY2UlsfbFihJuIHJ_Pb-mt6aDJCzUmDhH2jLeVofnLZHhdtB3jEaN_1HtjSOgldzuHqmBQVHZ23xbkGq_mDRCzeQtr_sNcwHYk3HLa_3W82ai958hkxqXnKWqZGbVLFAj4bQtWUa3Kx2Jj3D03xTEwRl6u-x7rV3EAgqoh8psNAr9-oTtwXVUt1YY1otdrtU8CFbuELvI9JfFtluR3Hq_g0G00)

Izvorna koda digrama :bar_chart: [PlantUML](../gradivo/plantuml/logicniPogledUporabnik.puml)

#### Podsistem 3: Predlog
Podsistem **Predlog** vključuje upravljanje z dvema pogledoma **ZMSeznamPredlogov** in **ZMPodatkiPredlog**. 
**KrmilnikPredloga** pošlje zahtevo za prikaz seznama predlogov projektov pogledu ZMSeznamPredlogov, le-ta pa v primeru funkcionalnosti Dodajanje predloga projekta krmilniku predloga pošlje zahtevo za dodajanje predloga projekta v aplikacijo. 
KrmilnikPredloga pošlje zahtevo za prikaz obrazca s podatki o predlogu projektu pogledu ZMPodatkiPredlog, le-ta pa v primeru funkcionalnosti Urejanje predloga projektu krmilniku predloga pošlje zahtevo za urejanje predloga projekta. 
Podatki o predlogu projekta se prenašajo skozi model **PredlogProjekta**, kateri z njimi nato upravlja in tudi vrača odgovore oz. podatke na zahtevo KrmilnikPredloga. 

![Podsistem 3: Predlog](https://teaching.lavbic.net/plantuml/png/pPDDQ-Cm48Rl-XL3UcsAKtfO2kgX5CfI2e50OPlaC8qdjc9P4fBYRXpotpTAR6TZEmlTmxBuOi_d-yoCNIQKGOivIA78Rmo1jZxLp3KEfMDoPE0kYdwpMbHPRPMqzE0rM96a7c9XQU65LWmO9gGylDXSI2MoiQLOwWJXIeR8PuiRcBBjbiKYiMXIU8OjExvD3SOycZC5qwMGSg6bjloKvVn64WyUYY57cmZ58qWf1F0x-1InJ_ajk1GDSIDHA4y_FIoryWfpueC9AZSXAvQ3Wz69alXe118_IF91M_1WpdPijsFp1cb2vRvGvTT5HVGer_HreaFM7ub6Dr755Dx-bkhzjQNwX5LHZNMCFXEjFVtlLEUgkr17-zZg5MM-Xlf1KkhFhsDLUVy0hAMxm_LeNORXIk7gMnGUnZe_sd3uq3dLUtZ7r5E1K28OAp8imHrYmcSTPOvjTS7Q-Q5cfz5PqNY_a1Mg5TNri2w7_H9RTzUZS2RrXyLoWU307AERugnzjXSKDbMDXhMbe70zars9VS3Di7kRdRmN-CvNUGzFboTqNMlhcrxxbY-Glbabe71D1JgjynfciWZkq8LKVyWXe7902QBSprw97Bu_3LUK_m80)

Izvorna koda digrama :bar_chart: [PlantUML](../gradivo/plantuml/logicniPogledPredlog.puml)

#### Podsistem 4: Novica
Podsistem **Novica** vključuje upravljanje s pogledom **ZMSeznamNovic**.
**KrmilnikNovica** pošlje zahtevo za prikaz seznama novic pogledu ZMSeznamNovic, le-ta pa krmilniku glede na zahtevano funkcionalnost (dodajanje, brisanje in urejanje novice) pošlje določeno zahtevo. 
Podatki o novicah se prenašajo skozi model **Novica**, kateri z njimi nato upravlja in tudi vrača odgovore oz. podatke na zahtevo KrmilnikNovica. 

![Podsistem 4: Novica](https://teaching.lavbic.net/plantuml/png/lPF1Rjim38RlUWeYlIw5qtL0Mq0x50MAObWl0GQiMGvCpCICPSgGr7Hna7TVvBYfxHO3saFXY_IJ_CLFj7pEKgB30WmBXKr9O5t8hFB7WDYKF9Km-fQqL8UIH_NhvOKoj0WGB3XUPW5ITZGFR4M1mYL9W1-kO2EStzirpn5EJCoxTRY1YTfkLSfBXsK6jx1LXzMan5GdKoKmMR0nSskiqozLFcmCwHYX50fqInQTG4OnGP_34wSXqsVWCon9bmPP0lqDiB0I10lIWp6A7vFZnQ0MFLUaHoCmE2EZ1zrs1rErKxkTcXvnnbJjRUfemt9j7kdzB7NLVrb6fqb34rSVvNdusUhu1KSrE9sf_2PZxDFxMPgwJw3fJwMXk7O-npWrEBb8ugTKxxSR3hztHdS53vW5MYDK2ANZ72lmTHpXZv6OezhviRvdsR58ROehb1L1NKjVzYupnxwMME3HKJkir7DVzRDvonn-EM5O-xRZEahHYiGUP7kK3rkeWAlP_dro0NStmnKLhsxY-SJ3_WfktcYzrsw7fY7etyvn1ly0)

Izvorna koda digrama :bar_chart: [PlantUML](../gradivo/plantuml/logicniPogledNovica.puml)

#### Podsistem 5: Občina

Podsistem Občina vključuje upravljanje z pogledom **ZMObčina**, ki prikazuje stran občine. 
**KrmilnikObčina** pošlje zahtevo za prikaz strani izbrane občine pogledu ZMObčina, le-ta pa krmilniku glede na zahtevano funkcionalnost pošlje (dodajanje, brisanje in urejanje novice) določeno zahtevo. 
Podatki o novicah se prenašajo skozi model **Novica**, kateri z njimi nato upravlja in tudi vrača odgovore oz. podatke na zahtevo KrmilnikNovica. 
Podatki o slikah se prenašajo skozi model **Slika**, kateri z njimi nato upravlja in tudi vrača odgovore oz. podatke na zahtevo KrmilnikObčina. 

![Podsistem 5: Občina](https://teaching.lavbic.net/plantuml/png/rPD1Rjim44NtFCN0sJg5N6HH160NGO2WA8ekj6fSByRMo1gB8WcIJcePFa8FqRkqzogfAB8Tfm7IHO526-B_cS5_GyhNh2qwR42nfh2n1CQ5oWW_6DeKvCd2HPOTg0vr_QWgAWC40uwNLO227Iq26or0u99qW8-kOQMv_ZnVi4OuKwdknk46fcAx5GKl7TeARc0h7avJYuNCPaB3j6Ib5aOP9_TTFcmKoUHG0Gsw9MkPGKMfG5x0FHUXac_1LsX9MeMi0tqBK1eTD3OaHpbgdvFZSjI9dbkIamaed9EIettSdzzZtj5CxCHk9sO3JnuY_H7CbLhJws6whXTX9c-o7YUT_XRezjC9Iazo1F65b3BthyVe-_u1o9ymSiNr_qFHfJrXk7A-nlJiuEnTbZuXdlmtv-VlZvxU9TnY5UWEeKMmBWvjO_peCvXkKIGEorFxaub74zQELgXNQx2cm52Rkt5K1xU8Oh8f4WKJbrdoYiHBe_lBWXQudQTK3Nou7iDNvQsZXkAeQ3u4nUTGXq7vKCzzjZtWiplgNiCbNAV81t7Dk4l2ltxmeIfEjZHSnMy0)

Izvorna koda digrama :bar_chart: [PlantUML](../gradivo/plantuml/logicniPogledObcina.puml)

#### Podsistem 6: Dogodek

Podsistem **Dogodek** vključuje upravljanje s pogledom **ZMDomačaStran** in sistemskim vmesnikom **SVGoogleCalendar API**. 
**KrmilnikDogodek** pošlje zahtevo za prikaz modalnih oken (bodisi za dodajanje bodisi za urejanje dogodka) pogledu ZMDomačaStran, le-ta krmilniku pošlje zahtevo za vnos vnešenih podatkov o dogodku. KrmilnikDogodek pošlje zahtevo, ki je odvisna od zahtevane funkcionalnosti (sihronizacija koledarja, dodajanje dogodka, urejanje dogodka in brisanje dogodka) **sistemskemu vmesniku SVGoogleCalendar API**, le-ta pa krmilniku dogodkov pošlje zahtevo za seznam dogodkov.

![Podsistem 6: Dogodek](https://teaching.lavbic.net/plantuml/png/lPB1Yjim48RlUeeXU-qMf-oX55JeTY6KKYW4UjWqXzbuOayaQuoaJHk7F4BVgWzMA_4w6sCAtKFnHSne_la__Gw6NOqUAx3iAEvg0l6n51NwXfES0jLmasNFgXwTUQfQMaU80fwBCaBEdbQHnIbGM92ByDbNR1sREobQBGDNDbsSUTp1GkttAkV2Ort23FRgT5hKcEjigHmircpjIgnuVPuASMT9fmxbKA4lsEaCIaeNz0tyu3oM-Ws44clIjKLsaNv6M8kB3YlIapcwC2VFwycn6BWXFPs2nGUoUZBmErcgWpeSrB87klzo9nMkS1xRP-XmRkqZ_JlESUglEDFNMGUKJYz5EZd-_Uja-KpK0Ss_pKGAIn_HailHV_ZwgK-9oBqafZJs7y26pg6r_WoluxlrmM2A5AxUPkbJQlXJNb-_7-Jw3kwnZBH5Q11gpmORg2HFEYM8QVc-szJAsze6tOQ07JnwEftpf6jGNMgcBSFD5tksJWBKhM8qikr5nioEPNOX5RZquhZ15My4ZBGXeD_WgsJxxBbRSQmEpIUW1y_X0cXixpZMd9esmcvGjchaBVfW_W00)


Izvorna koda digrama :bar_chart: [PlantUML](../gradivo/plantuml/logicniPogledDogodek.puml)

### Pogled 2: Razvojni pogled
**Razvojni pogled** sistema smo predstavili s **komponentnim diagramom**, ki predstavlja najpomembnejše komponente glede na vlogo v naši spletni aplikaciji. V okviru aplikacije bosta uporabljena dva tipa podatkovnih baz in sicer **relacijska podatkovna baza** (MySQL) in **dokumentna podatkovna baza** (MongoDB). Prvo bomo uporabili za shranjevanje podatkov o uporabnikih, novicah, predlogih projektov, občinah ter organizacijah. Drugo pa za podatke o slikah. 
Podatkovne baze smo označili z drugo barvo saj se bistveno razlikujejo po vlogi (shranjevanje podatkov) od ostalih komponent. 

![Razvojni pogled](https://teaching.lavbic.net/plantuml/png/fLPBRjim4Dtp58IpDf0K29fk2YHn0mG54YDfk-XdGKcKGeaM1KfMMXSvGcwLWvNYHnhAf66WczQQUVCuCtoSILknkY6IR712qggGObjdgU12uawIkbKkMdUe7L4PpScMTr_ex-wIiwBUA3TErJzK0jIbbEBvMjCaNF4YuAj5HblQuBDtfy2g3gkS5PXJiMb4FPpn5-6z54yktcSVydpm29bHQQs597_G2uOyR4Wm9oaDyz2B_3pFvZpdDrSNdwxH2q9J-68jMKLsgegUfNI1IOkDvKuRS02QYGrvUwMu7JhAGCXAELBwgCsXm9RkQh8XvYmGzsZi-aGlRYKoKfAwf32zqMWoXFZRNSAavQUOZIVgEECqGRVkp42MZUBlAj5ZWKNozigy4jVMUN-VfCeJ2F_96qapBWh5q4XHqgeJFMHmthLp7Y8XZeFiKn3BG08jY14Ozo62gUTXXj5_YCIrKegSSJzrRK5eUWWBOxEWuIS-oPByDC-n4lUB1rrfwH4ZFPkEqXpHceDX6BoqpuBJZ2ZzFp-nZdgknNUIpUHbB5RzeP0xKYQ2bweunijjmakgr6vxPQHY4Mi0iCrYZj4lwu6geSBAjYAZ-cgYNlNEj6vohqVlbNBYapodf_JC59mBhfuw_je8IPAQLMT3w6ByN4p5MAIkaHYO-RsFiNcxEpPWQmIwc8Vfrs7Hz_eHXK2oK8DYDvJceC2o2BTg9QhjCAFhSAiczn6jUkHAak5ZxaZF2dSdlMmxtHrzj_qtynbNgPajOCmPWvblqIXt1SCX-cSSEhPKOKshOzg_4PrwefnArT6Gcc77mvsmnOn33HGqZh9ufXPY7xUHJHHysNVgVtKdvlvLY6U9rVX02pOCX3HIuteeleVbmQ6nv3JlbjxIGzu6N4fMF2c4kHG_DXFFzJAm_L1W8Lhm9204jEGnmNs80YlIWe6g45IOTS_tvEnxpCUK5I08ByoWTKOMAso-FODM5sA47UVQtwCnXz-mqJ_JWRtco8eDcq6KTY2dSQkgoBeDcrtGFCtvOtDdnZTnr8ENssPA5hPsLhtPqjuNm0pV2DafjVoHaVQ9Ph-M7wER2aNdCeosDsudsb6yOx-F0-k_Bex2-fFdFqF0c_Sa1o1UC4BUJ8CuEyp-0G00)

Izvorna koda digrama :bar_chart: [PlantUML](../gradivo/plantuml/razvojniPogled.puml)

### Pogled 3: Fizični pogled
**Fizični pogled** prikazuje sistemsko strojno opremo in kako bo programska oprema porazdeljena po procesorjih v sistemu. Za prikaz smo uporabili **postavitveni diagram**. 

![Fizični pogled](https://teaching.lavbic.net/plantuml/png/ZP9DRi8m48NtEOMLhbEb_4YeGf72JoLMHOGb6nDFmCIn8yS1HCKHUgMksdlLCGcaWKZTHFBC-zvpPfp5bATOuWIjSHXlfCWv2GKJ4Yc9UQPRm9MLNLK48fmpjOIZyXdTy4ItKQW_8AsQp9TI7CR6PysqSQs5fQ8H3XNwiD1Tw1CCedv4YewG16HPxR-D1jEnTQxPS47WOl5Go21II0aawMQh4A4IGaK5jmnclvCT99XfjnMN-FipvvXn6ji8PwZiGOY6Gm9x6eBdcQ0B6gGC5DVSMcRnZHfLfoPrrfUva7D1i8h5dcCDunD6BuQSZvh8TKBs0lJmw4vRhtZQm6ta1qWB35yXdjSUrodZEkrv4n7dnKPvMzv4X6rvry5aIiBFLpMOiXpeukd1U6xPb1CuFczLmWmtAuwFanRJO8dy-QmPvQV_Zjbbjv1ECyMg6pbvwXGxUaLxYPLUMg_R_IimJymnWws9UbRppurJdQpKNTTrxzL47BXJUusLUk3-0W00)

Izvorna koda digrama :bar_chart: [PlantUML](../gradivo/plantuml/fizicniPogled.puml)


## 2. Načrt strukture

**Načrt strukture** sistema smo predstavili z **razrednim diagramom** ter opisom razredov. 
V okviru načrta smo upoštevali tudi dobre prakse v obliki **načrtovalskih vzorcev**, ki so opisani v nadaljevanju ter označeni na razrednem diagramu. 

Razredni diagram vsebuje **poslovne**, **mejne** in **kontrolne razrede**, med njimi pa se nahajajo povezave z razmerji. Mejne razrede smo razdelili na **zaslonske maske (ZM)** in **sistemske vmesnike (SV)**, **vmesnikov do naprav (VN)** ne uporabljamo. 

Razrednemu diagramu sledi natančen **opis posameznih razredov** (pomen, atributi in metode). 

### 2.1 Načrtovalski vzorci
V okviru načrtovanja aplikacije smo uporabili **4 načrtovalske vzorce** in sicer:
* vzorce **ustvarjanja**: **Singleton**
* **strukturne** vzorce: **Decorator**
* **vedenjske** vzorce: **Iterator**, **Chain of Responsibility** 

#### Načrtovalski vzorec 1: Decorator
Načrtovalski vzorec **Decorator** spada v **strukturne** načrtovalske vzorce.
V okviru naše spletne aplikacije bomo uporabili **KrmilnikValidacija**, ki je nadrazred krmilnikov: **KrmilnikRegistracija**, **KrmilnikPrijava**, **KrmilnikUporabnik**, **KrmilnikPredloga**, **KrmilnikNovica**, **KrmilnikDogodek** in **KrmilnikObčina**.
Nadrazred KrmilnikValidacija bomo uporabilo zaradi prekrivajočih se elementov in metod ter z njegovo uporabo poenostavili primere uporabe. Z uporabo Decoratorja pripnemo dodatne odgovornosti posameznemu objektu, brez da bi se spremenili njegov vmesnik.

#### Načrtovalski vzorec 2: Singleton
Načrtovalski vzorec **Singleton** spada v načrtovalske vzorce **ustvarjanja**.
Ta načrtovalski vzorec bomo uporabili pri razredih **ZMRegistracijskiObrazec** in **ZMPrijavniObrazec**. 
Singleton poskrbi, da imajo razredi samo eno instanco oz. objekt in priskrbi globalno točko dostopa do objekta. 

#### Načrtovalski vzorec 3: Iterator
Načrtovalski vzorec **Iterator** spada v **vedenjske** načrtovalske vzorce.
Ta načrtovalski vzorec bomo uporabili pri razredih **ZMSeznamPredlogov**, **ZMDomačaStran**, **ZMSeznamNovic** in **ZMObčina**, ki vsebujejo podatkovni tip seznam. Uporaba Iteratorja nam bo omogočila hitrejšo filtriranje in iskanje po elementih seznama.

#### Načrtovalski vzorec 4: Chain of Responsibility
Načrtovalski vzorec **Chain of Responsibility** spada v **vedenjske** načrtovalske vzorce.
Ta načrtovalski vzorec bomo uporabili pri razredih: **KrmilnikValidacija**, **KrmilnikPrijava**, **KrmilnikRegistracija** in **Uporabnik**. Chain of Responsibility bo omogočil več nivojsko preverjanje oz. request se bo poslal od krmilnika do modela, ki lahko po preverjanju request zavržeta ali ga potrdita (pošljeta na naslednji nivo).

### 2.2 Razredni diagram
Spodnji diagram prikazuje **razredni diagram**, ki smo ga prikazali z **paketnim diagramom**. 

Razredni diagram vsebuje: 
* 10 **mejnih** razredov (**»boundary«**)
* 8 **kontrolnih** razredov (**»control«**)
* 7 **poslovnih** razredov (**»entity«**)

Na njem smo označili tudi uporabo **načrtovalskih vzorcev**:
* **Decorator**: označen z **rumeno** barvo
* **Singleton**: označen z **roza** barvo
* **Iterator**: označen z **zeleno** barvo
* **Chain of Responsibility**: označen z **sivo** barvo
* **Chain of Responsibility** + **Decorator**: označena z **vijolično** barvo (pri teh razredih bomo kombinirali oba načrtovalska razreda)

![Razredni diagram](https://teaching.lavbic.net/plantuml/png/hHZRRjisz5rV8RWlMLiN2R1sXL44IEmcA8h5mO86M8OzK19Zqv95ZvGLn5i_eH-nV-d-QuSNIIGbsLJIFZJMuRdVU7XuIl8DOcWTJZF4UVXt48OHYjC5eziycTACil1XIGeiu9Gbc2dOYxSNv-y_JW6A6ACF2XXbG1by3NZDj64LIuo2ePp34SwBO4aI7CQ4nHdsf6YmSffWZZVXByS6431J0VpvRH0eQqPVDfIXA2VfA4GyhB_23n-07oaUJq_35nbPB8jBXXwbyMEIJ49UC98lvDSQcvyRHW2Icg0buijBp3Dg0bFyQ7xoZAIebeucuOq0_F6dECDhH38JkS0PlgSvJz5DWKkI2VpcbD4LBt8oGyLsFGaJ92CppX4eK9fuQymBIoKQnIG7LdFvLycc6y8jvdX1n1TuSfuqtCkCBf3j1fm0Z4p2Q_LBiSjfIMBmrvNuMubW2vIJ7Oh92axcpPS-7yD_hnAQe5NjdwDvjC9n4JByr-km_ir_ceGb9Od0BrbE1g23kYLcv0pqZxO5hWXGAjG0l8ZI3AEyudpBoK0LFiqE4sp1KyCeo2vYX0-W-Lhd_TsllwbG2az3XSmZXdOubbNGSmOr4OcoGqnMnSMxsMmwbINn2kAL4uE87dL9dD4r-luDaXQoHmiIe5X17FQww33EbGW8qPQl8KXNI19HINHa1H5APcTmx5JYca58ozmns84UCbMXTrjPHUE_VrF0e_SaqpAg0rx1kom-pxPO2Q896AJrkKDV65wXV8KL9UgKV8DtELhNsK1BBRW5toEupKyNiCEjXXu8cst5J9InCaEI8p1dXTDYdpsoLrYo9UHfSYLfTru0IY4Y8nMhqi82xekN9R1Jm3pw_WtwgkQicknU8_eoGEf4Iya1DmNGP_85BUY2eNjehnrwtTnUKhh8y1HbMEWHdbr_aYgw1m3VQxzeToeyCqYB11JyjFiCNHEmLyZGKbKfaKWuxSQHdL1Zt5O8smxjFxCroI2bRr564dbdIDqhy5bPY5iybIUWVKppWj5CA7z-_lvY-b7bIbbJwmk0bbKVZMZoQFJ_jcIZwTcopOD-qSp0yhXIdg6eQbcsZXhMhzv68Vn8pMHjUZ1jMs2FQYseRSKZpZBweApWRl_pl8jLh_M-XdtHTGNueZylwAhDEb5Nm4CEgrly09CaHTtK3zBn9LpJmya6PHk7oM6DeJaLC17puRAWhrsX5PHAjjf6sGeu7IQYCNw2MP0EShHUELUivk0J26Z-9UC5wULGZ-DXDQA_rcDxC-swp0PNgXhlhQHJe4Cffwxd7nn_cMDAldScQtJj6PAqgtqFXaYPEvHKumOUx3zpL6XWUc3eSQ1IN0yiUZRmhJz9X7s91dbVFjoQ4OHwTzD1D3fgAkkb7HwswxwW73iuHdeyiMAaOVr1ajxGM9wNa3Uszbk5tvcOGo9d3sf-ZT8U03rYG9QCmdDVDBt34QX2C8Vkgef3_chlQdvlNEviQxRrKza2YtwD9c52eSDZ8zX68wiRcBUizigbv3YIAvO6b8Wr3LYBIjoiKyRcei6zYwGUtli4VtIhh_aGo6JMRT1H4lI-WCiCC--oalikzV0GluRuMUxEQa33qkoYTVTyHlJkHKU2rv2OYQq5dRiaCpPQW5ZFdSOwI_X8gUGTI4zqiqmCDPGJ3C3pN06J0UZKuNDdvf5Y7TZp97Fm9es9lKnrr068U2ON38OriwMfOclAJ5IzM3cAudU2uxtXSupp3kSJw6IzkKFbqmklta6CJjwyEGb7u1xwa8zFuPS0ZDelB47JlHbiin3_R3RcWpW8Ef_9esF1nk83a9UZq5B1tTNLmfb89aTwZyQIZxtSyR71qiDTX7NeOLDN3w_1HZZlzS1zlpT-QwWx77SWTjtkSnGDWhRq_GoCXMpGUe8gpTi1Tz8y4EgtzwU3CjVS7HuCbRhM0kVrKclhkbcZ1s7WZEjzzgdZhYBiqwYXQAzp3n8RZWZQYvC-9IttcPlwGtxNC-D0Akt4OKHDJGNk5DucFPQa7PjDhtRG9xYpbS6aEVxdj7iJsQeWB-GcNaeb3-wwoBpOwnJtv5tvs8krJl6zk85P1oE9A_FIIiD-73cD1KPAQnHL4DLd2qiHAqOAHPUPpUbbbGOLXTkUskYLOAi_jD4C4ypfh4z7ZIa6ba3DoQDZsnSdjR3USqjGBvPZuly0)

Izvorna koda digrama :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram.puml)

### 2.3 Razredni diagram za posamezne interakcije (tokove dogodkov)
Spodnji diagrami prikazujejo interakcijo za vsak tok dogodkov, ki smo jih opisali v zajemu zahtev.

#### 2.3.1 Registracija uporabnika (PU1) - Osnovni tok (O1.1)
![Razredni diagram 1](https://teaching.lavbic.net/plantuml/png/bPBBRjj034Nt-Wh2sRX0hQ2F58KH28ZJno9jKlInQ7VKYBOd7WqLQcJ7-OVyLJwi8pcIHgtGnyA2HTvxvWwfjSu8bimkvTieAZVQ5YYOGufginAkRAROi80JjALlaNM1AgCbLiPzfLjtPlJAvhuDoZz80XKgnx9WoKZE6rXgFFqtGNVYGRHRQqUXI8HtWHyWQ9PqKv5Lz44l_SzIUDhHoRl5wxVd8-fFA4uhNQ1r_syOZHirLu799GcjTEb4-xbfg0eMJAtUJ01B63JXzBJn94bKz7IO_FZu-I12fQzzagjKy8vK0tZyxwrf7G1bdoHmv1UmTWjJqQ-WDvpZmpr-gNVO-Ek2Ehp_6-D2Scry_20IDgIsuJ6AhHCs7UMzu7v0-TOEmOlz9w9TV-9tCePtKJISp2nfRpg7Pp7SeR8wIC3J9_MuzHOTjSAe7Ottjjdcy3m62P9FXMwU-aeP-5jnrDreG7WHmnQDpXh_cS-NLewtqvIp_HWaep-3kr7CuMKC6MTutPN6qdNDg1_Y47CIGo6q9T6FwMYAcphiA2N8rnVxNSvc8Vhu64h_nW_tsZ1SNVp5xNC5tzSSNZN9gZBtsIwnQN7JykiRcrDGQvVQ5GBmJm00)

Izvorna koda digrama :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram1.puml)

#### 2.3.2 Registracija uporabnika (PU1) - Alternativni tok 1 (A1.1)
![Razredni diagram 2](https://teaching.lavbic.net/plantuml/png/bLJRRjD047ttLwpIbt99rJuWeQYgH5ke4A91L201uc7i7PA9rpjXT-CgGNm2VyM7CMidyLfDIvCNUy_CcNCyEnbVafs3WqfT6F1U_SgKog4e9uuNLb-mOQTkfnGmukmqkXOxUF7c_ENh2q71ERvjmTm8C_kT-MrHGnR3SewANPXo4kWqYeOQ75Wl8RGXoRAiqUDSdHmV9wYabXjqIXfLGQumc6Nj9mo-ll_WQ0QrfN7kO8N5G85NTr1rUff70-2MPsVgmD1a6ixD0fiUF5j1OQbbyE6JaQgPj7nQf_4H9-J5Ta4piTPNsXbxX5x2soNwpbLaB9L96ZIAkm8YLx0DZirMxSh1ibLpIUBXE9zX4PJ3dy_Lzjrlv2Mx1aEwoNqL7EMBmFM6bBDUIcRER11iulNJd1taugank3s9AxbY2bqBlg0nVDlO6f8UAR55TjASAaoFSqU2b2aq1J-zGcyu1KjSfaTlg8IjFepKJGI-VOynh81CcXpGu0-sleIRW3MPcDz57Szyi7G9OL6Db8RcNp6q80RgDAz27tgME2_8IgbnysorUKw-Lxoz4fBf7kkkUcru0lqse1QCHkf3-zQMirnJ8VswZi-DX9k0fLMyEOcCkzCwFeoNgrd3RDkVHmo3ixH7kjYjqT5wS713W3BQI2PdNVcpfpqjlBtyFs4XdTgFGQlSaT-3aww6IwxWxnyP8RdBzKQ8KD4Y3-y1wTV2LzAnQsWut70EUnsL-Lqb1TDDSNVB3KwEZaxKG0Oi2WtFv3N-8ZguRrLbzwsm1uljsaBPpjLqjymQw3Ng7kvnJErx4EZfe5io_m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram2.puml)

#### 2.3.3 Registracija uporabnika (PU1) - Alternativni (izjemni) tok 2 (A1.2)
![Razredni diagram 3.1](https://teaching.lavbic.net/plantuml/png/TL1DQy904BtdLmpnOgcA7WgbY52bxQ4KeSVUzcCmOzOTExigiVI_TvCGcuFkQNWVy-PjACdlbQWTh9mA0Nuo0ArCkH4-UBjYnmAdWYBME8j5QR71m-loyMMLK2N2fnRKBZcptonSbZho6Aiz0aiik4VyPvZ66aNva2ZqiQVoR37W7cRJQGzDqh932x88XiGupBAsGlxryOaR2ccbeMsohRMeCveSL80R7CpdkZv6IRLOmC3HfeXBTy3cF-xFodZg-NXuzmH79fkwTg7liYFdgUp9L9DuZKXnXdqKTfUqDr5LcoOzuN2jjsWY27wFu3A7BZwfZygHRRJFKKWV8XyxasPR9QLcTgXyVUkjzlbiCfb13cEfJnalqbY_6isl5lW3)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram3.1.puml)

![Razredni diagram 3.2](https://teaching.lavbic.net/plantuml/png/bLDDRnCn4Btlhx2sb_AHAZqWeQYgH5Ee488WAf00SPXT3yba7KyOEribYF_EUBT97AaLP2-stxoPztOy3Wtv9GWipDX12EPtOKm5TJCLNdaxPiTYxcOKCU4i5gN7JbwykNhvUgmeYF1T3rPECui_HTWLTUGnhfTeMEACiy1Ue-vIeu0F6a8VCvPdYm6Nvdmup52bDbjqHXPDJL8xB8gY_uVos_jFEAMWDMkQQzwa4jXWNHe8vf6OkRYeaXkGzUMbEN4qdSKhjyAk8SysK7lAylZqoSYqJ5P_TYlwJXRaF3KP3Jh5Xm8gLxEFmcwdTYEmxjKa8vvEgZdMqGZ-Ucvs-x2LLtOBZcp7VHM5gbNaTfjKiLqhis9s23xp-dd90fLwwWpkJkfA-qzntuAlw1pVTRO6P4T6RP6VTgS5viUba29D3iqWp6umECx11jVvCJXgOASF8tERWEy_KWmNG2udHtJuatreu3PYIoxnzr7XUOYUhY6k5YDZeHlPWGSrqEQy1OPuO8chchoMcdHhhyrB2WV5-oiX7Rs9tLTl7K_Xi0re5QEH-TZl-dAUMwgrNn_IkfMGANZQf9lJo6H_keyFqkLQjZ3VzUS_Xa4y7K5NkoqAtGyERXEWIJQooRcl_2NGaHRUNlyxOQMTEYw3DfLGE2979_-nTr-UdvsTcrAlECtxu5AtwKje-U3JBHvyp-KmbJciez3JSl-w_W80)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram3.2.puml)

#### 2.3.4 Prijava uporabnika (PU2) - Osnovni tok (O2.1)
![Razredni diagram 4](https://teaching.lavbic.net/plantuml/png/bLJRRXD137tVhnYbB-MIAdb0Gb4LYRPG8KHJgG8940_U7PCuEpiECvEj4jHFuA_uC3oxoLuQ2PfzsV7nERR7OzddP5VWe52N1hnNlnAbKiZokUErrPTisAdx1GMCE3kDhiPENhsxUFtsKb1mZkzhC3MYJ1uItmGrP35iLgZOXGLt76sEh9861zQB2stei2nhzBXIuz6eWmertwCBqgWoSfd194dgEmo-Vhnrj8JIqYnriCLieC2h0rITdwUn0d2RwLIT69elmeLPOzM45rl8BDKAFdqsKIMJbhljStnm1HbBUSs0AiCZJE9dR8DZquI_Th2fmwzgpkaiNM8MbCEVBrLpzljyGYp1a8PCs6-2etGTkDoBKjOROQRC1i56Ckid16qlyMd53bAfk2g_iQHmUGSARLk-e35yNrK-93rHNagnyyegi6lAjGJ9kz02_E8QlU4kcEEcQtf3EJJvOQBk8l3jU_HX0MIwv806Vx3rETm5BCb4VkjrlFJ1qXM4TJ5H6ghH7LgG0iekhq0VUYLncf6LKBFgN-Vc5VbUS9nJj6G4PxgDNXgUGxyDg0MZYRgjJtKuooLbqg-R-D-dS7Emj8qlB9vPQ-tym_YkcZKic_uyOMYSfIFeKcw9ZdO3Xdi1vB6C_eJ5o9yz7Ld2-wl_2zRIgUCKj4qT-ICq3vqLSSK5_Faj8oHlkTiF4SfgvD-xGVgrzeLqx0Og3LUQqrv7PNwtdO3T5NAuYGRZixEn6iY0nKJ3gHpZ5z71uxMIF5upX-8TqBlHeMmKMVsa0ZqVj8lWBm00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram4.puml)

#### 2.3.5 Prijava uporabnika (PU2) - Alternativni tok 1 (A2.1)
![Razredni diagram 5](https://teaching.lavbic.net/plantuml/png/bLJRRXCn47tVhx2sB-MIgdr0Gb5LYRPG8KHJKO44Y8VPzP1Crki9jhDLWlW4_eeFOxpRP9sKbYOlQv-PS-RYoVYAx0mSrEhCWFVgPwPK0MKrTZot-emDEtKpeO0HPwVHTTZUYpUdBr-V2GhEyKq75aQOsQ_ChqKDMGoB6IfsOSA9eOzHjjJWm7eneGs9bsMD7cVgwF0mGSMrMg4JqgXASgN1BCkw6l8lxp_WcBnebZGLtgXmiCGoL-3LFJPrV5p4RC0jJaxKdg7n99oQERODURQ4qbB2u_qdGzKmQIcs3thbQ0gDtGgtXJuYKCVuLunthYPZgUeye8smXOb-oJOuDclv2mUBJdxM-UoFYYcMGJdyyLojptuLJnmRCAHZfV0gE2hcWPiLgM2z4C-2sI3OwCpw4Q9z4HzdxA2GZDlqrpT9N1wVGj-MpsWCtxIP3qWFbJIVxBYzrPXUfIn1gXIQW9zSe3USWXKkqgitLC4wFWpLTGI-Veish85CwXpGu7UsleBhW0sPwDzR7Kzzi7GEOLuFbORs_pAm80aqgL-DFcoan4L9LgH6xRUBpJFo6-BTu97C_KZtwetXCMos0RLWD5HNtQcJiznGAVswZDzL23S6Iylumc8PzRTR-o2-gsODqtL_7Z4qpj8Exf9kWuvk1mnN1AXY6fiJ5fK_UTenXRVd_oVCfLExCMXPEF8xSD8LSSur_Faj8oHlURiV8bHsoCExGVerzxLqx19Q3hUS_OsEolmk4y5qXTot-FAZWuCZbSkOnN234pd6NqJpk-ihkxlG7XJOsaxPzhRA3oDvaotGqxnV37Sv3sUSrFyN)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram5.puml)

#### 2.3.6 Prijava uporabnika (PU2) - Alternativni tok 2 (A2.2)
![Razredni diagram 6.1](https://teaching.lavbic.net/plantuml/png/ZP1FJm913CNl-ocQvO9H21nCZ24aGjI3CNZsrlaJjkmmNJl3aiNutPrbiqZWufmclxw-rpQKv2iKtCBIOGZmdG4erELQUEVDaXqBx0kAjkKinah71lSlYuVdPQ8emliEAfSwivyid4mTUHkRoW9BBFYiy9UXZwrHq8TKiZwUgJmR6sm5qydaZ2PfsTE2Z0LDeftDicw5_FFzGsY3jQUL4ZnOdGC6kA8mcwbs09HcFeU1etKH5svdZpUuFQ3sr7NmyEOHQYQJLkiptcHBpbFPAV2OSC6IlsOVXTt9_bMmwUohJZDSgOtL4SH-tS7f7_gy9ApHaK6Tr4zHIEqYrtsJOjCafM9s5dqhPlCFqxJ4zItowNWyXHn6qiuvcgTl-rgQNoxs2m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram6.1.puml)

![Razredni diagram 6.2](https://teaching.lavbic.net/plantuml/png/bLHDRzim3BtxLmZkfVj8aHm6344HO4stOXYs52WsO1jse2tEOQo8cQIuI8hzzr5s_P7qiCONYO-Fv1D5sPTaD-1WhUO6l5SFYL8Pv6NXU6lrd0qxTR-aW15dfz4rsDcR3rTltyy51UVulW4p8v79tyHtIGrP3BiDAdPXoGD7NoElGuC3wyM5DWnObZLwtAZ9U3n0XLgsw98qgfnSRZ19cYEaFpxVEbf1PMcHETXZdYhmwWcgBY-pA03SRZPJPuQAPRWoMwnxy6eFkQKcWizVJ5N5fELeROrFRat6KjameAvmX4d-d6rmRBhqDmvsJVfDmpbVP2lCWtBuvxNgzhwj9yGA36d8XVqkECgsWQisA6Ez4sR6R11i9BD-HjB-45ytx20JnRNypXBXSWqK-hPyHsFulbO-8ZrLNgJOehRME3JbM8AKGsW9Vdc3tl0GB74tDBsX4hhwC5Lt4VZvA_fm3MI6v806VxFr9Tm5hCX4VkzrlFB1qZM4xNggDDIJEx8W0geXRuq-74ZYB2ShgHRrsjJc3Vc3v5XGj6G25xhFNXakuB0Dg0MZgRfjTaqwonNbqgylSMrBk08ixUCDYsVHMu_-KRnNpHfMNN-UCJJEqWbqaLkXeyS1mpO0oYZZSC9Yvc-UJfJmyVh_0Llfr6aHjCyS-HDYPFAV_WNIoSN5HALokN7IHpFPnY-YwV6JJewVU3gEmOVH0hrC-zVq3m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram6.2.puml)

#### 2.3.7 Odjava uporabnika (PU3) - Osnovni tok (O3.1)
![Razredni diagram 7](https://teaching.lavbic.net/plantuml/png/ZP1DJiCm48NtESKetHH1gtQ1X51LYPQV1U97OiTkObkD6ySJnawhW3W2j-9Ws8aQGbTuPNtptioySOMs5JAMi3Re77ma01cAOiDKMxacGmpxN7iLER5KtB7H-UtgucOTA3BJleEP2SxaCt5zKwEjyasbWDZdD2ZypX2jrJDQ5qhA-e7AabHELJ2VpGOqI8i3pRLK83GBevAaYv3USwcDrSKpwotkC0LqSCHWiH1aFPDPBc5az2RtTunD6_-qwZJZfsohX0TMRsVG_zt99Un8ooZSeT4IHL1VUTPPxMbtC6Kacw3CY8n26yKa_z7qim_n-d1D9Nv_uKiyJPkXGw8Z8K4MpuVSz15MfbQ72AfsfMBzYAs7Mizui7i8MU3xeE5uiCFnjTBvT3g752OSnqoMuHjVfEdVjNu0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram7.puml)

#### 2.3.8 Urejanje uporabniškega profila (PU4) - Osnovni tok (O4.1)
![Razredni diagram 8](https://teaching.lavbic.net/plantuml/png/bLJDRjim3BxdAGJtqlsaI0u3Xg08iAPRCGnR2XGTi0uxq1QRC9R5Z59S9CKUPW-pzvfanx6335Xoildn8p-A8kLoiaiGADJ4W7FgkQTK2ba-4rvPFM73efxcv37YB1gbnixUVBXw-tuIK13XfnfCJOZi_UgvNL935lrwYOh5pxdZQ3MoAjGBM1TSQ7s7PLcZmwKQ3WOTD53p1fsJHfMHP0PxlVe8oSFd-oKBf9R-_CxfLlYHJAB0gTRX6bnTNgQn2f3rUApE3Ctc_igii6h4AzPBeMagiC7i0Uu55s0NM4V2-OkHAfbqE72Z_4aACfRoHYQlP0_G89gnzS9cftaZiAur7Mui53ikb-VJT86PLu8_NwlTlslKGyXAK6_FytyoRL8XTpGzD227pT7q4Wnfo6W1xxnGkl9j_IdhTM2cp0R1ngurRTjlLxTDOHp8jpVp3OtXfwfFVT8ZvOA6dLLMWLqpL1sGl0lDmSrlq1dkWZckkwOpuR0xVHYfkmXy_n5zM02PBjcZmKUsBeSxZoMPo6-zmWldBLs3NnKZfQ7QeBw5K43PvHNe_5v9d6PaGwffzQsrUKbkBpdEA5fX4wQwpLuQdi5-6r07Z4RgjlwhqrakAGlz-XA_ZOJCmD8cNbtmJ5jhw-_7szMiOR7hpn7J89PEe8ToInJQJWus0P37CZgZiytyrT699NoyFdAPJehORjJnCM7q__KK9SEBYw5AmlN6MU-FQo0vV3zwXozACeYnUy4gG2-JTft-0W00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram8.puml)

#### 2.3.9 Urejanje uporabniškega profila (PU4) - Alternativni tok 1 (A4.1)
![Razredni diagram 9](https://teaching.lavbic.net/plantuml/png/bLJDRjim3BxdAGJtqlsaQ0y3Xg0eiBPRCGnR2WGTi0uxq1QRC9R5Z59S94KVPW-pzveKnx6o5blYYwMFvFTH52bNafs1GAKk33Yd7dfAvL2KO-6vrHTiMDJzX3n6d4MZDDZ1cm_dRzzV11H4-Bu1SnCYUuyzjo4rPD4lPgXO_8GJGwTHh4AzW7N1XDOdNfOrEfofa-FZ10skPOjEIACgI0g3lLvpXEpsymYN5ggR6GlabagkCmLEFOEhqzCy9W6oE3jJ1uR64tzkvXZgy9ZmjH6_VvLqBNn7PatO6boB_uDGgLUiPqB3N629nItS24x1Jh69XCCN0rKpwKJvarHaGgARZ5UoJz0WMh3rmcQZUIMmQ3JTtsS-7EPJBBmI_FbQRTQkLGyXSq6zFi__dMcP2xcTtKC1IbZkx5w38Gq5JU6T5yhdlii_Pxq8dZcpGR2nQctPjikLbYcq5_dkPhwXCNo_gbEVz42ve677grs5wJPa7P0oXIRW9bVe3ATWYOjqwqmux4OV1ceKWUy_eWqh89CwUpHunzQLCF9Oaud-dLLuwhobI_3pQg0qh2QoRo4aKAT-5Jg_bHBd1Tb0DLpz6ssUaTiYnp75NPYieUxOQyDZs2u3we3HG5qtguRESar5gDUN-6ybP0oMbl7gWcNOxTRsVhnTpHgcc_hiq0rYQG_ta6wDGklEmJO0ofX6qZfhvg-EzapXu-MEmxHNn7gYTey9hV_SsvQT71sTg2nSR-pr_bbOnY-YsTD7fFVSQxOdnTENAJkE1DiC0NgPTMFv1m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram9.puml)

#### 2.3.10 Urejanje uporabniškega profila (PU4) - Alternativni tok 2 (A4.2)
![Razredni diagram 10](https://teaching.lavbic.net/plantuml/png/dLRDJjj04BxdALRXGbk2u52fYX1IWOAggWGfeb917DRsa8oztdLtDuwIgW_JX-bxTTR_TW9noCNnjpFppR_NH2WJhddCBWKtXlqUCEPnFvffjP31fH9Ai-KSBJXSwG1qZXrylBxuzEMIKAwrMkQW9qXpy6TWAgC29TXL0anfErUDWvh3prIjvjBG4KZRa98g00C9EpqvQQ0a6fNe70DWFcfVm62GXp1y-7wd0cuZlDCG23KRCcvO5sHdPvwZvtfrViuE1Cxcza8im6NWWmeIZHDFypNuX-_6B5KOK5mrmHJMaiU5APKM31tq5GgoLHkxJvJcdiH_VvrtwXb5OQyyC2N-cjDjhn_ulOQGon1oJRubZ6ywHY4nAccYZ7O39L9VIQkLg3XlD5_bd2OBkP9LwU742y6tJCEl8rRzDoKxgImeFqKykuLnxMaqlSKf0H5VznPFkS20-nZoprQZjx2r_vuALYJfAIM0osR1oWGLTUQjh9LWZwHLVR97M9a6HHT2PFbkFJEdMTbVhNzQ74UY8GQ9KyljmkpFfINUyl1EemWNdWZ9qcubvSCRmgAMe70q3pjpMbZeKmYQhLGRYozQAA379vRa__286MALCyOZbz4jndRGrWFR7jJcWDBQH5llX9yWX5fcpJR2O5nuaBt5q7obnY8aQa9pRkOtO8HgWX6icgz6K3zM_7pCfWvuV79d47CKJM4B0fwLD16VMaXHEFdwb39dhCGhQfvup6X3ko_DI79o86tAnM1iooNb-IZ9r2HxvjmgGTCo3ZCqMStb9AYjfsv2ssd8QpLcLVqoBrIAFkNhrZrB2ZsZaLgxwQ2JIVrMd8zSPGFwr8HLVleDmHxYv6uA6elXX5AXQh36T3hBFmpkwSBNgvvhV2-DOfVtrwaxlpFhMVzti7scOBEz33cbV6ntFGqeSJGH-fmggsb9DPCy2jhDwxQJwmrwD9jYhr9qWkjTa3VePStQNQOTTyZlQzgUe7TNREEYDJmzFZvbGqgJMihHEVrpFmSEDoyRWyrRLAMlNL5VC51-TmVRRaszBDGkRDw0XYVEG2i6GjuFsQPITG7O7dQkridsVm00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram10.puml)

#### 2.3.11 Urejanje uporabniškega profila (PU4) - Alternativni tok 3 (A4.3)
![Razredni diagram 11](https://teaching.lavbic.net/plantuml/png/dLRDJjj04BxdALRXGbk2u52fYX1IWOAggWGfeb917DRsa8oztdLtDqP9rOVfm_IzEkj_Eq1iSd7yxSnyy-yr4Sg4QnwpSy6DORz7Z7dSZnPQhMHmheJIx6c95XokT00wn_O-Nfvz-d9EADTQFUMW9qXpz6SqCfLLWHBiEW6cj5sgna5DucUwLdDfw0YaRKX95O21X1qV7JLG4erAT8a1C1-rBs0qocCOtts_KG6t4Tve28HQZ1ath0koanFFqNEzFZrbUm8NIticLk1Iy445YSQPf_a6_FrtKvOg35nW5S4SDfB7XIcL5WmTz1KAibKRkqsKvfx4Vt-TT-eHHM6lF30b_fhJRQ_l-As6aCiGSat-J1ZVT8n2ObJIH1dj5agalf9MAr5nNcc-pZbD5d8bgzBzcHU2Rvc6NmUi-czATb9PKNwAU7OBuyRJQ7gBKm8YlkajddA10VSnv9-jHczbQ_yz5Qn9qbDA09VDWfK9AkhCMrahmHv9g_faG5YP1aKNGcJvRZspf5aPhjO_BOuZqH23nBdbTcM6Ssc9rpoyqIZ2bIT2ihHRIVdmXh2e9IWSpSFEd1OM-XI2PYlLnkAB5Whe_e4b-JyyO8POvOBno6Nq6MCxQEk1RGzgSq1fRQAjTy9F448zPSqsmM1QU92znT1yfSOY96f2IswMLs24Qe8Hh9klHb0_LlnyokOEk7zmPn1p54rX2m8UbJGHdrj8KJZv-fGoPwp42sgUUCfeGxjFpKHoSY1joiLWRCibvVaeoTGiU-RSAa7JCWuBD5dDvIoehQTkGjjfo6irPLNzCYzKYZxbwzezImgze97QkEcWardzLfnFN6K3-jI4LNxw3S40SN8t1Ot5S4AfK3LOOpgTvHy61xhmzQBd6X-aKUpo_ZfrvtTcFUl_3ZPa2hRRov1JoiTsrzE04aSJeS-fifgML3F9aw3Tl6uxkTwWHxCf1fMY4rplWhn1BslMxZBjk4D-NzBs1BsxObiNhV7nuU4n6rEQr9ESdD8_ztFWUFkoCTg-HLNwsXNr1GFbTtVqtAsfbuNQXUqRqFZ86MZ5GCZxCTjMgYu0kKutx5oja-t_)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram11.puml)

#### 2.3.12 Urejanje uporabniškega profila (PU4) - Alternativni tok 4 (A4.4)
![Razredni diagram 12](https://teaching.lavbic.net/plantuml/png/bLN1Rjim3BtdAuJqqgrBaHu6345HO6tNOXYs52WwO1rse6qcOQo8cQGuI8P-mZvY_xBzroZRiPsbNPrSObAFv2Fr9BcKp1mipDI51kVKZuvI4SJfsFB291UisQhbX3m6Fzi4RU4xU7rr_kRTXNZ1MbuMpaXBPEUXqt5LLaq6_MgEYgsVS6EXBXBdiTw2SRA4nZTGXXDqE5Sd_Nx3Az1quvrGWYec6sliT8eUklSVXz7ldsIWgy2fOCLYgDFJADG3kpexKmUQnXD_hXSOUZxYP6vf65bOOtmFTnQdOAPummdubBCy0Hw-6AYCATc1Nmeinr-nvx654Krhy4E3rjsSBKI6_lnAwSRoY7J9SBFWDlx_aNsIRHu9ZrJ-O6Ua3QMRCcbUTiShHMCsthAkQbvRM1Kr7QuDp2eiPuV3Q8gnLnQ_lrBLjwk6f8uM5fEod-V1j8uikTPm6K0AwzRm33Gb4DCKtdfBqSBN_2DELeACc3M2UMHgJJ7Llb9IJm-iO5X8Y4e5FSlJJKJSL0HXsw3spGau2MAjXSgjTsQlc79xRdFHv7sqw7rkSOQcc1KyWvTjskpJjggRQfRBX7nzWBwWrhpCTwT7oK0vcPOPvzOCcwQm5q_QT4t0JQxHQMuwKrmrJQUbwQe-3DHjS7pz5jPm1gIRO8yQHsnS2hSUCz81NwzQdZflw1ByOZPGeePm0VSC286iYPkXyrkKE1_UG1L3B6hpdDnMSXnJi4HgmwJEdcaUm_OOC14V3THDyLMaCvnHBFFw5Fut9UnOTBiE8fILOMsLwxrAUjLyMkZQ6je3BdGpj5IUWUhSG1feR1-2aFcpepqflBziUUVj5L4Uh_OnzGtLl9cg6wcrw7VLD0f77BGCSRgjtdyLrDXk0LRK6tiT1bTGQZsrbd1flthIkoV7noUgAv8EhVREv3FyWhUx-xvr7djezqon-sXs-o51o93mqkG9nFEogtQ3DgpxPSag8FoAe0Bo5m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram12.puml)

#### 2.3.13 Urejanje uporabniškega profila (PU4) - Alternativni tok 5 (A4.5)
![Razredni diagram 13](https://teaching.lavbic.net/plantuml/png/bLN1Rjim3BtdAuJqqgrBaHu6345HO6tNOHYs52WwO1rse6t6OIoBcQGuI8P-mZvY_xBzroJRiPMcNPrSObAFv2Fr99cCr1mqvE92WZ7YPq-82E8irRnGoGLBrc8v9OlUppf1NVaENb-TltbtuRoWDIyhPoHTPE--rpDDLaaAxMgEWhMTSh3G5edBMAj16RU4oWOenGaQd8kJuJ3mEcYsyKufGH6JZYNsUbKF_RjFu-ZFBrBG5s24js9dYDFJoDS3lJex4mUIqgazbmlqFHznCjSqZZIiCRw3MuqpK3EyvWHinaMP00zVZ4J1bEp0Bnsin5-nvLJ3X6Oj-3wWTJjd3P6YlxypkjOy8Lapt2oOZVz_P9zaMqR28vK_wfoaecnJ9YlBxdXTqPYLrIoRckyrhAgQ1jSAyWRBnU4ucc5iXSOVhqJpRPeXYQE5ngJkvtamhIDDfZFS3I23TMTu0P8IY6a6RwscQ65R_X4dAuUCc2M2ybDxEBPGJQslrjJJ4wieLXgYMaBF4ZLJfswgWh1hKFVk73ZnQcsLofstPg-OUdzkIjMKVNJeVQunHrND2fx1j-hULdMePdUPa6qFq5UKafVbvWme6GdZXgNIqienD1rvvyb2rnJCz3qQoQ4pmrLe6kbwRkh3IDnunxVlVWrp81c2BKgSi38Pt5WiI7fykwfvPgoYIx2BV2IS6Fm5F53W21GXBaTZjoXnERkHg6POrUOvcQtac9AtdDB6IPkza9p2zXWmSJuQYUlggqgdkA3OpUkp_z-KqAcJxTfhqAsCMwjU7pJAQ-RJGTPQqHvmHxT0JVKHQ8uDP9x6zXdmcRyOsfF2XykETzvU4VNfwXxJAZ-yc9eBgRFeTzKqyISSf1lYR5kz3nKKRBS3DjI3lVQ3goXrdbf7k6k_UTBx9yV79wBl9ErR7PovJ__ptlxk-zPxxA7TCyNkezaV-WG-Gy9BLIPmdfTziHkqOJsiIpO1_bS5LP1_)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram13.puml)

#### 2.3.14 Urejanje uporabniškega profila (PU4) - Alternativni (izjemni) tok 6 (A4.6)
![Razredni diagram 14](https://teaching.lavbic.net/plantuml/png/bLJDRjim3BxdAGJtqlsaI0u3Xg08iAPRCGnR2XGTi0uxq1QRC9R5Z59S9CCUPW-pzvfa9xQ355ZYYwMF7_bH52cNars2GA4c1fnJltfAfP3bC-6LrHCsBEffJXuZpg9HQkpipOUhj-yd0GKHVgh1r0JFtk-UQu8QikZNIrGiViuTGwkHLQvUmBfWGkixBCiQ7IxLS33ee86Qxz0vQLGPIMQmrwkFa3nylb-oG6hfxv-SReKVoIGAd6eDReUhoyiqPW6o7e_LcQ7Pt5-P5LQ5UCLwAJHD1JQOFS2zu0Bi0cjFE7ynKYMJ3WTkf3z9GSPIljF9Azq3DAXcRBsmQKHl1DQrgCEDXQBXSda-JHUOUINuyxLgrcud7rnMWdfxeF-JQPCAkQFfeG8vR8wcbs18GqOBUEU5qfLlyqzPhmCpPJO8jbks_N9ronJwWNnxDT_G67wgwjGdFL8kQDXPjIkmkmrP1oJlGdDmynjqXhjWZklkrfbms4OVHkek0jz_H1iMGAPBzcZmaQtBuSvZIIRoMwlmmdbBr-1NnKXfg4QeRo4aK7Pv1Jg_bnAd6TaGQbhzQsrUajiBZZEAkp0AKzr6BmtFOByCg0D68tLRh-fmbalAGhs-nFzEGcPWQHElBbYcxMvhxyVRrQnXqTJdY6uGIoVGGxeb2cqx1tSEaCSqEgspZVpLqOafVBm-SfXEyjXErF4-eVMVUukIuSN5K2NXUcElzyTX6R-89eUFIE_mMKa6pmO8wCka7Qj_)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram14.puml)

#### 2.3.15 Brisanje uporabniškega profila (PU5) - Osnovni tok (O5.1)
![Razredni diagram 15](https://teaching.lavbic.net/plantuml/png/bLJVZzem37xdhuXwB_l52HucJUY4jEEsqpHjd8GsQPlsu3O-C4rZveGYEDt_lgH0MmRIe2-9Ft_-x3fEN4vs0GA56XbmJZrrb4eXowV2Iwj7R5ZKQaOU8ywYKRROrTkFj-y-Z08A8hpQWga9aPtdZgj53LdqwmKg5Z_ZbgF9aLMXNi2wu4BhMopB6XqkLB_NQw61ck_H6MbK6KbciDFP_aBoyyi4DnQARmiMI2tbN2OAd3g1gvkRD1O1iXuErPMXwSpVcYM6FZpNUf-b81FeTLobTeG6hOoj5pQrrBt0kchfQ_TlvXVZT8wPLu9_tgXwxruELCcaOyXIKDE3y2EP_vDfamgvi-aBeHmsPzDBCAGXepcyzqBfqZVrfwpNWPao6mJRwjfXjzfT2cTClkdt3pI6LrMRkgG7oeKKTbfP1RRDK7H0yZOq0pUxHsUu3UQuRflEX7-jyyD0JIBmwtVqOG5ascIF1X_PkXmc7aioaTzuXUVEMxe3lom6IaDrBReMGW5bcrUWymSbSPgH3LBZQjtcvWMv0t6SKhJ2U8zreruQdi9X6r07Z0RgORlRobakAGlz-XhNVGgPWgLDFBdW6JVMpj-DXwjPmxpkpnd389Oke8ToInJQ3Gxk0o2FPRGcPwVytT659NowE_CkNHInkr3dnuJ9F_N09FthwxvAml76MUyEmpP-4KsEtv3EyQkIz4uA1FHLqbohlm00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram15.puml)

#### 2.3.16 Brisanje uporabniškega profila (PU5) - Alternativni tok 1 (A5.1)
![Razredni diagram 16](https://teaching.lavbic.net/plantuml/png/bLHBRjim4Dtx58IoIJyEaaM1mWW2D4aR54NZ0a4AD4KN8t5YZqLnL9AMOHSvGW_HkxJtAYd94jqOgQsDn3SpRvuUXxGvwH8C5E92WRNYnq285B9yOdYkvGKhDc8n9OS1PoFHDDZ1gtVdhzzUU1ICuKK3fifN3Xu6jYDLfD4jInHit9IZGDyZgqkT0Mrz2BMBiZHBj5YAa-FZ2FMf-HgTaaIHaSaK3fe_IEu-tk1AGt5Rie5KKyvL8i2ABRWuFKs31Z3BipDne6WoTUTgZjw6Xq7FjwxuyokdJuRlIRM4wu1TuqyG2l62PMbed1fOONO7jmPde6VOLCBXiv6ecEH6vqikuFTFk0dsj3q3b3N8qzrAWtDReA5hg6kuhkdQr1cKmoeYtABXWob8URCwrsePZr0l9MFj3AjEoPM1PQF4_klxuJYTOUQ4mUylHVTj8sbpWxBrzF_9j4eDsPtJcz_UERq2HH8oci4RPoYTkrv_odBfCrDcXQ0ZrpRTYbto0qwktwulg1GlQfk694V2-XPwKgyAZ9TUj4Vo69g2dLwXLHo3EIxZfLN-Nxl-C18t0VZwBSIm059niaE5zwnjxgS1Ar8XluyQdbcdwHBSl1W92VMTCDJW1LHnNe7MRKZYD2FjgSRrk-dD9TaDSfnGMFaX7CkUlL8yWKqRK7gCHk9JyzNGQQueytvTX_UwXPc0fbNOEHyPzwisFWoRArd2hFDdXs4mclP8zt8hVmBRmS5r0UH1HZGvBVDdItjAU7-vurdQgw8zKBlN-CdVThqc9qT79oBnsnjcVNZcFyCJqEJn7JBOTg7kIV7uOagEMmB92ztLU_1vqX_Clm00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram16.puml)

#### 2.3.17 Brisanje uporabniškega profila (PU5) - Alternativni tok 2 (A5.2)
![Razredni diagram 17](https://teaching.lavbic.net/plantuml/png/dLRRRjD047tFLwp22xTKxGCIYb0bQA52YAPIL2Ie-h2sfydOwvsmkt6Le7u27y6_m7ynwriS9pGsVh5zTcuxSsPsRO9w8OrCnPcIreeV0o426IOpGqiTdP4Y8-xdwC3ZP28m1VRarOTthz-VCIgDeVi231Hh3Xu6jZQgK8DRBK2GSNDgB6nyXBcgCr9RNWBj6bAQ8h2m42V7nmsKHPCAdMC48aGJAXWCYYqClts-eaYw1AyCH8fcGo6jQ8FYpPl0kvTcTNegdYYSpTqxjGIVWHSKBGnE0YFN43vzDXOPOSJxsZYOmbhBj3H5MUcXXJxcOjl7DtdEmSLInr1gooj3CIHExdL_lI0Z0ur_Vldzq1sgCe9gmLPudnYk3PGXUCtzdiyfbRz_ogclL-dJGs61FEvjOM1fKp1uANCTodLgDxa49dBTCBWdXaycHQKngRQQv67ie1nAIDePKdKa5qQkYaXiNgXQbhAdao26q0a3tr-A-jisGbjoNSgS7XR6TM3GTXOljjrPF9CA8nbYBDywWy7IRU8FA5gnP42aGEezMQlejPMq2koGivhSFNQLQzHyFgXdvrpu_chTi-9zC1TJq3XrqYrjVrz6CudZAuCgNWOgPak7bIY4_zWMCuAtOsJS6YwbXIw5uFREZ7NuJmibT7Ch5iKNlXIMlUgPa8dFw1vZ1zmoyohgRJTgiq5vsAFRJ8gle1JTvsmROJGkGyZ_KcZ-ChCOIPhGNDhv1LX5JJ21LVFNAYPaxL-EnTG3DxT-3LA9gYdiGC4TQPlm888CbPVVh7BghDDupkn9nuBF5Ny-ZhJa0BAcN0hMROL4GOYQJKtoT-6R5cYtZCCCRLvqFOasrZFVejjfA8er5dK1yoWemv3pTUdVbGipuvvQ-_RWbSdchrmV-T96_WogyzEj2tg8SxWP3_-oEw5Ig1dMQ4zl-Ol5dY5yFEyundjfbBEykyv3HVnMh-VqRs5zcc2NNPPZeX2tISyDoZwQ29_ev0mFgMQEHz4sT_rqyjJWLvCJlIhHsbpdUlo7NixLzZ1jXSDnV-3f2URmhDgv7GvFZevEn93JwOioEkLF_tXqk7lP6EpU_JePg0xUmRwRMsqXedjzC8BT2z3mU9y-Wy-7ObUllWCyfjPA-5y0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram17.puml)

#### 2.3.18 Brisanje uporabniškega profila (PU5) - Alternativni tok 3 (A5.3)
![Razredni diagram 18](https://teaching.lavbic.net/plantuml/png/bLRRJXin47tFLrZXXLw2uA5I5I6aGWgggX8aHALIzM5sTv9Crkj9RMTHKl49V4J_XVvNxTtDhaC2R9woFZvZdncViMDIKZFGa8ap2SQ8FnqX8eZJiUQvIivOiXPt4xBeSTO9wXBR-t1--l7pcKD1QxuhmKYwoCvznzIBIb9e5pCKhEs4WubcZxW8jHgKSLEeRC1IdA31cJWwF0nGHqrNw8GI537fM6AdKwRGlVqsZ1uVI45NW15-5Bk1E3wE_7wW5oSdOa_IU69FvHnzokyucMaQHXgM6D_2ZSOfg2bUSG8svRnO0FVVz4NEb6pG1uvMyC_PybZ3YAOD-JwGTJDZ3P6YVtzJkj8y8bafN4sO5VwIs6VL5f6mTUS1P_3u0DU-pDMU7efBvENTPXhd9aDDbr34S17JLCCpA8LbiE0M3LzrHb9HkaerBMHie4vApCfgbhMI2msBKed1fOAivdA-Fuoc65kXyVTxKN-RGDfSOrBLz7KoBIDDfZMzJBirFGT92SGqXKzMKpItZVw8auLZHimIGMsfMcZe1gji_Np1IeMbZQboyQiwpSIT89L1s3QeVNAEdFY6QPg5Mv_CJZ7LyLmNfYdoQ96xCtk6ggmLlC9lZcdTrA6PtNr6jkcg7oWbtnM7qwEaBumhbXeNemp3eHFla3I49c0c5sWaXs2AYt1efCkvtX_wuje3Ft_vESo0P4YsA774ogIkQJ4dwVdDhEQfiOe6OETPNpWp-2UWfy09o4DUXiQkIUAYTdrHrh3ScsTarXR7CVcHSzemQLRF9OzXlGoOE8pwughyAfTJd5FiwdNfVrTRwB6pxT9xqCqCcr4rtwkTLzUdXQsreXteJcxkBigg1UgsWTJBMEy1l_9tGpjA-39eUUNj555rL_kOnldXnLHVIArDl-ccaUzmaAw8qtNtFdLGSDoEM4iFpjeNhfJKkcejwIxz-bz5z-ZWu4XqdQLzghqJz-cHxkRJrjdspjVX2T-f5wCtdyhkuTDO1xpjYisObTPd0ihf_m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram18.puml)

#### 2.3.19 Dodajanje novice (PU6) - Osnovni tok (O6.1)
![Razredni diagram 19](https://teaching.lavbic.net/plantuml/png/bL9DZzCm4BtdLuoob_AHLNj0GjMg4jjb4KAm1oGaUfl4esOQrrF6RgeMyTznaasR5ed2pNv-C-_Dy_YAtGOLrp2tw3tyJ01oBAgbojQPkLXHs9KSgC553Mc7tRnvl7_xVXvHL9LT1-OsLYQ_4dziQjbHs6y8H4CfWuUJHj6M1aNdunEvC60vCUHf0vFnU816QjMZ9Hk2WhMmb2JT2EdYyrSwE5n_aPgB5D336G9tTtaZZBgVpU36yh8CztPBxUoln6oKdtB50nKBV123AtGhQYj7BwPG2viuOg_rITTi7LVjExPYvr1KAyG55NiK-w2uxyJyoTNeALzH4K3fnsiuddsl6CarMZPOy0hV1ULy6wJkYt8n-yZCHIoXQpkNCINkB5nl7KUkyD3JVMplbi1cmE13hkp_ngZLyG9DdnLTKJr5E8Zk65bS0mwdx_bErigkpInZCuLElxavz5Rg8L9xojdX438Ojkje0MkQGhmqovnblUbldaSNStG-FZvSJswhPFw3VXRZlnIOPW6VKxym6Nq_iWsarvC-t_zqSdixWHGoRRBDPl7O8Ed5vYONYvoE_oYBoClq-TT-0m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram19.puml)

#### 2.3.20 Dodajanje novice (PU6) - Alternativni (izjemni) tok (A6.1)
![Razredni diagram 20](https://teaching.lavbic.net/plantuml/png/bL9DZzCm4BtdLuoob_AHLNj0GjMg4jjb4KAm1oGaUfl4esOQrrF6RgeMyTznaasR5ed2pNv-C-_Dy_YAtGOLrp2tw3tyJ01oBAgbojQPkLXHs9KSgC553Mc7tRnvl7_xVXvHL9LT1-OsLYQ_4dziQjbHs6y8H4CfWuUJHj6M1aNdunEvC60vCUHf0vFnU816QjMZ9Hk2WhMmb2JT2EdYyrSwE5n_aPgB5D336G9tTtaZZBgVpU36yh8CztPBxUoln6oKdtB50nKBV123AtGhQYj7BwPG2viuOg_rITTi7LVjExPYvr1KAyG55NiK-w2uxyJyoTNeALzH4K3fnsiuddsl6CarMZPOy0hV1ULy6wJkYt8n-yZCHIoXQpkNCINkB5nl7KUkyD3JVMplbi1cmE13hkp_ngZLyG9DdnLTKJr5E8Zk65bS0mwdx_bErigkpInZCuLElxavz5Rg8L9xojdX438Ojkje0MkQGhmqovnblUbldaSNStG-FZvSJswhPFw3VXRZlnIOPW6VKxym6Nq_iWsarvC-t_zqSdixWHGoRRBDPl7O8Ed5vYONYvoE_oYBoClq-TT-0m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram20.puml)

#### 2.3.21 Urejanje novice (PU7) - Osnovni tok (O7.1)
![Razredni diagram 21](https://teaching.lavbic.net/plantuml/png/bL9DZzCm4BtdLuoob_AHLNj0GjMg4jjb4KAm1oGaUfl4esOQrrF6RgeMyTznaasR5ed2pNv-C-_Dy_YAtGOLrp2tw3tyJ01oBAgbojQPkLXHs9KSgC553Mc7tRnvl7_xVXvHL9LT1-OsLYQ_4dziQjbHs6y8H4CfWuUJHj6M1aNdunEvC60vCUHf0vFnU816QjMZ9Hk2WhMmb2JT2EdYyrSwE5n_aPgB5D336G9tTtaZZBgVpU36yh8CztPBxUoln6oKdtB50nKBV123AtGhQYj7BwPG2viuOg_rITTi7LVjExPYvr1KAyG55NiK-w2uxyJyoTNeALzH4K3fnsiuddsl6CarMZPOy0hV1ULy6wJkYt8n-yZCHIoXQpkNCINkB5nl7KUkyD3JVMplbi1cmE13hkp_ngZLyG9DdnLTKJr5E8Zk65bS0mwdx_bErigkpInZCuLElxavz5Rg8L9xojdX438Ojkje0MkQGhmqovnblUbldaSNStG-FZvSJswhPFw3VXRZlnIOPW6VKxym6Nq_iWsarvC-t_zqSdixWHGoRRBDPl7O8Ed5vYONYvoE_oYBoClq-TT-0m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram21.puml)

#### 2.3.22 Urejanje novice (PU7) - Alternativni (izjemni) tok (A7.1)
![Razredni diagram 22](https://teaching.lavbic.net/plantuml/png/bL9DZzCm4BtdLuoob_AHLNj0GjMg4jjb4KAm1oGaUfl4esOQrrF6RgeMyTznaasR5ed2pNv-C-_Dy_YAtGOLrp2tw3tyJ01oBAgbojQPkLXHs9KSgC553Mc7tRnvl7_xVXvHL9LT1-OsLYQ_4dziQjbHs6y8H4CfWuUJHj6M1aNdunEvC60vCUHf0vFnU816QjMZ9Hk2WhMmb2JT2EdYyrSwE5n_aPgB5D336G9tTtaZZBgVpU36yh8CztPBxUoln6oKdtB50nKBV123AtGhQYj7BwPG2viuOg_rITTi7LVjExPYvr1KAyG55NiK-w2uxyJyoTNeALzH4K3fnsiuddsl6CarMZPOy0hV1ULy6wJkYt8n-yZCHIoXQpkNCINkB5nl7KUkyD3JVMplbi1cmE13hkp_ngZLyG9DdnLTKJr5E8Zk65bS0mwdx_bErigkpInZCuLElxavz5Rg8L9xojdX438Ojkje0MkQGhmqovnblUbldaSNStG-FZvSJswhPFw3VXRZlnIOPW6VKxym6Nq_iWsarvC-t_zqSdixWHGoRRBDPl7O8Ed5vYONYvoE_oYBoClq-TT-0m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram22.puml)

#### 2.3.23 Ogled novice (PU8) - Osnovni tok (O8.1)
![Razredni diagram 23](https://teaching.lavbic.net/plantuml/png/bL9DZzCm4BtdLuoob_AHLNj0GjMg4jjb4KAm1oGaUfl4esOQrrF6RgeMyTznaasR5ed2pNv-C-_Dy_YAtGOLrp2tw3tyJ01oBAgbojQPkLXHs9KSgC553Mc7tRnvl7_xVXvHL9LT1-OsLYQ_4dziQjbHs6y8H4CfWuUJHj6M1aNdunEvC60vCUHf0vFnU816QjMZ9Hk2WhMmb2JT2EdYyrSwE5n_aPgB5D336G9tTtaZZBgVpU36yh8CztPBxUoln6oKdtB50nKBV123AtGhQYj7BwPG2viuOg_rITTi7LVjExPYvr1KAyG55NiK-w2uxyJyoTNeALzH4K3fnsiuddsl6CarMZPOy0hV1ULy6wJkYt8n-yZCHIoXQpkNCINkB5nl7KUkyD3JVMplbi1cmE13hkp_ngZLyG9DdnLTKJr5E8Zk65bS0mwdx_bErigkpInZCuLElxavz5Rg8L9xojdX438Ojkje0MkQGhmqovnblUbldaSNStG-FZvSJswhPFw3VXRZlnIOPW6VKxym6Nq_iWsarvC-t_zqSdixWHGoRRBDPl7O8Ed5vYONYvoE_oYBoClq-TT-0m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram23.puml)

#### 2.3.24 Brisanje novice (PU9) - Osnovni tok (O9.1)
![Razredni diagram 24](https://teaching.lavbic.net/plantuml/png/bL9DZzCm4BtdLuoob_AHLNj0GjMg4jjb4KAm1oGaUfl4esOQrrF6RgeMyTznaasR5ed2pNv-C-_Dy_YAtGOLrp2tw3tyJ01oBAgbojQPkLXHs9KSgC553Mc7tRnvl7_xVXvHL9LT1-OsLYQ_4dziQjbHs6y8H4CfWuUJHj6M1aNdunEvC60vCUHf0vFnU816QjMZ9Hk2WhMmb2JT2EdYyrSwE5n_aPgB5D336G9tTtaZZBgVpU36yh8CztPBxUoln6oKdtB50nKBV123AtGhQYj7BwPG2viuOg_rITTi7LVjExPYvr1KAyG55NiK-w2uxyJyoTNeALzH4K3fnsiuddsl6CarMZPOy0hV1ULy6wJkYt8n-yZCHIoXQpkNCINkB5nl7KUkyD3JVMplbi1cmE13hkp_ngZLyG9DdnLTKJr5E8Zk65bS0mwdx_bErigkpInZCuLElxavz5Rg8L9xojdX438Ojkje0MkQGhmqovnblUbldaSNStG-FZvSJswhPFw3VXRZlnIOPW6VKxym6Nq_iWsarvC-t_zqSdixWHGoRRBDPl7O8Ed5vYONYvoE_oYBoClq-TT-0m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram24.puml)

#### 2.3.25 Dodajanje predloga projekta (PU10) - Osnovni tok (O10.1)
![Razredni diagram 25](https://teaching.lavbic.net/plantuml/png/dLHDRzim3BtdLmZkfTkQ8ZaC688Ym9gkmp1i2L1Wm5hqG5jSGbiHFKf9a0pxxwFpwJaRqlPa-KcFZnIV60ho9GXCpS112EPNovWKic8iFFDsm8x5B2OKiS9PBCe6EtjxU_tkmq1H4E751aoTCbk_Ms4Vr977k2pHiCG9rpOE6jcQ6WLyq2tqiNRAiyM0fUbsEZLKZnOxT48MJKQIEMorDYKazr_kSELXEXAqZiSyJmm4SuIQgwkqIW1asU-RCqVZIRnsCrpVmHksfT0m5LXXTWytR247d-EM3IFX78i8vwzwPivajUgT_6UPalDKx8wkrPkWYcViex3RQtyKM6wqmz-9dW_J7BDe17zUcFqwx9ILeAaMiA8jOv_RILwOw5q-dpO7HnOook5z54fdyP1ZodQf9rDcX-3N6gNW53tTHOYpy7mjyVGLyf6GosUfopNIQH9d-8AoVf3JSWJoXb6s4PxI2BNBN4Aa_qROGW-FfjoiwC84LVLZ0qLre_y8TaBsuBn6nMlZDJ3rdJunYWVBVqVdUB4sNfjiRvjDzUSXE9xNaL2oS4QEww2cgHfrH9y9Hz5MrOtGjjh_QS_efnecxQf7s3D3_S33OuMqT_t-5kXfncWKz-dcD6scb9VmR3K1cfPgfADvtwg7K4vsx7WO9TtBowv9z3ghfhJxkgoGv6Xoj8v6IT8veYhoEcds_Wy0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram25.puml)

#### 2.3.26 Dodajanje predloga projekta (PU10) - Alternativni (izjemni) tok 1 (A10.1)
![Razredni diagram 26](https://teaching.lavbic.net/plantuml/png/dLHDRzim3BtdLmZkfTkQ8ZaC688Ym9gkmp1i2L1Wm5hqG5jSGbiHFKf9a0pxxwFpwJaRqlPa-KcFZnIV60ho9GXCpS112EPNovWKic8iFFDsm8x5B2OKiS9PBCe6EtjxU_tkmq1H4E751aoTCbk_Ms4Vr977k2pHiCG9rpOE6jcQ6WLyq2tqiNRAiyM0fUbsEZLKZnOxT48MJKQIEMorDYKazr_kSELXEXAqZiSyJmm4SuIQgwkqIW1asU-RCqVZIRnsCrpVmHksfT0m5LXXTWytR247d-EM3IFX78i8vwzwPivajUgT_6UPalDKx8wkrPkWYcViex3RQtyKM6wqmz-9dW_J7BDe17zUcFqwx9ILeAaMiA8jOv_RILwOw5q-dpO7HnOook5z54fdyP1ZodQf9rDcX-3N6gNW53tTHOYpy7mjyVGLyf6GosUfopNIQH9d-8AoVf3JSWJoXb6s4PxI2BNBN4Aa_qROGW-FfjoiwC84LVLZ0qLre_y8TaBsuBn6nMlZDJ3rdJunYWVBVqVdUB4sNfjiRvjDzUSXE9xNaL2oS4QEww2cgHfrH9y9Hz5MrOtGjjh_QS_efnecxQf7s3D3_S33OuMqT_t-5kXfncWKz-dcD6scb9VmR3K1cfPgfADvtwg7K4vsx7WO9TtBowv9z3ghfhJxkgoGv6Xoj8v6IT8veYhoEcds_Wy0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram26.puml)

#### 2.3.27 Ogled predloga projekta (PU11) - Osnovni tok (O11.1)
![Razredni diagram 27](https://teaching.lavbic.net/plantuml/png/dLHDRzim3BtdLmZkfTkQ8ZaC688Ym9gkmp1i2L1Wm5hqG5jSGbiHFKf9a0pxxwFpwJaRqlPa-KcFZnIV60ho9GXCpS112EPNovWKic8iFFDsm8x5B2OKiS9PBCe6EtjxU_tkmq1H4E751aoTCbk_Ms4Vr977k2pHiCG9rpOE6jcQ6WLyq2tqiNRAiyM0fUbsEZLKZnOxT48MJKQIEMorDYKazr_kSELXEXAqZiSyJmm4SuIQgwkqIW1asU-RCqVZIRnsCrpVmHksfT0m5LXXTWytR247d-EM3IFX78i8vwzwPivajUgT_6UPalDKx8wkrPkWYcViex3RQtyKM6wqmz-9dW_J7BDe17zUcFqwx9ILeAaMiA8jOv_RILwOw5q-dpO7HnOook5z54fdyP1ZodQf9rDcX-3N6gNW53tTHOYpy7mjyVGLyf6GosUfopNIQH9d-8AoVf3JSWJoXb6s4PxI2BNBN4Aa_qROGW-FfjoiwC84LVLZ0qLre_y8TaBsuBn6nMlZDJ3rdJunYWVBVqVdUB4sNfjiRvjDzUSXE9xNaL2oS4QEww2cgHfrH9y9Hz5MrOtGjjh_QS_efnecxQf7s3D3_S33OuMqT_t-5kXfncWKz-dcD6scb9VmR3K1cfPgfADvtwg7K4vsx7WO9TtBowv9z3ghfhJxkgoGv6Xoj8v6IT8veYhoEcds_Wy0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram27.puml)

#### 2.3.28 Urejanje predloga projekta (PU12) - Osnovni tok (O12.1)
![Razredni diagram 28](https://teaching.lavbic.net/plantuml/png/dLHHRzem47xFhx3Ibsuh5JnCcb25jD9rcgODf4gJrgeFb_W6JemlEpiWcFRVTu40QUXAswSud_tTT-VxV3uthW26cHfQy5xzYPHA8CqdJANJGxB4QZ4r0IkSM2Dli9FtrvSVFWq51MPQRC342ZFw6_bTK6iSXcM1YZXCgR6nrqZNrC3Wl6oX2urJZZHwB5IlsssWSZJVebEZKQM6KujH56rgY6-_ZKb3oCsOKLkQn0gyQeFguYAfz86NWu4wiMOo3PUsnEeAtf4ks8mIXXMcfs_wQav6Is5xWHjSEPZLeMXUAxJGfoGUQjp2bIINWSkmPiEOASCym2FoNtbch3FvzkXQlGsAU4ekCDcTzcU6vKRRFqpqT9Hac0R5-FjCxTP-gom4IJM7rVRkThaTvVcfTElbj3bOeo4r6NmCR98ox7DCI2_bP49a4TnQes2SeJCt0KBfNwx5pdo7RCp6PcLYCubqd4GflgAiNyPAEGnPooXrXESqGkmoPn_CVoFKqDszAZOhSwQygBg9WhowqKU27P7TEwzLyTfuBKny9u_OXBtbVwArj5WRhsDqlywc-dFWBSsRY2-8AJMMcg2aAHfDH9u91PPMDOtGaUTTplfAFjMuwbGzmhuQoGVkxYkai-tt3s-UPunMSL-kZjDAeRo6fwi9qBPKAnt9-reyX7oyOmVpBkwTd_TKBDT42zSPoAe2uiF14HqEiXsNguO-GOuEeiNTjgm0R-EsRVu1)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram28.puml)

#### 2.3.29 Urejanje predloga projekta (PU12) - Alternativni tok 1 (A12.1)
![Razredni diagram 29](https://teaching.lavbic.net/plantuml/png/dLHHRzem47xFhx3Ibsuh5JnCcb25jD9rcgODf4gJrgeFb_W6JemlEpiWcFRVTu40QUXAswSud_tTT-VxV3uthW26cHfQy5xzYPHA8CqdJANJGxB4QZ4r0IkSM2Dli9FtrvSVFWq51MPQRC342ZFw6_bTK6iSXcM1YZXCgR6nrqZNrC3Wl6oX2urJZZHwB5IlsssWSZJVebEZKQM6KujH56rgY6-_ZKb3oCsOKLkQn0gyQeFguYAfz86NWu4wiMOo3PUsnEeAtf4ks8mIXXMcfs_wQav6Is5xWHjSEPZLeMXUAxJGfoGUQjp2bIINWSkmPiEOASCym2FoNtbch3FvzkXQlGsAU4ekCDcTzcU6vKRRFqpqT9Hac0R5-FjCxTP-gom4IJM7rVRkThaTvVcfTElbj3bOeo4r6NmCR98ox7DCI2_bP49a4TnQes2SeJCt0KBfNwx5pdo7RCp6PcLYCubqd4GflgAiNyPAEGnPooXrXESqGkmoPn_CVoFKqDszAZOhSwQygBg9WhowqKU27P7TEwzLyTfuBKny9u_OXBtbVwArj5WRhsDqlywc-dFWBSsRY2-8AJMMcg2aAHfDH9u91PPMDOtGaUTTplfAFjMuwbGzmhuQoGVkxYkai-tt3s-UPunMSL-kZjDAeRo6fwi9qBPKAnt9-reyX7oyOmVpBkwTd_TKBDT42zSPoAe2uiF14HqEiXsNguO-GOuEeiNTjgm0R-EsRVu1)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram29.puml)

#### 2.3.30 Urejanje predloga projekta (PU12) - Alternativni tok 2 (A12.2)
![Razredni diagram 30](https://teaching.lavbic.net/plantuml/png/dLHHRzem47xFhx3Ibsuh5JnCcb25jD9rcgODf4gJrgeFb_W6JemlEpiWcFRVTu40QUXAswSud_tTT-VxV3uthW26cHfQy5xzYPHA8CqdJANJGxB4QZ4r0IkSM2Dli9FtrvSVFWq51MPQRC342ZFw6_bTK6iSXcM1YZXCgR6nrqZNrC3Wl6oX2urJZZHwB5IlsssWSZJVebEZKQM6KujH56rgY6-_ZKb3oCsOKLkQn0gyQeFguYAfz86NWu4wiMOo3PUsnEeAtf4ks8mIXXMcfs_wQav6Is5xWHjSEPZLeMXUAxJGfoGUQjp2bIINWSkmPiEOASCym2FoNtbch3FvzkXQlGsAU4ekCDcTzcU6vKRRFqpqT9Hac0R5-FjCxTP-gom4IJM7rVRkThaTvVcfTElbj3bOeo4r6NmCR98ox7DCI2_bP49a4TnQes2SeJCt0KBfNwx5pdo7RCp6PcLYCubqd4GflgAiNyPAEGnPooXrXESqGkmoPn_CVoFKqDszAZOhSwQygBg9WhowqKU27P7TEwzLyTfuBKny9u_OXBtbVwArj5WRhsDqlywc-dFWBSsRY2-8AJMMcg2aAHfDH9u91PPMDOtGaUTTplfAFjMuwbGzmhuQoGVkxYkai-tt3s-UPunMSL-kZjDAeRo6fwi9qBPKAnt9-reyX7oyOmVpBkwTd_TKBDT42zSPoAe2uiF14HqEiXsNguO-GOuEeiNTjgm0R-EsRVu1)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram30.puml)

#### 2.3.31 Urejanje predloga projekta (PU12) - Alternativni (izjemni) tok 3 (A12.3)
![Razredni diagram 31](https://teaching.lavbic.net/plantuml/png/dLHHRzem47xFhx3Ibsuh5JnCcb25jD9rcgODf4gJrgeFb_W6JemlEpiWcFRVTu40QUXAswSud_tTT-VxV3uthW26cHfQy5xzYPHA8CqdJANJGxB4QZ4r0IkSM2Dli9FtrvSVFWq51MPQRC342ZFw6_bTK6iSXcM1YZXCgR6nrqZNrC3Wl6oX2urJZZHwB5IlsssWSZJVebEZKQM6KujH56rgY6-_ZKb3oCsOKLkQn0gyQeFguYAfz86NWu4wiMOo3PUsnEeAtf4ks8mIXXMcfs_wQav6Is5xWHjSEPZLeMXUAxJGfoGUQjp2bIINWSkmPiEOASCym2FoNtbch3FvzkXQlGsAU4ekCDcTzcU6vKRRFqpqT9Hac0R5-FjCxTP-gom4IJM7rVRkThaTvVcfTElbj3bOeo4r6NmCR98ox7DCI2_bP49a4TnQes2SeJCt0KBfNwx5pdo7RCp6PcLYCubqd4GflgAiNyPAEGnPooXrXESqGkmoPn_CVoFKqDszAZOhSwQygBg9WhowqKU27P7TEwzLyTfuBKny9u_OXBtbVwArj5WRhsDqlywc-dFWBSsRY2-8AJMMcg2aAHfDH9u91PPMDOtGaUTTplfAFjMuwbGzmhuQoGVkxYkai-tt3s-UPunMSL-kZjDAeRo6fwi9qBPKAnt9-reyX7oyOmVpBkwTd_TKBDT42zSPoAe2uiF14HqEiXsNguO-GOuEeiNTjgm0R-EsRVu1)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram31.puml)

#### 2.3.32 Ogled podatkov občine (PU13) - Osnovni tok (O13.1)
![Razredni diagram 32](https://teaching.lavbic.net/plantuml/png/bLB1ZjCm4BtdAwpk1IXTTGz8g5fLOhiiGWWLQRK75d4OnxF9DAudZDrKBTfFuA_uC9oaJI8ujDpivpUUz-QDByYL8B1M2mlUgv-9KXhI8XFUEBDWowAsEGMiSHQ3qc8NR-vkthvVH1H4UDk2siRAv3dntQUM78PTYOebv3nuw7kaJMaGS3u-eGi3bcE37ajrDPqEq4WjZcXE1bLAabfCagJrC7hylDI_Vv63aGAlwbiQB-hwMjSDGNRpkRgmbENXncwmzZncKmejjS0UqqTu45o1M-4NDX0AhfeFyCNBcQgOp3_qsqXh-7SSE1DuebLFVkvaVP8rMKV5K5oF7IIcx8AmxHH-4DWrgOnZnmBshIGwA5hg5QP12VvuhRgpxtIgiS_ZjAWjmdEBAh1a8AKLl0j2UXEuEXPfDhl8rCmMmTLaKvllZVFfxsclXJpzLqrhdkvnxs3T-3Z3UocuHjVE2axm-vY6yNInnBsaqE_DLxIMjqqk4p8pvUESN5RV77ZBrH1vgds2HOdpdAbx6ury-ru_S4b-I6J9ObRxPl0pzL2oW8whqP8dJJ1oTFFnzhJ_ZQ0vbnxj_xMAe-dbvPKQgOdKXYVpU8p8gz5X9dy0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram32.puml)

#### 2.3.33 Urejanje podatkov občine (PU14) - Osnovni tok (O14.1)
![Razredni diagram 33](https://teaching.lavbic.net/plantuml/png/bLF1RXCn4BtlLrZR2n1I9GSa55MHQ4eHGYX8LGyKSHYlfyba7SyoTZPAK3-1l-B3yEuckwlsa72pdz_OxyqR-vnS0G9hDRFWlVgTAAKXonV26sTcR5dKTaa1Avp5e3JOnRlRw_SVPn454TuseBQnCdbAV7kf9OTXLw1Y2Klk7NHlP7Lf470-7g4BFPPZWnuBDHwDUcYavaTqIGPLHf9PJ9AayP0-V9thlt_8GQh0gsgNnOswkjBLWo2xwLHTM5eimxNTOELvmAOGcck1FMOFS2-u0hV2RsmWv5pM5-2hrnDLCfaNz9j8g_ct77WXy4YhZlpKoleYQxAEyhwu3Zj8pDW5OTig_2ImgrCPn1Tps3UIwA1ehbUO1INuwwrgrxxLgGP-6Rj5JH6UMrI29GCPhU134DARmEMnIBFPHQPcjWYk8flAV6USJrzFUotawRzg6lDqXti7wzh76TuBmJMwfbTmWj_5r8-dZINE9OLkRhwZjRojSncIcIWV--GMrSw1jrpsaSVA9rYKsC-9khFHo8-VrG4NvFj4baNCQbytVgBk2nRGSJGQyh0EHevkFj-SzhyHDEVIe_rdevYEBY_7AbL3gGmFft4PaJVfeIT9-wtIyGjYXQJFPliV)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram33.puml)

#### 2.3.34 Urejanje podatkov občine (PU14) - Alternativni (izjemni) tok 1 (A14.1)
![Razredni diagram 34](https://teaching.lavbic.net/plantuml/png/bLF1RXCn4BtlLrZR2n1I9GSa55MHQ4eHGYX8LGyKSHYlfyba7SyoTZPAK3-1l-B3yEuckwlsa72pdz_OxyqR-vnS0G9hDRFWlVgTAAKXonV26sTcR5dKTaa1Avp5e3JOnRlRw_SVPn454TuseBQnCdbAV7kf9OTXLw1Y2Klk7NHlP7Lf470-7g4BFPPZWnuBDHwDUcYavaTqIGPLHf9PJ9AayP0-V9thlt_8GQh0gsgNnOswkjBLWo2xwLHTM5eimxNTOELvmAOGcck1FMOFS2-u0hV2RsmWv5pM5-2hrnDLCfaNz9j8g_ct77WXy4YhZlpKoleYQxAEyhwu3Zj8pDW5OTig_2ImgrCPn1Tps3UIwA1ehbUO1INuwwrgrxxLgGP-6Rj5JH6UMrI29GCPhU134DARmEMnIBFPHQPcjWYk8flAV6USJrzFUotawRzg6lDqXti7wzh76TuBmJMwfbTmWj_5r8-dZINE9OLkRhwZjRojSncIcIWV--GMrSw1jrpsaSVA9rYKsC-9khFHo8-VrG4NvFj4baNCQbytVgBk2nRGSJGQyh0EHevkFj-SzhyHDEVIe_rdevYEBY_7AbL3gGmFft4PaJVfeIT9-wtIyGjYXQJFPliV)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram34.puml)

#### 2.3.35 Ogled uporabniškega profila (PU15) - Osnovni tok (O15.1)
![Razredni diagram 35](https://teaching.lavbic.net/plantuml/png/bLJDRjim3BxdAOJqqlsaI0y3Xg08iAPRCGnR2XGTi0uxq1QRC9R5Z58S9CCUPW-pznfjnx637fQSB7xyo8-YI8UC_184SZDn48BvrJCcWJIR2Q-ydR1ZCUivHInn5ejIOsTlFbo_VJzH54HuNOE9qyZUxrxO9tNaCMwMQ5ZYd3kELYEjGgE03-f27piipnO3BitbSDX1bPerw9micfGaTTZhrLVeFtv-MB90ukdldupkX9_8zGq4qpf2WvkhgwIi0cGp7fipHxDvl7Ohh1hnYkrIQ9e8R35zX0V11VW5rf5m_c9a2YQh5swKFqbEpbFMo6ILx3DKHLFsKTZjDMy5DhLcmAs7VC_budoQB32DHl3dQxC_XqPTGrQ2TdUV_vDfcmY5e-dQW0osHzCBS6GXfGMyYqB9AhRr9smtoaoO7OBNhksQTjYiRfDq62Ysx_8DdUDrrQK1sP49gk1dbPLZrzIQ5Scwq1p2_1Q3uowOuQPh1gTNtUl3oDoNmFSVfGzp8DSbHtJun3vaS1-n85VoMw_m8aHFDn1N-SXOgFPdu44BABgy74CyA8cJbBoccbRVMfkN50wIuunAI_TWQjliXUCP7BO1hM8qCdVrgKxdkQ1K-_Mb_3OICWDFs_BXr3DjhPr_KBwjPGkBVN-Ec0NnT09ToorGQ3Sts0H0LfRH6PnTvg-1JYpXuysHgtHIn6wVZe_HtyNpFq9_U75nQVhwkEMa3yPwLEHblzs7Vm00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram35.puml)

#### 2.3.36 Ogled uporabniškega profila (PU15) - Alternativni tok 1 (A15.1)
![Razredni diagram 36](https://teaching.lavbic.net/plantuml/png/bLJRRXCn47tVhx2sB-MIgdr0Gb5LYRPG8GH1gef44G-pwsaoMQydZ9sD4jIFuMFuB-ozP3UqWlJ9dZDpvep7Oxk2x084IdLXm3drCr4gWxoO2Y-jlc33ebOpyXXn5etIO0Ultfs_VdiHK13XLGDc9Z2J-yHjangowDSBL2n-nWD7hv7NL2zWNN2XzOCeoneTBjJ9yV403Q55Xyv8eyf9SeD9aZHdI6y_NkF6GdcpO87CKi5Lgi2fHt1rUfh5Aa3MPsVgmD1qvi_D4aCZxeS9EyhlNmLz5huZqsRi7Ax3_v5HgHUi5qAJJ623-ItS2Cx1ph5Xmk6piQgOT9HkbJz8IIPKkYsvbds01j6ShHSsMyqhWNMZwVu-zE4acsFkbU2FbsgxTvrwe2m5TNkU_mVJ9XDoUuU71XImsJky0aCQSfh36o-KBNrVVyPw7I8pPeDWGzVQfkqsQzYaC5xa-tlvYiRmgkxIYFHOkQ1WfxLLuj0CDGUa648pSBChT8Q7O87heUbCEEfM7yRgEWBVlaSVba1c6EpHu1rRLy2rnufCZE-zmdFdBLs2NvPZfQ5-aICBeO1g65UYypibSPQJ3QaczTfeyuBSJdASKhJ2ovheFdjbU0gxRK0TC1ghpyskIMUveZpqwrDSEmcPWgLDlBZWcVHMwn_5kzMiORxjpnwp89QU41xAhL2edHli2534CWQ3qsR-ukY99Ro_tFCfFOdHlgVzEU6xUEnhIq-EZavK6gutplheB6mZaZxyFfA77qfwt98rhspD3S3pj7zDVm00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram36.puml)

#### 2.3.37 Ogled uporabniškega profila (PU15) - Alternativni tok 2 (A15.2)
![Razredni diagram 37](https://teaching.lavbic.net/plantuml/png/dLRTJjim5BxFKrZbXcqKmSMagK980mQQfgr85PC6ui993kr973kptLJjj8VPm-ozTfpclx0cN2N-VCxvZi-VRMAKATSyOPU26yD-UOpvF8ZdMYrbUAc4qcorG0iELpe4lSKEtbzVVFXqIIZNMgsse2z8q_ljcSgeG0bsdG9JsYvKOwFc279Lgxaqj0NIDgIa2i50oavFJXeeYSObki0GM80w4E1vtlOCe_kljohaDiPR3Q5Gyn7ZXdL1TdRcEtwkr-Vdx43WV64ln19S2DwfCDKuzJNVG73uPi8oXI4Th2QOmKRof32bieAXW_wFeirnpw_8kOZB20fjVgjL1B7bpzBVfKfpN-BVF-uywWb5uK6vOKfyY0zt6WeNdEPpp5zqWa9YNDB4EUqEIgI1abOhKN7UQBxUSfeyI9MioWwdVWI1PHf-7h7gtvJifBAac1JdsI-C6r-ZwIrE0OZvfhTunWM6FC28VxGQ_QMj_VTLk2P9Noa1N5BKEa4hCzkAMGds25bLLmCEbMjKfRHNpooekOQhzG-AuqWr921nPhbTck5SMk8t7jrg5D7I5n5Psg-a0dZ5iQWWw3YQHvs-BYpqIGHrLgQDnHSj5D338qktVtZ43B7AEUEnY-WpnlRGrktQRjDcUzASHLjFX1yWX5hbnJR6S59uaAyIQ2wfi0Y9cz22cyKD6A6QO0phvj88giUAdq_Op04FZsuF4ewYAMn1m9EI9kOp2naA9r_lKkICbNX5nPDC64rqTpMD9IS7igPS0iQsN59-W99CJVFlbbkbQ5h6OOucpxcSXhNrp7LeEmpRN4rObR_S2vLXGF7wvhubXPvJIsrSTz3Ej5uL-sENsT1D_oe-_PfWW3Yvcu76eZcXLAWAhD6Tpl9tWmDT-7pLSuWFqYWcUN-Tkl8xlPxNVmSRqWMxvMN8AHLWk-gfGOcZYT1bggoc8TKCyZXi5w-RJguswDCiYa6fw1okTq9UePSNQtUOTjmXlwzfUeBUdx6TXzdezFZub8qeJ6ebn-Vqvu3HxZF3strnxTCjhrjlzyqoEkcg4l1sL8zDR-VEVacb4vn_)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram37.puml)

#### 2.3.38 Ogled uporabniškega profila (PU15) - Alternativni tok 3 (A15.3)
![Razredni diagram 38](https://teaching.lavbic.net/plantuml/png/dLRTJjim5BxFKrZbXcqKmSMagK980mQQfgr85PC6ui993kr973kptLJjj8VPm-ozTfpclx0cN2N-VCxvZi-VRMAKATSyOPU26yD-UOpvF8ZdMYrbUAc4qcorG0iELpe4lSKEtbzVVFXqIIZNMgsse2z8q_ljcSgeG0bsdG9JsYvKOwFc279Lgxaqj0NIDgIa2i50oavFJXeeYSObki0GM80w4E1vtlOCe_kljohaDiPR3Q5Gyn7ZXdL1TdRcEtwkr-Vdx43WV64ln19S2DwfCDKuzJNVG73uPi8oXI4Th2QOmKRof32bieAXW_wFeirnpw_8kOZB20fjVgjL1B7bpzBVfKfpN-BVF-uywWb5uK6vOKfyY0zt6WeNdEPpp5zqWa9YNDB4EUqEIgI1abOhKN7UQBxUSfeyI9MioWwdVWI1PHf-7h7gtvJifBAac1JdsI-C6r-ZwIrE0OZvfhTunWM6FC28VxGQ_QMj_VTLk2P9Noa1N5BKEa4hCzkAMGds25bLLmCEbMjKfRHNpooekOQhzG-AuqWr921nPhbTck5SMk8t7jrg5D7I5n5Psg-a0dZ5iQWWw3YQHvs-BYpqIGHrLgQDnHSj5D338qktVtZ43B7AEUEnY-WpnlRGrktQRjDcUzASHLjFX1yWX5hbnJR6S59uaAyIQ2wfi0Y9cz22cyKD6A6QO0phvj88giUAdq_Op04FZsuF4ewYAMn1m9EI9kOp2naA9r_lKkICbNX5nPDC64rqTpMD9IS7igPS0iQsN59-W99CJVFlbbkbQ5h6OOucpxcSXhNrp7LeEmpRN4rObR_S2vLXGF7wvhubXPvJIsrSTz3Ej5uL-sENsT1D_oe-_PfWW3Yvcu76eZcXLAWAhD6Tpl9tWmDT-7pLSuWFqYWcUN-Tkl8xlPxNVmSRqWMxvMN8AHLWk-gfGOcZYT1bggoc8TKCyZXi5w-RJguswDCiYa6fw1okTq9UePSNQtUOTjmXlwzfUeBUdx6TXzdezFZub8qeJ6ebn-Vqvu3HxZF3strnxTCjhrjlzyqoEkcg4l1sL8zDR-VEVacb4vn_)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram38.puml)

#### 2.3.39 Ogled uporabniškega profila (PU15) - Alternativni tok 4 (A15.4)
![Razredni diagram 39](https://teaching.lavbic.net/plantuml/png/bLN1RXCn4BtdAwpqKYYfsWCIYgfAjAKLGf1ALP4euZ2xdYIJzNg2xMoLe7u27y6_m7zXxsvsdORIpIdncpUUD-Ddhyr8py50BiuLM2j-z8H88CqcXXTQdhDY8-wdv33WR2IQ2jjxVNdsvjsvHy4Olg_0HFdCtaFFDfigqkYMSnHit9IZG5iZBLET0Mrz2BMBM9ebMfoBuwEZ2FNKR8rEIQ98oQGAUxrUrKF_xkCe-VsJDFG5M15MgL-8avCa50IpF3qLUuecKtUc5XXwFc0vDpHA3AmmlODRWpFGCxnc2IxZejm0zryCHS4aj-WNdbRoBzdnnC2OPYtv8P9rEsS3YQO_lpAwDZmcLIjS1-mQ_v_O9zMMcV2FoXzCJafJjYwJbMMtK5yqPUqCgwRcbO5bLTFYIaFUSBdO7oKpJ9qm-FsLQFxRPaZYO65GrlqyJwPLOiXsfli1PB3gJ2z0aOIKPl3M6KeMhjMVi5nwPiAi4BIVsgEXnLvgiTfHJy-h4bWvY6e3FIlJJhsvgKh2hadTU_Da6RpQ-fGx7ynEEVNft9IUAVleqFlSO8wwcXKyms-zlUdfsCl-BI7NNfylg1JVbuSp83aKrWzBJyfLZl7IY_T85aDJiDChj8fZCCDblBJAzzpKXw6u2S3NRo66EP2AoGuLZbdR36uS5gG2luqQdbcdwGBS8XyARuRm_0uqU055pClHkWr9NCvkAAePLhLvJdPZSvnGM7cdZMIxUw5u0fjZGEan6ehhwb-rdUQ2KZ-lJ-5tNS9Cl6rNmOC-CcfNTNpGEA-PJmTR6qqxqBtS0WtLLw2vDf056Pjt8EpysTAE4jvVT7pnTigeRrVtdDRvySFKF4YTJR_jfd6uuQ3y46URxdtieEYuFR6H7frr65mbgVFKEj9z-yq7lNzyU7Wi-c8W-LuFJls_0FItFsozxKzT_-XnhWTUziLsphhO4mbL-2y0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram39.puml)

#### 2.3.40 Ogled uporabniškega profila (PU15) - Alternativni tok 5 (A15.5)
![Razredni diagram 40](https://teaching.lavbic.net/plantuml/png/bLN1RXCn4BtdAwpqKYYfsWCIYgfAjAKLGf1ALP4euZ2xdYIJzNg2xMoLe7u27y6_m7zXxsvsdORIpIdncpUUD-Ddhyr8py50BiuLM2j-z8H88CqcXXTQdhDY8-wdv33WR2IQ2jjxVNdsvjsvHy4Olg_0HFdCtaFFDfigqkYMSnHit9IZG5iZBLET0Mrz2BMBM9ebMfoBuwEZ2FNKR8rEIQ98oQGAUxrUrKF_xkCe-VsJDFG5M15MgL-8avCa50IpF3qLUuecKtUc5XXwFc0vDpHA3AmmlODRWpFGCxnc2IxZejm0zryCHS4aj-WNdbRoBzdnnC2OPYtv8P9rEsS3YQO_lpAwDZmcLIjS1-mQ_v_O9zMMcV2FoXzCJafJjYwJbMMtK5yqPUqCgwRcbO5bLTFYIaFUSBdO7oKpJ9qm-FsLQFxRPaZYO65GrlqyJwPLOiXsfli1PB3gJ2z0aOIKPl3M6KeMhjMVi5nwPiAi4BIVsgEXnLvgiTfHJy-h4bWvY6e3FIlJJhsvgKh2hadTU_Da6RpQ-fGx7ynEEVNft9IUAVleqFlSO8wwcXKyms-zlUdfsCl-BI7NNfylg1JVbuSp83aKrWzBJyfLZl7IY_T85aDJiDChj8fZCCDblBJAzzpKXw6u2S3NRo66EP2AoGuLZbdR36uS5gG2luqQdbcdwGBS8XyARuRm_0uqU055pClHkWr9NCvkAAePLhLvJdPZSvnGM7cdZMIxUw5u0fjZGEan6ehhwb-rdUQ2KZ-lJ-5tNS9Cl6rNmOC-CcfNTNpGEA-PJmTR6qqxqBtS0WtLLw2vDf056Pjt8EpysTAE4jvVT7pnTigeRrVtdDRvySFKF4YTJR_jfd6uuQ3y46URxdtieEYuFR6H7frr65mbgVFKEj9z-yq7lNzyU7Wi-c8W-LuFJls_0FItFsozxKzT_-XnhWTUziLsphhO4mbL-2y0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram40.puml)

#### 2.3.41 Dodajanje fotografije (PU16) - Osnovni tok (O16.1)
![Razredni diagram 41](https://teaching.lavbic.net/plantuml/png/bLF1RXCn4BtlLrZR2n1I9GSa55MHQ4eHGYX8LGyKSHYlfyba7SyoTZPAK3-1l-B3yEuckwlsa72pdz-ptviP-vnS0G9hDRFWlVgTAAKXonV26sTcR5dKTaa1Avp5e3JOnRlRw_SVPn454TuseBPHcJmblhtKaiEmAr2nX2Nt3hetibeQ19oFH-X2Z-NOeCT2ZKUZ7Xgf-H5Taa6LaMGMaoHfCgGFN-Vwxnzoa2hmgjfbSQEkhdJr8CXkEbKNbXRBS6qtM6KUi2c4vbfWZza3t0kkmAtm6ni8EPVr1VZgzKILJEO5_IRIQluj1ru8FDAg8p-rjhx8cgoZl6-kmmuMCtP1sBOEFmdiwguCueivx1jBT70qrolCWXByzLQrQz_wL0E_ZDMYHeJdYagmP22Z5Nm8GdeJk3oAD9jTP6fcY-0gigd2Ty7vzFMqrqAU_alJXASxt3jOrpdEo5u8hj4rjO8J_AvD_VQqRObpIQ6Rc-zeBM_hlWp9J9IFTNABQkV0Moxxo6EL4onAhET4tTaOvCVFwe0BydqYooBsQbyNVgBk2nRGSJGQyh1kZ1pJVBuvdNyZQCwbn_X9-r7IyUNbMALgA5NMuJGkAoHzDgt9i-5DHoza4NcJ7ghu3m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram41.puml)

#### 2.3.42 Dodajanje fotografije (PU16) - Alternativni (izjemni) tok (A16.1)
![Razredni diagram 42](https://teaching.lavbic.net/plantuml/png/bLF1RXCn4BtlLrZR2n1I9GSa55MHQ4eHGYX8LGyKSHYlfyba7SyoTZPAK3-1l-B3yEuckwlsa72pdz-ptviP-vnS0G9hDRFWlVgTAAKXonV26sTcR5dKTaa1Avp5e3JOnRlRw_SVPn454TuseBPHcJmblhtKaiEmAr2nX2Nt3hetibeQ19oFH-X2Z-NOeCT2ZKUZ7Xgf-H5Taa6LaMGMaoHfCgGFN-Vwxnzoa2hmgjfbSQEkhdJr8CXkEbKNbXRBS6qtM6KUi2c4vbfWZza3t0kkmAtm6ni8EPVr1VZgzKILJEO5_IRIQluj1ru8FDAg8p-rjhx8cgoZl6-kmmuMCtP1sBOEFmdiwguCueivx1jBT70qrolCWXByzLQrQz_wL0E_ZDMYHeJdYagmP22Z5Nm8GdeJk3oAD9jTP6fcY-0gigd2Ty7vzFMqrqAU_alJXASxt3jOrpdEo5u8hj4rjO8J_AvD_VQqRObpIQ6Rc-zeBM_hlWp9J9IFTNABQkV0Moxxo6EL4onAhET4tTaOvCVFwe0BydqYooBsQbyNVgBk2nRGSJGQyh1kZ1pJVBuvdNyZQCwbn_X9-r7IyUNbMALgA5NMuJGkAoHzDgt9i-5DHoza4NcJ7ghu3m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram42.puml)

#### 2.3.43 Prikaz seznama uporabnikov (PU17) - Osnovni tok (O17.1)
![Razredni diagram 43](https://teaching.lavbic.net/plantuml/png/bLHDYzim4BtxLuZifLzPieT22KkWcssNKjeiX1RQqiFOchKdbZNkI758olxtodPYEzr2avEbDs_UZ9v6TZdP4WGADJVWdFeTAHL3agV2QwldR5ZK9YEFDSwYKLhiulNxcpVlvW454TwqO6n2PlGOkKxKa4M_BL6n-8m7WRv6qgHw0Uj22AqVi2nhT5YggybaW0PgVa0pqgWIaiHW54Nj6KRVFornPw7uKh90R2ddQgJ0gN_Wwlewhhi0sSvcwi9GclaRiyPWn6Edzr4ACe7UvJLgJz2WbR3rmgQJkXFODfw-T7zNVhQ8LvXu9VZhbUhMxlbKLKowJbaBQheNVY3pVpBjOY5tChqKoc5tChq2GneIMi5RBnIlVTz_p7eRc36pGR03ruxT6heKBfbyx_StD8OtZKrZqbFbGWcRDhi2XzlGT43o8PI1o-xG6Hw2EMw7MsV2MRlwC5NB6lZniuvX0MI6P8y67zYw79OUAp8rluyAhvotT0j-NKoLXkPTZ2s41geXhq3dZrhYE24Rf1RDjwtD9RaZSKofteNvNkXUlJASmh4Dg0D6KtNVhbevonKbmQ_FzVTGGbAmjAjlBaGM_MuV7zUNgrd3glFdX64GIsVGGxiL2kq71my9aDTj32Pdh_pLqPajVBWzyIsTbR5_KAVdXCb_-aiOJIulhzGeN6uzwUDPM0RanQX_3ty0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram43.puml)


#### 2.3.44 Brisanje fotografije (PU18) - Osnovni tok (O18.1)
![Razredni diagram 44](https://teaching.lavbic.net/plantuml/png/bLF1RXCn4BtlLrZR2n1I9GSa55MHQ4eHGYX8LGyKSHYlfyba7SyoTZPAK3-1l-B3yEuckwlsa72pdz-ptviP-vnS0G9hDRFWlVgTAAKXonV26sTcR5dKTaa1Avp5e3JOnRlRw_SVPn454TuseBPHcJmblhtKaiEmAr2nX2Nt3hetibeQ19oFH-X2Z-NOeCT2ZKUZ7Xgf-H5Taa6LaMGMaoHfCgGFN-Vwxnzoa2hmgjfbSQEkhdJr8CXkEbKNbXRBS6qtM6KUi2c4vbfWZza3t0kkmAtm6ni8EPVr1VZgzKILJEO5_IRIQluj1ru8FDAg8p-rjhx8cgoZl6-kmmuMCtP1sBOEFmdiwguCueivx1jBT70qrolCWXByzLQrQz_wL0E_ZDMYHeJdYagmP22Z5Nm8GdeJk3oAD9jTP6fcY-0gigd2Ty7vzFMqrqAU_alJXASxt3jOrpdEo5u8hj4rjO8J_AvD_VQqRObpIQ6Rc-zeBM_hlWp9J9IFTNABQkV0Moxxo6EL4onAhET4tTaOvCVFwe0BydqYooBsQbyNVgBk2nRGSJGQyh1kZ1pJVBuvdNyZQCwbn_ZjFqd7bvTZbQgXL567qxYiaFJPi2RFPZSTlP15v4rwAE8_)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram244.puml)

#### 2.3.45 Ogled fotografije (PU19) - Osnovni tok (O19.1)
![Razredni diagram 45](https://teaching.lavbic.net/plantuml/png/bLB1ZjCm4BtdAwpk1IXTTGz8g5fLOhiiGWWLQRK75d4OnxF9DAudZDrKBTfFuA_uC9oaJI8ujDpivpUUz-QDByYL8B1M2mlUgv-9KXhI8XFUEBDWowAsEGMiSHQ3qc8NR-vkthvVH1H4UDk2siRAv3dntQUM78PTYOebv3nuw7kaJMaGS3u-eGi3bcE37ajrDPqEq4WjZcXE1bLAabfCagJrC7hylDI_Vv63aGAlwbiQB-hwMjSDGNRpkRgmbENXncwmzZncKmejjS0UqqTu45o1M-4NDX0AhfeFyCNBcQgOp3_qsqXh-7SSE1DuebLFVkvaVP8rMKV5K5oF7IIcx8AmxHH-4DWrgOnZnmBshIGwA5hg5QP12VvuhRgpxtIgiS_ZjAWjmdEBAh1a8AKLl0j2UXEuEXPfDhl8rCmMmTLaKvllZVFfxsclXJpzLqrhdkvnxs3T-3Z3UocuHjVE2axm-vY6yNInnBsaqE_DLxIMjqqk4p8pvUESN5RV77ZBrH1vgds2HOdpdAbx6ury-ru_S4b-I6J9ObRxPl0pzL2oW8whqP8dJJ1oTFFnzhJ_ZQ0vbnxj_xMAe-dbvPKQgOdKXYVpU8p8gz5X9dy0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram245.puml)

#### 2.3.46 Urejanje dogodka (PU20) - Osnovni tok (O20.1)
![Razredni diagram 46](https://teaching.lavbic.net/plantuml/png/fLPHJzim47xFhx3A2zieWeT9KuMGe0o4q5YbIaW3yU34Ndk9w-jiDnMT-0dxL_jXkpX9wsQ5fl3KzFDtvxllxcpR3FIK6pvXVSMjPRyZncAUP2E3CotwgD2m-HYSB70qGfeIs_jyUVxbQvzGRWpEIp1MP1azHtRfL86Mxcag6Hetnc1XjKVYJPtXsjAIr2vWQHJIoYaxFZeAKA9cDJe68La29b4oYg8oXyxzjmkSyBz_-B1mss7SiX9AIeITdCJ5rjmydPwoFGMZiJjNC-cp_pGrScOdqi0jzpReRVO_z5YE84e6P7mHE5mkFYzZk34JK1goMymXuJw6TOY2I50xWsePmvNXJsKCLYuqdtZY_lSubObZHluwOCjl6uIJSmM29v3oCsSWdZdCQwCOnHCnOqGbkVQUnnGlb25iTrrcMjCjkTSZ1Y9Wm28sO5zZv4R3FHSwbPuaj-pwt5HmOAHGE5hNi0PRg5XHLw9iJRUo61XCPUPQo5IAkhFPReMZlfn83KF7tSpklXTLuPQd0mCgdSKg9K_RZJ2HRqZh9oXAn_1qkAv_vQ5D8GnVvCOwUD531Jqyicdv1GUiQZwU5OfkSBQryPgTTq5x2fcjDLw5lTft0WLFA-BsN6UK0BHcL_DMypSEt2vjLRLyw_sBFYghuasoDjMqC3QeOL7qHDlfRtIThq43enhGTG5kTOZ_a4hXt1UX2w9NTKJnJtEhC0yHEqM32IWCGMeLsYD4KZb0PsXSGjMwWcPmqcFqKroCtM9EP8zzfn_-y5WWtLghEmljH6qaTttHidFUOEVxipdMZN0exakQOsbQJqrmqorlk7VK9xSo1ir3oAjE8V1ShhHVKxfvuFauMalPdhvswxMMlBeatwtqyEuASQHadojPl6BOsU3QwzvS8Forjyw6ORvUt52J4piDucmS4fivuJ5sLnDcuSje_GtMEJuyF6OTchaYfEufVHP8ftdIxcfMYhohLVsUY1gFjCvHPIXmhhqT0HyxLOT7_pr7Nk8tfYrgNYVB04CxYcz3HVy1)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram246.puml)

#### 2.3.47 Urejanje dogodka (PU20) - Alternativni (izjemni) tok 1 (A20.1)
![Razredni diagram 47](https://teaching.lavbic.net/plantuml/png/fLPHJzim47xFhx3A2zieWeT9KuMGe0o4q5YbIaW3yU34Ndk9w-jiDnMT-0dxL_jXkpX9wsQ5fl3KzFDtvxllxcpR3FIK6pvXVSMjPRyZncAUP2E3CotwgD2m-HYSB70qGfeIs_jyUVxbQvzGRWpEIp1MP1azHtRfL86Mxcag6Hetnc1XjKVYJPtXsjAIr2vWQHJIoYaxFZeAKA9cDJe68La29b4oYg8oXyxzjmkSyBz_-B1mss7SiX9AIeITdCJ5rjmydPwoFGMZiJjNC-cp_pGrScOdqi0jzpReRVO_z5YE84e6P7mHE5mkFYzZk34JK1goMymXuJw6TOY2I50xWsePmvNXJsKCLYuqdtZY_lSubObZHluwOCjl6uIJSmM29v3oCsSWdZdCQwCOnHCnOqGbkVQUnnGlb25iTrrcMjCjkTSZ1Y9Wm28sO5zZv4R3FHSwbPuaj-pwt5HmOAHGE5hNi0PRg5XHLw9iJRUo61XCPUPQo5IAkhFPReMZlfn83KF7tSpklXTLuPQd0mCgdSKg9K_RZJ2HRqZh9oXAn_1qkAv_vQ5D8GnVvCOwUD531Jqyicdv1GUiQZwU5OfkSBQryPgTTq5x2fcjDLw5lTft0WLFA-BsN6UK0BHcL_DMypSEt2vjLRLyw_sBFYghuasoDjMqC3QeOL7qHDlfRtIThq43enhGTG5kTOZ_a4hXt1UX2w9NTKJnJtEhC0yHEqM32IWCGMeLsYD4KZb0PsXSGjMwWcPmqcFqKroCtM9EP8zzfn_-y5WWtLghEmljH6qaTttHidFUOEVxipdMZN0exakQOsbQJqrmqorlk7VK9xSo1ir3oAjE8V1ShhHVKxfvuFauMalPdhvswxMMlBeatwtqyEuASQHadojPl6BOsU3QwzvS8Forjyw6ORvUt52J4piDucmS4fivuJ5sLnDcuSje_GtMEJuyF6OTchaYfEufVHP8ftdIxcfMYhohLVsUY1gFjCvHPIXmhhqT0HyxLOT7_pr7Nk8tfYrgNYVB04CxYcz3HVy1)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram247.puml)

#### 2.3.48 Brisanje dogodka (PU21) - Osnovni tok (O21.1)
![Razredni diagram 48](https://teaching.lavbic.net/plantuml/png/fLPHJzim47xFhx3A2zieWeT9KuMGe0o4q5YbIaW3yU34Ndk9w-jiDnMT-0dxL_jXkpX9wsQ5fl3KzFDtvxllxcpR3FIK6pvXVSMjPRyZncAUP2E3CotwgD2m-HYSB70qGfeIs_jyUVxbQvzGRWpEIp1MP1azHtRfL86Mxcag6Hetnc1XjKVYJPtXsjAIr2vWQHJIoYaxFZeAKA9cDJe68La29b4oYg8oXyxzjmkSyBz_-B1mss7SiX9AIeITdCJ5rjmydPwoFGMZiJjNC-cp_pGrScOdqi0jzpReRVO_z5YE84e6P7mHE5mkFYzZk34JK1goMymXuJw6TOY2I50xWsePmvNXJsKCLYuqdtZY_lSubObZHluwOCjl6uIJSmM29v3oCsSWdZdCQwCOnHCnOqGbkVQUnnGlb25iTrrcMjCjkTSZ1Y9Wm28sO5zZv4R3FHSwbPuaj-pwt5HmOAHGE5hNi0PRg5XHLw9iJRUo61XCPUPQo5IAkhFPReMZlfn83KF7tSpklXTLuPQd0mCgdSKg9K_RZJ2HRqZh9oXAn_1qkAv_vQ5D8GnVvCOwUD531Jqyicdv1GUiQZwU5OfkSBQryPgTTq5x2fcjDLw5lTft0WLFA-BsN6UK0BHcL_DMypSEt2vjLRLyw_sBFYghuasoDjMqC3QeOL7qHDlfRtIThq43enhGTG5kTOZ_a4hXt1UX2w9NTKJnJtEhC0yHEqM32IWCGMeLsYD4KZb0PsXSGjMwWcPmqcFqKroCtM9EP8zzfn_-y5WWtLghEmljH6qaTttHidFUOEVxipdMZN0exakQOsbQJqrmqorlk7VK9xSo1ir3oAjE8V1ShhHVKxfvuFauMalPdhvswxMMlBeatwtqyEuASQHadojPl6BOsU3QwzvS8Forjyw6ORvUt52J4piDucmS4fivuJ5sLnDcuSje_GtMEJuyF6OTchaYfEufVHP8ftdIxcfMYhohLVsUY1gFjCvHPIXmhhqT0HyxLOT7_pr7Nk8tfYrgNYVB04CxYcz3HVy1)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram248.puml)

#### 2.3.49 Dodajanje dogodka (PU22) - Osnovni tok (O22.1)
![Razredni diagram 49](https://teaching.lavbic.net/plantuml/png/fLPHJzim47xFhx3A2zieWeT9KuMGe0o4q5YbIaW3yU34Ndk9w-jiDnMT-0dxL_jXkpX9wsQ5fl3KzFDtvxllxcpR3FIK6pvXVSMjPRyZncAUP2E3CotwgD2m-HYSB70qGfeIs_jyUVxbQvzGRWpEIp1MP1azHtRfL86Mxcag6Hetnc1XjKVYJPtXsjAIr2vWQHJIoYaxFZeAKA9cDJe68La29b4oYg8oXyxzjmkSyBz_-B1mss7SiX9AIeITdCJ5rjmydPwoFGMZiJjNC-cp_pGrScOdqi0jzpReRVO_z5YE84e6P7mHE5mkFYzZk34JK1goMymXuJw6TOY2I50xWsePmvNXJsKCLYuqdtZY_lSubObZHluwOCjl6uIJSmM29v3oCsSWdZdCQwCOnHCnOqGbkVQUnnGlb25iTrrcMjCjkTSZ1Y9Wm28sO5zZv4R3FHSwbPuaj-pwt5HmOAHGE5hNi0PRg5XHLw9iJRUo61XCPUPQo5IAkhFPReMZlfn83KF7tSpklXTLuPQd0mCgdSKg9K_RZJ2HRqZh9oXAn_1qkAv_vQ5D8GnVvCOwUD531Jqyicdv1GUiQZwU5OfkSBQryPgTTq5x2fcjDLw5lTft0WLFA-BsN6UK0BHcL_DMypSEt2vjLRLyw_sBFYghuasoDjMqC3QeOL7qHDlfRtIThq43enhGTG5kTOZ_a4hXt1UX2w9NTKJnJtEhC0yHEqM32IWCGMeLsYD4KZb0PsXSGjMwWcPmqcFqKroCtM9EP8zzfn_-y5WWtLghEmljH6qaTttHidFUOEVxipdMZN0exakQOsbQJqrmqorlk7VK9xSo1ir3oAjE8V1ShhHVKxfvuFauMalPdhvswxMMlBeatwtqyEuASQHadojPl6BOsU3QwzvS8Forjyw6ORvUt52J4piDucmS4fivuJ5sLnDcuSje_GtMEJuyF6OTchaYfEufVHP8ftdIxcfMYhohLVsUY1gFjCvHPIXmhhqT0HyxLOT7_pr7Nk8tfYrgNYVB04CxYcz3HVy1)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram249.puml)

#### 2.3.50 Dodajanje dogodka (PU22) - Alternativni (izjemni) tok 1 (A22.1)
![Razredni diagram 50](https://teaching.lavbic.net/plantuml/png/fLPHJzim47xFhx3A2zieWeT9KuMGe0o4q5YbIaW3yU34Ndk9w-jiDnMT-0dxL_jXkpX9wsQ5fl3KzFDtvxllxcpR3FIK6pvXVSMjPRyZncAUP2E3CotwgD2m-HYSB70qGfeIs_jyUVxbQvzGRWpEIp1MP1azHtRfL86Mxcag6Hetnc1XjKVYJPtXsjAIr2vWQHJIoYaxFZeAKA9cDJe68La29b4oYg8oXyxzjmkSyBz_-B1mss7SiX9AIeITdCJ5rjmydPwoFGMZiJjNC-cp_pGrScOdqi0jzpReRVO_z5YE84e6P7mHE5mkFYzZk34JK1goMymXuJw6TOY2I50xWsePmvNXJsKCLYuqdtZY_lSubObZHluwOCjl6uIJSmM29v3oCsSWdZdCQwCOnHCnOqGbkVQUnnGlb25iTrrcMjCjkTSZ1Y9Wm28sO5zZv4R3FHSwbPuaj-pwt5HmOAHGE5hNi0PRg5XHLw9iJRUo61XCPUPQo5IAkhFPReMZlfn83KF7tSpklXTLuPQd0mCgdSKg9K_RZJ2HRqZh9oXAn_1qkAv_vQ5D8GnVvCOwUD531Jqyicdv1GUiQZwU5OfkSBQryPgTTq5x2fcjDLw5lTft0WLFA-BsN6UK0BHcL_DMypSEt2vjLRLyw_sBFYghuasoDjMqC3QeOL7qHDlfRtIThq43enhGTG5kTOZ_a4hXt1UX2w9NTKJnJtEhC0yHEqM32IWCGMeLsYD4KZb0PsXSGjMwWcPmqcFqKroCtM9EP8zzfn_-y5WWtLghEmljH6qaTttHidFUOEVxipdMZN0exakQOsbQJqrmqorlk7VK9xSo1ir3oAjE8V1ShhHVKxfvuFauMalPdhvswxMMlBeatwtqyEuASQHadojPl6BOsU3QwzvS8Forjyw6ORvUt52J4piDucmS4fivuJ5sLnDcuSje_GtMEJuyF6OTchaYfEufVHP8ftdIxcfMYhohLVsUY1gFjCvHPIXmhhqT0HyxLOT7_pr7Nk8tfYrgNYVB04CxYcz3HVy1)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram250.puml)

#### 2.3.51 Ogled dogodka (PU23) - Osnovni tok (O23.1)
![Razredni diagram 51](https://teaching.lavbic.net/plantuml/png/fLPHJzim47xFhx3A2zieWeT9KuMGe0o4q5YbIaW3yU34Ndk9w-jiDnMT-0dxL_jXkpX9wsQ5fl3KzFDtvxllxcpR3FIK6pvXVSMjPRyZncAUP2E3CotwgD2m-HYSB70qGfeIs_jyUVxbQvzGRWpEIp1MP1azHtRfL86Mxcag6Hetnc1XjKVYJPtXsjAIr2vWQHJIoYaxFZeAKA9cDJe68La29b4oYg8oXyxzjmkSyBz_-B1mss7SiX9AIeITdCJ5rjmydPwoFGMZiJjNC-cp_pGrScOdqi0jzpReRVO_z5YE84e6P7mHE5mkFYzZk34JK1goMymXuJw6TOY2I50xWsePmvNXJsKCLYuqdtZY_lSubObZHluwOCjl6uIJSmM29v3oCsSWdZdCQwCOnHCnOqGbkVQUnnGlb25iTrrcMjCjkTSZ1Y9Wm28sO5zZv4R3FHSwbPuaj-pwt5HmOAHGE5hNi0PRg5XHLw9iJRUo61XCPUPQo5IAkhFPReMZlfn83KF7tSpklXTLuPQd0mCgdSKg9K_RZJ2HRqZh9oXAn_1qkAv_vQ5D8GnVvCOwUD531Jqyicdv1GUiQZwU5OfkSBQryPgTTq5x2fcjDLw5lTft0WLFA-BsN6UK0BHcL_DMypSEt2vjLRLyw_sBFYghuasoDjMqC3QeOL7qHDlfRtIThq43enhGTG5kTOZ_a4hXt1UX2w9NTKJnJtEhC0yHEqM32IWCGMeLsYD4KZb0PsXSGjMwWcPmqcFqKroCtM9EP8zzfn_-y5WWtLghEmljH6qaTttHidFUOEVxipdMZN0exakQOsbQJqrmqorlk7VK9xSo1ir3oAjE8V1ShhHVKxfvuFauMalPdhvswxMMlBeatwtqyEuASQHadojPl6BOsU3QwzvS8Forjyw6ORvUt52J4piDucmS4fivuJ5sLnDcuSje_GtMEJuyF6OTchaYfEufVHP8ftdIxcfMYhohLVsUY1gFjCvHPIXmhhqT0HyxLOT7_pr7Nk8tfYrgNYVB04CxYcz3HVy1)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram251.puml)

#### 2.3.52 Ocenjevanje predloga projekta (PU24) - Osnovni tok (O24.1)
![Razredni diagram 52](https://teaching.lavbic.net/plantuml/png/dLJ1Rjf04Btp5IldahOXWaEb2aL83Mcggcf1YbIfYN8OUxSmzhBZpgv1fCg_TsmCE2Oj9Bvu_RnltipEs_4PkXmOvcfamNlrfwDK34asPIgS7f4bLiiP1bFYnDhm6ZjvVttvuTD8K62cvHgChJ0xZns_3MhHcR3AZI8ECshys6aa5JKmE2-_Z0kDNOwqyIPN_LwlWShMR8FEK1kL82VMTEHP5n7TVfkGXf3XX8ssD8qKUDK6rSL5N2O0l1eErOd5wInSsiAKP_2ETCuuZXaUJ7BwPg0MX5egsmdSc0S7ypeKBMg55le_YQSQjt0boQNWKbEpOSAKcYp0C_9VUOxMORRPMgctGH5Fo0KckzN-pB1QQ_kdYPwEuzGaGR7vVQQsQxzH5eAaci73vkoskHta-Pcqw-Mq1LZKa60A7mDZN8HTZZ7fbUoCYQm1LsdaRER6uKs0KFYNQx73xv1E66rQn3QLI8T9b9XNbFKBhPJ3aBQCKaSufX5YbmNxWF-CK4DtzofVh_1CUL5rKmLPUQBF13iWktDUg-BAU2rCV2Ut6CFEyZ-DjRIiZDT5FQYpARySU4kB9k9pOahGKXEKD4MZYSWreS3IggOHkdAzY_b0oQkSLzsoHsQWnlA2k_iIwMxw_SFZSSPe5VVbwZ2j4CfhUBgS06rBjTAHlA_5GuOFTsnltaNzy_E-YkGuowPqXx8iaMXlSdJs1zdntBqn5FLgggQbgvW2l8tQjlaB)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram252.puml)

#### 2.3.53 Filtriranje predlogov projektov (PU25) - Osnovni tok (O25.1)
![Razredni diagram 53](https://teaching.lavbic.net/plantuml/png/dLJ1Rjf04Btp5IldahOXWaEb2aL83Mcggcf1YbIfYN8OUxSmzhBZpgv1KENVEpO679EM9Bvu_RnltipEs_4PkXmOvcfamNlrfwDK34asPIgS7f4bLiiP1bFYnDhm1ZjvVttvuTD8K62cvGQChJ0x3ns_2shHcR3AZI8ECshys6ia5JKmE2-_Z0kDNOwqyIPN_LwlWShMR8lEK1kL82VMTEJP517TVfkGXf3XX8ssD8qKUDK6rSL5N2O0l1eErOd5wInSsiAKP_2ETCuuZXdM9ZbzCr0BGYsLxGLkpDh1l0v5YrgXXVvFuh76BLn9SYcurDHic32b9WlmXFnNdgDrc6stLkfjKCGJSe79xhG_CwmsslvnegVZE3L9K6n-dwdTsc-LXI2fPh3UdjqkjwCyFvDslPos08iQ4apXOs2CYx3FCIQzafqnaJNWAesSpTmul0aG2lzoBNRu7T89eqsBsAOIwJY94lEAidwXbN8OqfPHwWZFQOJOPS4-u3yZrD3TlSetApnJNbJTL45MdkWJmOx8xftNghWoNWiJtyajnh2t_4zZBIqhutLH3-fioYy7tjAYYVYSc1Aqr0GbJT5e8d9DAB2qgcc4hbplOZvGyYhdLRViaHceiRpWxhv4kjj-__3uF6EqYljoTPnM2EKrF5rEWBQbMkb8tjVY8SF7EtOuZQB--NbVHNAUPLUwGrcMI7GmEZe7ioJgrLHDIrSn1NWRjNl_5m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram253.puml)

#### 2.3.54 Filtriranje predlogov projektov (PU25) - Alternativni tok 1 (A25.1)
![Razredni diagram 54](https://teaching.lavbic.net/plantuml/png/dLJ1Rjf04Btp5IldahOXWaEb2aL83Mcggcf1YbIfYN8OUxSmzhBZpgv1KENVEpO679EM9Bvu_RnltipEs_4PkXmOvcfamNlrfwDK34asPIgS7f4bLiiP1bFYnDhm1ZjvVttvuTD8K62cvGQChJ0x3ns_2shHcR3AZI8ECshys6ia5JKmE2-_Z0kDNOwqyIPN_LwlWShMR8lEK1kL82VMTEJP517TVfkGXf3XX8ssD8qKUDK6rSL5N2O0l1eErOd5wInSsiAKP_2ETCuuZXdM9ZbzCr0BGYsLxGLkpDh1l0v5YrgXXVvFuh76BLn9SYcurDHic32b9WlmXFnNdgDrc6stLkfjKCGJSe79xhG_CwmsslvnegVZE3L9K6n-dwdTsc-LXI2fPh3UdjqkjwCyFvDslPos08iQ4apXOs2CYx3FCIQzafqnaJNWAesSpTmul0aG2lzoBNRu7T89eqsBsAOIwJY94lEAidwXbN8OqfPHwWZFQOJOPS4-u3yZrD3TlSetApnJNbJTL45MdkWJmOx8xftNghWoNWiJtyajnh2t_4zZBIqhutLH3-fioYy7tjAYYVYSc1Aqr0GbJT5e8d9DAB2qgcc4hbplOZvGyYhdLRViaHceiRpWxhv4kjj-__3uF6EqYljoTPnM2EKrF5rEWBQbMkb8tjVY8SF7EtOuZQB--NbVHNAUPLUwGrcMI7GmEZe7ioJgrLHDIrSn1NWRjNl_5m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram254.puml)

#### 2.3.55 Filtriranje predlogov projektov (PU25) - Alternativni (izjemni) tok 2 (A25.2)
![Diagram zaporedja 55](https://teaching.lavbic.net/plantuml/png/dLJ1Rjf04Btp5IldahOXWaEb2aL83Mcggcf1YbIfYN8OUxSmzhBZpgv1KENVEpO679EM9Bvu_RnltipEs_4PkXmOvcfamNlrfwDK34asPIgS7f4bLiiP1bFYnDhm1ZjvVttvuTD8K62cvGQChJ0x3ns_2shHcR3AZI8ECshys6ia5JKmE2-_Z0kDNOwqyIPN_LwlWShMR8lEK1kL82VMTEJP517TVfkGXf3XX8ssD8qKUDK6rSL5N2O0l1eErOd5wInSsiAKP_2ETCuuZXdM9ZbzCr0BGYsLxGLkpDh1l0v5YrgXXVvFuh76BLn9SYcurDHic32b9WlmXFnNdgDrc6stLkfjKCGJSe79xhG_CwmsslvnegVZE3L9K6n-dwdTsc-LXI2fPh3UdjqkjwCyFvDslPos08iQ4apXOs2CYx3FCIQzafqnaJNWAesSpTmul0aG2lzoBNRu7T89eqsBsAOIwJY94lEAidwXbN8OqfPHwWZFQOJOPS4-u3yZrD3TlSetApnJNbJTL45MdkWJmOx8xftNghWoNWiJtyajnh2t_4zZBIqhutLH3-fioYy7tjAYYVYSc1Aqr0GbJT5e8d9DAB2qgcc4hbplOZvGyYhdLRViaHceiRpWxhv4kjj-__3uF6EqYljoTPnM2EKrF5rEWBQbMkb8tjVY8SF7EtOuZQB--NbVHNAUPLUwGrcMI7GmEZe7ioJgrLHDIrSn1NWRjNl_5m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram255.puml)

#### 2.3.56 Izbira občine (PU26) - Osnovni tok (O26.1)
![Razredni diagram 56](https://teaching.lavbic.net/plantuml/png/bLB1RjD04BtxAqRkfK1JfGSa55MHQA08SIXInG4X3hFUgJtnPiUTtIHAK3-1l-B3khQ9Qt59kAtVl3Vhzzw6cds3YYjOE0m1VcK01ekwL5bxkn0d2jkA8xMug2NjiREtjpVlFYuIYggoxK7ZaZ9xoiAmrB6dk6i8H6Cbey7B7KKdZOe-f17vE69viHIeWQlfT8GcQdr0AxO41MlXACjw2_aNNR7pND-PFx_POmuOu0Kh4WJNruNugEBcSpXpN5Rna-AkS_-cKQvn_rKinfexFftVcIKL4PGUBs0uXrSps0ZRLXIgz5VSY-XKqGOTMonuYU-Zibb7sHn4HkmkCOs88_GjsQRTork9KYe-y5AEh-UzKGxyNvhUFD_JtkEgyt62zqPfHRxF2e_mduQQnlKCjQJ-EUw6LhwJSxBjUfcmdK58EVco_V8Od6mE2BJGGsiK7MaAT0RtBZdvyRCTICDXh1KjKrdxBlaPV6j4qQItqPCdNJDwiFFvm_40rahsL7ho_yzRpAUNbrUGmqHRnvDvEYRaTVutb6S0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram256.puml)

#### 2.3.57 Sinhronizacija dogodkov z aplikacijo Google Calendar (PU27) - Osnovni tok (O27.1)
![Razredni diagram 57](https://teaching.lavbic.net/plantuml/png/fLPHJzim47xFhx3A2zieWeT9KuMGe0o4q5YbIaW3yU34Ndk9w-jiDnMT-0dxL_jXkpX9wsQ5fl3KzFDtvxllxcpR3FIK6pvXVSMjPRyZncAUP2E3CotwgD2m-HYSB70qGfeIs_jyUVxbQvzGRWpEIp1MP1azHtRfL86Mxcag6Hetnc1XjKVYJPtXsjAIr2vWQHJIoYaxFZeAKA9cDJe68La29b4oYg8oXyxzjmkSyBz_-B1mss7SiX9AIeITdCJ5rjmydPwoFGMZiJjNC-cp_pGrScOdqi0jzpReRVO_z5YE84e6P7mHE5mkFYzZk34JK1goMymXuJw6TOY2I50xWsePmvNXJsKCLYuqdtZY_lSubObZHluwOCjl6uIJSmM29v3oCsSWdZdCQwCOnHCnOqGbkVQUnnGlb25iTrrcMjCjkTSZ1Y9Wm28sO5zZv4R3FHSwbPuaj-pwt5HmOAHGE5hNi0PRg5XHLw9iJRUo61XCPUPQo5IAkhFPReMZlfn83KF7tSpklXTLuPQd0mCgdSKg9K_RZJ2HRqZh9oXAn_1qkAv_vQ5D8GnVvCOwUD531Jqyicdv1GUiQZwU5OfkSBQryPgTTq5x2fcjDLw5lTft0WLFA-BsN6UK0BHcL_DMypSEt2vjLRLyw_sBFYghuasoDjMqC3QeOL7qHDlfRtIThq43enhGTG5kTOZ_a4hXt1UX2w9NTKJnJtEhC0yHEqM32IWCGMeLsYD4KZb0PsXSGjMwWcPmqcFqKroCtM9EP8zzfn_-y5WWtLghEmljH6qaTttHidFUOEVxipdMZN0exakQOsbQJqrmqorlk7VK9xSo1ir3oAjE8V1ShhHVKxfvuFauMalPdhvswxMMlBeatwtqyEuASQHadojPl6BOsU3QwzvS8Forjyw6ORvUt52J4piDucmS4fivuJ5sLnDcuSje_GtMEJuyF6OTchaYfEufVHP8ftdIxcfMYhohLVsUY1gFjCvHPIXmhhqT0HyxLOT7_pr7Nk8tfYrgNYVB04CxYcz3HVy1)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram257.puml)

#### 2.3.58 Sinhronizacija dogodkov z aplikacijo Google Calendar (PU27) - Alternativni (izjemni) tok 1 (A27.1)
![Razredni diagram 58](https://teaching.lavbic.net/plantuml/png/fLPHJzim47xFhx3A2zieWeT9KuMGe0o4q5YbIaW3yU34Ndk9w-jiDnMT-0dxL_jXkpX9wsQ5fl3KzFDtvxllxcpR3FIK6pvXVSMjPRyZncAUP2E3CotwgD2m-HYSB70qGfeIs_jyUVxbQvzGRWpEIp1MP1azHtRfL86Mxcag6Hetnc1XjKVYJPtXsjAIr2vWQHJIoYaxFZeAKA9cDJe68La29b4oYg8oXyxzjmkSyBz_-B1mss7SiX9AIeITdCJ5rjmydPwoFGMZiJjNC-cp_pGrScOdqi0jzpReRVO_z5YE84e6P7mHE5mkFYzZk34JK1goMymXuJw6TOY2I50xWsePmvNXJsKCLYuqdtZY_lSubObZHluwOCjl6uIJSmM29v3oCsSWdZdCQwCOnHCnOqGbkVQUnnGlb25iTrrcMjCjkTSZ1Y9Wm28sO5zZv4R3FHSwbPuaj-pwt5HmOAHGE5hNi0PRg5XHLw9iJRUo61XCPUPQo5IAkhFPReMZlfn83KF7tSpklXTLuPQd0mCgdSKg9K_RZJ2HRqZh9oXAn_1qkAv_vQ5D8GnVvCOwUD531Jqyicdv1GUiQZwU5OfkSBQryPgTTq5x2fcjDLw5lTft0WLFA-BsN6UK0BHcL_DMypSEt2vjLRLyw_sBFYghuasoDjMqC3QeOL7qHDlfRtIThq43enhGTG5kTOZ_a4hXt1UX2w9NTKJnJtEhC0yHEqM32IWCGMeLsYD4KZb0PsXSGjMwWcPmqcFqKroCtM9EP8zzfn_-y5WWtLghEmljH6qaTttHidFUOEVxipdMZN0exakQOsbQJqrmqorlk7VK9xSo1ir3oAjE8V1ShhHVKxfvuFauMalPdhvswxMMlBeatwtqyEuASQHadojPl6BOsU3QwzvS8Forjyw6ORvUt52J4piDucmS4fivuJ5sLnDcuSje_GtMEJuyF6OTchaYfEufVHP8ftdIxcfMYhohLVsUY1gFjCvHPIXmhhqT0HyxLOT7_pr7Nk8tfYrgNYVB04CxYcz3HVy1)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razredniDiagram258.puml)

### 2.4 Opis razredov
V okviru tega podpoglavja so podrobno opisani vsi razredi iz razrednega diagrama. 

#### 2.4.1 Mejni razredi

##### 2.4.1.1 ZMRegistracijskiObrazec
###### Opis
V okviru naše aplikacije zaslonska maska ZMRegistracijskiObrazec predstavlja registracijski obrazec, v katerega neregistrirani uporabnik vnese potrebne podatke za registracijo.

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| zacniRegistracijo() | / | void | prikaže registracijski obrazec |

##### 2.4.1.2 ZMDomačaStran
###### Opis
Zaslonska maska za domačo stran.

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| preusmeriNaDomacoStran() | / | void | preusmeri na domačo stran |
| prikazDomacaStran() | / | void | prikaže domačo stran |

##### 2.4.1.3 ZMPrijavniObrazec
###### Opis
Zaslonska maska za prijavni obrazec.

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| zacniPrijavo() | / | void | prikaže prijavni obrazec |

##### 2.4.1.4 ZMUporabniškiProfil
###### Opis
Zaslonska maska za uporabniški profil.

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| odpriObrazecZaUrejanjeProfila() | / | void | prikaže obrazec za urejanje uporabniškega profila |

##### 2.4.1.5 ZMSeznamUporabnikov
###### Opis
Zaslonska maska za prikaz seznama registriranih uporabnikov aplikacije. 

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode
Razred ne vsebuje nesamoumevnih metod.

##### 2.4.1.6 ZMSeznamPredlogov
###### Opis
Zaslonska maska za prikaz seznama predlogov projektov.

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| odpriObrazecZaDodajanjePredlogaProjekta() | / | void | prikaže obrazec za dodajanje predloga projekta |

##### 2.4.1.7 ZMSeznamNovic
###### Opis
Zaslonska maska za prikaz seznama novic. 

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| odpriObrazecZaDodajanjeNovic() | / | void | prikaže obrazec za dodajanje novice |

##### 2.4.1.8 ZMPodatkiPredlog
###### Opis
Zaslonska maska za prikaz predlogov projektov. 

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| odpriObrazec() | / | void | prikaže obrazec s podatki o predlogu |

##### 2.4.1.9 ZMObčina
###### Opis
Zaslonska maska za prikaz podatkov o izbrani občini.  

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| odpriObrazecZaUrejanjePodatkovObcine() | / | void | prikaže obrazec za urejanje podatkov o občini |
| odpriObrazecZaDodajanjeFotografije() | / | void | prikaže obrazec za dodajanje fotografije |

##### 2.4.1.10 SVGoogleCalendar API
###### Opis
Zunanji vmesnik GoogleCalendar API, ki ga uporabljamo za funkcionalnosti povezane z dogodki. 

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| vrniSeznamDogodkovIzKoledarja() | / | void | vrne seznam dogodkov iz koledarja |
| prikaziDogodekIzKoledarja() | / | void | prikaže dogodek iz koledarja |
| urediDogodekVKoledarju() | / | void | prikaže obrazec za urejanje dogodkov |

#### 2.4.2 Kontrolni razredi

##### 2.4.2.1 KrmilnikValidacija
###### Opis
KrmilnikValidacija je abstraktni kontrolni razred za avtentikacijo in validacijo atributov. 

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| validacijaAtributov(body) | body: Object | boolean | abstraktna metoda, ki se uporablja za avtentikacijo in validacijo atributov |

##### 2.4.2.2 KrmilnikRegistracija
###### Opis
KrmilnikRegistracija je kontrolni razred, ki implementira abstraktni kontrolni razred KrmilnikValidacija. 

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| registracija(req, res) | req: Object, res: Object | void | izvede registracijo in pokliče metodo validacijaAtributov() |
| validacijaAtributov(body) | body: Object | boolean | metoda prevzame (override) abstraktno metodo validacijaAtributov iz abstraktnega razreda KrmilnikValidacija: preveri prazna polja v registracijskem obrazcu; preveri, ali ima email pravilno obliko; preveri ali je uporabnik starejši od 18 let; preveri, ali geslo ustreza pogojem; preveri, če je vnešeno geslo enako potrditvenemu geslu |

##### 2.4.2.3 KrmilnikPrijava
###### Opis
KrmilnikPrijava je kontrolni razred, ki implementira abstraktni kontrolni razred KrmilnikValidacija. Vsebuje metode za prijavo, validacijo atributov in odjavo. 

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| prijava(req, res) | req: Object, res: Object | void | izvede prijavo in pokliče metodo validacijaAtributov() |
| validacijaAtributov(body) | body: Object | boolean | metoda prevzame (override) abstraktno metodo validacijaAtributov iz abstraktnega razreda KrmilnikValidacija: preveri prazna polja v obrazcu za prijavo; preveri, ali ima email pravilno obliko; preveri, ali geslo ustreza pogojem |
| odjava(req, res) | req: Object, res: Object | void | prijavljenega uporabnika odjavi iz aplikacije |

##### 2.4.2.4 KrmilnikUporabnik
###### Opis
KrmilnikUporabnik je kontrolni razred za glavne procese povezane z interakcijo z modelom Uporabnik in implementira abstraktni kontrolni razred KrmilnikValidacija. 

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| seznamUporabnikov(req, res) | req: Object, res: Object | void | preusmeri na novo stran, kjer prikaže seznam vseh uporabnikov |
| urediProfil(req, res) | req: Object, res: Object | void | pokliče metodo validacijaAtributov(), če vrne TRUE, pokliče urediUporabnikID(); če model vrne sporočilo OK, posodobi podatke v profilu s parametrom id |
| izbrisiProfil(req, res) | req: Object, res: Object | void | pokliče izbrisiUporabnikID(), ki izbriše uporabniški profil z parametrom id vpisanim v req |
| prikaziProfil(req, res) | req: Object, res: Object | void | pokliče vrniUporabnikID() oz. vrne uporabniški profil |
| validacijaAtributov(req, res) | req: Object, res: Object | void | metoda prevzame (override) abstraktno metodo validacijaAtributov iz abstraktnega razreda KrmilnikValidacija in izvede validacijo atributov |

##### 2.4.2.5 KrmilnikPredloga
###### Opis
KrmilnikPredloga je kontrolni razred za glavne procese povezane z interakcijo z modelom PredlogProjekta in implementira abstraktni kontrolni razred KrmilnikValidacija. 

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| seznamPredlogov(req, res) | req: Object, res: Object | void | preusmeri na novo stran, kjer prikaže seznam vseh predlogov |
| prikaziPredlogProjekta(req, res) | req: Object, res: Object | void | pokliče metodo vrniPredlogProjektaID() oz. vrne predlog projekta z parametrom id, ki je vpisan v req |
| shraniPredlogProjekta(req, res) | req: Object, res: Object | void | shrani predlog projekta|
| validacijaAtributov(body) | body: Object | boolean | preveri ustreznost atributov |
| spremeniStatusPredlogProjekta(req, res) | req: Object, res: Object  | void | spremeni status predloga projekta|
| vrniNajPriljubljeni(req, res) | req: Object, res: Object | void | vrne najbolj priljubljene predloge projekta |
| oceniPredlogProjekta(req, res) | req: Object, res: Object | void | oceni predlog projekta |
| filtrirajSeznamPredlogovProjektov(req, res) | req: Object, res: Object | void | filtrira seznam predlogov projektov glede na filtrirni kriterij|
| razvrstiSeznamPredlogovProjektov(predlogi, akcija) | Predlog[]: predlogi, akcija: string| void | razvrsti seznam predlogov projektov |
| razvrsti(req, res) | req: Object, res: Object  | void | pokliče razvrstiSeznamPredlogovProjektov() |

##### 2.4.2.6 KrmilnikNovica
###### Opis
KrmilnikNovica je kontrolni razred za glavne procese povezane z interakcijo z modelom Novica in implementira abstraktni kontrolni razred KrmilnikValidacija. 

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| seznamNovic(req, res) | req: Object, res: Object | void | prikaže seznam novic| 
| validacijaAtributov(body) | body: Object | void | metoda prevzame (override) abstraktno metodo validacijaAtributov() iz abtraktnega razreda KrmilnikValidacija in izvede validacijo atributov |
| shraniNovica(req, res) | req: Object, res: Object | void | shrani novico | 
| prikaziNovica(id) | id: string | void | prikaže novico z id-jem  |
| izbrisiNovica(id) | id: string | void | izbriše novico z id-jem |
| vrniZadnjeNovice(req, res) | req: Object, res: Object | void | vrne zadnje novice |

##### 2.4.2.7 KrmilnikObčina
###### Opis
KrmilnikObčina je kontrolni razred za glavne procese povezane z interakcijo z modelom Obcina in Fotografija in implementira abstraktni kontrolni razred KrmilnikValidacija. 

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| prikazPodatkiObcine(req, res) | req: Object, res: Object | void | prikaže podatke o občini|
| shraniPodatkeObcine(req, res) | req: Object, res: Object | void | shrani podatke o občini | 
| validacijaAtributov(body) | body: Object | boolean | metoda prevzame (override) abstraktno metodo validacijaAtributov() iz abtraktnega razreda KrmilnikValidacija in izvede validacijo atributov |
| dodajFotografijo(req, res) | req: Object, res: Object | void | doda fotografijo |
| izbrisiFotografijo(req, res)  | req: Object, res: Object | void | izbriše fotografijo |
| prikaziSeznamObcin(req, res)  | req: Object, res: Object | void | prikaže seznam občin |
| spremeniObcina(req, res) | req: Object, res: Object | void | spremeni podatke o občini |

##### 2.4.2.8 KrmilnikDogodek
###### Opis 
KrmilnikDogodek je kontrolni razred za glavne procese povezane z interakcijo z modelom Dogodek in implementira abstraktni kontrolni razred KrmilnikValidacija. 

###### Atributi
Razred ne vsebuje atributov.

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| dodajDogodek(req, res) | req: Object, res: Object | void | doda dogodek v koledar | 
| urediDogodek(req, res) | req: Object, res: Object | void | uredi dogodek z id-jem podanim v req |
| izbrisiDogodek(id) | id: string | void | izbriše dogodek z id-jem podanim v parametru |
| validacijaAtributov(body) | body: Object | boolean | metoda prevzame (override) abstraktno metodo validacijaAtributov() iz abtraktnega razreda KrmilnikValidacija in izvede validacijo atributov| 
| prikaziDogodek(req, res) | req: Object, res: Object | void | prikaže dogodek z id-jem podanim v req |
| vrniSeznamDogodkov(req, res) | req: Object, res: Object | void | vrne seznam dogodkov |
| sihroniziraj(req, res) | req: Object, res: Object | void | sihronizira koledar |

#### 2.4.3 Poslovni razredi

##### 2.4.3.1 Uporabnik
###### Opis 
Uporabnik je poslovni razred, ki se uporablja za shranjevanje in upravljanje s podatki v zvezi z uporabniki. 

###### Atributi
| **ime atributa**| **podatkovni tip** | **pomen** | **zaloga vrednosti** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| id | string | | | 
| ime | string | | | 
| priimek | string | | | 
| zgoscenaVrednost | string | | | 
| nakljucnaVrednost | string | vnešeno geslo se s nakljucnaVrednost pretvori v zgoscenaVrednost | |
| slikaUporabnika | Slika[] | | | 
| email | string | | | 
| telefonskaStevilka | string | | |
| rojstniDatum | date | | | 
| naslov | string | | | 
| mesto | string | | | 
| obcina | Obcina[] | | | 
| opis | string | | | 
| registriranOd | date | | | 
| vloga | string | | obcan, administrator, upravljalec predlogov (organizacija), upravljalec novic, upravljalec dogodkov | 
| predlogi | Predlog[] | | |
| novice | Novica[] | | | 
| organizacije | Organizacija[] | | | 

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| dodajUporabnik(req, res) | req: Object, res: Object | void | pokliče se znotraj metode registracija(), če metoda preveriAtribute() vrne TRUE, uporabnikove podatke shrani v podatkovno bazo |
| vrniUporabnik(req, res) | req: Object, res: Object | void | pokliče se znotraj metode prijava(), če metoda preveriAtribute() vrne TRUE, vzame ustrezne podatke o uporabniku iz podatkovne baze in jih pošlje nazaj krmilniku |
| vrniVsi(req, res) | req: Object, res: Object | void | vrne vse uporabnike iz podatkovne baze |
| vrniUporabnikID(req, res) | req: Object, res: Object | void | vrne uporabnika iz podatkovne baze, ki ima enak id kot je v req |
| urediUporabnik(req, res) |  req: Object, res: Object | void | preveri kdo pokliče metodo v req: če to ni admin, pokliče preveriAtribute(); če metoda vrne TRUE ali admin kliče metodo: uredi in vrne posodobljenega uporabnika iz podatkovne baze, ki ima enak id kot je v req |
| izbrisiUporabnikID(req, res) | req: Object, res: Object | void | izbriše uporabnika iz podatkovne baze, ki ima enak id kot je v req |
| preveriAtribute(akcija) | akcija: Object | boolean | akcija.metoda=”registracija”: preveri, ali je e-mail že v sistemu; akcija.metoda = “prijava”: generira hash geslo in preveri, ali obstaja uporabniški račun v sistemu, ki ustreza generiranemu hash geslu in vnešenemu e-mailu; akcija.metoda = “uredi”: če je geslo spremenjeno, generira hash geslo in preveri, ali je generirano geslo enako staremu uporabniškemu geslu | 

##### 2.4.3.2 Ocena
###### Opis 
Ocena je poslovni razred, ki se uporablja za shranjevanje in upravljanje s podatki v zvezi z ocenami predlogov projektov. 

###### Atributi
| **ime atributa**| **podatkovni tip** | **pomen** | **zaloga vrednosti** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| id | string | | |
| uporabnikId | string | | |
| ocena | double | | 0.00 - 10.00 |

###### Nesamoumevne metode
Razred nima nesamoumevnih metod. 

##### 2.4.3.3 Novica
###### Opis 
Novica je poslovni razred, ki se uporablja za shranjevanje in upravljanje s podatki v zvezi z novicami v izbrani občini. 

###### Atributi
| **ime atributa**| **podatkovni tip** | **pomen** | **zaloga vrednosti** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| id | string | | |
| naslov | string | | |
| vsebina | string | | |
| datumObjave | date | | |

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| vrniVsi() | / | void | vrne vse novice iz podatkovne baze |
| vrniNovicaID(req, res) | req: Object, res: Object | void | vrne novico iz podatkovne baze, ki ima enak id kot je v req |
| urediNovicaID(req, res) | req: Object, res: Object | void | uredi in vrne posodobljeno novico iz podatkovne baze, ki ima enak id kot je v req |
| izbrisiNovicaID(req, res) | req: Object, res: Object | void | izbriše novico iz podatkovne baze, ki ima enak id kot je v req |
| dodajNovica() | / | void | dodaj novico v podatkovno bazo |
| vrniVsiFilter(req, res) | req: Object, res: Object | void | filtrira novice glede na kriterij | 

##### 2.4.3.4 Slika
###### Opis 
Slika je poslovni razred, ki se uporablja za shranjevanje in upravljanje slik, ki bodo prikazane v spletni aplikaciji. 

###### Atributi
| **ime atributa**| **podatkovni tip** | **pomen** | **zaloga vrednosti** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| id | string | | |
| slika | string | | |

###### Nesamoumevne metode
Razred nima nesamoumevnih metod. 

##### 2.4.3.5 Občina
###### Opis 
Občina je poslovni razred, ki se uporablja za shranjevanje in upravljanje s podatki občine. 

###### Atributi
| **ime atributa**| **podatkovni tip** | **pomen** | **zaloga vrednosti** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| id | string | | |
| naslov | string | | |
| fotogalerija | Slika[] | | |
| opis | string | | |
| organizacija | Uporabnik[] | | |

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| vrniObcinaID(req, res) | req: Object, res: Object | void | vrne občino z id-jem podanim v req |
| urediObcinaID(req, res) | req: Object, res: Object | void | uredi občino z id-jem podanim v req  |

##### 2.4.3.6 Organizacija
###### Opis 
Organizacija je poslovni razred, ki se uporablja za shranjevanje in upravljanje z organizacijami ter ima vse atribute in metode poslovnega razreda Uporabnik. 

###### Atributi
| **ime atributa**| **podatkovni tip** | **pomen** | **zaloga vrednosti** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| id | string | | |
| naslov | string | | |
| razred | string | | |

###### Nesamoumevne metode
Razred nima nesamoumevnih metod. 

##### 2.4.3.7 Predlog projekta
###### Opis 
Predlog projekta je poslovni razred, ki se uporablja za shranjevanje in upravljanje s podatki v zvezi s predlogi projektov. 

###### Atributi
| **ime atributa**| **podatkovni tip** | **pomen** | **zaloga vrednosti** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| id | string | | |
| naslov | string | | |
| sporocilo | string | | |
| razred | string | | |
| jePotrjen | boolean | | |
| datum | date | | |
| ocene | Ocena[] | seznam ocen predlogov projektov | |

###### Nesamoumevne metode

| **ime metode**| **imena in tipi parametrov** | **tip rezultata** | **pomen** |
| :------------:| :--------------------------: | :---------------: | :--------:|
| vrniVsi(req, res) | req: Object, res: Object | void | vrne predloge projekta, ki so vidne izbranemu uporabniku, iz podatkovne baze |
| vrniPredlogProjektaID(req, res) | req: Object, res: Object | void | vrne predlog projekta iz podatkovne baze, ki ima enak id kot je v req | 
| urediPredlogProjektaID(req, res) | req: Object, res: Object | void | uredi in vrne posodobljen predlog projekta iz podatkovne baze, ki ima enak id kot je v req |
| dodajPredlogProjekta() | / | void | doda predlog projekta v podatkovno bazo | 
| vrniVsiFilter(req, res) | req: Object, res: Object  | void | filtrira predloge projektov |

## 3. Načrt obnašanja
V okviru **načrta obnašanja** smo narisali **diagrame zaporedja**, ki prikazujejo **tokove dogodkov** (osnovni, izjemni, alternativni) znotraj primerov uporabe, ki smo jih opisali v **dokumentu zahtev**. 

### 3.1 Registracija uporabnika (PU1) - Osnovni tok (O1.1)
![Diagram zaporedja 1](https://teaching.lavbic.net/plantuml/png/bPBBRjj034Nt-Wh2sRX0hQ2F58KH28ZJno9jKlInQ7VKYBOd7WqLQcJ7-OVyLJwi8pcIHgtGnyA2HTvxvWwfjSu8bimkvTieAZVQ5YYOGufginAkRAROi80JjALlaNM1AgCbLiPzfLjtPlJAvhuDoZz80XKgnx9WoKZE6rXgFFqtGNVYGRHRQqUXI8HtWHyWQ9PqKv5Lz44l_SzIUDhHoRl5wxVd8-fFA4uhNQ1r_syOZHirLu799GcjTEb4-xbfg0eMJAtUJ01B63JXzBJn94bKz7IO_FZu-I12fQzzagjKy8vK0tZyxwrf7G1bdoHmv1UmTWjJqQ-WDvpZmpr-gNVO-Ek2Ehp_6-D2Scry_20IDgIsuJ6AhHCs7UMzu7v0-TOEmOlz9w9TV-9tCePtKJISp2nfRpg7Pp7SeR8wIC3J9_MuzHOTjSAe7Ottjjdcy3m62P9FXMwU-aeP-5jnrDreG7WHmnQDpXh_cS-NLewtqvIp_HWaep-3kr7CuMKC6MTutPN6qdNDg1_Y47CIGo6q9T6FwMYAcphiA2N8rnVxNSvc8Vhu64h_nW_tsZ1SNVp5xNC5tzSSNZN9gZBtsIwnQN7JykiRcrDGQvVQ5GBmJm00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja1.puml)

### 3.2 Registracija uporabnika (PU1) - Alternativni tok 1 (A1.1)
![Diagram zaporedja 2](https://teaching.lavbic.net/plantuml/png/bP9DRjim48NtEiN0sRX0xQ0_QGiZC12dFukqYU6sYtOteiRss3IfZ2WxpXrognoib6pJL2EWpK82E3Flu-CZvvmHJArrgRrBacB99aV15QIebZEnfScKrLR02Ph2jyYuQ2gZAPRQ_Q0xTw5vPbQ-3Sh_IA8fLCxAo4f6Sbd3KktfJmR2ZhkXpPmTnKCYTXFf0Q9cGRSb6KLVUUe_G_5k9sUVHny-NRPCZr4SAyxHkESBMkqczL6WSqr2CowSiC-DeSojO6fusG4ieD64y_DQCnmc-P4EdT_Vni8BN1k-IGNlITNIyNxXLMcrDyfsE8GJd_tSZNH9VpCckurGySAV9YPDdadwQ5Vu-83VguTG0wg2sgt_Zt4bAzO-WyWJrgH3msEKDKwi3fGlWji6vUSXIJ_itncxuuw_I6kxIP9clBrX26q0h_fmZyhmBbhRVL7T5w_HKHXAGiHUEGdArtjbPBwIP_GK42e7TJA9a8V33k1D7oIAeYjq-z9NYiZKOJW94JK8R_kmHirPhR_m1qvBPzVTr6RRDaXajXKSiXt0MHyoc-4YbDhSXMPol9KcvbqVSg4r2U_TKHUNbTbMIkJlM3m-ZbulHf-UGk5Nzl61jOMRgt-elQ_emGxWVUsiB5RUspNMBLktcfSQSWgLYF87)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja2.puml)

### 3.3 Registracija uporabnika (PU1) - Alternativni (izjemni) tok 2 (A1.2)
![Diagram zaporedja 3.1](https://teaching.lavbic.net/plantuml/png/bP71JkD038RlUGghlHI95h5e9OHG95e1XuNT5TeJDsVYjgRJSN0cXV8El1KFXXisPIfwuP39QFp_d_yPpxaac8h4Gfwph5vmg51n2GMwnKob2QKJBmfHCTHMeX0JLKbJR7pyHy_nmlCiBAqCpXRIH8KkYev5Iz992okyqRy8jXq_H4zpZfIALEKfyGCanPeU6mgERdXgNw2qM__drVZqSh97_HSrikCAG_o-OM_ShBqAz7wJqephg6plnj1KebW4NlG0QzWfmlbvwydphFgaG-_-zkv3X8uVBCcVGl65N0lulpThiGc0kivpwDi0vd7i6ze5_T8bUskTuB2bT0N3E0bHnMyfruhhBDlDESoxlcTmF88NT84JfWmEDfVd5KRgX5aNrBnTjpFuCG9DiWoK7W_jf4xydJZRPjmXd8nWXPxBrdzX-OecocfGIBdU1odfwzds2OV317nq1BMDIjvUsGi81ApmxTK6k0fIRtvAfUqYxsE-0m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja3.1.puml)

![Diagram zaporedja 3.2](https://teaching.lavbic.net/plantuml/png/bPBBRjim44Nt-eg1it61Ma4V0GeZ4107QHTzf33QHR8RaMERCSrHHfGSvn_oL_cmqaeaKQXGe0kzEFSUtXbgOpJ1Yjdd_90avTQu0WLtaAFQheKhfnLR5l22hWmbSZvIQLfXPVqlUl0NrgpTBfH1XHj9f4BbMHOickIoWUKsqFyIT3k-YFORuoaMYV0-yWD4nPBkAtAAlfbLk1p5kvsSVLvykheSKVz4yKQP0ft_VyDetAHf1IO_I6XjIYycpCr0LR1Wxins0bZ2e0ZdvuqdovAYfyFazlloHOJAt8KarxdW8wa6yFeUhFan0CeXo-0a7C36Bsn5Gz1NsHaRjevms53QGi0eTbxOTfGlWeS1vNVRG127upM-t_66hELzaWoxccLjoZcyI-4HbJDH0fw-EOxArEYf5IPjMy7RPfl3-nGaIZuLkdyRLih8tugJhgC1uKCADLgZ6_z5o9TNdkjfplem1j7qRt0tYZbyJ46pnhjkQInTLqpw8GunPoaKGZM9UKr7KzmUmuvIedpzOd-MircCFZs5CdpnyvEn35VBvVLo7D3zKi7VZsvePt1OuFDJ-A5hn-Nn8QJ3cpTZK_i3)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja3.2.puml)

### 3.4 Prijava uporabnika (PU2) - Osnovni tok (O2.1)
![Diagram zaporedja 4](https://teaching.lavbic.net/plantuml/png/bL9BRjj03Dth58IpSO3OGJyf2YCmOAUVHTeuG9j52syeYROPZuOADLBYt267o5tIUtKaHxBKkYswa22HxpsIZrnnJB0GSQ7S1K6sPfkYOW8XHkkbIcxZI8meE4MR-HHPrqB5jC3SkAzqvoQ6bpRnQOZyYxI5miY9JaLZqhDAB3HU_JT0Kt4BkbsnepP8LMvRV81MCgERd6n4dtZX7qljQWSd7wPltv_jGL-YEeuuHUl-dx2ttI2ePe7UB7nwG3ktapXXovctpuVdzYfLBCmr6eeWLOgDBAM0lkWIBTzZnDTus4LPAJZgXc9FYjTIz00pkA1KFSldoCBfQLL-F0xINQVG-_xvii9OdeMAznHLpETlJmhBCL0tup4S-3MktDJar9KuruIDvVLM22k1EkOL8h5EnJG27nKt7O6hL1J3BTZV1xjTiMzaZDp-sl4xIT1R-AKylAfQ6OYs_tziEGWwTWp6zP0ZU344xw_bxG3IFomtnGKwgZ51ROYdrQEDuEKGjehOLxev0gMiHQrnGUD5X_ng20KQZgl5Jfnoc3if-g74ctqYCVrTk35n1A-zibfk8lkQQvB1plskoaav71Ma_DmSzN5T7U4-bLPxk-3k20Q3jlJnCMJ-JvuUs0ZCpe4jv7NwQ6xN34bUMfjYZ51O-l7eDqO9iYcXIygC_AEYdwLr52DuKqsJPucVvmAhb5Gfl-nzrhPYzGaqWPRmJm00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja4.puml)

### 3.5 Prijava uporabnika (PU2) - Alternativni tok 1 (A2.1)
![Diagram zaporedja 5](https://teaching.lavbic.net/plantuml/png/bLFRJjj047ttLupW9KXSr0jj5Q582Rqyq494oqEhl8pjIR9alMF6QmVu1pwY_qB_g-iDSTR4LSL3BEtCEMVEN39NAS6KsSPy6qN5GfaS1JE8CLdCX4kJ9gnPm0gQmgN8s02LqXHBRN_GhHrgDJEPIqFYFYG12XFBCc99IKwzMAoT-XQWgRW2BUVAKWWIuMN01mYI1TsKP1BwggRkPoYijdlyUVJXqsa7UenYLQ9oDFRbX4wxaMy5TYxYnmSq4pDCCsLKuQRdmXDpbGjM-Xer9P0BfPfdN46FPOP6tMEYhd6lZJ9SgQGTIXqfNN2r0rZ0EUNYM2v71avEVFd18CetHc7drxTBcdaJhe1hwY8MlAV4yo-V7euRrysWt0q6iEkMERSZNT9pfR6lPbeQunTfd4ccj56BbH9wXNNCAIHihB1k1Bu8thK4hd8MZ5TWTsdARehz9Arv-TpoHyxGRUDxVSA-MXr8Lkz_MevQWpqOD8Fgmwj3SAioAXWgz_RgpQiABJN8g9cjeuyR-kid-gh_cfdIDhU9h8dHE51RpwiFRmvXvHDxGZVx85G4LjQug1bmY_ps42hKAlM7DxIYuj9orOivlUiI2Nns2ZURwSEnKnQZcaYNkIOPRLRQLdbNDqSLYNeoHprS-3z9bqfWRnFSNDR1GIXzT0I5U_7ZWz8C5sUW39JhzFx4B1HaPJtQ75E4oj2Vt-uEA4EbQ-YC2it_gUXw2Iwj3-zzDsMHkNxEqQVOfzedq3NkyTPP1Cf_0G00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja5.puml)

### 3.6 Prijava uporabnika (PU2) - Alternativni tok 2 (A2.2)
![Diagram zaporedja 6.1](https://teaching.lavbic.net/plantuml/png/bP5BRjj038RtEWNXR1oWTj0M1OeWC607QHTz98jsKsH3pT0sup6fK2CbpXryAn-iOxbo9SIRB3GQaF__yJ5BzWHprPZhSvQLAvO23TUGerijJ2lnJeCQH4CfKueaTbIUvbY5-8kUupJmGjOf3IuTP1qLkgWsK_Darmqi3ud-Id2iU10zBJbILsIcJnq_G2TPqcD5ukWxpzCdrArszkdBxFFDzGdr7LfanmLAVBlXPBjPCmeCRlFT5kLUfdxDmcNQNWhVo-_2i0uF6CX1OUI3BhI6eTe2XL_GyGEUzrMYDRj-o2UJNsaz02pX9nMMN2b70bTNJVd992l-Dmg3Fp_k6etmRMxuGgvn_hidKxwV0cqpcS1PUiLbd8MA-eXljkOWl3g0i06qiKHmAj4q705V3JTPrkjjD6ahNiBxCQHXXGyq7PxlryOrHcerMTjTihLrBk7360v471ezlWEZicDjTTcniPxvunXg3EoRBK-ZSLv5hOUv-iqfYAVNiUFAHgCE-E82oa9DTriE2Wg21Uwsmb2BbljVUkXqYtoA-HS0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja6.1.puml)

![Diagram zaporedja 6.2](https://teaching.lavbic.net/plantuml/png/bPBRRjf048Rl_HGZSaEaGjH3f0f5bY1AUz434MekMkLcR0ymOTbnnei9UGVUYWVBOl19jIhrmjZC_FytXzqb9mHp4HV9In1aAxOfAguXmdYrKDdO91OZ2axHPZv5rZLK2SrnOzmlUd5Zmmkxzcc8_GzfGuMn4vs89gIt1ImodlwNeAfu4csNxAWfKfLjmm_GI6Rql24RqtUU-yTIizh5zPV9vxlR3lKzgkEOKxJk_msTxGR5AD2RHeSzsaSxJjPiEVFRy-57-v0gvkO93SMGAYL65f93NtI1bbynvYUyRAkiv1otGuat9Il9Uu0P_AHKlSldoCBDJL4-38EqRXHwVtxS5nhBqqZnbUB2UVxsfkWu1Uek3E72d-BIJSo6seXlkcPZUNK2OG4eOvuGYtKgnWFEXA-AknRX8HN5wAJszuDTNUqt6IFR86YDCWZB1aVmVWX-DvPFnQL_UTmov-Yer0JbCDvMjZM23qCu4R6lzFmEbBA6jTG5rHmjyySXv6WuAGvbx9IZZPEy7qcowu8az6zmDVy8FdcoMguYNSrLoQ1UN9joVHoESb8-DqTzN1KNg8lIQAyErWSu63JHLrUG-NzosBCHk9lDfhDkG7M5lB_UNDikO375mzuov5QouyjVVF_bk6jfRm00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja6.2.puml)

### 3.7 Odjava uporabnika (PU3) - Osnovni tok (O3.1)
![Diagram zaporedja 7](https://teaching.lavbic.net/plantuml/png/bLBDQjj04BxhAGRxOaCJQ21GZ174QPj3aiRGzb9y6UsExOrNCyfe9ITvXxvL7wmhcQfhuaiEMj3tDz-Ej7MMO2qI2ddEidhdk4B54WeqkurAmzQ85uMWo7MaY4EYihJ6neSVz1oklDjm6MamyI1DL6Y2w4BKabxtOOMFwMy4myI3QBzrWLAHgkmJFq12rlJK41kwS-luCANJnfTV5v--N9zGBr63Cwv23kytdAoRPVrTOFHG_FcDlE8hMpfsTLnVX5Vyir9i_IDwCb0fMIyRQM4Yka5shsZS8qwFLIojCyUGZIQxatO4MCDIeoSon32VzyFpFAl-zuJHhPREiziTbDYx_c7HOuI3Yizp6CTFk0qtYY_70R_kFqk9yJxVkx-WztU0ERp7YA9R0-hBaB7mJRUBfDjPFioSmSTp4DjrcIWzVG2bUjhjpRKOQ91bGyVeJURDuEAysrrJbwJk6_QKzDHacbbw6pGWIKfsIlaN)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja7.puml)

### 3.8 Urejanje uporabniškega profila (PU4) - Osnovni tok (O4.1)
![Diagram zaporedja 8](https://teaching.lavbic.net/plantuml/png/bLFBJjjG4DtxAqQm2H84zK5R8HI9HriXYc1H5aLinlOaJ7nznrnV6yW_y17zaQxWlpesvDfHKq4MYUIPC-VCp9bxpId1MCJ7SXT5PSQsG8Svn9Xa4oULJHCnui0xjAMcoFeUAgKnLiR_f3k_RtXYSqr3ed_aUYXClBW3SIcvmvOiDih-3o0eFeDkhzbJ7-IStFRg0Nh9acugiWdzuB7-BFNLrdU-7NpvUhW4VOxESy85MhzwmT9sewYT1TREuiS7j5TsFytPSgdhq_2LlIWSrcQAXX8e7AL69bB3GDm4BSymuIbkBAAir9miXb8jIZEfrm1BE7TQencoiBVNYez6KT7r2MkNfnU5E8mjF_tE-Dp9c4rRUYhJvo-jZ9j9qDsFHh2kJbxx0rFH8i-9ozbOpkPiMKioZof78jOxCO7YkyFx1OfGgM0z4lQTt2yoHcvrVxrvjaQ1VHVU3NLXdE7iPOA1evjDS5HkD2ld6Zq5T1IQKeeWkWllXr0xoo5oVBIC9QGxchsjhJxFzZQK-YMF3sm4paw0BLJpzEQLXOmXhvf-2qmHU1Rhwn4uFefIMYBJyq5rkf5LHc-aAdDo31R1OEaj1wN6JGKqXNtUi8GG2Vmz9LrC-DY53qEGLDizqqPdb5pYXQCfsYaz0t2WHwdTD1Y2N58qEevaLbuLwQRvE8HABtvL-pg27NKF3QVjAzdtZkFAIps89RtV-9_Zdrv4tsnvTwABH9-RywDQdNXHfW5cxNDTnhBKvfMkIVTFzZMhttX2-cgU_l2SSyKhwiM2o5y0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja8.puml)

### 3.9 Urejanje uporabniškega profila (PU4) - Alternativni tok 1 (A4.1)
![Diagram zaporedja 9](https://teaching.lavbic.net/plantuml/png/jLJDJjj04BxxAKPm0Gc2-aEBK1GfG5iXYa1ggLJ4PMnFoCJhtJ1U9v1tw4FqHNegxzL90cj3t1Agzf18k_lzp7mxwpwd13tdVEokewZ8s0vHC8SOa-nIN6dJn1adu0LjeKTaVGsLKWzBup_JjUyQlhIv7aEYVoGr52RUoPwJb6H_9XORLLy01CSvQDndJtMGY1lN-02rmuAkIh89VUIU_YpLtLQtt-_jlDjlG9-YU4vuYDO_dz1ORXJDUe6LRfgpvK9Zq-KAO06dmWCScG5PQBTdg4ud6bQ2i79-_8ac5lEpeHECBMTkD6CkxAf0F7L6kUbqO5MJx_izKz9ZkNlAxVUCJyNrsCpqZjrWlbfEvqXoDkeR2fY9tE-gHkAi5sU2n0V1cmSIWQbW7GxsbTrNCiQDewYMpcOdYE_2YvQ6_wZzDQ6h3H0grgTfymWz1KOKwbAPmDc5boqOYUKl1JUn0x2YjpStw_ojBIXqvNv-O-FWv0ZOtXK6euBwK5RbHIar23TSeZfKZQh1KAWiSX86Yyk8Xvx3pe99W-s3U5-rr9KpdDpDnzz4-teURTWvFFXt4OVEDouiP0nvEQrtY2a2JsBz9i7XGNFUjI7_OyvbxOteoPJHc75jRp7bS1HSQ_wQLbZimdOBNAezd6Zr4qhEyKneW7P0Sm2khLzOhN6A8SXTYiOwS9brJvfKFRvfGIcKFlTEAu6tUgLeECL4NsNN2yUbrtSNk_Hc_NTZi7Dd-d_cG4CY-zHbBNdxEk-tFtX9pQO12Eg_0000)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja9.puml)

### 3.10 Urejanje uporabniškega profila (PU4) - Alternativni tok 2 (A4.2)
![Diagram zaporedja 10](https://teaching.lavbic.net/plantuml/png/jLJDJjj04BxxAKPm0Gb2QKjB8nI9dxP2516ffL8HbxKza8dNks6z3f0JBz0tQ0zzaPxAY_0a7SUElN5CIQhsa1_lpdpVpFUDfqSXmeNMrjStdfT4f0R2Y1Xy4KINHgSg3BJK1gmHAk4hLDQ92l52fD9-mXkxA-bInNmD0N-XSQ94OBNPqoP4ipy6yoMZpmIKZ7dGTOyika76w6id7y2vJF0gHHNW1xhWZqANRNdhtTxss_s6wAumbW8Q26KNJsWir_F6lS3IRXYJeeHbuySb40bq3VN5KFPHmSxEEAhJyGOL82oT7NTrA6n4NOEXr9TvsjGHf_ePfp2tdGuii-OzkoTJh0Dzn94ISP6aXsEasjcyKAS3ROIlwFv7LeM-83b6EzRz_6a-d2CJarGKJT2YCSZab342hQpHieHuRyHjCqJHWSZbMGIY9ETW7bAoLSLVK4fzFHNzSFUjeE96-nXPyN3tFNSoB-1H5C_nUhrJrTY6pHRFqfGDAmQlri1WifgD3Ws5nIh1gzhBS0hUDZnlmT0e-fnGOteHvsJlhAyxwHiRaB0K-jTNaXfEZe1KKHOC4-p1G5l3jHF_cvJfXJYBFpDH6KlLBDDmVfh4Q0YKM8YYLA0ygf7Da4yB_QB5m1I94TKy_2kzN-Pwrw0E3_wP-eK8_9j3hvqhY0ZYDEjY8481DF9v1SFXGQCJzItnPoCqGuqmW8Hj6EU1dbIGDhlW7DPzgAAdQgYNn7fM1MqvxcGxf4d7ajkrf7o3s_0gzwGyQNQZlFQct71mckn89zTp-b2nE6kHQHwt87MsQkOwPxY0JSBNz2tFIqg7dAKg7zhmkWKwv0PESj_FnAd1lb1zp0F4okgvuWAp68IOQQJIe2EbdoIf6jnkGSgLBMfe1V26_HIIGX7mxjorXlpKydhqTNYx-jWCR3uhMF_F5B1Ag9woQaxlUThlVzASc4tsb-Y_0G00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja10.puml)

### 3.11 Urejanje uporabniškega profila (PU4) - Alternativni tok 3 (A4.3)
![Diagram zaporedja 11](https://teaching.lavbic.net/plantuml/png/hLLBJXj14DtFAKgm0GbCI492B6I9Jn8XWh2K42c8JSzC6RUdfzlqz1ZmYWjmWsIHYsG55-4agVcufpqUWesoyA-xwhrNzMhAVHuYz9Golhhsl2JYSiWqYy5dGNIXLIh3G0cbmMWc4xf2QPoe47ii5UORNfjTmIzaJDSGq1jg9ue5HkazfKFK-pcOBmXz9i0o5a5NVMxG3T9QNJdv0CvbWfSfoW2_y1wz9BfiorkVzhO_xZT4TvasFE139itY2OrolRmKM3hnx--ON0AMG5Vp0Hk90KhOsSclEnrlM071qjbnLuNCHBohCHJgeaYREg9KF-DY-gRJWMNgTT_iYHJhG5znB5bS9gbHZbGxcnVgTAWqyoL_-9sfK3qkShHZDIX-pOTpf6Ck98ycQ54ECZabZ419evMm49yrksc6A2jWHNiMWR3a54p3oKsb-0SAeQwceXzlVvPKLEW08yCURtyLJXO2daJn7A_NEvN6DcosQ8QcR5ZHUBa66fFLR6RuY1ci4hogl0odv6t3wnQCjEJV4zwONiOvsJlhwqxwnWOar0frVyU5WfCZuBAK1QC4-p1KHfDsJjycChqGP_5d9YfZgOeb6ifFanWr1yaMeh0Ti4SriXdowKQ_QH4mZzYOrpnyKR_V5lskGHqU_BVkbqsWpm9wxLn2n25Eiog6B6J0npwjNZWyQ7IYlYN-ROGYg346a90DUHue42mn4kE9ahJP3UUmxaSLFQMbBetwMWdRSbpATabJFostQurzajlmhl36dZIxOg-zALSSd2PRqidrd7vKBCvw99gdhSZRpYrHjcIp8Q145xUf_xKsstFBx6YWZjaVRNZV0XLI7IV569onKuq39WTO1B2LrND9EhCOX9XeX5IW8gcU9Qdgt6v1IieMzRK2-42sCi535j0gtJMQ-wcXRUchy6RrgL7OV5MopZqCrJz23MapcqmSaKibDwwmA9FI2DCu0WiD6Zc0yhanc7Eyw85w-CCdc2-VC4lo5m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja11.puml)

### 3.12 Urejanje uporabniškega profila (PU4) - Alternativni tok 4 (A4.4)
![Diagram zaporedja 12](https://teaching.lavbic.net/plantuml/png/dLJDJjj04BxxAKPm2H84zOUMHYWIFss5MXGEvL34PMnFmiQRNRDU1yWxz27w8ZsLz-hO3hlhu0Ze8P6zE_DzCzzyuskH4eorjh6-Yw8Y4of7WpE8CSacHfSgJRJK1gn1LV0LAHj4fJJ6KjeVT6SFfPYe6Lz3mdzaWYXCh3P7sgHaZckmM3Bwam37s0JTNWjBOP0n-ZR81mWk2xefIINqNOpvfoXaszpxShJ_-RWZ-XoD5Od8KTdN9tIM6qLrBx1naHkSoobAIY0tb4ezqVChrTDcWaeiC15JtDe0BE3Sy2E7aeA3WpfxE8noJmGRbsUZ-EyleR29rodQJ8pYXFlabBYg0StzS0YRF8DhUoHBMWMuoBN1M8c7tvauDteiP8rrfgVDsyjmlfcPa4faZsXP3V9uoXY9LjPewI2-6hplXWWx6hq6mN5pC1jDM5_mJv9ItxRvMZoLPBWsBmeciJFqLGtWJPzdA39SjBJl6RhP1aF5LZLqCKTBFYdoJLLODVC0tlPXRbIJZwSddGZrNP1-iBFZydTteU3-DVSaDPE1K90tDO46iOXvI_cfxbb4AQsYhdYdGlPTCZWxjIncP0ImJWqmCN0Ne6lK7RN0LwXO0q_qxb7EfHMz35UAY-0sgWea5bOnjryOxRaSUwYoiyO0tZT2kvDkhTrrr58xmEaIl7GER6_pzfK2diEihBhBCSNbGE3q95JEamRRnwph1r4h8HnljSCSK2UsAmXfd4B1MNj2xjZL4LJ4ShgN0UprGQVSrOZxML1oYHU6fgYcr0HWhvbS5KCmOnPPJIvJ-baIt_M7FfJyeNpYYMU6xW4-yinHYhJMuj0Q4PTMptknJk-trlbaVqdwOgFupqyRw5FbQPhpn9RCrCEi6Ke7IgSTNkL1rfzKboN-msgyYWz_n2FcUhSzPoz7yWy0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja12.puml)

### 3.13 Urejanje uporabniškega profila (PU4) - Alternativni tok 5 (A4.5)
![Diagram zaporedja 13](https://teaching.lavbic.net/plantuml/png/jLFDJjj04BxxAKPm2H84zOSMHIWIFss5MXGEvL34PMrFO69xrupNWUGT-X1zaPxAUtLimteTZ81AFSJAxinyttpVp5vHZ30rneRcDWYAX7IkM6KGgYYvP5FgE3AfOR2iT24XrDRBYd6gojH-nrkxdzAbpYGCaNoGlImLMSC7XcFamneiJ0NzKO9ZR99khiYYdyHiRhnw02zOu7M9Ei9lD9MVHfzjVUVpmUwdmvxiKyMM8igLjgylw6qt26ejiBOVPwIf4Dlak0QgW5EccPgdCzImjrTdZST1tWB2sld99FppaxHgyasiR4AJC18zKX9MN8eNup6iYzTNzY0jSHNWB3UiGartln8wPJEbjCOwCRFcz3AShvnHgYbvG4jga8TRmOYCjcnI1_65rQ8VmbSqUGs2uvPaMIYoRSC_C4tDJPUlmrDPffwi2xn9R8tRhaRmPWWvKwAM7Uy7ZDURm5XiLCEbkRBO5WMjg0ghPXx1so7CMJVrwlYe5w6EUULxMrkkVdiR2j5lH5DgX0n8Gzxq10Pe6Sfhb7-rPWfYN4LTsPqAkLKfu3bZMMJ81E9J0um2t0VeXBgh3lWAbNZG4hrxiFD-5LiRBhGq8JAg3WnVYfYbYcXcMX97wzlhTc84xnk7tKs_oIuST6psSFgSBjtg3RpcrCRcXGOPG5PMid8Lg_j9mF6HRrbBwZqxONrw0gNtQYLILtIfVNndZNVNdOcxTWruhOYFxZ22dI6OMEHCHCWIetDrnZXJUePDWXeqiwfo439XIRNiIQBDioIjt0z3A1dZHrlmpBHRW8yoR9LIN7knRvd2qfhv83JnOkEf1Tcz9_q_6o8ceUwRspyiWhoGkz_qGio-uJlqlm00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja13.puml)

### 3.14 Urejanje uporabniškega profila (PU4) - Alternativni (izjemni) tok 6 (A4.6)
![Diagram zaporedja 14.1](https://teaching.lavbic.net/plantuml/png/bLFRJjj047tFLupW9KWGr0jIXL0aBcs5A8A7yb34ozYx2HElPynuRI3_m4VqN-X_THpAnb6ZLZmupiwSEMVcpFgMd8U9ICpaOJ2e2-8A5Kl8C2-cAWsxN88eH4MkBUKvzb3EJx09yRj_Y8U1fbnQ6dBxyTf3OHv5ZqITr-C5MHQC_Iz0Kdm1tTzIz7sGgjptwW5woThVDPvp_uqczh3lgstkVJdwzFbu3VeIDL9E5N9yUy7QTWU3nIomSP4zFo7VyA4hYQas-onymrULOXjc67mEbNeNP2ej34Mdo3J7d6QujOfYQIbV3JahSeMq6u0rNAhLMCOp71minCVZGRNi4pQkpwygKSoOVlqiw59bGc5HUYwpbvDLPjqag8_ZCMpQ9c_ZKMZyAi-PbXIOYbUsOa7o6ZMEN3YgX4JnLV5nXI9L6jWk2SMbt0yVWjoRVxrvTiQ9VH_UZSmmAd3-PuAX-hjjK5zlTPPJYz4dz20rPHH9T1_UZw1LfXGvFLd7aj9BceETdJxFxYxKTfBd9me25sT03CrhUlk6eI0ecwxV2Xq2pJFxUk3qPE3y6fNU6ancER6fs1Lfwj8h0IC4h2DJ4kgMQO2kiC-RF4YHnDzJCb_IOHy-Z42STNjXVSvzVerNwcV8C_y2mA7TIUkcmtWenM5W0IbO_YkodERZ21gxy6_Ttf9WpvQ7WTpY8pcCIbaJfHrcuXwt_kLXRrDYDbRu_6GkjYnrzxAMx5-aTHR-1W00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja14.1.puml)

![Diagram zaporedja 14.2](https://teaching.lavbic.net/plantuml/png/bLFRJjj047ttLupW9KWGr0jj5Q58t5eXYe9Gyr34ozYx2HElTynwRKZ-WO_elz3_wjZ0sb5T5HvosPqpvypbx0qf3JDc7_Dz51KfsHmTPX1ZaiuTbrObRDY1TsWB2MdhEoYbPrWQ_qFV-mD3Svj961Bvqgw3miIpEsIdj3jgo68Zx7y1Wk8JwEw6lEw2dEExJZv09rZesrBRH7-dcNoixgfjxdqz_79or8E-GESfeHojVtj2RxbHrFG26vFuyG7jjJrG6LagP7noVMsdkSFABD3e17AdbU4vLp1WDqTBAqneWLlhACiL9UjNIf9KojK6O04NJd8aeYtixpVYut6KjtN2njNvD6U7iQNVlrAwS3mZqwIUy-Bf99bntGcwvNWCcxB96tzeIhtES-OoCfRI5xQq8Ncv5Ow4hNTi0iKtXyirYf0fO349-LRkfpQ6xwAeqyxEE92FuDrGvaKfhfuR63XzkmrE5rlrnAb2hmCw2ZK9HT0SmViXLCvIk3azxcC9uPPcVsUdoxEx2uMS-F613CFa3CX2-HBUlhQG4cHbNM-E2e5MiJmUE3sEbEvHwMn1PDgEHKKSKXQPTWGMmM3XBGMXUfS2g1Exl646uIRmTvHaBk4mWWz3O2NLJgJEbKwkSEhq0kr2Fm5m89QKQcgCXemL6il0gUN_YhJTV1n2ANv_w_PQWZrP7XfIpHivy8xYqdCrY5ajj_wry4_Feg_UU6lGTQBFjVjq9PjuLjO3J9l7siVIk-RNcUdayd9o-MQVT0XOh9BZuuCufR9Sr3yo0VddgSycVm00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja14.2.puml)

### 3.15 Brisanje uporabniškega profila (PU5) - Osnovni tok (O5.1)
![Diagram zaporedja 15](https://teaching.lavbic.net/plantuml/png/hP7TRjD048Nlzob6wGr891L_KbL5bfho8rGGaIX8SBUs9yqqwnrtTksqVGVUYWTZQc3j44j0nOKjUVQSxymUhwb4M377dA-D2HlojHLRGMwBpOLmuyk27Gj4iJxe4VeuK9MuiesBvtWTJnnT-4gFeT0Noa1bYyYoO2bHJZjOxfI-9qY9FqJRDKKSYaHuE_0330u3NZNe2tnBAtqy3jCEdhzQ7Bqy7L4lhKGggBO-_hjXT5rZkhl0vAIio5FGslHp0ZR0KkZIjkuIFSpddIhBJDq3OVBbtGUyzRRwMBFOtDE6sywvDrL0VfTivIRBu42RNyU5Qt0NToOLETKdOmVxDLL6mJuAkuHuBVPc1v6SAjQVIh6F-upEyTQ06LnhcYNwCJoUQMk_xVr0yEeH28Q7TpLHQoCcXqcBAIPvZk7935hnz2dGc3i9U_jyEXtw3myXw1T_-qgEuVqPaF-v6BG1rz3qwvaIHy0ZxMj2Vr4Dg0MRKA4GUFity7JdDDaB6OdTgVVf3EWs5mgq55wHkq-rpn8Z3T-y-3yjtxzA3bnoJhir_g77xm00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja15.puml)

### 3.16 Brisanje uporabniškega profila (PU5) - Alternativni tok 1 (A5.1)
![Diagram zaporedja 16](https://teaching.lavbic.net/plantuml/png/hLHTJjj047xtAKRX1IGIr1_Q2aMHWBGLej18j9LQzMLiRyZ4wrqpkquWT-0GlGkzLzSEh3V4QjEMXqJQcUzdvlFQ4qe5ZBMsiRwE8fEHAf0nXnYJx99rgT94IyrW6PLnBQ5iW4h564jfFubhUoZfKkMk3Odx4noWCB6QZpIdWezhiLWwzJM0Tro2vXEo8WGnwtd01mYQHboLGYNY0utTJudGRMl_tT6RjySjw16ofOGALFRl2QtZHb6z2tGEqvmK6HUREtO03OoOfZYJKw6WtwzHWq5KD8BG-NPs8HOAyy-5PemLPNfMCzUgJY2kd95l1WFOSibFx94inMEv1yhF7ncDM8z9rdfdUheyRQepr3dUtU95TGbgXQgGBC-RQPnoJjBDxfUePHwgJYFHohAMNk8zuysAX6SwiBjWP1kxhq9AFO-Y8E7km8iVmBEUUu2F8jncSRKBBCnEzSHeXbPuHkJdSZAUSm3FUp1ZHLyCjR4ziA7tkzsGlxS7nftqtIr93HzFWTJzO30pOW9bCrwKYXRXbelW79f5dK71eZIvO0A5cuZxdNrbpQJ5TYNU5ptdIXakxk_OlqJxSXcjhvmCdovYl_dkTmKPGLvMynQO8j0YhgxmoR0zx-15-MtEPV2UkKx5QCqugAsdx5lUDV1V2No_LmzEvZy2V-KrdZppzYnNFXahQRxkDMcUOutJDMvxvqyfDb7vKk3p2m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja16.puml)

### 3.17 Brisanje uporabniškega profila (PU5) - Alternativni tok 2 (A5.2)
![Diagram zaporedja 17](https://teaching.lavbic.net/plantuml/png/hLNBJXin5DtFLrp11YG8weEM8XI9HriXIXk9jbAhRfmPXzoCnmws9u6i-07-e5tqN-YFy2MzyuZ7CndQqBB8OwxFFUVw7CSPOiHXe9JjgyiWC37ACTCiWJuButEjKXc5IYWDLZDfQ8bBww4YFc2fi1_vfTqNU2uJMeQGthZsK2oqIXye7N5zc9Fr1R4l09nY0PeEqN8VfBMQUlq0tgBX5ocN8N-70tf9xgkjRhyvs7bzs8BkCMqnn36Jzk4DhUC6GRuNMDcF4fHeo3PwN05ceATnn2PYn2NixUMeRZSOLuImylMqfo9cO-nf7WbrNhJLIjJQppIPlkfsOPKy7ze3aV8cqHcVIPQKJMgICpLgor9z6YlD-X9__SocK0CKETkf6XLFo_8SgOJTth2px2Jb35aXB9wNupZH2Gg9yNoYEAUPLuaZLD9g9Hp5MysksYbA5rXXyKCed3Y1wQ2ZhIR-meLGKwZ1xww_brhareZ7bjrT_oYEGp71VJH1u1sOpMurv2uywT21h6Mvfld51cXkrhFpXnDcUTKGLFlBU4hTNNZQWOcM-DbWQtk9yxhtDZUzzgqjCEI5khr1eU332Q0inuA9uKCOAwjfTgHlyp63Y2_oBnpBJANQBCbGVseIhX4aUv24Sy2L6c8BudMZdtM866CsmqQ6_-JtyyBl1jNnqQEvNvf0dmNrnZS9CKAIPhiOiuW1plhPh-tug3M9vbNpvo0KKSru28PYoFj0WM36IfxC9qdRq_2ApJmgT6sMvcZaQpNOjfTITY6r-Ucq_MZSJtaNNXJPk4fxAcuvgANYyRJ5aiwNbyoZKl7kM9Av9uhKkv-pw0dkixMvtZ3NrPsUfrop-cKd7ndDVrYzupWUtUrs5sl_CpKVNtKg7z-p7ATotDhwtooih78bJ-St)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja17.puml)

### 3.18 Brisanje uporabniškega profila (PU5) - Alternativni tok 3 (A5.3)
![Diagram zaporedja 18](https://teaching.lavbic.net/plantuml/png/hPJRJjj048Rl_HGZk049WdgWhQ8e4eUsGYq7gUr5Asx6zWOcjdVDU4s0T-0X-YxqlJfUmteTZ0fIBnB5ipFVF_FFEkUKAfWPOsDp5KLLHhf4nW9YJB8pDhLE4vCR1ikeApbIsWPPgPfXdTllwihkv7Ic2pc6HBuK1rcOMCExXbF5UmuMvq9_bE0LswJ5ELaL9Z6RHL0F41nMwg9MEb5VQIOVhKArrUrFkny-xWrado1RIgX4RLzUCDXk5BbPO6KdBKXJ9RR9umfW1ITCSxpCvqh3PEAofjEex82myklmEBwx9OrjladHPdGS9pAFbCID5lBrT0ghulMvtSrhjGpuKHh6MDEVtncTi9bHxbY7Pju-FPUpRmgykyLlpTeTeGaaxVFp65-ue5nJzj1HvZ0FKM4aHbiskKTyPhmUHeIk7B-4uBKbMIubsQxXdohFpQAlrzDfRCSdww9WcvlJhginl1f1oPJXJMz_QwmkDe1LjTvS4Bf4gxgYg1kgOJdbCRmUmINhjXuFzWS9xYmedsnk-lgjBQXaVYCpvKR4W3IKRKzWW6vYMQNySZDJbAfbwjBzQyZTb08lMTLLePX0V6h1Ii13G3-e3_NWIrBYGIVqvi7E--lSsN2gfGaPe-d0y9aCSuC9pKqducL3U_sT6CFRrc4V6JRP7qSzcmFEaDErltfhGNEuld6gGHPGrCrO9QPulmaus0yjwqI3LrTKdzv07RpvSk8g-j8XtriJnFexyM7VGD1ARqNR8pS3LOzMzFnLlFEC_xwDOLjx_sSzOz-FEcEFqEKPbxVsJmSxgtmeqFaB)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja18.puml)

### 3.19 Dodajanje novice (PU6) - Osnovni tok (O6.1)
![Diagram zaporedja 19](https://teaching.lavbic.net/plantuml/png/bLFBRjj03BphAmZdaW2rZJvI58PX84uVXxHDW3w01hrG4XtJNYqLQgN4-OVyKa_jVtLbjTAwLOlu807BdHboEDAIKuA5Y8lbDegADTiS5JE8CLbVgPGsJSI8WbEqXRyYwm9KIWiiZVj8j-x4y9ND_3Ka_aKQe31nedFHbFHqAnORh_uNeEtOW6wMx2W4gSfDm0S8BWkwBiacz9ON_h4KTZiuVZr_yUgq1ts1wZZX7AtRdz0xRXHjlS3WKwvOcHKQIi1AnSa0i80BvLLT9WlJwHOvcqLv9mg3otSVwCvYzhxb16TFYkkEg9lP30xynfTkRahQbJZJZ8tbTIVnk-BvYLYdObhw6yND3dtBGe_qARBh-dmXO-GcYW8BmrchF8778x-bTj93fUj7e5GSrGlX2XsrsAWTnmiqxIRmP0ILMlvSS1-rGNN4wN3OCiTZA79H-NxFHk3y3DZ-cWIgWfRDzgEK_XJRsQlNwwnunLofB39I1el_LsjTjPL0UAU9TniS9_1q19BcokUnuXqbb_XIKboXNL6pmgElTZok4GIPlp5MGDPM7jIeC_FCvxBqFoytjXySJATmxAD1moacFlaJfnoNJgh3MD9DdqZVRleIVpw2j3RyxxdsINt_W7cDFxunv598Ad7zGLEJBlLQ26g1y4y0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja19.puml)

### 3.20 Dodajanje novice (PU6) - Alternativni (izjemni) tok (A6.1)
![Diagram zaporedja 20](https://teaching.lavbic.net/plantuml/png/bLFBRjj03BphAuZaaW2rZJu258PX84uVXxHDWBG56lH2INHCUxLKg9KSvn_oL_cmqbOhoQqGf0UzbZD3pX1QS4em5mcnt4LHiMAVes86CIQh6vNIfuauKGYAlh0I-T11fJJ7qeMlT1TE7T_upCgGs8sqWy8aYCv4KzApdLZiJFqVGDEn1gqN7AWBKfLrXm_GAHPqMv9Fw1FFxVBKxNPuyc7szlrP3_eIDN32EVhm_uJUSQDevmKElkMAbLkYemIyL9mS01PmgRpS7fE7oMI7d4uXobjLEBZ-V4Nt7hCl3QdpRQnusn9rOyH3YtmHPgwaVObppTXvNhKIVqwCduWFAgwXVrJSxD5tB3IahP53s-S7EIVhAEfu64mRvJ6y75fCpQH7IhSlGAautYR25GPgi54pZWdKxSRmQWYLUlvUS1-rHhN4oM3GC4SZA79HUNnW9t1n3kn_Jm9LGOiw_YYblyNsSZMzreefvafbaP4oU7nQhN7Ld7I4zvgOsyxd65uFGT9S-I9MlAVa6jz9YalqIweZFFxfHwCjWY2pYlC2ilBoh4QjcJUsbuNzlLpRVlPYMeKJMmqwJZ6npPy6vRWCKXt5acxwHFgoUJBhplR4uixnyS4pL5wAxKCfjRV0VRg_0000)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja20.puml)

### 3.21 Urejanje novice (PU7) - Osnovni tok (O7.1)
![Diagram zaporedja 21](https://teaching.lavbic.net/plantuml/png/fLFRQjj047tNLmpEImArJIyfnHX3d5ueQPD0sa93NqRIE9vujQECLdBiV-WlzQdvhwwjL5gteYJqGOATFUVCp3dId5E2cOYBvJQAYWNR71KpY35PNAcKDat4Y89Jj8M_8ki2L4epB8txHBVkoF2LpVmr9Fv56g0mSQ9JqPJqU2iM6w_-5w3fM8EMStOKWbHb6V01Wik2Rago2NtWcNyiXTts3jzENxqvxa2VepfEE4Vh7a_e73UAjhj0xtEkM9bhD9I0bOgJ7c01vyhNcp9P68-toCaaobjHw5r-lA2rnUoquGHdJuet7L5NamdiUSVdRcfAsfKuqOoDvKKhyRlY-ObOfs8Q-Zl5rGvzoqAFz2coQ_jy9MDa6KN12lr9epo2fmFlKZFfljBD4r0g3ZQ6S8ME6cpKZEC5wdOZU3Q0IYr_ARYBMgDQuhZVRvZ38HIvgFpypaRWx0JOtay2LK7pslqefJ_5TdprUkqgNZ5NAekCbC7YlzMQhPfA8BpJn6yR74VmV02IvifdiUAQaalqrYvmNVjtyCqEXvjhWanID5P05bOUrANTv8KFPUx_NAvtVd0ghSAXpmKDfvZus8-SSbmwgVPZILTT8bt6TCNzSW2bKde_r_lN_nlwu_FrLj_zOCYba5JYpVTCTRZKkKHG2uH_0G00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja21.puml)

### 3.22 Urejanje novice (PU7) - Alternativni (izjemni) tok (A7.1)
![Diagram zaporedja 22](https://teaching.lavbic.net/plantuml/png/hLFRJjj047ttLupW9P58K2zK5OeY4MWhH4kHUf5QyJAs9sIIpOuPhnsIV-2N-aJ_gvEOEauR8KNYmRVTSvbpR8yu9HYAX5ZkeYYViCzGSGen9fCRbSAdYJXH28e-jotoeO5AQOY52r_fBfmull5JsuR4JgGD52P1T22Qafwkn69dwly1QiSAD1jne2P8LMODFa1ZCwVRWdn27tbeXwUcs_xH-y7RTwTRq5UeWHFEq8VT2Ll7ZQ9L5jZxbYcMReoE4l1ISh87cCELydYvJ1vwlHMotu-ojIZi_VpqXHOUfvSrf_5if7ZfY3hlzs7V6X-5WIjeK-92f-myJzOIVrUCduWFAgwcVr2SRz1NB3IalKKEQvyVv9pCegWHeTElbO_XHTTQgYTjATqUW5BUNXR29GQgiL4zZWbKTiVmiWkbUlwUypPgXLeJUvrEpJmyX3mJbOTxTWAVBu3zuoHGvZIgsezI-bTierVJMqSnnKofoAUa31wVLgjJrIiDuGsJZRfUTSs39xZWQfoT2tjT5LOzdfyzHskhR7XmxISCOrxEbs6Am8lOVduuFzkrH4bD0gQIelC2Ch5JIqnhGKdxsgyCWtBLm-zV_6WarHpo32KVsJSvCibTEruhlB6MqN6AYNtr9pPjN0GfMx6ay_RJuHljMYBCyE7UCvHUykL5ARMxmDj2_W40)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja22.puml)

### 3.23 Ogled novice (PU8) - Osnovni tok (O8.1)
![Diagram zaporedja 23](https://teaching.lavbic.net/plantuml/png/hPFTQjj048NlzHI3SvD0xD0_AC48wgGj8MqJI5jeoSr86iTZhNQKqKfE_0vzfLurxzMrbEgdDQM6NbYWtNE-CtE45vmGp4LS97T1KAHiSrJC8C8ulL4fRHAB4GMdQ0j_HTRrL0dDiJJk8zsvLuPlREQl8VOFqfuAOoSw4qr8JsfOP3pz3q6Rs8XM2tRK5wdAgkS7w5qMT5kIZUaTp_tFKZzjxyMRsSlN9rlKbwYEOyxHkjqDMySDWdeN67tA5IkpH4CnMAau7W4MSAcyt1oJXUcqLePXa7TG67rzVqLhYzc7rjDxzwPeauXw7uQmvnjVk9af2OQCSytOM4uxngyJ3uZ5EXNJ-jygtW_ijGkzqdz6TbtG5p96LW44lIN6OOi-XYSJtrCxwxxIxI4e5GURIhX2HwqsQEVnW2Rl69vEe5BBdmlUPcrKdN4w7hVEeoCeSb7vyOsDmCKvi7sS1Ag25at_GKA_mmRDUbwtYYVcIcMHaJ9O_3kjtQezwO478OEwdary1gUuvcQSdGjxtXJMl9wT_e_MwjtmyDgc34lUp9TZWi3hoF_zuUnqrn8byGZ8945Z1IJrZttnh3N51zUs3dJAJGyFt_anI9evv9zB_Wa0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja23.puml)

### 3.24 Brisanje novice (PU9) - Osnovni tok (O9.1)
![Diagram zaporedja 24](https://teaching.lavbic.net/plantuml/png/fPBRRjD048Rl_HIZz8PA9167IYYA8f4M42hGIXmaAcx6zgIPUBtZpcwIDk_0At45xyKw1djJ8aJ4XIrvvl-_ENdEES5CnATocoIkO5kXOWafPiMrojBccHXHy8hMXHHP7wbock7I-0zqwvyRlhPbI4CMNgIH2ZClEXNDIK-tiDG4-X-2jc8ZMi_PKonIbNNa1uYIZcwMP3DwmxFmM8gh7Psyd3vxSRf7VOdgEUCAhJ_SiBVT9DdE0hsFbUBABD1G1bPMdFK07LmgB-emMHYFjyh99AawAFIkthwdZSNoNUk9leCfhIkYtaqcS1GsFlTJioJOPPnhoSPoqJ5-Hm8W4-jLJEj_fNYtOz-wC2Z36TbtXJwJCR9EacY6_gGbZ-3H8AofRVM1qir3K7B7zKPuXPvQRTAs4m1DkH4y7i1ABNzolC_Qg3hZkDzldSCXk4fKldzb8t1n3cn_TG8hH_Dc_KbEzs4xYmsyRfH0h9IMhYHbiFXtMZjL6ud0EqN2jD7d29uCGF9A-I9Lt51sXMUIumBjWfeL7d-nms6j82X3nbW1AQpyKw5kcAS3u4sgxBYP--3BdDm3l3xxtmiTVWmkyCStXagSv9BMFnyrbw2zfuXY4VWd)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja24.puml)

### 3.25 Dodajanje predloga projekta (PU10) - Osnovni tok (O10.1)
![Diagram zaporedja 25](https://teaching.lavbic.net/plantuml/png/dLH9RjjG3Dth54IoiO7QGOSKXM4OYDDXaHOsqA90WsueYRPfV_-lK5zsd5Kka1kaYrwag-GYEKdfGR8y08sxa22GVE_naOG671FqdFEXkmw2TCGsGS4nX1YD-k8o6qVEE04lQ5DDaVMbgfXwc1d_ZQxzcU6-7MiQ8dsHbAemyaxQJcAIymLPQ9Hzfw1GN1PD1-ofN2JYfYKyG2cPqbL6DgBFtDF7Kbdj-FHZ-zs7yptLNHJF4ITe_U60lUq6mS8B77N2XpkqHu0fT8M7E353ij1iBjAjLf2icU3eyijNkh4uxWh5nlNTP87RYYaudCkXp5ejEDPn3tpRPBH9TI5ZDfP7AnWkcFAWKaJEUd6cOFWaEDjWUBgzNs6xueOqylXq-sjfOyce9BfWzkikVf0nRXgKVDPQXMO3NjPrVXjMAa9NBq0ehSx7nHFqLDG7HRDAacisu5KT9cBvUyhxm7dT6joirKheanD84oVkuOwDWyu5i5tr19EK1f0uBzetwrVUOn3JBltEIbHbRLHL59wbOn86YuSe5EwBo9RKZhHEPolKWDTrS74Yt0a5RoYwnFSknY7Q8UKEyfrMgWSfhJs-qMKEz5_0MqVox9MkgKvrfMWunaZlvimBXvdNsmXTFDj7iczQ-s_bRHtYkV5dj7ZeuVplLV087__mloxYfwtC6xTv11v_4rY6YVwaRRMilINv5m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja25.puml)

### 3.26 Dodajanje predloga projekta (PU10) - Alternativni (izjemni) tok 1 (A10.1)
![Diagram zaporedja 26](https://teaching.lavbic.net/plantuml/png/bLHBRjj03Dth58IpIO3QGJy12iCm4AUVHLhOG8i2pOwIQ7liyL2XHdAILIxW6wItyKboaj8VVVm1MYya3KY-zqY-WSOc9XWo-v0VWY2T6fUWu0n2ZAOZuSp54LiMy88krHGvNwkAQOYPzJ_fmLzRCt8pJKEaBv9Q5KQUfSSIazoioKAhx0S5fUAcQ3usdkf58ZoluG5goPJkCt8HVJD3VHpLrSwkllG-VhuvKZr0yIOo2Jf_Ek1ekq6mdWKQ_N2vGDS0J64WPeAvdP23JcUTxdQ3f6A2njtt7_JaS3OGYYsFE5_Zzc8A3bToA8_TBfpfkiU-PpFQfRgLcR7EJBSmN3CLGQM8s7bXMp9y5NpSONXzVjbY1y8JcdfyVVwp6MF3g2HgiF5L5x_9Mfu7GMtGPhSKRSFRbYvmPvPpeVit89HUhFPbSlHKrWTbjqfIYBRXNGjoSUPNQew1YxeAt6asQ-ZBIqWJ5bukZ6Netu9nsvuWJsaC2NlHlesUYXw3c0xf3pnHbMfGLL5ubiv833WyHQ6SlepiIHr8wtRsGcrutmAE4p7zKF29eZlyn35Eq4secA0mzVpY9ALgnWzgvbX_1cRlblotfHNLbLgAriGOwRsvzcB2pElT23b-F4PoR5l_zAFcEgib2IuNpa3kE5rz5ASdR_u2)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja26.puml)

### 3.27 Ogled predloga projekta (PU11) - Osnovni tok (O11.1)
![Diagram zaporedja 27](https://teaching.lavbic.net/plantuml/png/hPHRJjjG48RVlOeHl834HRr92A581DeAqPP8lKYjyZAs9ybW-nmpFZQG9pR03jhTi19Mqd5iuakYgbHzS2pDcV-Rot-S6OS44skTRsyyBulOf2YOW8z1D1MRcp2miHLmWYRJ8pAkbHNI1FFOVQ4RTnppr2Hw387-aBIoC71MXbP2afC5p8-LlfAmh5WbNS_OKJj9n5wtz02jmuokSZ81VU29FeRQrJRVl1iUl3rPapr2SHnmYiOzNx2sNSzRp08R5_x3FPgnEGuJDfpf-ZGyDbzJmIA-n9W2I8N2s4vj0LjMfcXuZW5VudOtozY2WsueL54OsM9iFf7GjAIpsiEGfrRGDnnj06Om4gMfXWmS7ItQ6Woyj9a0Ddvy7DaGNSIZgfLArWcfr2-7HBaT361JJPwvOPnJ7_IPvWQJqTD82r8lzdUeSqaurX5g6LOzFKML4LZZnCPBn7l1smxYyUvdBHw9lQJ8uUFThseX5L8XUaNPbMtKaEyKn_RQyrexsnqqPG_XnPvUWiuuMq9NEo2KRPUUSu6E6e7NT5nowiA7y78F2Z7yBUEryZglfJxQtMt9z_SXKu_jmpt75YxEWKtT5XGPpI2rJhHtdZMNomjfbR_YJ5cb6LRBg3xF4X86WyygiTp0CjGhjbAyk-XNUmhc2EVSC_6VzlswsdSFTNRwtxPVBq7V5NfdR21YIF9oYXH319xx-d72sUbQ9_fVsv-Di8gQwpz0fZOiT61hFYLFhUJhxMW5-uOqsPrcVWC0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja27.puml)

### 3.28 Urejanje predloga projekta (PU12) - Osnovni tok (O12.1)
![Diagram zaporedja 28](https://teaching.lavbic.net/plantuml/png/jPJRJjj048Rl_HGZk049WdgWHL4KYKDR8LeHgGUfLM_Mza0MhtVCU9sGNF42VOFsRVeaF4d7iOaFCHHwk4YYpCx_pMbdnpf4E2DoFbrvNXffcoXMCVWgYCwPCXi6P8Z1iRAf7A5rDQyGprHct0UySlj6dzjOZY6GB-IQbmeSyG5nY7ouWFb6w2iEouY5qtIi7TQTc6bQqmFK3bEypD06-5QVoSTYFThwxkk3lLU77TuZnKu7Eb7MFLxGcQxdBMg1jOy9gucvK0O3I1X3G-SqMGELmeZrHNw45WQ3XVTmw2KL6DQ-l1jHg5oaHuMma3LC8lNps8fdmo70kZH_x0vCXctIUvnR5OyQ6RHi3sITSAoDrL6fKqLMjrQ116GTan56WNZ3QjP0t5n_ByKZfWkCdBgv_b6qf40AHEwEThCbupCQGrFFgpLjUrX5xSEJdWodKSu6u-KMCAQR-IpqH3ci15wLSCufu_RXQGycRFMdL7VAIx-QUh2zNPFlx42Q4DFFRzeGd9w0jcLQC4bnNDq0ByHLwieySdPLei15dwKniWQh7W1ULhiqjKAiX6mszLbFm3fISzsQrn_rzddHsnRg-EYVTRfiWlmMwAsl5Y8DSPPNaQXGWPxxydx1yL5d_zkhTN_xIL1psUeKaa87LF8nlaqbwnv7pTWUIENTIAQTMzxOXgKFkpsWK0ezBVBQs7mCgohpXIpIM8hucv5Nj9SoSsLqg0BPstt7si-ShAPFuQoJqzckE-xJNWyo-VCVBvJWyvUcVQyUkBptNPw4KWh9NpnavHx_PeNhnkOuxpwvwvRz0W00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja28.puml)

### 3.29 Urejanje predloga projekta (PU12) - Alternativni tok 1 (A12.1)
![Diagram zaporedja 29](https://teaching.lavbic.net/plantuml/png/jLJRRjf047ttLup8Io85ebxILWWXbQIjeZIAfRILMlLbiGTOlDvnPjUGy9GVw1-qVzCloPTqZHryWQIaIXy0CJldp9apEpkH8SA8o0xfolDC97KYMCGm544qPafr690Y1ij26tU4sbQoGXo9LDbFU6NVAZdMiJk6m7qXLx94O8a7n27oqP9ig1pxMiAgOfuqdqYBrIHccbVm09L3WvSfwW0_of7xQAnMspbyFtZpxcX3jY_Ooa0cGjl70pRAzRnbBz3wdB2OgQbG643262eQqwm5me3FSfeTeOPURvdTxtj9IGojRsS-XS96qi-1EQmMSj1XLblmTRyFEyxxYHse59j45xZG8lPh0XgnxQXEEPPAowY0YLpJNTHn1AGjarfHV61nNQEulVbPW7scAKPMtDxyoWt9AHs9kpdIbZA-eb8qzxoAPUr-MRKBppfkDBLkTXalzu7Hx6MJa3DXiGHufU2CfwZRXUSTcB6MNupS22_oAkXUkrs17no0IOZfzm-f2CvFGUf25imCJihvUo6kiwwD8-CkMtJa3f-Q65c25biGhxfTXHebrahMJNtHSSGo4WlPcDS_UViozxP1TNByP4uN9hZVd7h_kuP8GfncNIGY520NG_TwmSdnHl-RY_Mm_UIe5cwd3IGv3gZWn_XEIhfv79LWSo1bTarCKrjcR2tIXSCEKEWQFSzrxUuzXgjiyvLR9AVUlT_omWgRcgSO_UiEfExFVvozeyyUXUOLs7BF7ffpGeP26YxVd6Bb_h9jrM3T-VjFxhiGVm00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja29.puml)

### 3.30 Urejanje predloga projekta (PU12) - Alternativni tok 2 (A12.2)
![Diagram zaporedja 30](https://teaching.lavbic.net/plantuml/png/jLJRRjf047ttLup8Io85ebxILWWXbQIjeZIAfRILMlLbiGTOlDvnTjUGy9GVw1-qVzCloPTqZ1ry0TAaIXy0CJldp9apEpkH8SA8o0tfolDi97KYZ8XXA89eR2ZLOK2A33WZjEKZrAwI5U98fCfzmYltLicnZlaO0lv2KyaIWICp81EYELgI3HMphoMiAkP9yubqM4qoXkOLF43bqE9bYZh0ZtB47utLQZk7xmTltXrjoFQ5SJAGYT3kyO2DSZrlsGkqFYT6pDHKA0mWCHWg6jEi1SA2R-GqEq8DlTuokz_taf8OMj_EV0g5YwIV0tDOBSJGOLPRcEj-7tRO-uaRg1IRH1Uuq2BsQm8QiJhLLgvJ4qkbPLJWH2xgBiea0MbdIAtaV33YkaPnU_Ep0Fk6fXWvSNlpAtSafsGIlZhIbIrzHQLexdaLpzhziceNddLuDhLsTWrUxeD1kvUDGiw4mnBWbO8pdg9k5vvtO6Qq_6BbHdYHLq7tskqA_E00R4A6Vl-GYk3y5AGkPC7CugIy05w8wwnhyyYuonQPdF6fZT58qE81nAjkLw56YRMITLDVT9XOHc8X6_Fw9szVvjusg4wEdypfmWJ-pQdtlsk89CHfraKYGW5oCUJd2qwED_hVtApxxIUcMl1IMqXo7531Z_6Tb7JpE2h1va3Ax9gOfhRCs5ga2uSTe90RFSzrxUuzXgjiynKl4gld1rnUEE5I-nIZVzs1bF_ynzapVVOeDA_00_VilZadP2cauVBDALRkBzjM3TQTttwoxKBy0G00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja30.puml)

### 3.31 Urejanje predloga projekta (PU12) - Alternativni (izjemni) tok 3 (A12.3)
![Diagram zaporedja 31](https://teaching.lavbic.net/plantuml/png/hPJRJjj048Rl_HIZS0CI2Ug1ja8e4e6sGhGYKWzIgzwCxOKCNk-OzJeXkU85U8FsRNWIdgJZsCI7k2sqlKWSpSx_pSm_tameL736x7o-yhmq8fEWnHXy3A9pova90zPimLaqgHmfusfPeJh3JBkFwieTQ3etiHn385_Arh8mS6n7R4Db3vSmNmjzBM5LiKYQJSYfUfArFAlf0Mg7gRhCb0dKEpgJZr7rQXkxRqQlNXzsP8_HEWeeGUCUB-Xir_EMiq3lKs9ngYzGgm0IgqBDvppj0QOmjdIH7oa3-_lBxE7GIoemzBw-7tE8Bg9n8InaZP18_Rmsslbm2B0Xva_SI6UgJVgW5WRZSQE3Lko1h1CRapOKbJeikhgF2YHWuonhOHI8jnRd3SJTzVTIFBPyeIA7TzS_2aiAf43atI4tNp6-AArvvdarq_h3gkeUF1d8SXhZR5frkGrMfLlvBcYAJbK2hseuvvHrz-3f0ARMqEUKEkLbNaszt-_Nv3ixa2Pi-VQ6DCFf2P0fsu9fgYRL6-25Qfswje-SNOqeSD5dQQmiWS47W5VJhaAj4cibcwO-6mYO8bnGQrz_vUtpmjiMwlZelpbTcY3F0htzpK1446Vv50c62BJmvVyBZeyw_MzVhT_Rpu9QoArE8Ibqm2LVnVUjPDthg0NR2wco6ysqUykDRKJsO7S07CgWfqLVcrkFOLLZlf2BD94X_cNb5Usbx1mrXHZ8lJrmblpCoTNqEPntSlvarwztrLfLxULWsLQ2jpU6O6eupH-Yab-EEklz1000)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja31.puml)

### 3.32 Ogled podatkov občine (PU13) - Osnovni tok (O13.1)
![Diagram zaporedja 32](https://teaching.lavbic.net/plantuml/png/bPBDRjDG48NtVefHkaaaqWeG4ggYI4tv4GAQBc01ocPiJvAfR-wuuskdpJlqhNWmnZR4Tic6HRouSyutSsQovPHWBH9YUOYY8cEVe-8EOaooZKhfqqISA0H5NrY9VEYfKbfZwS8tUWXNZZT-PsL8x4FQKs4IH1UYAUbr0ukTqVyH73kselsM0_L5ghBl-G5wnOBkI_89VU6r_Jprkvsz-R1u-_xwXFeMDN32EVhm_uQJuqPHamL6o_ZN4_gLlqftxBcmzTdpod_F5IjtXuuIo9LI9nkfO2owGSy7JFWE9qELbugJuLDgfZIJQkLlI6bJqzdEmr3ceXXxpaQ01TogqSn37cQpPgpvFCgx133w-RKUapssUaanPBoC4rkWMU8w7EhZV0vdTjnjMBYIXe3FkcDd_VgOvTz7GoJYWuepmX_4HyN78M9WhLkZ-UmVnA5h_8ESatqKzH9DvrsZItXvRjla30-336Eb-nUWL4pggt25WJfJrCrPivhEb_3g72hrhHy_lJj9Q6ez-smwFVelBg2m8uXbScBDW3taxKmWm8UukPCqcJbAwJdrsGrgSfVoTPsIoc97oZVOIgdT7uyd0zenvV5fGFuD)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja32.puml)

### 3.33 Urejanje podatkov občine (PU14) - Osnovni tok (O14.1)
![Diagram zaporedja 33](https://teaching.lavbic.net/plantuml/png/hLFDRjD04BxxAKRf9P5eAduAgAeYfUL726Xwe0UgNiRUQJB9PiTThvqcxy0hSOBtOkoKs0u-KCGXESn-F_FDZ6Ti26v5GYptKPGjsANeSGan9ekfbzoPHAnu21vTfa_aGWDbw1Pp6xxGVHXRdhgbFaEYV-GRA4o2-3FnXlnv9HPRLVy3i7FSWbOp3jG4UI-h1X-WyPZHNKukeKzygpz7JRU3utTdhz-UTw0lqGTEE4KN7a_eR3UAgYpGcyG_lg6xSMEpPCUPZa_BD-ugzLZOELfA8FLah4obWBxuAJhUOC9p7BHHJWfEsYMZ9BEGuiPTaATfgSww7eOy5O-nuqKFC8DBhshA8GUdfrLRer6KrWcWT_svR9CTRl5YC2nu4YSwGAN4PJZqwz483dIvit1cSseBVFHBjkhNb9dyBgf48YvuiJk5znxNROKMitH6fUa1SQXzlvAriegYHg33KUrp0a-7EanUuAOLeU_fxWbuoWRbKhZ0G3KfgjiijIhd4tWsXCAxBHy_lEbKgDuQzDF3mnt_w0WotO5e9Yjg1kmWtVO40ho9gpL9bPaZG_kgUoiebUkKpykKb6TBydo1MoXLKEuFMcAxaBjIItZFHlEt2YVmOWXYTA8JxNT3oJLUUPgZczCM9yN3W0T_RT28SJo4R5REePdWKSkgjLxglj2ogJwSiNu6SHwawCTYrfqwdKFgl8HNGyZr-_o_fw2AUhpqS1Aa9_6Ffw3YrS7__CugbecHsBQLArtg3jmejbn-0G00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja33.puml)

### 3.34 Urejanje podatkov občine (PU14) - Alternativni (izjemni) tok 1 (A14.1)
![Diagram zaporedja 34](https://teaching.lavbic.net/plantuml/png/bLFDJjj04BxxAKPmIQGIr1zGXL0ae3-gsX8EvL34PUmTaaasEsQyDf1tuArui8wTDhPfL9L376ls-vblnZjZHt0Z4bEvJv9YmI57nIMac2scAcLmcNXHY8gXi2CAiODoT8EbZp_eFfvudeQb7KDc3z8E2hCeUYhgICyQiTIR-b-0ZUCQT3VZI5sGgjnr-02Tmu9kImePVUCR-mNgkkqUV3fz__5i2_e2DNB6EORuSiBMTfEaoG8xa_Jf4SDrE75B3bpO-Any7IvpnShFqLC6kPBpCfKA1g9J3Bp2ZESuxAE2L9prIyv8RY7LTJWdfMcjphOUXZ8NnJJmOWUmW0irDUDGWEFZfgtnECdR1B1pzRrkamEkyU8mBdYIPZP0ewHrEDI7yHXsRRcpUEfBwWjyrILxy-lAJFuKJIAJ45NyHk6puaDVeSUidT5ezW5nR7r_alToboITG7lZrkS8NezicBp0LI_2GEds5IWLmtefN66abfIqRTPQZVCHl1b1fM7DnoyVjYeqPntwyTxUXh-_3uNjG2oJ5pC33f2lUm81NgNDcgJ9p8cZvwhFLb0hjodVrYcfB9QaV8vhA3LG7WnxOfkGcr9F-9cDvUyLZk3T2CJPH2VMxugoAxnKccEOqnedrUy13__Re1FZO0J5h9v3Dy6BbjLg7Tg-qBDhBiw9NOEqZ58DKd4FMtMs3kcVG-zlL21WZa-FjiGgI57_sIMsjyXRjNy1)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja34.puml)

### 3.35 Ogled uporabniškega profila (PU15) - Osnovni tok (O15.1)
![Diagram zaporedja 35](https://teaching.lavbic.net/plantuml/png/bPF1Jjj048RlVefHk814GArKgK9H909jXIWYXt9ebSlOtYGJhsVCUEr0te67wBlGz-eaa8sZvjA3BNdcd--VcLtFANSm5GcfF2L9NH1Ng5X2YbanKsaupyIBGb3asbAEGqULkoasFlnmJ-7IqunBIqDcBwST5MP1T2IQExtQm59lz7y4qV5Dj9nJS5sHgYmxzG2TPEqU6yUP-qvJUzXrtOu-VHrz_d9rG3r63PHHXHp-l-1WkqcocGLwz-dh2_A4B_EIc6fRduKd_50fjdw1tcLGgSkzpAI5Oz4PCgqmemMUxAjOMihsGxaLvOMqFS0Qncerbd4CWy76V3XCgbsVqFjrzr29OihqvtT1OvKf-KtfdIpUlgmoNK-2-ZmSmf6Tv3oCVEFsERTQacSgjhHY0zb6ZP491nLlY7V6DyNdFKOiDRNT4Wexlv_EUrdQ0Zi3zOSHVm4VpcnZLE3gVOHZTO-deAu-MU-SMWmkgfFObI6YwGLyF8DMcMBavleG9QPtc46_t-MSdqDjN_BwGbxW_XQ8eTccJoSC1K7PhFkjC4UWLMg_Zy3DTPAx0pQTWp2VtSXcOvUagKkd18pWiGvCqMbzd2PO5tQvSGan4lb_0G00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja35.puml)

### 3.36 Ogled uporabniškega profila (PU15) - Alternativni tok 1 (A15.1)
![Diagram zaporedja 36](https://teaching.lavbic.net/plantuml/png/hLHTRjD047xtAKRf2qXDAluaL4MMcXPGLIeYGP50lApjIJFnUjSThvqsT-WXk0lSgnEdNMyQWm3n44ixy_tCVDvuJXd2p5gNsEiegd8ofM9LGABI_99jRRBKQilWM9bAMcXSWCfmfchjFk6rEz9qQGffGoeFv02bKcTvOZb3Fcx54YtgEm3lk04jv-Gm137RPS0729eLNjLeKdnFC_aP3DtsNhsTl7vpt8EUAdQKKgcC-tj2xxXHrEu2WwEi84ELn2R70QWAfamBrUW56XYFMrGSHsKd28ElvnznPLHnKLfMYQ7SDYrpfoe2oTfPyKqSmvuaFtSJNUDZkGVAp-yvJTdEIBTwvtQnEVrA1xQ5phWWBSP-WbRbeIeYgJMEhVOQxrZTR4bufe3bTf3h_BwWrdOPHK4ymzYB7yApaQJ_QFydZ5Vxm5WzNSTDZNBe6P6VIsGyvn2UZw1XGvyhwcDxO4SV3uSX_-00AZdP7xUaBNmu0pBtWq5JuHpgRhmemnxXdhSe3jsYOb0orbM1J63KduZxdNrbnwJ7TYlU5oDnfLojxY_8lqJxSXEjhvoU_B-8_URxtmpa14MzdhTKcG9Q9V9HWjEJ_ho3M_xRdElWJoATDQCtuw2scx9lUTSx)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja36.puml)

### 3.37 Ogled uporabniškega profila (PU15) - Alternativni tok 2 (A15.2)
![Diagram zaporedja 37](https://teaching.lavbic.net/plantuml/png/hLJRJjj047ttLupW1IGkwWLK8HI9IriXYeZKKgaLBsDxaqoytZNhjO4yyGFyGVlGVw4_mfTqR2VssZ4LL7q84RDppfavPxCJ2WMCjBQ-ll6yD2ALeC4OV0oYiT6P2WCjjG5hKALy99Hrka8nmapQB-B67aWQgvYF8U0_mZXT65Xj3hK9XJagoNp9x4iDjMBLT3qXAzmcO_IrWmTm3bDnbGaLY4yqueyIhjhgpeV3T--FUhg7Q2m5bA2oBmVqZkjvvIwmSku_tAEwL0TXJ8fIje_Bb-eYCPZBAKeHG694AFLOvx2cpHWLpJ2WAQwtkvJEAMYNGWQ5aSvN05CO6iRmYL2mlr-A3mPUqim9Az_FXZf46z6m4gnWhH93_M8LDBU30S0gPpcnXp8JNQRFOgOm7YucBwawjMTpNIJQeA_ezwzY3ZqYMTATwMdrtpE9JarCKb6qe8jAbaMLIGAjhD6IEIgAZmPl-odcEs3bq4ieQd5kvkjFzhRk_IQarDUjxiUx7tCftdGg8ekFTp-hCAi1dcJndBWt1ysCU_1gYszfAuWr8wusm8XqlRYKbACL3S1hrYjuvhfxy7eBSgFeQqgzy7cVWzxVt7JWszkGiXNwuPwaXlDJ83KV2_9KJ23Hrl3iD6bklnUAPVwbErMeDCko3EEpD1Q6GE6B96e7wb97R4cyRVIRBIQc26VKoV2V_7vR-TsXEZd-R-xFJU3lYdhZKa5446V55Wc623Jp-N67a-FU9BeFnT-3q4mruoSgvHXA7EZ515b_2awncqFJtPgXEnBxsGoquwHJF29zFjRQRYJrBtWFTgjCwaf_6lMnrqh3uUcB8riSFpE7HiLv5rdcwGWovrajKcU4IzXdVCVVkbvB_W40)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja37.puml)

### 3.38 Ogled uporabniškega profila (PU15) - Alternativni tok 3 (A15.3)
![Diagram zaporedja 38](https://teaching.lavbic.net/plantuml/png/hLJRJjj047ttLupWfPKWg1Ug2aMH6cWhH16HUf5QzMLjJyZ4wzsmNWV84p_07xGF_HVw8tn9nvUiDuwfIDM7EF5SpfavPxCJYX76MjjGNmL1bf2Q2IDI24MKd1kTgpZIKXkmHgYCKwYiLnNZMEJIVi8h-qRIkKev3H4_q7XL8hBQ3BM9qHoMOA5azBK2nrWLNKx8ebzaZBxq-W6yP8ONEQe8Fz2OFmfzjktzTyFNRmyxgaV2M8fe9fJTlA5pt20eTu6ji_3kLgWj41cC34t5N4vHGRzVfWU3ODOWmTQtqv6EXKreP32M-hngMmbnQrYG2NCz6C0sYpsnGvbZ6-WZBfH8woOzBv5QiST2VPvf8q95ltyLK-WnoHBjL4-hjyVXd9YKfA9aYPQK8CieOqHQMQEbWtXln7KtHBs1gEJP1CAHSp6VJhBDn5zHIdsvKdr_ywEcuaMdc5XnV_EpSh8Qu46KmFDwTz3CU03FUdo8LcnuOl1Y1mncJuipGtDXiMa8clKAd9ht09xtO6uKVSceixskyxhxkxjU-zuUP2o5lhibgU7i14ZLOy4ymmdCj3KyE_6lvPX1ZEluQoUgO6cMPHhkpxCK3O4I6r4u1LoeHRP6lYhqYnu3Ko8MrFBmd_H-MUdTWZe--c_groBmTmMzyrr1Gf3cnHOp4GkWHSXtBnmVTJhHlYN-ReHcg0L6aB4DPHzea2Ap2jFb97ct6rwmxKTJlJ9BUpJMjHbittEfk4kwz7JSlZNkdtm0hoflNAJR5PSELbpnSBfioPVfH_hHi7ZN8zCyR4KfEpcYuf8j3W4t-hXT-hTaTd77_0S0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja38.puml)

### 3.39 Ogled uporabniškega profila (PU15) - Alternativni tok 4 (A15.4)
![Diagram zaporedja 39](https://teaching.lavbic.net/plantuml/png/bLDBRjj03Dth58IpIO0uGNz0OGG6wgGjWZPm5isYXJUKDBPfZMSKQcGdlaCFqRkqzoebnQEHgm3DGe8qGxx7zqWkALKmjzR5zY6AYenCZenhY3795cnBaoPMMmR7Q0gvKiO5KQcQOwdTD_NWFcXQcBLSGo8lnK4K9ixon7Ag-B86YxMW_nFW6PkWxPAS2eEOxJR81mWk2tLVAfEehpINnwYGxUZTfydxZvSzqRV8ZXBAqRYN9_IM6qMr5XZSvOmRlKAj4iXPfTekx6PcZYqlqD0E4rhXoG2mW5kMJmbL1YukwkpnECfR8XZyk9d6lt-ImIRUfkWociQ9w9IKkAe1-N4yXYFfmT9DTAaE0UvoonWR-lCherksSz8rrerTDN__X_E5rwGDPNkqh0RPdmf6OerZgpt4PyR7VeXGqVGb29vRWcNGoBK5VrTQsssNhyDJMORFvaL19uRZjgeHl3gJ7bA6kuxtnwpkJu5LSL8rdJReL9iKjQ8gh9fv1A_FOCEcoSVhgrw4-Yv8lnWEVVxvEHIYtuecROKCo43Ur0GMQ1VBbifNhPcYL1sY7inEXTog572PrB9OAoOGdnfW9S1zW5weF-g07r291otHcxsTJwFOsZ0pKeJ8g2hGM3WZtEt2s9RBiuSk-z4OmTl6Q7_IxxM_ZZfk1pXzXfT-0hlRV3ep87rObvMw75DyQWXSNuNEjQJ1zWdhyusedI3FM-sm1DI9tGf26kzGSDRja3_sTVm5)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja39.puml)

### 3.40 Ogled uporabniškega profila (PU15) - Alternativni tok 5 (A15.5)
![Diagram zaporedja 40](https://teaching.lavbic.net/plantuml/png/bLFRJjn037tFLrZm0X8Bwasg45g9IrkX5i53UMYrBquokvZCZeCpMIx_m4VqNzh_gfF0PB8DKddOrQxjSuvzxBcYtC2SsQTyboHLGQv4mIMac1KBuThb6LiMy8AkqfHnFghApHnhwx-REtzeQU6McePClun4LPXvbYEMtCXnIvPQPV-d82XsHRTNv4rS9CAt4HuWIbRcfZOkCzzehXzdOhND3v-FFduw7gc-GF6KKOdElnumscwIjBF0nddw-n7Tp1tcIt9KgNqQdhdBKd1bhz6Q34enkUK5hs2BPO6E7Z2ZQzmULZbUKJOCvGhA2rvj05Pm8OhHZ75mSD2AJwT9sVS96p_FccR8OLVFEVg2pjDCRL98seo0SZ-TmgQkyCeVsTgi4roMB9Ww-lEhe0lXETcMwuolkt__n_DLbcGT5SziHKlo75MEZ9qNjahnnF55y7wS8nxf_5KKGLshzLB9zot_CDRoxL1m8DIOXY_YacWNasdVrZwysTLjKu4F0_UtnDpiW9XgkxaQMg4tFIZffsguMkLzUBiBAt4T7azFHXdQN0G_c4m2VcyFAfsVTIRBAWRaeEnw0WPwIFMPwwzsPafoiywwTZqDSp-bakjDrzNI287wr14R9HuZ38E6q81yJKezw8NUFTlvT8oz3JEdJUWOJGVHe-9U9CZ6zeQRs8VtdSCXCcvoI2S3coEUCQVhS7h35xypSw0BMDRDM2Nc-BG9E3s9BUj5euUdgYzle8xUhMPQn50wvW_MHB7XJa8uDF0N)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja40.puml)

### 3.41 Dodajanje fotografije (PU16) - Osnovni tok (O16.1)
![Diagram zaporedja 41](https://teaching.lavbic.net/plantuml/png/hPBFRXf13CRl-nGMkH2f4FLFgWeX94YQgcehSkYbKI-pEmOCmtZZdON0E-ILUchVgzv5PNVfIasa7bWXsz_FyzbUa4MOCOUO7w8eMv5FZPWrn2PPpOLpRnDsB134-4nJw4EjokBCv2vynOSmTZJtQqr3eX-KMfL90ik4nQ9SbR3OAVslWcF7Gz5sGG7hHIAyhUa1QiaCxtFq2NwccVuyrhkTNTvCths_Qgc-DH8eeTJuy7n1wtEZgFG2dMdyyz7uxtvir-Gfq_5fk0CcWrkXfTcu9NeO3ilgqIXAAp1qxhuKQlBcKC_MX1LDuqHzgIGkUXhPZKPmfZDVX8dBiGdu96jodbPrpFHFK149-o3iZeGFOdPDGaDPT3OgqxrIgFf-G-Tu6qKrGxrHrMS0B_kG2gtClc6XAtZ_0WIpys9Mj341Ar5KFRDWbPq7yAeF6_47lVbutKeeSpNviDSxwYyk84jPM3qvrcP07jB3cu21zh4Uj_uhFLDayPHwieA2NBbKU2gOPsiK0ftJ0OmARWCUZHv33VX9Avr18p20rtrWgrETwfltcDoPQyqlZL_Y3GUUYvdH4hldJyRNZBpfWorW5OYViwiATAdhCewiIVGmna4epWDlkZ7RNIkdTJwjX_2s3xcW_R-Ne4IzNVp7ufvw2NhlltwGmZAs7BickUHYk-5QiD7bDm00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja41.puml)


### 3.42 Dodajanje fotografije (PU16) - Alternativni (izjemni) tok (A16.1)
![Diagram zaporedja 42](https://teaching.lavbic.net/plantuml/png/bPBDRjfG48NtVeeHsH2f4FKdKeKG4YHDLRKLMNJJg9knFS30vOupleR0E-Ijyc0TWufjQgdD0cFTcVFDFMUyu9HW9X9YUOgYVCK-GyKrn9YivYg5JnDneX0KVMubyg7MbT8C2nT-q5COEvxxjPKXiGTfhGkJ83eHJKbl3h3O6VslXjF4OzDsmO7gJQgohUa1QiMS7Wlo2NtZcVqyrQTTNDzDFdwwQUc-HmsSS8O-l5xGUjqeEdY1pZH-UKR_ou_JDNlEBJuxxW3cSA-yn8rRaeVXyD0z6aLP1OREm_TIpHwF_P9YMF4qJioNIU9o9kfkD88BotmH9gwW9k2hhjbvNjKnqp-7XaZ41nLt8dnMt3K93MKv6KrcU-LGpVr9piasYcg6UgDgpW3UzY5JNk6-OQ6hzFW6bFBBCYlUOA1A55NNB5c7oGDuruUD-gCUlzos4WwrcdpOwvtqLrUGPw9YdfpOC60FsV5E8C3xs3vkUpjuvYYbS-hP2afovTBWcLAHhqaPBASZc0pS1ZmPFHqru6UZB8F6mG3Uzq5IItLgTzvJye2tLb-YNzAT19ahpdX9tSl_njUCVEX3Mi8gaBncLnNesjQ5ZbDCxCCO1-Mu2BBfnfBkMZcj-Vmhyzf2nMBFyENPThZnafT_IgczXVRiVmC0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja42.puml)

### 3.43 Prikaz seznama uporabnikov (PU17) - Osnovni tok (O17.1)
![Diagram zaporedja 43](https://teaching.lavbic.net/plantuml/png/bP7FIiGm4CRlUOfXlIYuYe8WiXHSKGyg2lu1lQNjh3jkcjH9sbNVmRVomHohPgFRWnuQoEJxVj_CT4ebmiIvaBidfVoCRArPLv3hOdRFhh5buOnZ2AojboUq8L6LED6D2LVu5FODtTjAdg6G0pbHwI8u7ZikaGywM6w4lYI8YP-Y-PG2fY9cDq_y0CcZnyS6RO6dD97FOfgsidCqtZqyw55VQ0vKKArj-B-XjrsbkbbWi5zMPCdBskGw0EtXWkb1j-O1BOn6dIhBLBq0mk3kx19VhAwkQySwjpHpRUTSgWeW_qZM_9nb02ko-caOcmP_yawu8YE6wEnetrM15Cu6TaOOduXZriy_4D4fOlch59AyMpJ6pPLAvXfcaRu7Mnkojb-Dhp8-hWEZN_lO4xKwO7Ies9XWecSFjZUWPKitdlhSKRYmZuR3rB-v2LvkxksLZ8Fp4o3xrHYq7gVGBDfJ9VQ0UzOl2Oj19Q1cR7o5J63rN-1nvbXP2da7)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja43.puml)


### 3.44 Brisanje fotografije (PU18) - Osnovni tok (O18.1)
![Diagram zaporedja 44](https://teaching.lavbic.net/plantuml/png/hPBFRXf13CRl-nGMkIHI8UfVLGWXXQIfghOYXrwQctVNW64ORxopaF0EVQMSslUgMLHsbY8rhNe0mTZVxvlFdXdd11EHaCfzafGBzWKgBY75R35LgNoUYHE5eEXBAv4FKLTE4wnS-4BtuSBnr2-j39bzaKPTc0NHaMXEUbd3KcVqtnhsZhkczOm3nKsgiexq056nfBkAV4QVU68VJx7RoUlhqTjtbqUwRr03ProW3tylE7hT9AcpGESYNxBdqiPcVpk09Tmept7bvkHXCAYxXiEaQ83GkVqyJhz_Ou-xVianB7YSPfR79EdM2_LXE8GJc_KiZ5n5RS17NRBpl8Wnur-7XiZ41nMt9xnNV6WJMigjCvhCzicXyVrApiawIQ90tM7ZquVdFIYK5xXfHJXLkdi6IkNPTaQyma2DA6ckkMNLpdruqOEL-fqUFrmT9TIrI3xeTlVwytCe2r6nJ4xC3DX3iRiJ2F0cjKTjl-hCdEHqI3rOmPRSf3HueLILIr86czCEJ0O-1jm7tH-ru0TMDeFMGHzUza1oc-hOxhoXx1Qlh3v7FwTh2J9LdF2SJi-UZ8-2lEhLe-2I6vJymxRUzA1Iol_lkene3up-CDsdhiiUvOz7DbWfkQIkJQwvT7nhqM7BvIS0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja344.puml)

### 3.45 Ogled fotografije (PU19) - Osnovni tok (O19.1)
![Diagram zaporedja 45](https://teaching.lavbic.net/plantuml/png/bL9BRjj03Dth58IpiO4wGLiKA0B3G9n-KBIDisWN2RoX9DfcD1ugr4XEV8VUgWSh9Q6Mb7hJXMP1lWyVgIsd16kH4CjJ51KP-nmLTn1ZacrKIfycuaGXAFh2MkH33vNI6aiNVj1Jk7AyyJjhGs8FQG-5IH1TYAQarurOx4pz7y3HiGNjjnoe3rALVOyFq6iMz5YIJ-WRh-tpr7SxU_TfyVxZzGdqBMhWX7FquVy99yUDeYOBZ9Rnxr_eL_ugtR7dmjPdvPN_cIjMxW4T9P0hfKusKi5OT8EU3vZm0qw6A2yL9yDIQgGqashbRqXfKwkpdOUXp4KnzfoD00kuLLCp3dcOpPgnvlCexnB0wFvxFIPxRF6IOiXu6IUsGAF4TJZKv_aSuCokkmqBLz9GuQlks9bXNsVvjsWQYVYWuZg9puhFGua1jVP6uzalnA5sRbbtv9piewWNQJhlZ2xXzRcjapCy34ACbHvVWL8ngS_25GRgI54tPwtLE5_2ctEerBTy_FBXf4BJwz5dq-cHVt41XLr1B9CJCmFsaBSpWG0VukPGqcJcAAMNgY-EK2jtAT_MAQaiTgHyWosKsltnU39GEwOybWRAVm00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja345.puml)

### 3.46 Urejanje dogodka (PU20) - Osnovni tok (O20.1)
![Diagram zaporedja 46](https://teaching.lavbic.net/plantuml/png/hPNRSjCm48Rl_HGxvQQTeJ7bM3ATpFG0dKvBy4nBPu1o8TlRHBQYDRASqBm3hyGLl1UIZqhh5bguIEB8kz_k_bgjfZn6k2JI8Ntpl3pbCcEApI1aKJfHLCWu8a4Aj68oDwzGQiSgnajM27s6t_Iku1CvCwyXCb-e72iMQL9xf69K-oKi58P-mw2DM1ajfboZQwGKBHn_0ETbZbyBb16Uy4lpaUX6U_JYxTxsc_qUwu0fpIEUCQdlxz2RhkULjS3QXqonkKYOm0XYcb2SqdmDM0w1uebzWn9sTahZqSZBEYwiVNftG3FsypixjQANJdOXgluRhz16PUfgD09uP6IVwZrHu2haMCsua3mTqvn7h8ICcpM3Y4XgHS8GAi2XObVzW41XB6XI8O878Gvi_PXMbToBK0SF52MOwZg7EY43C8t6zLNh_n65eCKAeIh_hqpNJiyFYIO2zyscMNql9Em6HxN-PGMtQ-zvphvkZjmD6yBM03B5KxPqLjStFC_TLUlJI3E4fmEOAybFSIdPxA1kdtM5Nn-3mdp3DXcVCusTZzS9MuOlynt2ipxGqVAO19eg4hQ-OQhqVJXySmQfu158TY6dMcVvqFSNYyLWKah2CfuF8fhvKQsDFt_c5pcgt9zXktZ2S-saLkNW9BQpkTbbPeBc6Idw-PqBWlV7mAKvPZRDzhnuCTwakIV1yZhH3D7MUYUbasjL-t67ULv9zed5Ci6oVx1F-TR36xlALmqtX1SLvJpdRxamux0NKTew_hQW1d27FakR6f_2Sv3Ms2smHbvNQNnJfHA23GDN8BUf57IObrLzOvQOnXT94ThEvtrLjavUu0hL7ECXlFeBgHfhXs7hwY2totKX9Kj24eazX6scK_Elz5rja3RETGM3cmh-0NiXJGhbkV_rWvjkj2ET8BV4bOYjF4wljx7lc17RpLJXzTbuo7nuVHtodsP3yvpxdvl7e_YBZtCpX_D_cX5y6LejujhptYEYtP6COgPJ1AgHQAwKQcQOCjSfDeOmCpP24b0gQQD_aDnprxQU3A0mBVAGJNCevagPCy5Z5fbRPrSh7XRQt10XnLUzeFuPsDiIMqzNCpnl6g9e6YBuy9yRmlzS_fg51xV6FpH2FLKpoirkDyVuxjjZ9LWRv3S0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja346.puml)

### 3.47 Urejanje dogodka (PU20) - Alternativni (izjemni) tok 1 (A20.1)
![Diagram zaporedja 47](https://teaching.lavbic.net/plantuml/png/hPNRRjD048Rl_HIZSjDADEPCYQf8FK1LjGHBBKX0kLZRssJjpOvPRnoQT-2Lk8BtOjR7JUCMMeYKnFREV3Fpx-nuAc8EbuWcn6-UbwT2PKop6OGiIYSQvogEKA86evdAQOahurZ5_9BDfJddtyoU51CresM8w8Thnuf51lK-wfZhWn8MIgAl6RGHAwF5L1Zk6ccD2ySVm5dC-TSvLn4_5PVqLToDzk3vc_sTrmSzrW7JHaGYOyhStQ4tNSyhQu6DzvbcXKoOv174EC4unM83M0w15ebTuGfsTqlZqSZBEYviV7fxY3FsypixiwANJlP1LDsJLsYZCdqr6W4y8DcdPb_E-IhaHC-4L28TOo4YLaB6pJD2HAYCHac42d2asLK_8D0ybZYf4C6z48UsVfvMbTo9K0SFD2OyDNKETK84e4OJvghr_yYbnCKAeIh_hqmtpZuS8KuaFw1Di_fUADWBZclzomfkrfu-piPkZzmT6yBZ0MHQf6pfFDtSyZntMwrFeyqGdWoWq4gSyQLYiyEwVpOr__eGDC-tR9U9WXdU-NYTicNuCk4XFEq37IzFK78g8s6RMrIcxyFHwtD8fOX0iGirDIRBXxw_M2m6ar8Jbeby4E7CZsfn_EAfFy-vplqPRn-UYjmugLKvE8djRcztcL7GF4EDFxyBYV3k18IYSsRJR0-C5_DrcdiKBAyJZOYsrbifdLohseyxpBDAiayiLWal6uZtATzwU6DN-QhZXl2yedp8nHiXQHxs8afRnzyMr01kqMTfKnDJU0RA6hi5riZhAetNLIeXl67m5SXDAWKTvaLLtvWbrFWocOUsyqLVbQsJ5xX2DUTu22__Ggh6sc7OkZh8pN9TACMI46LY3s6RwPJkIj_L1cdZN5SmM5Vm3zWBHIcKv_xN3q7TQ6SwGcw9An5RUPnURsFVCYDscgaYwhDnd_dmwZhaFys6vZhtFpUNn_4NdnSqYFD_cX5Y6LejujhppYEYtP4COsPI3bWZERrJgfb1PMvYJ8Om8nkf431LkDK_IEwuQuyV3M1EBNAVJNCez4efc1GnY-YjisUq2EU6tX0XnbUze3_Em7MX7EMHjZwZzgMcBnJczezAe2iZUic_0G00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja347.puml)

### 3.48 Brisanje dogodka (PU21) - Osnovni tok (O21.1)
![Diagram zaporedja 48](https://teaching.lavbic.net/plantuml/png/hPNTJXix4CVlzob6z0QaaYrjwUc9KAG2AKBGT2KubThI2sTtIBphUBQsavIyGr_fNBNlLNi_7LXeWKOY7zwPtypyPpnCUO9mIMJ6z2q8TCPbpXIRmPZ5sKJHN2On2L9W59FQFa9fFAi4BzbSc7FyPju8Ff4p-nXY-uRAisAn8RLFAa5rKC36mj9l63GHIwFbb1lqZPIYfUSFu3tK-7MECiPJVcd_9FhHdko-tNyzFEYmZfWoFEOva-R-3ftf1a5H2spyboks42aJ64D24qeoMcm0qn0fdhedA65lhp0U38AyvSB6ftU7D6C_lhCp9thXv0xYyhVr6hkeJ5qD1W1FhEnJio_ck0uvKJCk9Cz6jE0nAo2Z-imYOf96aR244d2as5Kt85AO29gKYEX1Y4DNFsPb9VSYLC4ZHIbcfigXIiW2xA1nSzNuVqGXQBb6ACl_8zEDimz7H1E11xPfJjyB2M-Yuqh_eeBRjRSlhx7R0xzZVTZfGQvunbRUwUPM4FXjTJwrDdruteE5almCLvBD3glvsLJuzIaer5jkolY26MnzWbRP8doHS1zUT86ELoSaq9QHiiqjMsOOmj7m73B1Ov3iGawDoNK_39VBPMzIQC9ohdinpSAu4YTSl0Zd6fKEPzWSdd9jlDJA7Bp4zhQtsyniK9sJeX_VkI1uVm9SsdlcqcmkJ93WJPf_5Hol5SqINQrtKbgvrhKVjPYNfMIVM29JB0O8kvHlF8AHhtmvSNtOBIaVD7_BXTs7dOZ2rlDt1TM0E_HPkTJu55w2TCP-WHNokagZcoeL4AmPk0QvJQMenRmgwnknr0w-IETZD_cygyh6AOXyeUfxt8T__a2gsjfZkBfQoEroNKZ9qZ69r5t29jEf_LNuhWz84-UwWj5D1N-3lP0sXUBU__oVssbqEvr0E-9Qn4OURzQRs7ViYDVrLk7LtNZ8VlZtEkGlxORwkmu_rr-FaoyXBkmYre_Q4NmrTbeabUUzLqJJaPmIPZ84gf1e_wUKEyEMkKc9DOIPjH6IW399MzsBv9vTstdMA-9n_PYsxUnSftJqxN1uEZmV_jtMXP-BJtlmu2O-ecNL_ij9sxxK5-xkFRyMh0do2m00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja348.puml)

### 3.49 Dodajanje dogodka (PU22) - Osnovni tok (O22.1)
![Diagram zaporedja 49](https://teaching.lavbic.net/plantuml/png/pPNRJjj048Rl_HGZUWDIYKkFD4AHEBG8qGPBKAIsz69j3ydQcnrtlKbAtg6lr2lwNjtrSGE6SkX5BnBPwvblPlwTdHtp6E6SI8Vqm_FobCkCAJQ1a4NfID5KnX49Kg0LaxdvX58xLZ6UiwdG9_X3Rmi-aXFp6IBpXygnOf4cjKCgHhLRm49XwDSCceYbqNpCDRf6Ij7SyGTmFkRuVOeomW_ytFmakj6Ul7g_i_bkjyCwO4hpY6TCwlixTARhUKKjiF8fKsmc4YOmWfX65ASqMm6MGw1uOh-WXAsjmdWmyBAM2ojVFkxHX5t-PCTMzCB9BaJbk_4ARLIcBWO3W2T6zh7U4LDSXXog2HUIfqEQyOWLa66zPX0HIQr86489s5VieXiGA8m5ZKf4y234dgqVqxAIUn6gu86Y15DTvL0bP02cqRY-QFm_en0qNoAKvT_9TENuT9ze973NR9hLzqp2Td1GwLzKSBFsdhEjwmDtl_gmqODCyPGjdDNLDSzpDzNwrChquNaFPahoOrn8DjchkcTLuVUde31Vipt6PqnZw-ErkXRXYtJxyA8BTB0u986cY8IjhfaYVH_stvr0AdW4aft9iTPPtlVz-NpU6nMAi8pdlOWcVbH9uyzU-DCSLUvFi5dym7Fjf5Rcu2IsjRxUPcQ2vXafklp91S7H8N1fJfbDipakNepNQUv1iBnMD4EqjTvAQULQrdxOObwMadrXiKomQ1_iKhxny8QkycM_zU5LIJdD-Nikp3JiH1IsZhyjg0RSei_2fiR7y1AaDNOBh91NLHfULwc0OCt09SXDAWKjvdLPtv0bfl55CWrjv_EkAXidBt25gazn7zxSGQhQsc7Okbh8pNATIScIa4HY3s6JwTYy5RxB3TB4kQfWS5t1ls3Ff4cXEFU_Vt7JZNQY4-IMk1InaSVfzIRsBJDYivugl3eR3vaFRwz2_j5ig9zp_slzU11_yt5cnd3-g1d15w7L8guyxpqYcXt9A6OwHQ0AYUP6AMU6ANELOcC84sCZ906bajQw1yazTstZMSz4YLdoW4rpAEPAcJ71OnQPMsTRAnvEjRaXGeelEa7TCx2p9JQUBsTuMZV4j6w8uEZuV-c8H-n_DKmpoasnzUcz_T9O2jO4-GC0)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja349.puml)

### 3.50 Dodajanje dogodka (PU22) - Alternativni (izjemni) tok 1 (A22.1)
![Diagram zaporedja 50](https://teaching.lavbic.net/plantuml/png/hPNRSjCm48Rl_HIQSjFEq9Wp9TF9J0_GwRG4pxGm0vGBsTuciXMjaHM7vXru9QxWlLZvg3HkeOMB98wy--tkhzLgAc9WbuWcn6-UbwT2PLpp6Gjvb4uqpbKSeKJDZEOgfrUWZ6CLmoMVItCEtyoU51CrezSieY_GZXMF3Efzr37eWn8MIgAl6RGHAwF5L1XmZRJ6XUFFcFCoXwzpK16SYalwA72ZFNZ-Pd_dzK6FTS2r4P78k39tT-XDr_FAMjZ6-qppGYPSGiHYd62SOh71UCu2BHBx1XJRtIsDHoClwxXiuzFRGvpndz_vcHMzTB8BKVMVl48RbUkhqOYn1oJxrEpBEQn2JlHCI2NICHOYuYLatAmH8a9bD4eYL80ZpQ_w0O66MEAaGWJtGXpQ-Y6jAhaJeGuUQ4mWDNKETK84e4OJvghr_mXIucA5K9N_LwORPn-E42SI3cZJhBuNYkq5nxN-PGKtQ-yvsxezSlTho1uFMAP5ofVEwkQMvxcRQdqQPORioO0LMeapM2e-EwoxPrF3ruTCGxvbUqmKt43dutMwbk7BT8ViQH_eU7c24gY8X6zkKP6-puvUdxDKYeWfVg6cncJvqFSNYyLWKYh2Cv4F8fpvKIsDNpprvpdet9z1ktWgSkEaLkNW9BQxlTrbHa7p33N-_2uaidSdJ2WwPJRDzhXuCQpJt8DWUPreHBIrtahfv5hLVjnXdbMIVUAnIg1i7-XJllNmngxoLRyDsVEAyY4NRuIaQTYBA6qTVrjG0xX5dwLDJKpPCwQiiLjWZRokqdXTfH823GDM83Uf57IO5rLzOvvGuyja7jhE5trLjavUu0hLdE8XU_aNKZNM3iFMrK5kbkj2APw4A1Dx2DjCf_Ilz5rja3RETGM3TGN_WBrGb49vxd_z4DIDTg8Zoorn9M8hZzFhRUnRPiHECrL4VJRkCnzUNOVyfzdGFEV-v-RnEFxYGq5ZEF-d6I6MeTKYhZtlF2BQ7SamvYO5XZKIw4QfPWQLkOan6R8PsKY535E5M_s3v8wxzlZHWAB4FBd7fZaKkb8ABaNC8xfrzemMuLpJ3H5YVDKB-kCCN1VAKHvfwpDgNshwGc5kVwZBwSc8Nl9l)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja350.puml)

### 3.51 Ogled dogodka (PU23) - Osnovni tok (O23.1)
![Diagram zaporedja 51](https://teaching.lavbic.net/plantuml/png/hPNRRjj838RlzHH4UkC0JOIUThj6O227DWYIkWBI5jZMlHX9Z3tIQAYEPBlnE_ILzghxNkNeE4wKjEbkW0JE3FcH_8Ua5p96k28gG_hgUKKgTIwCo20KKJetjDHnH8eCb4ReWgzGbuvLZ5TYgSft-BKyL7AkCxw6YF-WSQn4L98v8XEZEQvWeMBwBOCkOcsqNiWINIDZQEtu0pYN1NvPeexmGbxnhqOtsgCNhuzUlZeUi0w4AMKaSw7BXpiCfkjvLIsmypRy_atecJwCCwbbmVBnyKo_purOgKGeZ20t62kQqmf6PEP2ous8P29sjwqqhMIqVHIpKvpIQgQdc1jsuGlK4fOv6H5gcUw0A23eRk3WeCfgCl7olW3O-VZcX3B1ULxQrwsSx45K_yzUeIrFcEl91E0Hl--YF59Bt8QScqmgZZcrUOeACctF616HBWqf9jI0KoEkXm51BKUD27uBSMA5mRhyamSHck21eGJJiicXIOW1tD6olExy_qQbQBr5gCl_9TETom-dH7E5n_oQLj-PXiFWhD6_gk1kxVd7UTYzYVjYOtYoprqbKx5nJaUxdkS-g_LfjHd3qtrO6IqlSQD5Tj8qriZWbyTWiDYrxInNeiJUn-kLhS9N2O_XsH3eR7DE2hcCH8ouhy7tuVJLEqYLvCOMCxqeoxmO-_vwlTwVLvg8N1Rx4ML-r8ZZhvxvom9DuMVO7LxmH3cfrJauYHtixVMPST229uE-VvEAuEqvICq3RTFi9icByJRD7GNBwqLZegtrNaelrxRsqnxpl9RieuXrWbK3uP3odOStTPMlEsuCBshAXqA-beeNxo2YidNyRK4ju1vzDZOrkO3dzHfo2soGDrMQtbQfWc3Bm2t8NIe5FUQFkhwfIBZnLR8CgsKtL6Ndv0MkKEqSZ-7FNv2gjNOOjguUShTSCwr54f9Ax11scIxwHU-MtiMvgM1mMy6VO6UQKwZc_jz_97UZtUa4zZj7RqNiv75wlOjzpuvusMuLsSp6x-o7lsv2_gVTq7uk_4_jnxFuiuyhNiJ5VzeHSXDQBUB6yy4hedkHd69HfWZK896_K-gTmMMEA6P3oDX6QG9ADUqEBvAXL_i1)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja51.puml)

### 3.52 Ocenjevanje predloga projekta (PU24) - Osnovni tok (O24.1)
![Diagram zaporedja 52](https://teaching.lavbic.net/plantuml/png/jPHTRjD04CVVVOfH-W9IaugF8bH5aKWBg2geaK1885xMzYJPUBtZZjT9awTUe3U0s_GaFGdhZyHh9wq2AWznvDdv_sPs_jwToX1XJ6HyklQyD98w4InYy4KGJPWo7GQaYC6mqAbTGcsSh1378bFcArwRTqfET6oN8R0FP2TB18PuI1mYdnOmNrdwLiAcOfcqc4g3RX8pBHmzWBEOubM6Ei1FScn_6jrg1ySVXc_Vd-x87WasCf29qERl1JlRzRnYBz2vzEzkXUw0I674SYRcQeOQ-lrYUJ3mafe4dH-VHnGA4yaHOwXeKieQ8IlrysA2buC1m86TzjGCLOPjqXTSQH5NAfeNg5PiJzO5nr9f6LKwKNQrZbf8GDemASie4HzPB1k8-vjVbNZ4DCF8YFkRt-L8IgI5s8z5ckM6yHsLeeNdEKFh3kgg9_2YPzreRESPuzKXCARFy-7BkJ1O2xowuPnJrJs1bpsOivRVKhbJNkKvwdwtwyYFZY1DYEdkLYg2omkGkceBvYbE8LatvuMuJTto8sVNMxHmgy_I65c25aqm6RP3aG-LsEnx4seLsohU7E-hdWNBIAnaoxb_clBhSiejrFdPaysy6eBzBz67FpL44k8itqKYGW5ovTkh2yxFTZhHFcIF6q4MjS80Kcj3eGEg-1YlMybss-44suRKsOrcshqrVJhk0TcBzabSUjE3pBxyHviiFZ_9RRVsF1oFMP9GIY7vnKLHdPEzZuWRR8x-8Q_-0000)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja52.puml)

### 3.53 Filtriranje predlogov projektov (PU25) - Osnovni tok (O25.1)
![Diagram zaporedja 53](https://teaching.lavbic.net/plantuml/png/fLJBJjjG4DtxAqQm0Gc2-a2g48e4g7H1MoBHLch5PcnFaeclxvZnjO6i-07-eFqRleGlwNLYOZi9AcqNoM9cpfavvznap371KCI5SXC4US8sGyKKGeoIaKfXuqYCA3X5c_iMMTUQYcc8XN5VwCOT6HxPrBSXyb-ahIcCdEYnQ4nwCYCBZMTV6LXid0zTZzbHUqXLhbjuW5Opfwk2R4GVUUW_bjhRDlTFZz-zFrapFK1r7766rlqzOEsvGJ3J0XlduSCzsajx5ATiEVVs-VAb_PefbcQ2XYB8b68Z8obXItI4bgSOyGItkrDMIewwfTY3uaJAI_kPClKGto3BK6IY65fEDW1p62mwS7WukwhV3x9606py-3IG65t2W_abSrYdvA5XfH7rjj-7JP_ns1sRWfQ9BcXgCHqyAPenBTLUHdMcAHileORX_AQdgkU8n3eLiw3ue7ZReNYy-rc31oeJIXm-tlsQ6pAdz2IfnDHGV2TZv3g0e6NPRh_PUW2lUlu9TDHiALtjW5A-NINE9Jfg045pSCLJxps0rpqerVAtdDV2wxaM-d1tjmNVsuFSHomFzsm4pi-0RNqMb3cDcmSLnBJAkX97nTr8zEGUN-GfAOF5Bh4uhLxOSoiMkXUbfMKhoxlslkd1a8rJLfmiJTOP_gFXRnU6dtf-qeO4_jFtGgbw9hLBpKyvUxftRGRTCni3zdkWE2qrT_oi_de7xm0ci_-9TJwiJUNFoLSc-PHpYIKqRLql3Fut)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja53.puml)

### 3.54 Filtriranje predlogov projektov (PU25) - Alternativni tok 1 (A25.1)
![Diagram zaporedja 54](https://teaching.lavbic.net/plantuml/png/bLFBRjfG4DtxAqPaaqY1g2-fYX1IYDekqZP8QIkrOZEs1nXykUECBoPXbH_87xH_ao_9b_I27Mm3LPC5NioTSywSCyE4OuAHY0lb9WYoX6sAYZC8CKh6AdCRHs94mIdQp3-HTRMkc4OuD-uRtRWpmsCxyyyG-GzfhGiZ9zeNZKdFrsIXyUmx3Hl5ecanOKVr9bLPrF00jSUChkTa8_hC8_-pL5SxUFUn__x3-Pxk0QhZY5EqxkM0lUC6mTeBj2x3XtkqGtiMpzXovkFpvQ7zdYhcPeg68aYLOYDZoU5GT8oMbnZn58-QNLPoZfgbs8FYHFAX_KgfUeX_8CimJqKnj9oq03COR5wWsrrFrUi5QMK0Mh--32H6b_2WcAI0DKeU6guyejxsUd3WTpnnVJEdRQ8hMbgS3PuShPcsQi-Zkj0P6s-XX64nqrFLSqHYdOhPK7nIl6rGFDxzBi43bIab3X_l_XI159IUn5yeksgCdsICB208QfcrUvNiARpg-1jes3bKkZu6fUnejNBEqL452Ag9Lpoby2cyxa2kbdzal1TUzjNGtNQx1ZyvWSplM1xksGXSNW3RSYp8CvfK5nN4jCkwiuyLTsNHatlyF9kHCbXi4elJrOdzIsBZUrFQ4jiHRyRxfWEAormpno_9jI9uMn5iAPL7u1TMZix7WCdwZxPFOA-h_oUtsgfFAPDOmlNvbEazDxY_)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja54.puml)

### 3.55 Filtriranje predlogov projektov (PU25) - Alternativni (izjemni) tok 2 (A25.2)
![Diagram zaporedja 55](https://teaching.lavbic.net/plantuml/png/fLHBRjj03Dth58IpIO3OGJy1Yi0m40TD5saR0saBjF26acYRrdX6eSPAubKka1kqjyb9SfAEB5aVMq7JTY4jIBv7laTACmu99iPOtznwNXAnZb5m0Ju6qLJCKeU1KKR02kh4fKZRMbL84rmg-uLkxQdYgLwuD0JkHLAhmi0Q6He9ISxMPBvox3i5PSUyw6R6bkf58kQcXWUe9HEwNf8Ew2DFtAEftctl-7puxlrPI_K8nNB0CMhxzu3MSJrlhGKwb_xZ0-gnFWqNh3bnzhdmM7-D1LCrHqK1n4AXCbEJmhwHAMfUOS1pF6XMQPDoq0o53XH69XthpnIBWxW4QOPbR0HzpL47C85HcO5-VptLOE35bG3e_FWqCY7QY4Vv93ci4N9GFzE8SZSOm9xRySmErPAsYQvefN4nsYXQCst5NaPr8GjMJa81mtocJTHn14PRCQga-21urw1uklzPW4TYvXHPVBh_bHkIKpeITw5igp6-arBcnlDgbdK7LTSJUDLp9z1GiozqVGX2oK6sSKxHKWNmge4pdgBl2RpkGIgQloNS2Y_gQkX-jrk37nr1ubPi7XzO6RYy0DR5M90cDAiEoWjfbtLd7Hbt9T6HE_moMP0mQ6mI6olPXJtNejHTXhQQxJHlslkc1nDMLbXmlbLPxF0V3NzR6dxk-4ag4lXFtztdkABI_kfJZZVpjkwWEMPbm74F75ygYULdzHSz-10mMlydsdnetSgVDv-Pj2tfXJl_3G00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja55.puml)

### 3.56 Izbira občine (PU26) - Osnovni tok (O26.1)
![Diagram zaporedja 56](https://teaching.lavbic.net/plantuml/png/dLDBRjj03Dth58IpIO0wGNz04HW6alI38aKTe1-WW3UKn2YqngGo6ib9Lhb0Rj1UfQls8Zb9ATcLvTPTf0i941_VU-IRqGMd1EUg8TQhA2fpbW8zpY769C-yLf8cwjH3y2YbGIIXrvNIELOkVAIhSEGuaxd1aDYBVAyBaw3-M7rA_gGLYvsf_zNGEIwR5XSSgD_alIvwV80UMD9bHPBGEpwtHwZljlFyzV6BLoTRki_G1qwuG0aF9smTDuhQNM0mYN_SeKpbA9spS6dnMNagdmgFjPkXemGAJwdJJ6lOLP-Xy0qcFCEzpIxHcfFDKcgaDDTwAk-fy4OnW8IXAjHZB9mtWAUiiMKxjnuo02pXhEF0QDJEEnv7nNer69pwEJjhRxPWmPRrksQSH2LuTUCnxDYfNuGt7gyt1EvllwwezxVV6l8aJkp3g7OtE5ntp2_ad2wYg3VISDnP7SBZVOk9SxpX3tGZE6zrTZrTFW9FvLwJDjSOgAD4tPYcitGzX2VxK7lXpoLleowxriJHSDWn3mwWjEpKTd4AarDWiSlGJ0BQBXYbzATGFrwJMYzZOkqoFx_pfiXKQhEfoY0qNo5LKnEiEMikHPaRO3yNpwg-ORTqLrbx_pFIf_lcvQbHMmxyu3YVBUDSVhvz-H-PDdGeDCMG4-Wg1Nvebbfggd438c3XBDdc_zaQKA-sblm5)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja56.puml)

### 3.57 Sinhronizacija dogodkov z aplikacijo Google Calendar (PU27) - Osnovni tok (O27.1)
![Diagram zaporedja 57](https://teaching.lavbic.net/plantuml/png/pPJFJjj04CRlVeeHN40giLgWfH6An7yXQB04HIhAPMCFoTgR7RFU991tu9Lwek_LNTknDyHGuDH38dbtvZVpVJkxGnuXt1BfFjrxNfPmcJB5Hj1dOJ9GD9PHI88KQCLaPhPGQYSgmbis5leAx_MUu0CvCjiGcZzKJXGBDQbzKX6gWnpM5uQ-551LB8AcGwxH3LAAfau-WBEPuTqOPOZd_DRy9BhLLhUFztUE3XgY0wOq3tdAf7v_GcExdfThWPMB_jCZaptvCrLi8c8cC8I81XGbD5a1ba6WU6ntKCBkRfxKwNXfpOULcn-7D686SsdDpvFiGbXycwo-hSxKGwS3gyRzeTuNOrnadAaH5v8dNPhmaEMCxdpD44AIMf6e02UAFJG30eMHe46123w4EBJoCIc4l8jG5WyKnPZeieUo8GCmyyPrxS8l58Ac2uH2_fj2LowlJuW60W_CcLbxUnBsWjFI_bp1YzPxddEg6nttkDhmkGMfuWcREQjhwvxddgdDcJlJXYyjc2Z9Bt4csUYm79urXNUVG66sRaUDJvZ6EiUhVStBv-ssORC9T3ex8u56HCpMrer8tuUJeoj810z1ifuSQfrcRT-VJgUjGUu8ItdM2cdaXwKr_cJJ7sUeCd-4rU8vpxJJMj63qzZknaRTcIcQfQJewP4BWeipuD9SDjjcTLky29TfxZsmlDeqGxHQNwNKTYrwtwqnMuLbDooICURZWqtELnbUrtM-cBSsR1UKwumVSs4UnKP47klaMq5pm2l-p6nhV0XR86smAx14FdUfk-nI3i4v0nSWBxaKr9YlXRukYytWYtZSjvFFcrHMILxW6ZM_nMtuzWQhvj4Em-gg8I_RrPEInNqIiRs4LQT3yvNdBWv8LUUvWy6oW__0zgHf8R_tVtvpCutsGIV8B76XOcMFC-jLxLVUY9qMP5mE5Ka-uuh57taUlZzZbE_2__CglFy9g1ntXKb82cMDZy5V)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja57.puml)

### 3.58 Sinhronizacija dogodkov z aplikacijo Google Calendar (PU27) - Alternativni (izjemni) tok 1 (A27.1)
![Diagram zaporedja 58](https://teaching.lavbic.net/plantuml/png/dPJDJjj04CVlVefHk81KOhL0Yo8KYMyXQB04HIhAPMCFoTgR7RFU92Jlm2lrHD-hktPYRuW9q4CYUNVcDpF_dPa1Zn0UY7IFdZmlIxXCcM93wB4mwIiQoIWaGGgqOZ8pLoYrOnNX0ni9VOjF-b3mlXoQQmZD7oh7YeMQr16f2DLn3ki9GrynA2CMHfC1r-WQAKKJnn_0kSpmSOGon2l-O7uItMWRUsT7-wV7DTO1Kvg7F6LIVzwXDbqlBmKQrxsNPoQxybUgs5Z4J6084VKfIcZS09P1e7XiRr32mK7kr6vxQOM7nltF4neoWxcnskTEzY0ilerNpmPdQjfk0smOzGVwI8nm6NAfXbn8ddHep4EMGpgBCuC8IMf5mX0AmBbYqtf0e30Ir2yGmNyXJcpzc1ILV8em3nueYZ7Hynpc2Hc0wJUkfwN_RnI29ak4elmFcJPkxiw9-WAFpQDPVRiI3eEBkVvv1MzhxpdFkjrstwi5NvkGAfwmcNEwkULvxgDQduKoBVZMXB6I_0PdaWrFvjspgV3n2oZCjcolyJ7JMFbubQvv-3pT5kpKWIvcboJG516ppIrJfE_3-Uaj98A785bN3hHEivRlJoQJPZzNXAKyQuOqzCEvDFvunnzbg39_YENX5S-qargHWvFOmVPsbPa9cgMawEMP2uBhI-3I39jDinmNBy9LcZi8bbU9PeYsrhMKIgvbxJiLPhUGx9v5CiQyVR1E-TB3wxZA5_tMWhs2SfVnCoxCKgn5vBQElore0LYZpyocnWUm2z8QkmNEaQzLwgogb4DmmS0bo5ig1HNcUr5VXyMcyKKywjdEvtLLbavUu0grcE8M_FY0L0jhXs7hgY1lozMLaiKz4h4TmZBJWVdAVPSRf8ppMi5WLS5ti5rfKiZd_kyVRhhHRdI2p1AN8fRoEBrUnbwp8_QRa74vK2JvZ2iMlxCUriuDIuN9CpGRp8W64e6Y6OsnTdJ-0G00)

Izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/diagramZaporedja58.puml)

