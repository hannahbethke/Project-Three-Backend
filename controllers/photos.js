const Photo = require('../models/photo');
const photoRouter = require('express').Router();

// Index
photoRouter.get('/', async (req, res) => {
    try {
        res.status(200).json(await Photo.find({}));
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
});

// Create
photoRouter.post('/', async (req, res) => {
    try {
        res.status(201).json(await Photo.create(req.body));
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
});

// Delete
photoRouter.delete('/:id', async (req, res) => {
    try {
        res.status(200).json(await Photo.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
});

module.exports = photoRouter;