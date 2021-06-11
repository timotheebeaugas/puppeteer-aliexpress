import puppeteer from 'puppeteer'
import search from './search.js'
import getProductsLinks from './getProductsLinks.js'
import getProductsContent from './getProductsContent.js'
import wirteSaveFile from './wirteSaveFile.js'

export default async function (show) {

    const browser = await puppeteer.launch({
        headless: show,
        args: [
            '.disable notifications'
        ]
    })
    const page = await browser.newPage()

    await search(page)

    const links = await getProductsLinks(page)

    const products = await getProductsContent(page, links)

    await wirteSaveFile(products)
    
    browser.close()
}