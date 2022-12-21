import React from 'react';
import ReactDOM from 'react-dom/client';
import All from './All';
import App from './App';
import Appref from './Appref';
import Form from './Form';
import './App.scss'
import FormTwo from './FormTwo';
import Todo from './Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Appref /> */}
    {/* <All/> */}
    {/* <Form/> */}
    {/* <FormTwo/> */}
    <Todo/>
  </React.StrictMode>
);
