//pulls in the schema
const Grocery = require("../model/Grocery")

async function getAllGroceries(req, res) {
    try {
        //checks inside the schema
        let allGroceries = await Grocery.find({});
        res.json({payload: allGroceries})
    } catch (e) {
        res.status(500).json({message: e.message, error: e})
    }
}

async function createGrocery(req, res){
    try {

        console.log(req.body)
        let createdGrocery = new Grocery({
            grocery: req.body.grocery
        })

        let savedGrocery = await createdGrocery.save();
        res.json({payload: savedGrocery})

    } catch (e) {
        res.status(500).json({message: e.message, error: e})
    }
}

async function updateGrocery(req, res) {
  try {
    let updatedGrocery = await Grocery.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );

    res.json({ payload: updatedGrocery });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
}

async function editByID(req, res) {
  try {
    let editedList = await Grocery.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );

    res.json({ payload: editedList });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
}

async function deleteGrocery(req, res){
    try {

        let deletedGrocery = await Grocery.findByIdAndRemove(req.params.id);

        res.json({ payload: deletedGrocery });

    } catch (e) {
         res.status(500).json({ message: e.message, error: e });
    }
}

async function sortByDate(req, res) {
  try {
    let sort = req.query.sort;
    let sortOrder = sort === "desc" ? -1 : 1;
    let foundList = await Grocery.find({}).sort({ date: sortOrder });
    res.json({ payload: foundList });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
}

async function sortByPurchased(req, res) {
  try {
console.log(req.query)
    let purchased = req.query.purchased
    let sortedList = purchased === "true" ? true : false;
    let updatedList = await Grocery.find({purchased: sortedList});
    console.log(req.body);
    res.json({ payload: updatedList });
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e.message, error: e });
  }
}

module.exports = {
    getAllGroceries,
    createGrocery,
    updateGrocery,
  deleteGrocery,
  sortByPurchased,
  sortByDate,
    editByID
};