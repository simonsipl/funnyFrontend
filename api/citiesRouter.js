const router = require('express').Router();
const request = require('request');

module.exports = () => {

    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    });

    router.post("/city", async (req, res) => {
        const city = req.body.city;

        let url = new URL('https://en.wikipedia.org/w/api.php');
        const params = {
            format: "json",
            action: 'query',
            titles: city,
            prop: "extracts",
            exintro: "",
            explaintext: "",
            redirects: 1
        }
        url.search = new URLSearchParams(params).toString();
        request({ url }, (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }
            const { query: { pages } } = JSON.parse(body)
            const articles = Object.keys(pages).map(keys => {
                return pages[keys]
            }).reduce((obj, item) =>  obj)


            res.json(articles);
        })
    });
    return router;
};