let DBServices = require('../services/dbServices.js')

const initMovies = async (req, res) => {

    let data = await DBServices.initMovies(req, res)
    if (res) {            //when someone make req to api it will send the data back to the user
        res.send(data)
    }
}

const allMovies = async (req, res) => {
    let data = await DBServices.allMovies(req, res)
    res.send(data)
}

const filterMovies = async (req, res) => {
    let data = await DBServices.filterMovies(req, res)
    console.log(data)
    res.send(data)
}

const filterYearsMovies = async (req, res) => {
    let data = await DBServices.filterYearsMovies(req, res)
    console.log(data)
    res.send(data)
}

const updateMovies = async (req, res) => {
    let data = await DBServices.updateMovies(req, res)
    console.log("Succesfully updated the movie to the database")
    res.send("Succesfully updated the movie to the database")

}

const addMovies = async (req, res) => {
    let data = await DBServices.addMovies(req, res)
    console.log("Succesfully added the movie to the database")
    res.send("Succesfully added the movie to the database")

}

const deleteMovies = async (req, res) => {
    let data = await DBServices.deleteMovies(req, res)
    console.log("Succesfully delete the movie from the database")
    res.send("Succesfully delete the movie from the database")

}

const deleteAllMovies = async (req, res) => {
    let data = await DBServices.deleteAllMovies(req, res)
    console.log("Succesfully delete all movie from the database")
    res.send("Succesfully delete all movie from the database")

}

const allMoviesbyTitle = async (req, res) => {
    let data = await DBServices.allMoviesbyTitle(req, res)
    console.log(data)
    res.send(data)

}

const matchMovies = async (req, res) => {
    let data = await DBServices.matchMovies(req, res)
    console.log(data)
    res.send(data)

}

module.exports = {
    initMovies,
    allMovies,
    filterMovies,
    updateMovies,
    addMovies,
    deleteMovies,
    allMoviesbyTitle,
    matchMovies,
    deleteAllMovies,
    filterYearsMovies
}