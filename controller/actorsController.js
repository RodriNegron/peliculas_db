const db = require("../database/models");

let actorsController = {
    
    list: function(req,res){
        db.Actors.findAll()
            .then(function(actors){
                return res.render("actors", {actors:actors})
            })

    }

}

module.exports= actorsController;