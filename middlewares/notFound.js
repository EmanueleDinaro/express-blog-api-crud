const notFound = (req, res, next) => {
    const id = Number(req.params.id)
    
    const food = foodsData.find(food => food.id === id)

    if(!food){
        res.status(404)
        res.json({
            error: "404 Not Found",
            message: "L'alimento non è stato trovato"
        })
    }
    next()
}


module.exports = notFound