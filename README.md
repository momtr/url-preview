# url-preview
☁️🌍 An API for previewing links/urls within a large text body.

## Endpoints

### Get meta data for links within text body
*GET /api/v1/text/urls/meta?q={base64_encoded_text_body}*

Params:
    - q: {base64_string} base64 encoded text
    
200 Success:
    - {Object} object containing meta data for url

Example:
```json
{
    "message": "🚀 links given",
    "data": [
        {
            "url": "https://orf.at",
            "title": "news.ORF.at",
            "favicon": "https://orf.at/mojo/1_4_1/storyserver//common/images/favicons/favicon-32x32.png",
            "description": "news.ORF.at: Die aktuellsten Nachrichten auf einen Blick - aus Österreich und der ganzen Welt. In Text, Bild und Video.",
            "image": "https://ibs.orf.at/news?image=https%3A%2F%2Forf.at%2Fmojo%2F1_4_1%2Fstoryserver%2Fnews%2Fcommon%2Fimages%2Fog-fallback-news.png%3Fs%3D6fd0304156999f5fb116dbe1800653666b242a18",
            "author": null
        }
    ]
}
```


## Install
Clone this repo
```
$ git clone https://github.com/moritzmitterdorfer/url-preview.git
```

Install NPM packages
```
$ npm install
```

Start app
```
$ npm run dev
```