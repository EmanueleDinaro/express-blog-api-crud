const express = require('express')
const app = express()
const port = 3000
// const foodsData = require("./data/foodsData")
const foodsRouter = require("./Routers/foodsRouters")

app.use(express.static("public"));
app.use(express.json())
app.use("/foods", foodsRouter)

app.get('/', (req, res) => {
  res.send('Server del mio food blog')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})