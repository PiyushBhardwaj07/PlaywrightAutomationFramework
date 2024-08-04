const{test , expect} = require('@playwright/test')

test("Searching products" , async function({page}){
    await page.goto("https://www.automationexercise.com/")
    //launching product search page
    await page.locator("//a[@href='/products']").click()
  //  await page.locator("//input[@id='search_product']").type("MAST & HARBOUR")
    await page.waitForTimeout(3000)
 //   await page.locator("//i[@class='fa fa-search']").click()
    await page.locator("//a[normalize-space()='Men']//i[@class='fa fa-plus']").click()
    await page.waitForTimeout(2000)
    await page.locator("//a[normalize-space()='Tshirts']").click()
    
})