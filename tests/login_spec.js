module.exports = {
  "@tags": ["login"],
  "login page tests": (browser) => {
    const page = browser.page.login();
    browser
      .url("http://localhost:3000/")
      .setValue('input[type="email"]', "emailErrado")
      .setValue('input[type="password"]', "1234567")
      .assert.attributeContains(
        'button[data-testid="login-submit-btn"]',
        "disabled",
        true,
        "Nao deve ser possivel logar com email incorreto"
      );

    browser
      .url("http://localhost:3000/")
      .setValue('input[type="email"]', "pedroamrques10@gmail.com")
      .setValue('input[type="password"]', "12345")
      .assert.attributeContains(
        'button[data-testid="login-submit-btn"]',
        "disabled",
        true,
        "Nao deve ser possivel logar com password menor que 6 caracteres"
      );

    page
      .navigate()
      .doLogin()
      .assert.urlEquals(
        "http://localhost:3000/comidas",
        "Ao clicar no botao o usuario deve ser redirecionado para a tela de comidas"
      );
    browser.saveScreenshot("tests_output/login.png");
  },
};
