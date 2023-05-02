import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setLogin} from '../Store/userSlice';
import TableDisplay from '../Utilities/TableDisplay.js'; 

function Home() {

    const login = useSelector((state) =>state.user.uid);
    //    const dispatch = useDispatch();
    //    dispatch(toggleNonFocusReload());


    const data = [
        {
          id: 1,
          cc:'34034-2444',
          trade: 'Plumbing',
          qty: 30,
          cost: 55000,
        },
        {
          id: 2,
          cc:'34034-0493',
          trade: 'Electrical',
          qty: 22,
          cost: 24242,
        },
        {
          id: 3,
          cc:'34034-1111',
          trade: 'HVAC',
          qty: 1,
          cost: 2000,
        },
        {
          id: 4,
          cc:'34034-2422',
          trade: 'Gas',
          qty: 4,
          cost: 18000,
        },
    ];

    const headers = {
        id:'ID',
        cc: 'Cost Code', 
        trade: 'Trade', 
        qty: 'Quantitiy',
        cost: 'Cost'
    }

    const types = {
        id: 'int',
        cc: 'string',
        trade: 'string',
        qty: 'int', 
        cost: 'currency'
    }




      



    return (

        <div>
            <div>This person is logged in: {String(login)} </div>
            <TableDisplay data={data} headers={headers}/>
        
        
        </div>
    )
}

export default Home