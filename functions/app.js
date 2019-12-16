'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const paginate = require('express-paginate');

// Endpoints base
const versionAPI = 'v1';
const baseEndpoint = '/api/' + versionAPI;

// crea instancia de l servidor

const app = express();

// Imports Routes
const default_routes = require('./routes/defaultRoute');
const hello_world_routes = require('./routes/helloWorld.route');

// Configure CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Rutas end points
app.use(baseEndpoint, hello_world_routes);


// Default Routes
app.use(baseEndpoint, default_routes);
app.use('/', default_routes);

// Export module
module.exports = app;