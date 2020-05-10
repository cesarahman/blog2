const express = require('express');
const { auth } = require('../../../secret');
const router = express.Router();
const { validation } = require('./tags.validation')

const c = require('./tags.controller')

router.get('/', auth, c.findAll)
router.get('/:id', auth, c.findById)
router.post('/', auth, validation, c.insert)
router.put('/:id', auth, c.updateById)
router.delete('/', auth,  c.remove)
router.delete('/:id', auth, c.removeById)

module.exports = router;