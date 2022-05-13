const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
    winston.exceptions.handle(
        winston.add(new winston.transports.Console({format: 
            winston.format.combine(
                winston.format.colorize(),
                winston.format.prettyPrint()), 
            level: 'error'})),
        new winston.transports.File({ filename: 'uncaughtException.log'}));

    process.on('unhandledRejection', (ex) =>{
        throw ex;
    });


    winston.add(new winston.transports.Console({ format: winston.format.simple() , level: 'info'}));
    winston.add(new winston.transports.File({ filename: 'logfile.log'}));
    // winston.add(new winston.transports.MongoDB({ 
    //     db: 'mongodb://localhost/moveis',
    //     level: 'error' 
    // }));

}