module.exports = {
  "@tags": ["home"],
  "header Search": (browser) => {
    const login = browser.page.login();
    //   const home = browser.page.login();

    const seachButton = '[data-testid="search-top-btn"]';
    const inputText = 'input[data-testid="search-input"]';
    const inputsRadio = ".search-label";
    const inptButton = "button[data-testid='exec-search-btn']";
    login
      .navigate()
      .doLogin()
      .assert.urlEquals(
        "http://localhost:3000/comidas",
        "Ao clicar no botao o usuario deve ser redirecionado para a tela de comidas"
      );

    browser
      .click(seachButton)
      .assert.elementPresent(inputText, "Se o input esta presente")
      .setValue(inputText, "a")
      .assert.elementPresent(inputsRadio, "Se o radio esta presente")
      .elements("css selector", inputsRadio, (results) => {
        console.log("alou", results, Object.values(results.value[2]));
        browser.elementIdClick(Object.values(results.value[2])[0]);
      })
      .click(inptButton)
      .assert.containsText(".container-foods", "Apple Frangipan Tart")
      .assert.containsText(".container-foods", "Apple & Blackberry Crumble");
    browser.saveScreenshot("tests_output/login.png");
  },
};
