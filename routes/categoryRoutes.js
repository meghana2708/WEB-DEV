const database = require('../database/db')
const express = require('express')
const router = express.Router()
const { v4: uuid4 } = require('uuid')
router.get('/all', (req, res) => {
    try {
        res.status(200).json({
            categories: database.categories,
            message: "Successfully fetched categories",
            status: "Success"
        })
    } catch (error) {
        res.status(200).json({
                categories: [],
                messsage: error.message,
                status: "Failed"
            })
            //res.send(error.message)
    }
})
router.post('/add', (req, res) => {
    try {
        const { name } = req.body
        let newCategory = {
            name,
            id: uuid4()
        }
        database.categories.push(newCategory)
        res.status(200).json({
            categories: database.categories,
            message: "Successfully fetched categories",
            status: "Success"
        })
    } catch (error) {
        res.status(200).json({
            categories: category,
            messsage: error.message,
            status: "Failed"
        })
    }
})
module.exports = router