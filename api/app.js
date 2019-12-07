const express = require('express');
const path = require('path');

const { notFoundError, serverError } = require('./error');
const citiesRouter = require('./citiesRouter');

module.exports = () => {
    const app = express();
    app.use(express.json());
    if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static(path.join(__dirname, '../spa/build')));
    }

    app.use('/api', citiesRouter());

    app.use(notFoundError);
    app.use(serverError);

    return app;
};