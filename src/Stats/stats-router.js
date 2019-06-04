/* eslint-disable indent */
/* eslint-disable strict */
const express = require('express')
const logger = require('../logger');
const StatsService = require('./stats-service')
const bodyParser = express.json();
const statsRouter = express.Router();

// const { requireAuth } = require('../middleware/jwt-auth')


statsRouter 
    .route('/')
    .get((req,res,next) => {
        const knexInstance = req.app.get('db')
        StatsService.getAllTrails(knexInstance)
            .then(trails => {
                res.json(trails)
            })

    //     res.status(200).json({
    //     test: "test item",
    //     test2: "test item 2"
    // })

    .catch(next);
    })
    .post(bodyParser, (req,res,next) => {
        const {sessionId, mobile, sessionTime, lat,  lng, buttonPressed,
                redHoverTime, redHoverAmount,
                blueHoverTime, blueHoverAmount,
                yellowHoverTime, yellowHoverAmount,
                oneHoverTime, oneHoverAmount,
                twoHoverTime, twoHoverAmount,
                threeHoverTime, threeHoverAmount,
                metaLog,
            } = req.body;
        const insertTrail = {
            sessionId:sessionId,
            mobile:mobile,
            sessionTime:sessionTime,
            lat,
            lng,
            buttonPressed,
            redHoverTime,redHoverAmount,
            blueHoverTime, blueHoverAmount,
            yellowHoverTime, yellowHoverAmount,
            oneHoverTime, oneHoverAmount,
            twoHoverTime, twoHoverAmount,
            threeHoverTime, threeHoverAmount,
            metaLog,
        }

        const knexInstance = req.app.get('db')

        StatsService.insertTrail(knexInstance, insertTrail)
            .then(returnObj => {
                return res.json(returnObj)
            })
            .catch(next)
    })
    ;

module.exports = statsRouter;