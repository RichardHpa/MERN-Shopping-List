const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();

app.use(bodyParser.json());

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER_NAME}.mongodb.net/${process.env.MONGO_TABLE_NAME}?retryWrites=true&w=majority`, {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('we are connected to mongo db'));

const port = process.env.POST || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`))
