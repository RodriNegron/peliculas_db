const db = require("../database/models");

let moviesController = {

    list: function(req,res){
        db.Movies.findAll()
            .then(function(movies){
                res.render("movies", {movies:movies})
            })
    },
    
    detail: function(req,res){
        db.Movies.findByPk(req.params.id)
            .then(function(movie){
                res.render("movieDetail", {movie:movie})
            })
    },

    new: function(req,res){
        db.Movies.findAll({
            order:[["release_date", "ASC"]]
        })
            .then(function(movies){
                res.render("movies", {movies:movies})
            })
    },
    recomended: function(req,res){
        db.Movies.findAll({
            order:[["release_date", "DESC"]],
            limit: 5
        })
            .then(function(movies){
                res.render("movies", {movies:movies})
            })
    },

    add: function(req,res){
        res.render("createMovieForm")
    },

    create: function(req,res){
        db.Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.length,
            release_date: req.body.release_date
        })
        .then(producto=>{res.redirect("/movies")})
    },
    
    edit: function(req,res){
        db.Movies.findByPk(req.params.id)
            .then(function(movie){
                res.render("movieEditForm", {movie:movie})
            })
    },
    update: function(req,res){
        db.Movies.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.length,
            release_date: req.body.release_date

        },{
            where: {
                id: req.params.id
            }
        })
        .then(producto=>{res.redirect("/movies/edit/"+ req.params.id)})
    },

    delete: function(req,res){
        db.Movies.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect("/movies")    
    },
}

module.exports=moviesController;