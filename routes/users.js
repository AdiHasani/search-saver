const express = require('express');
const router = express.Router();

/************************************
 * @route       POST api/v1/users
 * @desc        Register a user
 * @access      Public
 *********************************/
router.post('/', (req, res) => {
  res.send('Users POST response!');
});

module.exports = router;
