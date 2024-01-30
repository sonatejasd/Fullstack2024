// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

const App = () => {
  return(
    <div>
      <Header/>
      <hr/>
      <h1>Hello! my first react component</h1>
      <h2>wrap multiple elements in div</h2>
    </div>
  )
};//App is a component

ReactDOM.render(<App/>,document.getElementById('root'));