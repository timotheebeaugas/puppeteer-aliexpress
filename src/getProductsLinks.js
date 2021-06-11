export default (page) => {
    return new Promise(async resolve => {
        const links = await page.evaluate(() => {
            const linksList = []
            const scrapedLinks = document.querySelectorAll('a[href*="item"]')       
            scrapedLinks.forEach(scrapedLinks => {
                const split = scrapedLinks.href
                if(!linksList.includes(split) && !split.includes("#thf") && !split.includes("#feedback") && !split.includes("sitemap")) {
                    linksList.push(split)
                }
            });       
            return linksList
        })
        resolve(links)
    })
}