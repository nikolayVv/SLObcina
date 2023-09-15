const { describe, it, after, before } = require("mocha");
const expect = require("chai").expect;
const { Builder, By, until, System } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require('chromedriver');
(async function example() {
    chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

    const zahteva = require("supertest");
    const streznik = require("../app.js")

    const appUrl = "http://localhost:4200";
    const apiUrl = "http://localhost:3000/";
    const seleniumServerUrl = "http://localhost:4445/wd/hub";
    let browser;

    const axios = require("axios").create({
        baseURL: apiUrl + "api/",
        timeout: 5000,
    });

    process.on("unhandledRejection", (error) => {
        console.log(error);
    });

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    let waitForPage = async (browser, seconds, xpath) => {
        await browser.wait(
            () => {
                return browser.findElements(By.xpath(xpath)).then((elementi) => {
                    return elementi[0];
                });
            },
            seconds * 1000,
            `Page didn't load in ${seconds}s.`
        );
    };

    before(() => {
        let options = new chrome.Options()
        options.addArguments("--headless")
        options.addArguments("start-maximized"); // open Browser in maximized mode
        options.addArguments("disable-infobars"); // disabling infobars
        options.addArguments("--disable-extensions"); // disabling extensions
        options.addArguments("--disable-gpu"); // applicable to windows os only
        options.addArguments("--disable-dev-shm-usage"); // overcome limited resource problems
        options.addArguments("--no-sandbox"); // Bypass OS security model
        browser = new Builder()
            .forBrowser("chrome")
            .setChromeOptions(options)
            .build();
    });

    await describe('Registracija - PU1', function () {
        this.timeout(30 * 1000);
        before(() => {
            browser.get(appUrl);
        });

        context("Osnovni tok (O1.1)", () => {
            it("Navigacija na stran registracije", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Registracija')]");
                const registerButton = await browser.findElement(By.xpath("//button[contains(text(), 'Registracija')]"));
                expect(registerButton).to.not.be.empty;
                console.log(typeof registerButton);
                await registerButton.click();
            });

            it("Vnesi podatke", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Registracija')]");
                sleep(2000)
                browser.findElement(By.xpath("//app-registracija//input[@name='ime']")).sendKeys("John");
                browser.findElement(By.xpath("//app-registracija//input[@name='priimek']")).sendKeys("Doe");
                browser.findElement(By.xpath("//app-registracija//input[@name='datumRojstva']")).sendKeys("2000-06-05");
                browser.findElement(By.xpath("//app-registracija//input[@name='email']")).sendKeys("john.doe@mail.com");
                browser.findElement(By.xpath("//app-registracija//input[@name='geslo']")).sendKeys("Abc12345");
                browser.findElement(By.xpath("//app-registracija//input[@name='ponoviGeslo']")).sendKeys("Abc12345");
                browser.findElement(By.xpath("//app-registracija//select[@name='obcina']")).sendKeys("Obcina Test");
                browser.findElement(By.xpath("//app-registracija//input[@name='mesto']")).sendKeys("Testno mesto");
                browser.findElement(By.xpath("//app-registracija//input[@name='naslov']")).sendKeys("Testna ulica 1a");
                browser.findElement(By.xpath("//app-registracija//input[@name='telefon']")).sendKeys("041234567");
            });

            it("Registracija", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Registracija')]");
                const registerButton = await browser.findElement(By.xpath("//button[contains(text(), 'Registracija')]"));
                expect(registerButton).to.not.be.empty;
                await sleep(2000);
                await registerButton.click();
                await waitForPage(browser, 10, "//a[contains(text(), 'Odjava')]");
                // Odjavimo se da preverimo še neuspešno registracijo.
                const logoutButton = await browser.findElement(By.xpath("//a[contains(text(), 'Odjava')]"));
                expect(logoutButton).to.not.be.empty;
                await logoutButton.click();
            });
        });

        context("Alternativni tok 2 (A1.2)", () => {
            it("Navigacija na stran registracije", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Registracija')]");
                const registerButton = await browser.findElement(By.xpath("//button[contains(text(), 'Registracija')]"));
                expect(registerButton).to.not.be.empty;
                console.log(typeof registerButton);
                await registerButton.click();
            });

            it("Vnesi podatke - email že obstaja", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Registracija')]");
                await sleep(2000);
                browser.findElement(By.xpath("//app-registracija//input[@name='ime']")).sendKeys("John");
                browser.findElement(By.xpath("//app-registracija//input[@name='priimek']")).sendKeys("Doe");
                browser.findElement(By.xpath("//app-registracija//input[@name='datumRojstva']")).sendKeys("2000-06-05");
                browser.findElement(By.xpath("//app-registracija//input[@name='email']")).sendKeys("john.doe@mail.com");
                browser.findElement(By.xpath("//app-registracija//input[@name='geslo']")).sendKeys("Abc12345");
                browser.findElement(By.xpath("//app-registracija//input[@name='ponoviGeslo']")).sendKeys("Abc12345");
                browser.findElement(By.xpath("//app-registracija//select[@name='obcina']")).sendKeys("Obcina Test");
                browser.findElement(By.xpath("//app-registracija//input[@name='mesto']")).sendKeys("Testno mesto");
                browser.findElement(By.xpath("//app-registracija//input[@name='naslov']")).sendKeys("Testna ulica 1a");
                browser.findElement(By.xpath("//app-registracija//input[@name='telefon']")).sendKeys("041234567");
            });

            it("Neuspešna registracija", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Registracija')]");
                let registerButton = await browser.findElement(By.xpath("//button[contains(text(), 'Registracija')]"));
                expect(registerButton).to.not.be.empty;
                await registerButton.click();

                await waitForPage(browser, 10, "//div[contains(text(), 'Vpisali ste e-mail, ki je že uporabljen v sistemu')]");

                registerButton = await browser.findElement(By.xpath("//button[contains(text(), 'Registracija')]"));
                expect(registerButton).to.not.be.empty;
                // await logoutButton.click();
            });
        });
    });

    await describe('Prijava uporabnika - PU2', function () {
        this.timeout(30 * 1000);
        before(() => {
            browser.get(appUrl);
        });

        context("Alternativni tok 2 (A2.2)", () => {
            it("Navigacija na stran prijave", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Prijava')]");
                const loginButton = await browser.findElement(By.xpath("//button[contains(text(), 'Prijava')]"));
                expect(loginButton).to.not.be.empty;
                console.log(typeof loginButton);
                await loginButton.click();
            });

            it("Vnesi napačne podatke", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Prijava')]");
                // await sleep(2000);
                browser.findElement(By.xpath("//app-prijava//input[@name='email']")).sendKeys("john.doe@mail.com");
                browser.findElement(By.xpath("//app-prijava//input[@name='geslo']")).sendKeys("Abc123456");
            });

            it("Neuspešna prijava", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Prijava')]");
                let loginButton = await browser.findElement(By.xpath("//button[contains(text(), 'Prijava')]"));
                expect(loginButton).to.not.be.empty;
                await loginButton.click();

                await waitForPage(browser, 10, "//div[contains(text(), 'Napačno uporabniško ime ali geslo.')]");

                loginButton = await browser.findElement(By.xpath("//button[contains(text(), 'Prijava')]"));
                expect(loginButton).to.not.be.empty;
                // await logoutButton.click();
            });
        });

        context("Osnovni tok (O2.1)", () => {
            it("Navigacija na stran prijave", async () => {
                browser.get(appUrl);
                await waitForPage(browser, 10, "//button[contains(text(), 'Prijava')]");
                const loginButton = await browser.findElement(By.xpath("//button[contains(text(), 'Prijava')]"));
                expect(loginButton).to.not.be.empty;
                console.log(typeof loginButton);
                await loginButton.click();
            });

            it("Vnesi pravilne podatke", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Prijava')]");
                await sleep(2000);browser.findElement(By.xpath("//app-prijava//input[@name='email']")).sendKeys("john.doe@mail.com");
                browser.findElement(By.xpath("//app-prijava//input[@name='geslo']")).sendKeys("Abc12345");
            });

            it("Uspešna prijava", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Prijava')]");
                const loginButton = await browser.findElement(By.xpath("//button[contains(text(), 'Prijava')]"));
                expect(loginButton).to.not.be.empty;
                await loginButton.click();
                await waitForPage(browser, 10, "//a[contains(text(), 'Odjava')]");
                // We have logout so that we can test login next.
                const logoutButton = await browser.findElement(By.xpath("//a[contains(text(), 'Odjava')]"));
                expect(logoutButton).to.not.be.empty;
                await logoutButton.click();
            });
        });

    });

    await describe('Izbira občine - PU26', function() {
        this.timeout(30 * 1000);
        before(() => {
            browser.get(appUrl);
        })

        context("Osnovni tok (O26.1)", () => {
            it("Navigacija na stran občine", async () => {
                browser.get(appUrl);
                await waitForPage(browser, 10, "//a[contains(text(), 'O občini')]");
                const ObcinaButton = await browser.findElement(By.xpath("//a[contains(text(), 'O občini')]"));
                expect(ObcinaButton).to.not.be.empty;
                await ObcinaButton.click();
            });
        })
    })

    await describe('Dodajanje predloga projekta - PU10', function () {
        this.timeout(30 * 1000);
        before(() => {
            browser.get(appUrl);
        });

        context("Osnovni tok (O10.1)", () => {
            it("Prijava kot občan", async () => {
                browser.get(appUrl);
                await waitForPage(browser, 10, "//button[contains(text(), 'Prijava')]");
                const loginButton = await browser.findElement(By.xpath("//button[contains(text(), 'Prijava')]"));
                expect(loginButton).to.not.be.empty;
                console.log(typeof loginButton);
                await loginButton.click();

                await waitForPage(browser, 10, "//button[contains(text(), 'Prijava')]");
                await sleep(2000); browser.findElement(By.xpath("//app-prijava//input[@name='email']")).sendKeys("john.doe@mail.com");
                browser.findElement(By.xpath("//app-prijava//input[@name='geslo']")).sendKeys("Abc12345");

                await waitForPage(browser, 10, "//button[contains(text(), 'Prijava')]");
                const loginButton2 = await browser.findElement(By.xpath("//button[contains(text(), 'Prijava')]"));
                expect(loginButton2).to.not.be.empty;
                await loginButton2.click();                
            });


            it("Navigacija na stran predlogov", async () => {
                await waitForPage(browser, 10, "//a[contains(text(), 'Predlogi')]");
                await sleep(2000);
                const PredlogiButton = await browser.findElement(By.xpath("//a[contains(text(), 'Predlogi')]"));
                expect(PredlogiButton).to.not.be.empty;
                await PredlogiButton.click();
                await waitForPage(browser, 10, "//button[contains(text(), 'Dodaj predlog')]");
                const DodajPredlogButton = await browser.findElement(By.xpath("//button[contains(text(), 'Dodaj predlog')]"));
                expect(DodajPredlogButton).to.not.be.empty;
                await DodajPredlogButton.click();
            });

            it("Vnesi podatke", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Shrani')]");
                await sleep(2000);
                browser.findElement(By.xpath("//app-predlogi//input[@name='naslov']")).sendKeys("Test");
                browser.findElement(By.xpath("//app-predlogi//textarea[@name='sporocilo']")).sendKeys("TESTtest");
                browser.findElement(By.xpath("//app-predlogi//select[@name='razred']")).sendKeys("test");
            });

            it("Shrani predlog", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Shrani')]");
                const ShraniButton = await browser.findElement(By.xpath("//button[contains(text(), 'Shrani')]"));
                expect(ShraniButton).to.not.be.empty;
                await ShraniButton.click();
                await waitForPage(browser, 10, "//button[contains(text(), 'Zapri')]");
                const ZapriButton = await browser.findElement(By.xpath("//button[contains(text(), 'Zapri')]"));
                expect(ZapriButton).to.not.be.empty;
                await ZapriButton.click();
            });
        });

        context("Alternativni tok (A10.1)", () => {
            it("Navigacija na stran predlogov", async () => {
                browser.get(appUrl);
                await waitForPage(browser, 10, "//a[contains(text(), 'Predlogi')]");
                const PredlogiButton = await browser.findElement(By.xpath("//a[contains(text(), 'Predlogi')]"));
                expect(PredlogiButton).to.not.be.empty;
                await PredlogiButton.click();
                await waitForPage(browser, 10, "//button[contains(text(), 'Dodaj predlog')]");
                const DodajPredlogButton = await browser.findElement(By.xpath("//button[contains(text(), 'Dodaj predlog')]"));
                expect(DodajPredlogButton).to.not.be.empty;
                await DodajPredlogButton.click();
            });

            it("Vnesi nepopolne podatke", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Shrani')]");
                await sleep(2000);
                browser.findElement(By.xpath("//app-predlogi//input[@name='naslov']")).sendKeys("Test");
                browser.findElement(By.xpath("//app-predlogi//select[@name='razred']")).sendKeys("test");
            });

            it("Neuspešnen vnos predloga", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Shrani')]");
                const ShraniButton = await browser.findElement(By.xpath("//button[contains(text(), 'Shrani')]"));
                expect(ShraniButton).to.not.be.empty;
                await ShraniButton.click();

                await waitForPage(browser, 10, "//div[contains(text(), 'Vsa polja so obvezna, prosim poskusite znova!')]");

                const ZapriButton = await browser.findElement(By.xpath("//button[contains(text(), 'Zapri')]"));
                expect(ZapriButton).to.not.be.empty;
                await ZapriButton.click();

                const logoutButton = await browser.findElement(By.xpath("//a[contains(text(), 'Odjava')]"));
                expect(logoutButton).to.not.be.empty;
                await logoutButton.click();
            });
        });
    });

    await describe('Ogled predloga projekta - PU11', function () {
        this.timeout(30 * 1000);
        before(() => {
            browser.get(appUrl);
        });

        context("Osnovni tok (O11.1)", () => {
            it("Navigacija na stran predlogi", async () => {
                browser.get(appUrl);
                await waitForPage(browser, 10, "//a[contains(text(), 'Predlogi')]");
                await sleep(2000);
                const PredlogiButton = await browser.findElement(By.xpath("//a[contains(text(), 'Predlogi')]"));
                expect(PredlogiButton).to.not.be.empty;
                await PredlogiButton.click();
            });
        });
    });

    await describe('Dodajanje novice - PU6', function () {
        this.timeout(30 * 1000);
        before(() => {
            browser.get(appUrl);
        });

        context("Osnovni tok (6.1)", () => {
            it("Prijava kot upravljalec novic", async () => {
                browser.get(appUrl);
                await waitForPage(browser, 10, "//button[contains(text(), 'Prijava')]");
                const loginButton = await browser.findElement(By.xpath("//button[contains(text(), 'Prijava')]"));
                expect(loginButton).to.not.be.empty;
                console.log(typeof loginButton);
                await loginButton.click();

                await waitForPage(browser, 10, "//button[contains(text(), 'Prijava')]");
                await sleep(2000); browser.findElement(By.xpath("//app-prijava//input[@name='email']")).sendKeys("kobe@gmail.com");
                browser.findElement(By.xpath("//app-prijava//input[@name='geslo']")).sendKeys("Geslo123");

                await waitForPage(browser, 10, "//button[contains(text(), 'Prijava')]");
                const loginButton2 = await browser.findElement(By.xpath("//button[contains(text(), 'Prijava')]"));
                expect(loginButton2).to.not.be.empty;
                await loginButton2.click();
            });

            it("Navigacija na stran novic", async () => {
                await waitForPage(browser, 10, "//a[contains(text(), 'Novice')]");
                await sleep(2000);
                const NoviceButton = await browser.findElement(By.xpath("//a[contains(text(), 'Novice')]"));
                expect(NoviceButton).to.not.be.empty;
                await NoviceButton.click();
                await waitForPage(browser, 10, "//button[contains(text(), 'Dodaj novico')]");
                const DodajNoviceButton = await browser.findElement(By.xpath("//button[contains(text(), 'Dodaj novico')]"));
                expect(DodajNoviceButton).to.not.be.empty;
                await DodajNoviceButton.click();
            });

            it("Vnesi podatke", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Shrani')]");
                await sleep(2000);
                browser.findElement(By.xpath("//app-novice//input[@name='naslov']")).sendKeys("Test");
                browser.findElement(By.xpath("//app-novice//textarea[@name='vsebina']")).sendKeys("TESTtest");
            });

            it("Shrani novico", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Shrani')]");
                const ShraniButton = await browser.findElement(By.xpath("//button[contains(text(), 'Shrani')]"));
                expect(ShraniButton).to.not.be.empty;
                await ShraniButton.click();
                await waitForPage(browser, 10, "//button[contains(text(), 'Zapri')]");
                const ZapriButton = await browser.findElement(By.xpath("//button[contains(text(), 'Zapri')]"));
                expect(ZapriButton).to.not.be.empty;
                await ZapriButton.click();
            });
        });

        context("Alternativni tok (A6.1)", () => {
            it("Navigacija na stran novic", async () => {
                await waitForPage(browser, 10, "//a[contains(text(), 'Novice')]");
                await sleep(2000);
                const NoviceButton = await browser.findElement(By.xpath("//a[contains(text(), 'Novice')]"));
                expect(NoviceButton).to.not.be.empty;
                await NoviceButton.click();
                await waitForPage(browser, 10, "//button[contains(text(), 'Dodaj novico')]");
                const DodajNoviceButton = await browser.findElement(By.xpath("//button[contains(text(), 'Dodaj novico')]"));
                expect(DodajNoviceButton).to.not.be.empty;
                await DodajNoviceButton.click();
            });

            it("Vnos nepopolnih podatkov", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Shrani')]");
                await sleep(2000);
                browser.findElement(By.xpath("//app-novice//input[@name='naslov']")).sendKeys("Test");

            });

            it("Prikaz sporočila o napaki", async () => {
                await waitForPage(browser, 10, "//button[contains(text(), 'Shrani')]");
                const ShraniButton = await browser.findElement(By.xpath("//button[contains(text(), 'Shrani')]"));
                expect(ShraniButton).to.not.be.empty;
                await ShraniButton.click();

                await waitForPage(browser, 10, "//div[contains(text(), 'Vsa polja so obvezna, prosim poskusite znova!')]");

                await waitForPage(browser, 10, "//button[contains(text(), 'Zapri')]");
                const ZapriButton = await browser.findElement(By.xpath("//button[contains(text(), 'Zapri')]"));
                expect(ZapriButton).to.not.be.empty;
                await ZapriButton.click();
            });
        });
    });

    await describe('Ogled novice - PU8', function () {
        this.timeout(30 * 1000);
        before(() => {
            browser.get(appUrl);
        });

        context("Osnovni tok (O8.1)", () => {
            it("Navigacija na stran novice", async () => {
                browser.get(appUrl);
                await waitForPage(browser, 10, "//a[contains(text(), 'Novice')]");
                await sleep(2000);
                const NoviceButton = await browser.findElement(By.xpath("//a[contains(text(), 'Novice')]"));
                expect(NoviceButton).to.not.be.empty;
                await NoviceButton.click();
            });
            it("Ogled novice", async () => {
                await waitForPage(browser, 10, "//app-novice//a");
                const PreberiButton = await browser.findElements(By.xpath("//app-novice//a"));
                expect(PreberiButton[0]).to.not.be.empty;
                await PreberiButton[0].click();
            });
        });
    });

    await describe('Ogled podatkov občine - PU13', function () {
        this.timeout(30 * 1000);
        before(() => {
            browser.get(appUrl);
        });

        context("Osnovni tok (O13.1)", () => {
            it("Navigacija na stran občine", async () => {
                browser.get(appUrl);
                await waitForPage(browser, 10, "//a[contains(text(), 'O občini')]");
                const ObcinaButton = await browser.findElement(By.xpath("//a[contains(text(), 'O občini')]"));
                expect(ObcinaButton).to.not.be.empty;
                await ObcinaButton.click();
            });
        });
    });

    await describe('Filtriranje predlogov - PU25', function () {
        this.timeout(30 * 1000);
        before(() => {
            browser.get(appUrl);
        });

        context("Osnovni tok (O25.1)", () => {
            it("Navigacija na stran predloga", async () => {
                await waitForPage(browser, 10, "//a[contains(text(), 'Predlogi')]");
                await sleep(2000);
                const PredlogiButton = await browser.findElement(By.xpath("//a[contains(text(), 'Predlogi')]"));
                expect(PredlogiButton).to.not.be.empty;
                await PredlogiButton.click();
            });
            it("Filtriranje s pomočjo iskalnega polja", async () => {
                await waitForPage(browser, 10, "/html/body/app-ogrodje/app-predlogi/body/section/div/div[1]/div/aside/form/div[1]/input");
                sleep(2000);
                let element = browser.findElement(By.xpath("/html/body/app-ogrodje/app-predlogi/body/section/div/div[1]/div/aside/form/div[1]/input"));
                sleep(2000);
                element.sendKeys("test")
            });
        });

        //TODO
        context("Alternativni tok (A25.1)", () => {
            it("Navigacija na stran predloga", async () => {
                await waitForPage(browser, 10, "//a[contains(text(), 'Predlogi')]");
                await sleep(2000);
                const PredlogiButton = await browser.findElement(By.xpath("//a[contains(text(), 'Predlogi')]"));
                expect(PredlogiButton).to.not.be.empty;
                await PredlogiButton.click();
            });
            it("Filtriranje s pomočjo 'radio button'", async () => {
                await waitForPage(browser, 10, "//*[@id='flexRadioDefault2']");
                browser.findElement(By.id("//*[@id='flexRadioDefault2']")).click();
            });
        });

    });

    after(() => {
        browser.quit();
    });

})();