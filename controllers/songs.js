const Song = require('../models/song');
const songRouter = require('express').Router();

// Index
songRouter.get('/', async (req, res) => {
    try {
        res.status(200).json(await Song.find({}));
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
});

// Create
songRouter.post('/', async (req, res) => {
    try {
        res.status(201).json(await Song.create(req.body));
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
});

// Delete
songRouter.delete('/:id', async (req, res) => {
    try {
        res.status(200).json(await Song.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
});

module.exports = songRouter;