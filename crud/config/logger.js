const { createLogger, transports, format } = require('winston');

const customFormat = format.combine(format.timestamp(), format.printf((info) => {
  return `${info.timestamp} [${info.level.toUpperCase().padEnd(7)}]: ${info.message}`
}))

const logger = createLogger({
  handleExceptions: true, 
  handleRejections: true,
  format: customFormat,
  transports: [
    new transports.Console({level: 'info'}),
    new transports.File({ filename: 'app.log', level: 'info', handleExceptions: true, handleRejections: true}),
    new transports.File({ filename: 'app.log', level: 'err', handleExceptions: true, handleRejections: true})
  ]
});

module.exports = logger;