const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.profiles.index);
router.get('/:id', ctrl.profiles.show);
router.post('/', ctrl.profiles.create);
router.put('/:id', ctrl.profiles.update);
router.delete('/:id', ctrl.profiles.destroy);

module.exports = router;