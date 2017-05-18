// Material Icons
import 'material-design-icons/iconfont/material-icons.css';

// Materialize CSS
import 'materialize-css/sass/materialize.scss';
import 'materialize-css/dist/js/materialize.js';

// Global CSS
import '../css/style.scss';

// Components
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';

export default class App extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div>
                <Header {...this.props} />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
