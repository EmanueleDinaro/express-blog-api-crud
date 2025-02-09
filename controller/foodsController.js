const foodsData = require("../data/foodsData");

//index
const index = (req, res) => {
  res.json(foodsData);
};

//show
const show = (req, res) => {
  const id = Number(req.params.id);

  const food = foodsData.find((food) => food.id === id);

  if (!food) {
    res.status(404);
    res.json({
      error: "404 Not Found",
      message: "L'alimento non è stato trovato",
    });
  }
  res.json(food);
};

//store
const store = (req, res) => {
  console.log("Dati ricevuti:", req.body);
  const id = foodsData[foodsData.length - 1].id + 1;

  const newFood = {
    id,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };

  if (!newFood.title || !newFood.content) {
    return res
      .status(400)
      .json({ error: "Bad Request", message: "Dati non validi" });
  }

  foodsData.push(newFood);

  res.status(201).json(newFood);
};

//update
const update = (req, res) => {
  const id = Number(req.params.id);

  const food = foodsData.find((food) => food.id === id);

  if (!food) {
    res.status(404);

    return res.json({
      error: "404 Not Found",
      message: "L'alimento non è stato trovato",
    });
  }
  (food.title = req.body.title),
    (food.content = req.body.content),
    (food.image = req.body.image),
    (food.tags = req.body.tags);

  res.json(food);
};

//modify
const patch = (req, res) => {
  const id = Number(req.params.id);

  const food = foodsData.find((food) => food.id === id);

  if (!food) {
    res.status(404);

    return res.json({
      error: "404 Not Found",
      message: "L'alimento non è stato trovato",
    });
  }
  (food.title = req.body.title || food.title),
    (food.content = req.body.content || food.content),
    (food.image = req.body.image || food.image),
    (food.tags = req.body.tags || food.tags),
    res.json(food);
};

//delete
const destroy = (req, res) => {
  const id = Number(req.params.id);

  const food = foodsData.find((food) => food.id === id);

  if (!food) {
    res.status(404);

    return res.json({
      error: "404 Not Found",
      message: "L'alimento non è stato trovato",
    });
  }
  foodsData.splice(foodsData.indexOf(food), 1);

  res.sendStatus(204);
};

module.exports = { index, show, store, update, patch, destroy };
