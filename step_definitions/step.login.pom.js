const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que el usuario está en la página de login', async function () {
    await this.page.goto(this.loginPage.url);
    await expect(this.page).toHaveURL(/.*\/login/);
});

When('el usuario ingresa el nombre de usuario "tomsmith"', async function () {
    await this.loginPage.llenarInputUsuario('tomsmith');
});

When('el usuario ingresa la contraseña "SuperSecretPassword!"', async function () {
    await this.loginPage.llenarInputClave('SuperSecretPassword!');
});

When('el usuario hace clic en el botón de login', async function () {
    await this.loginPage.clickBoton();
});

Then('debería ver el mensaje "You logged into a secure area!"', async function () {
    await expect(await this.loginPage.obtenerMensaje()).toContainText("You logged into a secure area!");

});

When('ingresa usuario no valido y presiona el botón "Login"', async function () {
    await this.loginPage.ejecutaLogin('tomperez', 'clavenovalida');
});

When('ingresa usuario {string} y clave {string} y presiona el botón "Login"', async function (username, password) {
    await this.loginPage.ejecutaLogin(username, password);
});

Then('debe permanecer en la página de login', async function () {
    await expect(this.page).toHaveURL(/.*\/login/);
});
Then('debe ver mensaje de error de credenciales inválidas', async function () {
    await expect(await this.loginPage.obtenerMensaje()).toContainText("Your username is invalid!");
});
