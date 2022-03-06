const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const writeStream = fs.createWriteStream('data.csv')

writeStream.write(`Title,Link\n`)
var link = 'https://www.freecodecamp.org'
request('https://www.freecodecamp.org/news/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html)
        $('.post-card').each((i, el) => {
            var articleTitle = $(el)
                .find('.post-card-title')
                .text()
                .replace(/\s\s+/g, '')
                .split(",")
                .join(" ")
            
            const articleLink = $(el)
                .find('a')
                .attr('href')
            // console.log(articleTitle);
            writeStream.write(`${articleTitle},${link+articleLink}\n`)
        })
        console.log("Scrapping done...");
    }
})