const router = require('express').Router();

const {
  GetData,
  CreateData,
  UpdateData,
  DeleteData,
} = require('../controllers/user.controller');

router.route('/').get(GetData).post(CreateData);
router.route('/:id').put(UpdateData).delete(DeleteData);

module.exports = router;
