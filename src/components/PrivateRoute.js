import React, { useContext } from 'react'
import {Navigate, Route} from 'react-router';


function PrivateRoute({children}) {
  const profile = useContext()
  if(!profile){
    return <Navigate to="/signin" />
  }
    return (
    <Route {...routeProps}>{children} </Route>
  )
}

export default PrivateRoute