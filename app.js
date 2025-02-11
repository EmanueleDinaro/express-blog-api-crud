const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
// const foodsData = require("./data/foodsData")
const foodsRouter = require("./Routers/foodsRouters");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.static("public"));
app.use(express.json());
// app.use('/:id', notFound)
app.use("/foods", foodsRouter);

app.get("/", (req, res) => {
  res.send("Server del mio food blog");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
