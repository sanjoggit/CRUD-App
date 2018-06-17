import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/index';
import throttle from 'lodash/throttle';

const store = createStore(allReducers,
   JSON.parse(localStorage.getItem('state')) || undefined,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

store.subscribe(throttle(()=>{
  localStorage.setItem('state', JSON.stringify(store.getState()));
}, 100))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


// ()=>{
//   localStorage.setItem('state', JSON.stringify(store.getState()));
// }
