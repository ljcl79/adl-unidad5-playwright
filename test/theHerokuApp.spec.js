const { test, expect } = require('@playwright/test');
test.describe("The Heroku App Tests Login", () => {
    test("Validate elements on The Heroku App homepage", async ({ page }) => {
        // Visit the site
        await page.goto("https://the-internet.herokuapp.com/login");
        await expect(page.locator('#username')).toBeVisible();
        await expect(page.locator('[name="password"]')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
        await page.locator('#username').fill('tomsmith');
        await page.locator('#password').fill('SuperSecretPassword!');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL(/.*\/secure/);
        await expect(page.locator('h2')).toContainText('Secure Area');
        await page.screenshot({ path: 'screenshot.png' });
    });

    test("Login con datos no válidos", async ({ page }) => {
        //visitar el sitio
        await page.goto("https://the-internet.herokuapp.com/login");
        await expect(page.locator('#username')).toBeVisible();
        await expect(page.locator('[name="password"]')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
        await page.fill('#username', 'tomperez');
        await page.fill('[name="password"]', 'SuperSecretWrongPassword!');
        await page.click('button[type="submit"]');
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
    });

});
/*
test.describe("incio exitoso", () => {
    test("Validar inicio de sesion exitoso", async ({page}) => {

});
*/