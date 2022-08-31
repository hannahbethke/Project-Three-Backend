const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
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
app.use(methodOverride('_method'));
app.use(morgan("dev"));
app.use('/api/songs', songRouter);
// TODO:
// app.use(express.urlencoded()) -> creates req.body: use if you are doing server side rendering
// app.use(express.json()) -> creates req.body: use if you are using AJAX, api requests
// app.use(cors()); need cors or no if not using an API? 

app.get('/', (req, res) => {
    res.send('Portfolio API');
});

// TODO: need?
app.get('/*', (req, res) => {
    res.status(404).json({ message: 'not found' })
});

// Tell the App to Listen
app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
});