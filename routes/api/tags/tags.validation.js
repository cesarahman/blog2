const {body} = require('express-validator')
exports.validation = [
    body('name').isString().withMessage('nama tag harus string')
]