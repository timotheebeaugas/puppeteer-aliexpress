export default function (page) {
    return new Promise(async resolve => {
        await page.goto('https://www.aliexpress.com') // target website

        const notifsButtonSelector = '[class="Sk1_X _1-SOk"]'
        await page.waitForSelector(notifsButtonSelector)
        await page.click(notifsButtonSelector)
    
        const couponsButtonSelector = '[class="btn-close"]'
        await page.waitForSelector(couponsButtonSelector)
        await page.click(couponsButtonSelector)
    
        const cookies1ButtonSelector = '[class="btn-more"]'
        await page.waitForSelector(cookies1ButtonSelector)
        await page.click(cookies1ButtonSelector)
    
        const cookies2ButtonSelector = '[class="btn-save"]'
        await page.waitForSelector(cookies2ButtonSelector)
        await page.click(cookies2ButtonSelector)
    
        const searchRequest = "AMD Ryzen 5 3600" // search keywords
        const searchInputSelector = '[id="search-key"]'
        await page.waitForSelector(searchInputSelector)
    
        await page.evaluate((searchRequest, searchInputSelector) => {
            document.querySelector(searchInputSelector).value = searchRequest
        },searchRequest, searchInputSelector)
    
        const searchButtonSelector = '[class="search-button"]'
        await page.waitForSelector(searchButtonSelector)
        await page.click(searchButtonSelector)

        await page.waitForTimeout(1000)

        resolve()
    })
}