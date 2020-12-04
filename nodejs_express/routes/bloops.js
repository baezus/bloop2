const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.bloops.index);
router.post('/', ctrl.bloops.create);

module.exports = router;