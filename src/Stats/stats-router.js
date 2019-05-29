const express = require('express')
const StatsService = require('./things-service')

// const { requireAuth } = require('../middleware/jwt-auth')

const statsRouter = express.Router();

statsRouter 
    .route('/')
    .then(res.json({
        test: "test item",
        test2: "test item 2"
    }))