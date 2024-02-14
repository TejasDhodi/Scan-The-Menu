const express = require('express');
const router = express.Router();
const {createDish, getDishData, updateDish, deleteDish} = require('../../Controller/Admin/Dishes.Controller')
const upload = require('../../Middlewares/Multer.Middleware');

router.route('/dishes').get(getDishData);
router.route('/createDish').post(upload, createDish);
router.route('/dishes/update/:id').put(upload, updateDish)
router.route('/dishes/delete/:id').delete(deleteDish);

module.exports = router;