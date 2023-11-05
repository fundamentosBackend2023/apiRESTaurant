const logger = (err, req, res, next) => {
    console.log(err.stack);
    next(err);
}

const boomErrorHandler = (err, req, res, next) => {
    if(err.isBoom){
        res.status(err.output.statusCode).json({
            message: err.output.payload
        });
    }else{
        next(err);
    }
}

const generalHandler = (err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
}

module.exports = { logger, boomErrorHandler, generalHandler }