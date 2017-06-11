//material icon
import 'material-design-icons/iconfont/material-icons.css';


//global style
import '../styles/style.scss';


//expose-loader jquery
import 'jquery';


//Material UI
  //tap event
import injectTapEventPlugin from 'react-tap-event-plugin';
  //mui based components
import Header from '../components/header/header.controller.js';
import Drawer from '../components/header/drawer.controller.js';
import Login from '../components/user/login.controller.js';
import Signup from '../components/user/signup.controller.js';
import Footer from '../components/footer/footer.js';

import FAB from '../components/fab/fab.controller.js';

import Snackbar from '../components/global/snackbar.controller.js';
  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


//react-router animation
import ReactCSSTransitionGroup from "react-addons-css-transition-group";



export default class App extends React.Component {
    render() {
        return <div>
            <Header />
            <Drawer />
            <Login />
            <Signup />

            <FAB />
            <Snackbar />
            <ReactCSSTransitionGroup
                transitionName="fadeWrapper"
                transitionEnterTimeout={ 500 }
                transitionLeaveTimeout={ 500 }>
                <div
                    key={ this.props.location.pathname }
                    style={ {position: 'absolute', width: '100%'} }
                >
                    {this.props.children}
                    <Footer />
                </div>
            </ReactCSSTransitionGroup>
        </div>;
    }
}
