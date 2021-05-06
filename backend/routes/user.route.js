const router = require('express').Router();

const {
  CreateData,
  UpdateData,
  DeleteData,
} = require('../controllers/user.controller');

router.route('/').post(CreateData);
router.route('/:id').put(UpdateData).delete(DeleteData);

module.exports = router;
