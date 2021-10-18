const database = require('./database/')
const express = require('express')
const { response } = require('express')
const router = express.Router()

router.get('/all', () => {
    try {
        res.json({
            categories: database.categories,
            message: "Succesfilly fetched categories",
            status: "SUCCESS"
        })

    } catch (error) {
        res.json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }
})