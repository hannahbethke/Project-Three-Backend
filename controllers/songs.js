const Song = require('../models/song');
const songRouter = require('express').Router();

songRouter.get('/', (req, res) => {
    res.send('GET Route is working');
})

module.exports = songRouter;