import React, { useEffect, useState } from 'react'
import AllMenuComponent from '../../components/Admin/AllMenuComponent'
import axios from 'axios'

const MenuManage = () => {

  const [dishes, setDishes] = useState("");

  // To Get the data of Dishes from Database
  const getDishData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/dishes');

    if (response.status === 200) {
      setDishes(response.data.dishdata);
      console.log('dishes', dishes);
    }
    } catch (error) {
      console.log('Enable to get dish data', error);
    }
  }

  useEffect(() => {
    getDishData();
  }, [])

  return (
    <div>
      {/* {showAddDish? <div className="blur"></div>: ""} */}
      <AllMenuComponent dishes={dishes}/>
    </div>
  )
}

export default MenuManage
