/** @format */

const express = require("express");
const router = express.Router();
const { _newPurchase } = require("../ controlers/orders");

// To All products
router.post("/", _newPurchase);

module.exports = router;
