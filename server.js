/***********************************************************
* Dependencies
************************************************************/
const path              = require('path');
const express           = require('express');
const logger            = require("morgan");
const webpack           = require('webpack');
const webpackMiddleware = requrie('webpack-dev-middleware');
const config            = requrie('./webpack.config.js');


/***********************************************************
*  ENVIRONEMENT SETUP
************************************************************/
if (env === 'development')
    // development env variables
    require('dotenv').config();

const env = process.env.NODE_ENV
// End Setup ===============================================

const app = express();
const compiler = webpack(config(env));


// Middleware Setup ========================================
app.use(express.static(__dirname + '/dist'));
app.use(webpackMiddleware(compiler));


// Main file ==========================================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/splash.html'));
});

app.get("/users", (req, res) => {
  res.sendFile(path.joun(__dirname, 'dist/index.html'));
});


// Start Server ============================================
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Started: listening on port ${port}`);
});