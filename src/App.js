import './App.css';
import {Routes, Route, BrowserRouter } from "react-router-dom";


import store from './Store/store'
import { Provider } from 'react-redux'


//Pages
import Login from './Login/Login.js'; 
import Home from './Home/Home.js'; 




function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>

        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
