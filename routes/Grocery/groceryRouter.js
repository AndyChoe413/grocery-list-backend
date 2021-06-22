var express = require('express');
var router = express.Router();

//pulls in all functionality from the controller
const {
  getAllGroceries,
  createGrocery,
  updateGrocery,
  deleteGrocery,
  editByID,
  sortByDate,
  sortByPurchased
} = require('./controller/groceryController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(true);
});

router.get('/get-all-groceries', getAllGroceries)
router.post('/create-groceries', createGrocery)
router.put('/update-groceries-by-id/:id', updateGrocery)
router.delete('/delete-groceries-by-id/:id', deleteGrocery)
router.put('/edit-by-id/:id', editByID)
router.get('/get-groceries-by-sort', sortByDate)
router.get('/get-groceries-by-purchased', sortByPurchased)

module.exports = router;
