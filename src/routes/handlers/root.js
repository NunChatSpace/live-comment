const express = require('express');
const lc = require('./live_comments')

const router = express.Router();

const init = (app) => {
    app.use('/', router.get('/', (req, res) => {
        res.status(200).json({
            status: "Success",
            message: "You are reach the endpoint."
        })
    }))
    app.use('/live-comments', lc.router)
}



module.exports = {
    init
}