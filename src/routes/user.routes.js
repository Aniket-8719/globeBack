const express = require('express');
const App = require("../routing-helper/app");
const userController  = require('../controllers');

const router = express.Router();

router.get('/', App.makeExpressCallback(userController.getUsers));
router.post('/', App.makeExpressCallback(userController.addUser));
router.get('/:id', App.makeExpressCallback(userController.getUserByIdHandler));
router.put('/:id', App.makeExpressCallback(userController.updateUser));
router.delete('/:id', App.makeExpressCallback(userController.deleteUserHandler));
router.post('/email', App.makeExpressCallback(userController.Emailsending));
router.post('/send-otp', App.makeExpressCallback(userController.OtpSending));
router.get('/generate-report/:id', App.makeExpressCallback(userController.GenerateReport));

module.exports = router;
