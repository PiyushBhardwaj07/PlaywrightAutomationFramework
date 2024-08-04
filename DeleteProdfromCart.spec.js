const{test , expect} = require('@playwright/test')

test("Delete Cart" ,async function({page}){
    await page.goto("https://www.automationexercise.com/login")
    await page.locator("//input[@data-qa='login-email']").type("piyushbhardwaj.028@gmail.com")
    await page.waitForTimeout(2000)
    await page.locator("//input[@placeholder='Password']").type("Piyush@2828")
    await page.waitForTimeout(2000)
    await page.locator("//button[normalize-space()='Login']").click()
    await page.waitForTimeout(2000)
    await page.locator("//a[@href='/products']").click()
    await page.waitForTimeout(2000)
    await page.locator("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[@type='button']").click()
    await page.waitForTimeout(2000)
    await page.locator("//u[normalize-space()='View Cart']").click()
    await page.waitForTimeout(2000)
    await page.locator("//tr[@id='product-2']//i[@class='fa fa-times']").click()
    await page.waitForTimeout(1000)


})