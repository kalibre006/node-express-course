const express = require("express");
const { products } = require("./data");
const app = express();

const logger = (req, res, next) => {
  const ip = req.ip;
  const url = req.url;
  const time = new Date();
  console.log(`new request: ip: ${ip}, url: ${url}, time: ${time}  `);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.status(200).send("<h1> Home Page </h1>");
});

app.listen(80, () => {
  console.log("server listening");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const filtered = products.find((product) => {
    return id == product.id;
  });

  res.send(filtered);
});

app.get("/products/api/search", (req, res) => {
  const { search, limit } = req.query;

  let filtered = products;

  filtered = filtered.filter((product) => {
    return product.name.startsWith(search);
  });

  if (limit) {
    console.log("limit here");
    filtered = filtered.slice(0, Number(limit));
  }

  res.send(filtered);
});
