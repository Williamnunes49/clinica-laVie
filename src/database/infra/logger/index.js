const winston = require("winston")
const path = require('path')

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.errors({stack: true}),
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ 
            filename: path.resolve("src", "database", "infra", "logs", "error.log" ), 
            level: 'error', 
            
        }),
        new winston.transports.File({ 
            filename: path.resolve("src", "database",  "infra", "logs", "info.log" ), 
            level: 'info', 
        }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
}

module.exports = logger;