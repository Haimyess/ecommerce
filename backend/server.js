/** @format */

//Requiring the express node.js package to create the server
const express = require("express");

const products_router = require("./routes/products");
const order_router = require("./routes/orders");

// Creating the server
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());
// Listenting to the port 5000 in localhost
app.listen(process.env.PORT || 5000, () => {
  console.log(`listen on port ${process.env.PORT || 5000}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/products", products_router);
// app.use("/api/order", ord/er_router);

// const express = require("express");

// const app = express();

// app.listen(5000);

// app.listen(process.env.PORT || 5000, () => {
//   console.log(`listen on port ${process.env.PORT || 5000}`);
// });

// app.get("/", (req, res) => {
//   res.send("Home page");
// });
