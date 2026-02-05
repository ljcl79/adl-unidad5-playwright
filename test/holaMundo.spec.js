const { test, expect } = require('@playwright/test');

test.describe("Mi Primer Test en Playwright", () => {

    test("Validar elementos de Google", async ({ page }) => {
        //Visitar el sitio
        await page.goto("https://www.google.com/ncr");
        //Assertion o validación
        await expect(page).toHaveTitle('Google');
        const btnBuscar = page.getByRole('button', { name: 'Google Search' });
        await expect(btnBuscar.first()).toBeVisible();
    });
});