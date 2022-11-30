const sql = require("../index")
var getFilmData = require('../middleware/api.js') //import original API


//initializing the data to load to the database on startup
let initMovies = async () => {
    let resp = await getFilmData.fetchData('films')  //get all movies from 3rd party api

    let filmIds = []
    let titles = []
    let descriptions = []
    let directors = []
    let producers = []
    let releaseDates = []

    //you do for loop to get the film datas then push it to an array
    for (let i = 0; i < resp.length; i++) {

        filmIds.push(resp[i].id)
        titles.push(resp[i].title)
        descriptions.push(resp[i].description)
        directors.push(resp[i].director)
        producers.push(resp[i].producer)
        releaseDates.push(resp[i].release_date)

    }

    //insert each array informations to the SQL tables using the SQL command
    return new Promise((resolve, reject) => {
        let sqlQuery =
            `TRUNCATE TABLE films;`;    //delete all the table data everytime the function is called, so there will be no duplicate

        sql.query(sqlQuery, (err, result, field) => {
            if (err) return reject(err);
            resolve(Object.values(result));
        });

        for (var i = 0; i < filmIds.length; i++) { //looping through each names and adding it to the table
            let sqlQuery =
                `INSERT INTO films (id, title, descriptions, director, producer, release_date) VALUES 
                ("${filmIds[i]}","${titles[i]}", "${descriptions[i]}","${directors[i]}","${producers[i]}", "${releaseDates[i]}")`;

            sql.query(sqlQuery, (err, result, field) => {
                if (err) return reject(err);
                resolve(Object.values(result));
            });

        }
    });

}


// all get requests

let allMovies = async (res) => {
    return new Promise((resolve, reject) => {
        let sqlQuery = `SELECT * FROM films`;

        sql.query(sqlQuery, (err, result, field) => {
            if (err) return reject(err);
            resolve(Object.values(result));
        });
    });

}

let allMoviesbyTitle = async (req, res) => {

    let title = req.params.title

    return new Promise((resolve, reject) => {

        let sqlQuery = `SELECT * FROM films WHERE title= "${title}"`;

        sql.query(sqlQuery, (err, result, field) => {
            if (err) return reject(err);
            resolve(Object.values(result));
        });
    });

}

let filterMovies = async (req, res) => {

    let param = req.query.param
    let value = req.query.value

    return new Promise((resolve, reject) => {

        let sqlQuery = `SELECT * FROM films WHERE ${param}= "${value}"`;

        sql.query(sqlQuery, (err, result, field) => {
            if (err) return reject(err);
            resolve(Object.values(result));
        });
    });

}

let filterYearsMovies = async (req, res) => {

    let year1 = req.query.year1
    let year2 = req.query.year2
    return new Promise((resolve, reject) => {

        let sqlQuery = `SELECT * FROM films WHERE release_date BETWEEN ${year1} AND ${year2} ORDER BY release_date`;

        sql.query(sqlQuery, (err, result, field) => {
            if (err) return reject(err);
            resolve(Object.values(result));
        });
    });

}

let matchMovies = async (req, res) => {

    let letters = req.params.letters

    return new Promise((resolve, reject) => {

        let sqlQuery = `SELECT * FROM films WHERE title LIKE "%${letters}%"`;

        sql.query(sqlQuery, (err, result, field) => {
            if (err) return reject(err);
            resolve(Object.values(result));
        });
    });

}


//all put request

let updateMovies = async (req, res) => {

    let column = req.body.column
    let value = req.body.value
    let title = req.params.title

    return new Promise((resolve, reject) => {

        let sqlQuery = `UPDATE films SET ${column} = "${value}" WHERE title= "${title}"`;

        sql.query(sqlQuery, (err, result, field) => {
            if (err) return reject(err);
            resolve(Object.values(result));
        });
    });

}

//all post request

let addMovies = async (req, res) => {

    let id = req.body.id
    let title = req.body.title
    let descriptions = req.body.descriptions
    let director = req.body.director
    let producer = req.body.producer
    let release_date = req.body.release_date

    return new Promise((resolve, reject) => {

        let sqlQuery =
            `INSERT INTO films (id, title, descriptions, director, producer, release_date)
        VALUES ("${id}","${title}","${descriptions}","${director}","${producer}","${release_date}")`;

        sql.query(sqlQuery, (err, result, field) => {
            if (err) return reject(err);
            resolve(Object.values(result));
        });
    });

}

//all delete request

let deleteMovies = async (req, res) => {

    let title = req.params.title

    return new Promise((resolve, reject) => {

        let sqlQuery = `DELETE FROM films
        WHERE title= "${title}"`;

        sql.query(sqlQuery, (err, result, field) => {
            if (err) return reject(err);
            resolve(Object.values(result));
        });
    });

}

let deleteAllMovies = async (req, res) => {

    return new Promise((resolve, reject) => {

        let sqlQuery = `TRUNCATE TABLE films`;

        sql.query(sqlQuery, (err, result, field) => {
            if (err) return reject(err);
            resolve(Object.values(result));
        });
    });

}

module.exports = {
    initMovies,
    allMovies,
    filterMovies,
    updateMovies,
    allMoviesbyTitle,
    addMovies,
    deleteMovies,
    matchMovies,
    deleteAllMovies,
    filterYearsMovies
}