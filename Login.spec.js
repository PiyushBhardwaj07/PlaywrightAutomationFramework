const{test , expect} = require('@playwright/test')

test("Login" , async function({page})
{
    await page.goto("https://www.automationexercise.com/")
    await page.locator("//a[normalize-space()='Signup / Login']").click()
    await page.locator("//input[@data-qa='login-email']").type("piyushbhardwaj.028@gmail.com")
    await page.waitForTimeout(2000)
    await page.locator("//input[@placeholder='Password']").type("Piyush@2828")
    await page.locator("//button[normalize-space()='Login']").click()




})