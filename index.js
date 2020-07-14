const app = require('./src/app');
const config = require('./src/config');

const port = config.port || 3001;
app.listen(port, () => {
    console.log(`🚀 App is listening on port ${port}`);
});