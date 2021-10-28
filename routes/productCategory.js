const database = require('../database/db')
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const db = require('../database/db')
router.get('/all', (req, res) => {
    try {
        res.json({
            products: database.products,
            message: "Successfully fetched products",
            status: "Success"
        })
    } catch (error) {
        res.json({
                products: [],
                messsage: error.message,
                status: "Failed"
            })
            //res.send(error.message)
    }
})
router.post('/add', (req, res) => {
    const { name, price, categoryName } = req.body
    if (!database.categories.find(item => item.name === categoryName)) {
        let newCategory = { name: categoryName, id: uuidv4 }
        database.categories.push(newCategory)
            //create a product and add it
        const newProduct = {
            name,
            price,
            category: categoryName
        }
        database.products.push(newProduct)
    } else {
        const newProduct = {
            name,
            price,
            category: categoryName
        }
        database.products.push(newProduct)
    }
    //console.log(include)


    try {


        res.json({
            products: database.products,
            message: "Successfully added products",
            status: "Success"
        })
    } catch (error) {
        res.json({
            products: [],
            messsage: error.message,
            status: "Failed"
        })
    }
})