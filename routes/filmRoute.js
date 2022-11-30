var express = require('express');
var router = express.Router();

var filmController = require('../controllers/filmController.js')   //grabs the controller


//load all movies
router.get('/', (req, res) => {
    filmController.allMovies(req, res) 
})

//get movie information by title
router.get('/search/:title', (req, res) => {
    filmController.allMoviesbyTitle(req, res) 
})

//only return movie based on param (query filtering)
router.get('/filter', (req, res) => {
    filmController.filterMovies(req, res) 
})

//search movies by the matching characters 
router.get('/match/:letters', (req, res) => {
    filmController.matchMovies(req, res) 
})

//search movies by searching in between the years 
router.get('/years', (req, res) => {
    filmController.filterYearsMovies(req, res) 
})

//update movie data by title
router.put('/update/:title', (req, res) => {   
    filmController.updateMovies(req, res) 
})

//adding movies 
router.post('/add', (req, res) => {   
    filmController.addMovies(req, res) 
})

//deleting movie data based by title
router.delete('/delete/:title', (req, res) => {
    filmController.deleteMovies(req, res) 
})

//deleting all movie data
router.delete('/deleteAll', (req, res) => {
    filmController.deleteAllMovies(req, res) 
})


module.exports = router;