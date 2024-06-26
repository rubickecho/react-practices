import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Discouraged from './Discouraged.jsx';
import './index.css';
import FunctionComponentRerender from './demos/function-rerender';
import { CComponent, FComponent } from './demos/function-vs-class/index.jsx';
import MyComponentWithBoundary from './demos/error-boundray/index.jsx';
import HOCDemo from './demos/hoc/index.jsx';
import StateHookDemo from './demos/hook-useState/index.jsx';
import UseEffectDemo from './demos/hook-useEffect/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Discouraged /> */}
    {/* <FunctionComponentRerender /> */}
    {/* <CComponent /> */}
    {/* <FComponent /> */}

    {/* <MyComponentWithBoundary></MyComponentWithBoundary>

    <HOCDemo data="Hello HOC" />
    <HOCDemo data="" /> */}

    {/* <StateHookDemo /> */}
    <UseEffectDemo></UseEffectDemo>
  </React.StrictMode>
);
