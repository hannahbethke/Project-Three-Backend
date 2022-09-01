const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const songRouter = require('./controllers/songs');
require('dotenv').config();

const { DATABASE_URL } = process.env;
const PORT = process.env.PORT || 4000;
const app = express(); 

mongoose.connect(DATABASE_URL);
mongoose.connection
    .on("open", () => console.log("Connected to MongoDB"))
    .on("close", () => console.log("Disconnected from MongoDB"))
    .on("error", (error) => console.log('MongoDB Error:' + error.message));

app.use('/public', express.static('public'));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use('/api/songs', songRouter);

app.get('/', (req, res) => {
    res.redirect('/api/songs');
});

app.get('/*', (req, res) => {
    res.status(404).json({ message: 'not found' })
});

app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
});