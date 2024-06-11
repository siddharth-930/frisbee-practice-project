const express = require('express');
const router = express.Router();

const { createUser, getData, updateUser, getHome} = require('../controllers/userControllers.js');
router.get('/', getData);
console.log('route folder');
router.get('/', getHome);
router.post('/user/create', createUser);
router.patch('/user/update', updateUser);
// router.patch('/')

module.exports = router;