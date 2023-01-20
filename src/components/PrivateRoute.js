import React, { useContext } from 'react'
import {Navigate, Route} from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';


function PrivateRoute({children}) {
  const {profile, isLoading} = useProfile();
  if(isLoading && !profile){
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
      
    ) 
   
  } 
  if(!profile && !isLoading){
    return <Navigate to="/signin" />;
  }
    return (
    <Route {...routeProps}>{children} </Route>
  )
}

export default PrivateRoute;