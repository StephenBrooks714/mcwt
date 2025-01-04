const express = require("express");
const router = express.Router();
const cache = require("./config/cache");

const homeController = require('../controllers/pages/homePage');

router.get('/', cache(2), homeController);

module.exports = router