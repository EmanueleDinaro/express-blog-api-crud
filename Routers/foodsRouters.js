const express = require('express')
const router = express.Router()
const foodsData = require("../data/foodsData")
const foodsController = require('../controller/foodsController')
const foods = require('../data/foodsData')

//INDEX
router.get('/', foodsController.index)

//SHOW
router.get('/:id', foodsController.show)

//STORE
router.post('/', foodsController.store)

//UPDATE
router.put('/:id', foodsController.update)

//MODIFY
router.patch('/:id', foodsController.patch)

//DELETE
router.delete('/:id', foodsController.destroy)

module.exports = router