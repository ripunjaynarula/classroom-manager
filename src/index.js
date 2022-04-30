import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MDNav from './components/MDNav';
import { MDSidebar } from './components/MDSidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MDNav style={{position:'sticky',zIndex:"5"}}/>
    <div className='isidebar'style={{display:'flex',flexDirection:'row'}}>
    <MDSidebar/><button>
      
    </button>
      </div>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();