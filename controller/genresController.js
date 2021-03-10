const db = require("../database/models");

let genresController= {

    list: function(req,res){
        db.Genres.findAll()
            .then(function(genres){
                 res.render("genres", {genres:genres});
            })
    },

    detail: function(req,res){
        db.Genres.findByPk(req.params.id)
            .then(function(genre){
                res.render("genreDetail", {genre:genre})
            })
    }

}

module.exports=genresController;