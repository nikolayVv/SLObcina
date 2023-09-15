const mongoose = require("mongoose");
const mysql = require("mysql");

var dbMongoURI = process.env.MONGODB_CLOUD_URI;
mongoose.connect(dbMongoURI);

const connection = mysql.createPool({
    host: process.env.CLEARDB_DATABASE_HOST,
    user: process.env.CLEARDB_DATABASE_USER,
    password: process.env.CLEARDB_DATABASE_PASSWORD,
    database: process.env.CLEARDB_DATABASE
})

connection.getConnection((error, connection) => {
    if(error){
        console.log('Error connecting to the MySQL Database.', error);
        return;
    }
    console.log('Mysql connection established sucessfully.');
});

mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected.`);
});

mongoose.connection.on("error", (napaka) => {
    console.log("Mongoose error when connecting: ", napaka);
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose isn't connected.");
});

const correctDisconnection = (m, cb) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose closed connection thru '${m}'.`);
        cb();
    })
}

// Restart nodemon
process.once("SIGUSR2", () => {
    correctDisconnection("nodemon restart", () => {
        process.kill(process.pid, "SIGUSR2");
    });
});

//Exit from Heroku application
process.on("SIGTERM", () => {
    correctDisconnection("exit from Heroku application", () => {
        process.exit(0);
    });
});

require("./models");

module.exports = connection;