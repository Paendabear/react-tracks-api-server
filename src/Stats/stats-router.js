const express = require('express')
const StatsService = require('./stats-service')

// const { requireAuth } = require('../middleware/jwt-auth')

const statsRouter = express.Router();

statsRouter 
    .route('/')
    .get((req,res,next) => {
        res.status(200).json({
        test: "test item",
        test2: "test item 2"
    })
    .catch(next)
    })
    ;

module.exports = statsRouter;