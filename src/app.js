const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

/** client */
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/index.html`);
})

/** api */
const api = require('./routes/api.route');
app.use('/api/v1', api);

/** not found */
app.get('*', (req, res, next) => {
    res.status(404);
    res.json({
        message: '🔴 resource not found'
    })
})

module.exports = app;