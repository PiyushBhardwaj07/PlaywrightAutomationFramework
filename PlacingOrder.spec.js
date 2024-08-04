const{test , expect} = require('@playwright/test')

test("Order" , async function({page}){
    await page.goto("https://www.automationexercise.com/")
    await page.locator("//a[normalize-space()='Signup / Login']").click()
    await page.locator("//input[@data-qa='login-email']").type("piyushbhardwaj.028@gmail.com")
    await page.waitForTimeout(1000)
    await page.locator("//input[@placeholder='Password']").type("Piyush@2828")
    await page.locator("//button[normalize-space()='Login']").click()


    //selecting products and adding them into the cart
    await page.locator("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]").click()
    await page.waitForTimeout(1000)
    //selecting quantity
    await page.locator("//input[@id='quantity']").click()
    await page.waitForTimeout(1000)
    //adding it to cart
    await page.locator("//button[@type='button']").click()
    await page.waitForTimeout(1000)
    //opening cart
    await page.locator("//u[normalize-space()='View Cart']").click()
    await page.waitForTimeout(1000)

    await page.locator("//ul[@class='nav navbar-nav']//li//a[@href='/products']").click()
    await page.waitForTimeout(1000)

    await page.locator("//div[3]//div[1]//div[2]//ul[1]//li[1]//a[1]").click()
    await page.waitForTimeout(1000)

    await page.locator("//button[@type='button']").click()
    await page.waitForTimeout(1000)

    await page.locator("//u[normalize-space()='View Cart']").click();
    await page.waitForTimeout(1000)

    await page.locator("//a[@class='btn btn-default check_out']").click()
    await page.waitForTimeout(1000)
    await page.locator("//a[@class='btn btn-default check_out']").click()
    await page.waitForTimeout(1000)

    await page.locator("//input[@name='name_on_card']").type("PIYUSH BHARDWAJ")
   // await page.waitForTimeout(1000)
    await page.locator("//input[@name='card_number']").type("986726378476")
    await page.waitForTimeout(1000)
    await page.locator("//input[@placeholder='ex. 311']").type("577")
    await page.waitForTimeout(1000)
    await page.locator("//input[@placeholder='MM']").type("08")
    await page.waitForTimeout(1000)
    await page.locator("//input[@placeholder='YYYY']").type("2027")
    await page.waitForTimeout(1000)

    await page.locator("//button[@id='submit']").click()
    await page.waitForTimeout(1000)

    console.log("Order placed succesfully");




})