const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/21-dias-de-codigo/11/index.html');
});

test('should render a alert when not fill username field', async ({ page }) => {
  await page.getByLabel('Username').fill('');
  await page.getByLabel('Password').fill('pass');
  await page.getByText('Enviar').click();

  const message = page.locator('#message');
  await expect(message).toContainText(`Digite um nome de usuário (qualquer um)`);
  await expect(message).toHaveClass('error');
});

test('should render a alert when password is not \'pass\'', async ({ page }) => {
  await page.getByLabel('Username').fill('User');
  await page.getByLabel('Password').fill('other');
  await page.getByText('Enviar').click();

  const message = page.locator('#message');
  await expect(message).toContainText(`A única senha aceita é 'pass'`);
  await expect(message).toHaveClass('error');
});

test('should render a success message after loggin', async ({ page }) => {
  const username = 'User';
  await page.getByLabel('Username').fill(username);
  await page.getByLabel('Password').fill('pass');
  await page.getByText('Enviar').click();

  const message = page.locator('#message');
  await expect(message).toContainText(`Logado como usuário ${username}`);
  await expect(message).toHaveClass('success');
});