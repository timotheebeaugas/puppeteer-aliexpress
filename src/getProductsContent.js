export default (page, links) => {
    return new Promise (async resolve => {
        const array = []

        for (const link of links) {
            await page.waitForTimeout(1000)
        
            page.goto(link)
    
            const nameSelector = '[class="product-title-text"]'
            await page.waitForSelector(nameSelector)
    
            const priceSelector = '[class="product-price-value"]'
            await page.waitForSelector(priceSelector)
    
            const piecesAvailableSelector =  '[class="product-quantity-tip"]'
            await page.waitForSelector(piecesAvailableSelector)
    
            const textContent = await page.evaluate((nameSelector, priceSelector, piecesAvailableSelector) => {
                nameData = document.querySelector(nameSelector).innerText
                priceData = document.querySelector(priceSelector).innerText
                piecesAvailableData = document.querySelector(piecesAvailableSelector).innerText
                return {nameData, priceData, piecesAvailableData}
              }, nameSelector, priceSelector, piecesAvailableSelector);
            
              array.push(textContent)
        }
           
        resolve(array)
    })
}
