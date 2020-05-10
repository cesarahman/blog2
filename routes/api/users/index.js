const express = require('express');
const router = express.Router();

const c = require('./users.controller');
const { auth } = require('../../../secret');

const projectName = process.env.npm_package_name
const debug = require('debug')(`${projectName}:api`)

// router.get('/', c.findAll)
// router.get('/:id', c.findById)
// router.post('/',  c.insert)
// router.put('/:id', c.updateById)
// router.delete('/', c.remove)
// router.delete('/:id', c.removeById)

router.get('/', auth, c.findAll)
router.get('/:id', auth, c.findById)
router.post('/', auth, c.insert)
router.put('/:id', auth, c.updateById)
router.delete('/', auth, c.remove)
router.delete('/:id', auth, c.removeById)

module.exports = router;