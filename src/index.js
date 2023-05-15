import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App'
import { Provider } from 'react-redux' // ays componenty kmiacni mer redux-y reacti naxadrjjalnerin
// ev chi yentarki popoxutyan 
import {store} from './redux/store' //import enq arel store-y store.js-ic


const contanier = document.getElementById('root')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)





// react redux-i gradaranic kanchum enq provaydery,
// vori store hatkutyany talis enq mer stexcac store-y: U patatum enq mer glxavor componnenty(app-y)