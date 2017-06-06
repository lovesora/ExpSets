import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import createStore from '../redux/store/index.js';


import {routes} from './constants/routes.js';

ReactDOM.render((
    <Provider store={createStore()}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
), document.getElementById('app'));
