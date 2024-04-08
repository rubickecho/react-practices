import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Discouraged from './Discouraged.jsx';
import './index.css';
import FunctionComponentRerender from './demos/function-rerender';
import { CComponent, FComponent } from './demos/function-vs-class/index.jsx';
import MyComponentWithBoundary from './demos/error-boundray/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Discouraged /> */}
    {/* <FunctionComponentRerender /> */}
    {/* <CComponent /> */}
    {/* <FComponent /> */}

    <MyComponentWithBoundary></MyComponentWithBoundary>
  </React.StrictMode>
);
