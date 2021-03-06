const router = require('express').Router();

const { isAuthenticated } = require('../../middlewares/isAuthenticated');
const { AuthController } = require('../../controller/AuthController');

const authController = new AuthController();

router.get('/', isAuthenticated, authController.show);
router.post('/', authController.store);

module.exports = router;
