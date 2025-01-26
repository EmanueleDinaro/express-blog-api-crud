const foodsData = require('../data/foodsData')

const index = (req, res) => {
    res.json(foodsData)
}

module.exports = { index }