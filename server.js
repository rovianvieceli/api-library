/**
 *
 * In heroku
 * Tell in terminal heroku
 * MONGODB_URI is not supported, then use MONGOLAB_URI
 * heroku config:set MONGOLAB_URI='mongodb://heroku_c27gm9hh:J6swDuXgBkbR1qWqUMCU6MgtOGK_3UWr@ds223653.mlab.com:23653(your mlab collection link given by mlab)/collection_name'
 *mongodb://<dbuser>:<dbpassword>@ds333248.mlab.com:33248/heroku_c27gm9hh
 */

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/nodeapi'
const OPTIONS =  { 'useNewUrlParser': true, 'useUnifiedTopology': true, 'useFindAndModify': false };

const cool = require('cool-ascii-faces')
const requireDir = require('require-dir');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

requireDir('./src/Models/');
mongoose.connect(CONNECTION_URI, OPTIONS);

app.use(express.json());
app.use(cors());
app.use('/api', require('./src/Routes.js'));
app.get('/cool', (req, res) => res.send(cool()))
app.listen(PORT, () => console.info(`Listing on ${HOST}:${PORT}`));