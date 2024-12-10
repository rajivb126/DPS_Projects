const {validationResult} = require('express-validator')

const validateRequest = (request,response,next) => {
    const extractedErrors = {};
    const errors          = validationResult(request);

    if(errors.isEmpty()) {
        return next();
    }

    errors.array().forEach(error => {
        if(extractedErrors.hasOwnProperty(error.path)){
            extractedErrors[error.path].push(error.msg);
        }
        else {
            extractedErrors[error.path] = [error.msg];
        }
    });

    return response.status(422).json({
        _status:false,
        _errors: extractedErrors,
    });
};

module.exports = validateRequest;