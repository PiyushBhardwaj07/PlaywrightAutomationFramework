const{test ,expect} = require('@playwright/test')

test("Dashboard" , async function({page})
{
    //Launching application
    await page.goto("https://www.automationexercise.com/")
    await page.waitForTimeout(2000)

    //Launching Sign up page
    await page.locator("//a[normalize-space()='Signup / Login']").click()
    await page.waitForTimeout(2000)

    //parsing Name
    await page.locator("//input[@placeholder='Name']").type("Piyush Bhardwaj")
    await page.waitForTimeout(2000)
    //parsing email
    await page.locator("//input[@data-qa='signup-email']").type("piyushbhardwaj.028@gmail.com")
    await page.waitForTimeout(2000)

    //click on sign up button
    await page.locator("//button[normalize-space()='Signup']").click()
    await page.waitForTimeout(2000)

    //selecting title 
    await page.locator("//input[@id='id_gender1']").click()
    await page.waitForTimeout(2000)

    //parsing password
    await page.locator("//input[@id='password']").type("Piyush@2828")
    await page.waitForTimeout(2000)

    //dropdown
    await page.locator("#days").selectOption({label:"2"})
    await page.waitForTimeout(2000)

    await page.locator("#months").selectOption({label:"August"})
    await page.waitForTimeout(2000)

    await page.locator("#years").selectOption({label:"2001"})
    await page.waitForTimeout(2000)

    //Addistional Info
    await page.locator("//input[@id='first_name']").type("Piyush")
    await page.locator("//input[@id='last_name']").type("Bhardwaj")

    await page.locator("//input[@id='company']").type("Colt Technology Services")

    await page.locator("//input[@id='address1']").type("KG-2/391 Vikaspuri New Delhi")

    await page.locator("#country").selectOption({label:"India"})

    await page.locator("//input[@id='state']").type("Delhi")

    await page.locator("//input[@id='city']").type("Delhi")

    await page.locator("//input[@id='zipcode']").type("110018")

    await page.locator("//input[@id='mobile_number']").type("8920876552")

    await page.locator("//button[normalize-space()='Create Account']").click()
    



})