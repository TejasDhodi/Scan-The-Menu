import React from 'react'
import AdminRoute from './Routes/AdminRoute'
import UserRoute from './Routes/UserRoute'

const App = () => {
  return (
    <>
      {/* Admin Routes */}
      <AdminRoute />

      {/* Users Route */}
      <UserRoute />
    </>
  )
}


export default App