//react router
import { Router, browserHistory } from 'react-router';
import {routes} from './router/routes';


//redux
import { Provider } from 'react-redux';
import createStore from './redux/store/index';


ReactDOM.render((
    <Provider store={createStore()}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
), document.getElementById('app'));
