module.exports = {
  url: "http://localhost:3000/",
  elements: {
    emailInput: 'input[type="email"]',
    passwordInput: 'input[type="password"]',
    button: 'button[data-testid="login-submit-btn"]',
  },
  commands: [
    {
      doLogin() {
        return this.setValue("@emailInput", "exemplo1@gmail.com")
          .setValue("@passwordInput", "1234567")
          .click("@button");
      },
      assetResultsNumber() {
        for (let index = 0; index < 2; index++) {
          this.assert
        }
        return this;
      },
    },
  ],
};
