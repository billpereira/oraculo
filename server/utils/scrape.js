const request = require('request-promise')
const cheerio = require('cheerio')
const Nightmare = require('nightmare')


async function scrapeCryptoCoins() {
    // const nightmare = Nightmare({show:true})
    const cryptoURL = 'https://www.etoro.com/discover/markets/cryptocurrencies/coins?sort=InstrumentID'
    const selectorCoinsTable = 'div.table-body > div'
    // const a = await nightmare
    // .goto(cryptoURL)
    // .wait(selectorCoinsTable)
    // .end()
    
    const result = await request.get(cryptoURL);
    const $ = await cheerio.load(result);
    const coins = $(selectorCoinsTable).children()
    // const coins = $(selectorCoinsTable).children().map((i, element)=>{
    //     return {'indice':i,element}
        
    // }).get()
    console.log(coins);
    

}

scrapeCryptoCoins()