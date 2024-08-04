const{test , expect} = require('@playwright/test')

test("Document Upload" , async function({page}){
    await page.goto("https://www.automationexercise.com/")
    await page.waitForTimeout(1000)
    //launching contact us page 
    await page.locator("//a[normalize-space()='Contact us']").click()
    //filling form details
    await page.locator("//input[@placeholder='Name']").type("Piyush Bhardwaj")
    await page.waitForTimeout(1000)
    await page.locator("//input[@placeholder='Email']").type("piyushbhardwaj.028@gmail.com")
    await page.waitForTimeout(1000)
    await page.locator("//input[@placeholder='Subject']").type("More clarity on Return Policy")
    await page.waitForTimeout(1000)
    await page.locator("//textarea[@id='message']").type("I hope this message finds you well. I am writing to inquire about your return policy. As a customer, it is important for me to understand the procedures and conditions under which I can return a product purchased from your store. Could you please provide detailed information on the following aspects of your return policy")

    await page.waitForTimeout(1000)
    //upload doc
    const fileInput = await page.$("//input[@name='upload_file']")
    await fileInput.setInputFiles("C:\Users\piyus\Downloads\screenshot (1).png")
    await page.waitForTimeout(3000)

    await page.locator("//input[@name='submit']").click()
    await page.waitForTimeout(3000)


})