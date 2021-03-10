const moviesController = require('../controller/moviesController');

var express = require('express');
var router = express.Router();

router.get("/", moviesController.list);

router.get("/detail/:id", moviesController.detail);

router.get("/new", moviesController.new);

router.get("/recomended", moviesController.recomended);

router.get("/add", moviesController.add);

router.post("/add", moviesController.create);

router.get("/edit/:id", moviesController.edit);

router.put("/edit/:id", moviesController.update);

router.delete("/delete/:id", moviesController.delete);

module.exports = router;
