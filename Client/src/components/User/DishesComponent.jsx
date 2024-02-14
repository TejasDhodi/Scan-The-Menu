import React, { useState } from 'react'
import { FaQuestion, FaHeart } from "react-icons/fa";

const DishesComponent = ({ img, title, showDescription, setShowDescription, handleShowDescription, price }) => {


  return (
    <>
      <div className='dish'>
        <div className="dishImage">
          <img src={img} alt={title} />
          <span onClick={handleShowDescription}>< FaQuestion /></span>
        </div>
        <div className="dishBody">
          <div className="dishtHeader">
            <h3>{title}</h3>
          </div>
          <div className="priceContainer">
            <p>{price}Rs</p>
            <div className="controls">
              <button className='btn'>Add To Cart</button>
            </div>
          </div>

        </div>
      </div>
      <div className={showDescription ? "dishDescription showDishDescription" : "dishDescription"}>
        {/* <div className="descriptionDetails">
          <div className="descriptionTitle">
            <h3>Hihhaa</h3>
            <h4>Macro Nutrients Per 100g</h4>
          </div>
          <div className="descriptionBody">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, aliquid, nulla ratione odit qui voluptate aliquam fuga omnis quia quas numquam in possimus nihil hic, consequuntur a deleniti veritatis quae?</p>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default DishesComponent
