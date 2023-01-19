import React from 'react'
import {Navigate, Route} from 'react-router';
import { useProfile } from '../context/profile.context';

function PublicRoute({children, ...routeProps}) {
  const profile = useProfile();
  
  if(profile){
    return <Navigate to="/" />
  }
    return (
    <Route {...routeProps}>{children} </Route>
  )
}

export default PublicRoute