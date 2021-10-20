const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
request('https://www.wildriftfire.com/tier-list', (err, res) => {
    if (err) {
        console.log(err.code)
    }
    else {
        let $ = cheerio.load(res.body)
        fs.writeFile('test.json', JSON.stringify(
            { 's+': getData($('.splus').find('.item-holder').text()), 
              's': getData($('.s').find('.item-holder').text()),
              'a+': getData($('.aplus').find('.item-holder').text()),
              'a': getData($('.a').find('.item-holder').text())
            }, '', '\t'), 'utf8', (err) => {
            if (err) throw err;
          }
        )}
        
})

const imgUrl = 'https://www.mobafire.com'

function getData(str) {
    const s = str.split("\"")
    const arr = []
    let i = 1
    while(i + 2 < s.length) {
        arr.push([fullURL(s[i]), getWords(s[i+2].concat())])
        i += 4
    }
    return arr
}

function getWords(string) {
    return string.replace(/[\d&#$;]/g, '')
}

function fullURL(url) {
    return url.includes('icon') ? imgUrl + url.replace('icon', 'square') : url
}