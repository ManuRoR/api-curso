'use strict'

const express = require('express');
let api = express.Router();

const HelloWorldController = require('../controllers/helloWorld.controller');

// /'hello-world/'

/**
 * POST
 */
api.post('/hello-world/', HelloWorldController.postHello);

/**
 * GET
 */
api.get('/hello-world/', HelloWorldController.getAllHello);
api.get('/hello-world/:id', HelloWorldController.getHello);

/**
 * PUT
 */
api.put('/hello-world/:id', HelloWorldController.putHello);

/**
 * DEL
 */
api.delete('/hello-world/:id', HelloWorldController.delHello);

module.exports = api;
