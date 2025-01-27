const foodsData = require('../data/foodsData')

//index
const index = (req, res) => {
    res.json(foodsData)
}

//show
const show = (req, res) => {
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
}

//store
const store = (req, res) => {
    const id = foodsData[foodsData.length - 1].id + 1
    
    const newFood = {
        id,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    foodsData.push(newFood)
    
    res.status(201)
    res.json(newFood)
}

//update
const update = (req, res) => {
    res.send('Modifica integrale di un alimento')
}

//modify
const patch = (req, res) => {
    res.send('Modifica parziale di un alimento')
}

//delete
const destroy = (req, res) => {
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
}

module.exports = { index, show, store, update, patch, destroy }

