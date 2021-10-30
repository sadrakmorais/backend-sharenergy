const router = require('express').Router();

const UsersController = require('./controller/UserController');

router.get('/users', UsersController.index);
router.get('/users/:_id', UsersController.detail);
router.post('/users', UsersController.store);
router.put('/users/:_id', UsersController.update);
router.delete('/users/:_id', UsersController.delete);

module.exports = router;
