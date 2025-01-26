const express = require('express')
const router = express.Router()
const foodsData = require("../data/foodsData")

//INDEX
router.get('/', )

//SHOW
router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    
    const food = foodsData.find(food => food.id === id)

    if(!food){
        res.status(404)
        res.json({
            error: "404 Not Found",
            message: "L'alimento non è stato trovato"
        })
    }
    res.json(food)
})

//STORE
router.post('/', (req, res) => {
    res.send('Creazione di un nuovo alimento')
})

//UPDATE
router.put('/:id', (req, res) => {
    res.send('Modifica integrale di un alimento')
})

//MODIFY
router.patch('/:id', (req, res) => {
    res.send('Modifica parziale di un alimento')
})

//DELETE
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    
    const food = foodsData.find(food => food.id === id)

    if(!food){
        res.status(404)
        
        return res.json({
            error: "404 Not Found",
            message: "L'alimento non è stato trovato"
        })
    }
    foodsData.splice(foodsData.indexOf(food), 1)

    res.sendStatus(204)
})

module.exports = router