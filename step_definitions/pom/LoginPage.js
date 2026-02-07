class LoginPage {
    constructor(page) {
        this.page = page;

        this.selectors = {
            inputUsuario: '#username',
            inputClave: '#password',
            botonLogin: 'button[type="submit"]',
            mensaje: '#flash',
        }

        this.url = '/login';
    }

    async llenarInputUsuario(nombreUsuario) {
        await this.page.locator(this.selectors.inputUsuario).fill(nombreUsuario);
    }

    async llenarInputClave(claveUsuario) {
        await this.page.locator(this.selectors.inputClave).fill(claveUsuario);
    }

    async clickBoton() {
        await this.page.locator(this.selectors.botonLogin).click();
    }

    async ejecutaLogin(nombreUsuario, claveUsuario) {
        await this.llenarInputUsuario(nombreUsuario);
        await this.llenarInputClave(claveUsuario);
        await this.clickBoton();
    }

    async obtenerMensaje() {
        return await this.page.locator(this.selectors.mensaje);
    }
    //La validación
    //checkUrl

    //checkMessage
}

module.exports = LoginPage;