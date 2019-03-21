import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import reducers from './reducers';
import Routes from './routes'
import './index.css';
import * as serviceWorker from './serviceWorker';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
   <BrowserRouter>
    <Routes/>
   </BrowserRouter>
  </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
