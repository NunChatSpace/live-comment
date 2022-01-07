const express = require('express');
const lcController = require('../../controllers/live_comments');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        status: "Success",
        message: lcController.index()
    })
})

module.exports = {
    router
}