// Material Icons
import 'material-design-icons/iconfont/material-icons.css';

// Materialize CSS
import 'materialize-css/sass/materialize.scss';
import 'materialize-css/dist/js/materialize.js';

// Global CSS
import '../css/style.scss';

// Components
import Header from '../components/header/header.js';
import Login  from '../components/user/login.js';
import Signup from '../components/user/signup.js';
import Footer from '../components/footer/footer.js';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Login />
                <Signup />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
