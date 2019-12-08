require('dotenv').config();
const PORT = process.env.PORT || 5000;

(async function () {
    const app = require('./app')();

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);

    });
})().catch(console.log);