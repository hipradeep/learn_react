import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //COMT:011
  // <React.StrictMode>
  //   {/* props.children(Children Prop Pattern) */}
  //   <App > I am pradeep maurya! (jsx children)</App>
  // </React.StrictMode>

  <React.StrictMode>
    <App  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
