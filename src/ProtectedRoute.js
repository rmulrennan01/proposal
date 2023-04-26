// src/components/ProtectedRoute.js
import React from 'react';
import { Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'

import { Navigate, Outlet } from 'react-router-dom'; 


/*
function ProtectedRoute({ children, ...rest }) {
    const loginStatus = useSelector((state) =>state.user.uid);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          loginStatus != null ? (
            children
          ) : (
            <Navigate
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default ProtectedRoute; 

  */

  function ProtectedRoute({children}) {
    const loginStatus = useSelector((state) =>state.user.uid);

  
    if (loginStatus != null) {
      return children 
    }
  
    else{
        window.location = '/login'; 

    }

    /*
    return(
        <Navigate
        to={'/login'}
     /> 
    ); 
    */

    }

    export default ProtectedRoute; 