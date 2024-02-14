import React from 'react'
import {DashData} from '../../Service/Admin'

const AdminHomePage = () => {
  return (
    <section className="dashboard">
      {
        DashData.map((currElem, index) => {
          const { Name, Number } = currElem;
          return (
            <div className="widget" key={index}>
              <h2>{Name}</h2>
              <p>{Number}</p>
            </div>
          )
        })
      }
    </section>
  )
}

export default AdminHomePage
