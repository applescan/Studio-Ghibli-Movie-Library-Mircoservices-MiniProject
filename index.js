let express = require("express")
let application = express()
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

application.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);

///////// add mySQL into project (npm install mysql) 
const mysql = require('mysql');
const dbConfig = require('./config/db.config.js');

let port1 = 3000

application.use(express.json());// to access body from postman


//////// MySQL starts here
var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;


/////// routing / webserver starts here
let filmRoute = require('./Routes/filmRoute')

application.use('/film', filmRoute)


//will load the movie list once the server starts. 
var filmController = require('./controllers/filmController')

filmController.initMovies()


application.listen(port1, () => { console.log(`Server running on http://localhost:${port1}`) })