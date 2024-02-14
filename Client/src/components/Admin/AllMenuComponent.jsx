import React, { useEffect, useState } from 'react'

const AllMenuComponent = ({dishes}) => {
  return (
    <>
    <section className='menuManage'>
      <div className="menuDataContainer">
        {
          dishes && dishes.map((currElem, index) => {
            const {dishName, dishPrice, file} = currElem;
            return (
              <ul className='menuItems' key={index}>
                <li className="menuList"><img src={file} alt={dishName} /></li>
                <li className="menuList">{dishName}</li>
                <li className="menuList">{dishPrice}</li>
                <li className="menuList" >Edit</li>
                <li className="menuList">Delete</li>
              </ul>
            )
          })
        }
      </div>
    </section>
    </>
  )
}

export default AllMenuComponent
