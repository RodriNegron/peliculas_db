var express=require("express");
const genresController = require("../controller/genresController");
var router = express.Router();

router.get("/", genresController.list);

router.get("/detail/:id", genresController.detail);

module.exports=router;