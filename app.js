const express = require('express')
const app = express()
const port = 3000
const foodsData = require("./data/foodsData")

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})