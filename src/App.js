import './App.css';
import {Routes, Route, BrowserRouter } from "react-router-dom";


import store from './Store/store'
import { Provider } from 'react-redux'

import Navbar from './Navbar/Navbar.js'; 
//Pages
import Login from './Login/Login.js'; 
import Home from './Home/Home.js'; 




function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>

        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
