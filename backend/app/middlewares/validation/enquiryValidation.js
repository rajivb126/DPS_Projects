const {check} = require('express-validator');

exports.rules = [
    check('ename')
    .trim()
    .isAlpha().withMessage('Incorrect Name Format')
    .isLength({min:1}).withMessage('Name atleast 1 Character')
    .isLength({max:30}).withMessage('Name have maximum 25 Characters'),

    check('email')
    .trim()
    .isEmail().withMessage('Email Id is not Valid')
    .isLength({min:1}).withMessage('Email Id is required'),

    check('emobile')
    .trim()
    .isInt().withMessage('Only Numeric Value can be allow')
    .isLength({min:1}).withMessage('Mobile Number Must be required')
    .isLength({max:10}).withMessage('Maximum 10 Digit Moile Number is required')
]