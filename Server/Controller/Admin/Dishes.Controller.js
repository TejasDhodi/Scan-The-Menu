const dishModel = require('../../Model/Dish.Model');
const uploadToCloudinary = require('../../Utils/Cloudinary');

// Post Request
const createDish = async (req, res) => {

    const { dishName, dishMacros, dishPrice, dishDescription, dishIngredients, type, category } = req.body;
    const image = req.files?.file[0]?.path;

    if (!dishName || !dishMacros || !dishPrice || !dishDescription || !image || !type || !category) {
        res.status(400).json({
            message: 'All Fields Are Required'
        })
    }

    const imageUrl = await uploadToCloudinary(image);

    const dishData = await dishModel.create({
        dishName,
        dishMacros,
        dishPrice,
        dishDescription,
        dishIngredients,
        file: imageUrl.url,
        type,
        category
    })
    console.log(dishData);
    res.status(201).json({
        message: 'success',
        addedDish: dishData
    })
}

// To Get all the added dish data
const getDishData = async (req, res) => {
    const dishdata = await dishModel.find();
    res.status(200).json({
        dishdata: dishdata
    });
}

// Update Request
const updateDish = async (req, res) => {
   try {
    const { dishName, dishMacros, dishPrice, dishDescription, dishIngredients, type, category } = req.body;
    const image = req.files?.file[0]?.path;

    if (!dishName || !dishMacros || !dishPrice || !dishDescription || !image || !type || !category) {
        res.status(400).json({
            message: 'All Fields Are Required'
        })
    }

    const imageUrl = await uploadToCloudinary(image);

    const updatedDish = await dishModel.findByIdAndUpdate(req.params.id, {
        dishName,
        dishMacros,
        dishPrice,
        dishDescription,
        dishIngredients,
        file: imageUrl.url,
        type,
        category
    });

    if(!updatedDish) {
        return res.status(404).json({ message: 'Dish not found' })
    }
    res.status(200).json({updatedDish})
   } catch (error) {
    console.error('Unable to update Dish:', error);
    res.status(500).json({ message: 'Unable to Update the Dish' });
   }
};

// Delete Dish
const deleteDish = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedDish = await dishModel.findByIdAndDelete({_id: id});
        res.status(200).json({ deletedDish })
    } catch (error) {
        res.status(500).json("Unable to delete Dish")
    }
}

module.exports = { createDish, getDishData, updateDish, deleteDish };