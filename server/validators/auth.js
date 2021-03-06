const { check } = require('express-validator');

const userSignupValidator = [
  check('name').not().isEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Valid email address is required'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('password must have 6 characters or more'),
];

const userSigninValidator = [
  check('email').isEmail().withMessage('Valid email address is required'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('password must have 6 characters or more'),
];
const forgotPasswordValidator = [
  check('email')
    .not()
    .isEmpty()
    .isEmail()
    .withMessage('Valid email address is required'),
];
const resetPasswordValidator = [
  check('newPassword')
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least  6 characters long'),
];

module.exports = {
  userSignupValidator,
  userSigninValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
};
