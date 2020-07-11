const express = require('express');
const scraper = require('../scraper');
const getUrls = require('get-urls');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        message: '🚀 Welcome to the API!',
    });
});

router.get('/text/urls/meta', async (req, res, next) => {
    const text_base64 = req.query.q || '';
    const text = Buffer.from(text_base64, 'base64').toString('utf-8') || '';
    const urls = Array.from(getUrls(text));
    const meta = await scraper.scrapeLinks(urls);
    res.json({
        message: '🚀 links given',
        data: meta
    });
});

module.exports = router;