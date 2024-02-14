import React from 'react'
import DishesComponent from '../../components/User/DishesComponent'
import { dishes } from '../../Service/User'
const MenuPage = () => {
  return (
    <div className='dishContainer' >
      <div className="allDishes">
      {
        dishes.map((currElem, index) => {
            const {title, img,  ingredients, description, price, type, category} = currElem;
            return (
                <DishesComponent
                img={img}
                title={title}
                ingredients={ingredients}
                description={description}
                price={price}
                type={type}
                category={category}
                key={index}
                 />
            )
        })
      }
      </div>
    </div>
  )
}

export default MenuPage
