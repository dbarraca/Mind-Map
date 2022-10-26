const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');

require('dotenv').config();

const app  = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const uri = process.env.ATLAS_URI;
mongoose.connect(
    uri,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true, 
        useCreateIndex: true
    }
)
.catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Note Routes
var noteRouter = require('./routes/notes');
app.use('/notes', noteRouter);

const port = process.env.PORT || 5000;

app.get('/', function(req, res) {
    res.send('Mind Map app');
});

app.listen(port, () => {
    console.log(`Mind Map app backend running on port:${port}`);
});