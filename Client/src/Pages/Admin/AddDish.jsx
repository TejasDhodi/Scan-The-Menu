import React, { useState, useRef } from 'react'
import { IoMdClose } from "react-icons/io";
import axios from 'axios'

const AddDish = () => {
  const [inputs, setInputs] = useState({
    dishName: "",
    dishMacros: "",
    dishPrice: "",
    dishDescription: "",
    dishIngredients: "",
    type: "",       
    category: ""
  })

  const [file, setFile] = useState(null);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('dishName', inputs.dishName)
      formData.append('dishMacros', inputs.dishMacros)
      formData.append('dishPrice', inputs.dishPrice)
      formData.append('dishDescription', inputs.dishDescription)
      formData.append('dishIngredients', inputs.dishIngredients)
      formData.append('file', file);
      formData.append('type', inputs.type);
      formData.append('category', inputs.category);

      const response = await axios.post('http://localhost:3000/api/v1/createDish', formData, {
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      })

      const data = response.data;
      console.log(data.addedDish.dishName);
      if (response.status === 201) {
        alert("Created")

        setInputs({
          dishName: "",
          dishMacros: "",
          dishPrice: "",
          dishDescription: "",
          dishIngredients: ""
        })

        setShowAddDish(false)
      }
    } catch (error) {
      alert('Unable to create')
      console.log('error', error);
    }
  }

  const focusDishName = useRef(null)

  return (
    <>
      <div className="addDishContainer">
        <form className='addDishDetails' onSubmit={handleSubmit}>
          <h2>Add Dish</h2>
          <div className="closeDishContainer">
            <IoMdClose />
          </div>
          <div className="dishTitle">
            <div className="inputs">
              <label htmlFor="dishName">Dish Name</label>
              <input type="text" id='dishName' name='dishName' value={inputs.dishName} onChange={handleInputs} placeholder='Add Dish Title' ref={focusDishName} required />
            </div>
          </div>

          <div className="dishData">
            <div className="inputs">
              <label htmlFor="dishMacros">Dish Macros</label>
              <input type="text" id='dishMacros' name='dishMacros' value={inputs.dishMacros} onChange={handleInputs} placeholder='Add Dish Macros' required />
            </div>

            <div className="inputs">
              <label htmlFor="dishPrice">Dish Price</label>
              <input type="text" id='dishPrice' name='dishPrice' value={inputs.dishPrice} onChange={handleInputs} placeholder='Add Dish Price' required />
            </div>

            <div className="inputs">
              <label htmlFor="dishImage">Dish Image</label>
              <input type='file' id='dishImage' onChange={handleFile} required />
            </div>

            <div className="inputs">
              <label htmlFor="dishIngredients">Dish Ingredients</label>
              <textarea id='dishIngredients' name='dishIngredients' cols="40" rows="5" value={inputs.dishIngredients} onChange={handleInputs} placeholder='Add Dish Description' required />
            </div>

            <div className="inputs">
              <label htmlFor="dishDescription">Dish Description</label>
              <textarea id='dishDescription' name='dishDescription' cols="40" rows="5" value={inputs.dishDescription} onChange={handleInputs} placeholder='Add Dish Description' required />
            </div>

            <div className="inputs">
              <label htmlFor="type">Type</label>
              <select name="type" value={inputs.type} onChange={handleInputs} id="type">
                <option value='' disabled>Select Type</option>
                <option value='veg'>Veg</option>
                <option value='nonveg'>Non-Veg</option>
              </select>
            </div>

            <div className="inputs">
              <label htmlFor="category">Category</label>
              <select name="category" value={inputs.category} onChange={handleInputs} id="category">
                <option value='' disabled>Select Category</option>
                <option value='Appetizers'>Appetizers</option>
                <option value='Soups'>Soups</option>
                <option value='Salads'>Salads</option>
                <option value='Main Courses'>Main Courses</option>
                <option value='Desserts'>Desserts</option>
                <option value='Beverages'>Beverages</option>
              </select>
            </div>

          </div>

          <div className="controls">
            <button type="submit">Add Dish</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default AddDish
