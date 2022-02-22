const request = require('request')
const cheerio = require('cheerio')

request('https://www.freecodecamp.org/news/', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html)
        // const data = $('.post-card-content')
        // const articleHeading = data.find('h2').text()   
        // console.log(articleHeading);
        $('.post-card a').each((i, el) => {
            const item = $(el).find('h2').text()
            const link = $(el).attr('href')
            console.log(link);
        })
    }
})