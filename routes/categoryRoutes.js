const database = require('../database/db')
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const db = require('../database/db')
router.get('/all', (req, res) => {
    try {
        res.json({
            categories: database.categories,
            message: "Successfully fetched categories",
            status: "Success"
        })
    } catch (error) {
        res.json({
                categories: [],
                messsage: error.message,
                status: "Failed"
            })
            //res.send(error.message)
    }
})
router.post('/add', (req, res) => {
    const { name } = req.body
    const newCategory = {

        id: uuidv4(),
        name
    }

    //console.log(include)


    try {
        let include = database.categories.find(item => {
            return item.name === name
        })
        if (!include) database.categories.push(newCategory)
        else console.log('ALready exists')

        res.json({
            categories: database.categories,
            message: "Successfully added categories",
            status: "Success"
        })
    } catch (error) {
        res.json({
            categories: [],
            messsage: error.message,
            status: "Failed"
        })
    }
})
router.delete('/delete', (req, res) => {

        try {
            const { id } = req.body
                //    let element = database.categories.find(item => item.id === id)
                //    const index = database.categories.indexOf(element)
                //    database.categories.splice(index,1)
            const newCategories = database.categories.filter(item => item.id != id)
            database.categories = newCategories

            res.json({
                categories: database.categories,
                message: "Successfully deleted categories",
                status: "Success"
            })
        } catch (error) {
            res.json({
                categories: [],
                messsage: error.message,
                status: "Failed"
            })
        }
    })
    /*
     ROUTE : http://localhost:3001/category/update/:id
     Method : Put 
     */
    //router.put('/update',)
module.exports = router