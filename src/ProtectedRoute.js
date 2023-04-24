// src/components/ProtectedRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'
import {setUser, setUid} from '../Store/userSlice';

import { Navigate, Outlet } from 'react-router-dom'const 



function ProtectedRoute() {
    let auth = {'token':true}return (
      auth.token ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default ProtectedRoute; 