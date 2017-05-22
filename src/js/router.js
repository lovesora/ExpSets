import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import createStore from '../redux/store/index.js';

import App from './app.js';
import Home from './home/home.js';
import PostRead from './post/read.js';
import Post from './post/post.js';

import RouteUrls from './routes/routes.js';

ReactDOM.render((
    <Provider store={createStore()}>
        <Router history={browserHistory}>
            <Route path={RouteUrls.root} component={App}>
                <IndexRoute component={Home} />
                <Route path={RouteUrls.post.read} component={PostRead} />
                <Route path={RouteUrls.post.post} component={Post} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
