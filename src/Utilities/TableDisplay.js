import React, { useState, useRef, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  TextField
} from '@mui/material';

import './TableDisplay.css'; 


//DYNAMIC TABLE COMPONENT
//PROPS => DATA

function TableDisplay(props) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');
  const totalsRef = useRef({});

  useEffect(() => {
    const newTotals = {};
    columns.forEach((col) => {
      newTotals[col] = getTotal(col);
    });
    totalsRef.current = newTotals;
  }, [props.data]);

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const tableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };
      
  const getTotal = (key) => {
    return props.data.reduce((acc, item) => {
      if (typeof item[key] === 'number') {
        return acc + item[key];
      }
      return acc;
    }, 0);
  };


  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (event, key) => {
    setInputValues({
      ...inputValues,
      [key]: event.target.value,
    });
  };


  const columns = props.data.length > 0 ? Object.keys(props.data[0]) : [];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="data table">
        <TableHead>
          <TableRow className='tableHeader'>
            {columns.map((col) => (
              <TableCell
                key={col}
                sortDirection={orderBy === col ? order : false}
              >
                <TableSortLabel
                  active={orderBy === col}
                  direction={orderBy === col ? order : 'asc'}
                  onClick={createSortHandler(col)}
                  className='tableHeader__text'
                >
                  {/*col.toUpperCase()*/}
                  {props.headers[col]}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableSort(props.data, getComparator(order, orderBy)).map((row) => (
            <TableRow key={row.id} className='tableRow'>
              {columns.map((col) => (
                <TableCell key={col}>{row[col]}</TableCell>
              ))}
            </TableRow>
          ))}
  
          <TableRow className='tableFooter'>
            {columns.map((col) => (
              <TableCell key={col} className='tableFooter__text'>
                {totalsRef.current[col] ? totalsRef.current[col] : ''}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );




}

export default TableDisplay