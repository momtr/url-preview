const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function scrapeLinks(link_array) {
    let ret = [];
    for(let i of link_array) {
        try {
            const html = await getHTML(i);
            const $ = cheerio.load(html);
            let favicon = $('link[rel="shortcut icon"]').attr('href');
            if(favicon.indexOf('//') == -1)
                favicon = `${i}/${favicon}`;
            const meta = {
                url: i,
                title: $('title').first().text(),
                favicon: favicon,
                description: getMetatag($, 'description'),
                image: getMetatag($, 'image'),
                author: getMetatag($, 'author')
            }
            ret.push(meta);
        } catch(e) {} 
    }
    return ret;
}

function getMetatag($, name) {
    return $(`meta[name=${name}]`).attr('content') ||  
        $(`meta[property="og:${name}"]`).attr('content') ||  
        $(`meta[property="twitter:${name}"]`).attr('content') || null;
}

async function getHTML(link) {
    if(!link) return '';
    const data = await fetch(link);
    return await data.text();
}

module.exports = {
    getMetatag,
    scrapeLinks,
    getHTML
}