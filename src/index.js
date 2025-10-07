import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Counter from './Redux/Counter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Redux Learning/Home';
import Contact from './Redux Learning/Contact';
import User from './Redux Learning/User';
// import store from './Redux Learning/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <>
    <Provider store={store}>
    <Counter />
    {/* <BrowserRouter>
            <Routes>
                <Route path='/Home'element={<Home />} />
                <Route path='/Contact'element={<Contact />} />
                <Route path='/User'element={<User />} />
                
            </Routes>
        </BrowserRouter> */}
    
  </Provider>
    <App />
  </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// index.js




// ReactDOM.render(
  
//   document.getElementById('root')
// );
