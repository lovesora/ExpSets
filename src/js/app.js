// Material Icons
import 'material-design-icons/iconfont/material-icons.css';


// Global CSS
import '../css/style.scss';


// Materialize CSS
// import 'materialize-css/sass/materialize.scss';
// import 'materialize-css/dist/js/materialize.js';

import 'jquery';


// Components
// import Header from '../components/header/header.js';
// import Login  from '../components/user/login.js';
// import Signup from '../components/user/signup.js';
import Footer from '../components/footer/footer.js';
// import FAB    from '../components/fab/fab.js';


//Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuiHeader from '../components/header/mui-header.js';
import MUILogin from '../components/user/login.controller.js';
import MUISignup from '../components/user/signup.controller.js';
import MUIFAB from '../components/fab/mui-fab.js';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends React.Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <MuiHeader />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <MUILogin />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <MUISignup />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <MUIFAB />
                </MuiThemeProvider>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
