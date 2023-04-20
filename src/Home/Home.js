import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setLogin} from '../Store/userSlice';

function Home() {

    const login = useSelector((state) =>state.user.login);
    //    const dispatch = useDispatch();
    //    dispatch(toggleNonFocusReload());



    return (
        <div>This person is logged in: {String(login)}</div>
    )
}

export default Home