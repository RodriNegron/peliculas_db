var express= require("express");
const actorsController = require("../controller/actorsController");
var router = express.Router();

router.get("/", actorsController.list);

module.exports=router;