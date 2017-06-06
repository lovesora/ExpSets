import { Link } from 'react-router';

class FABMenu extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return <div className="fixed-action-btn vertical click-to-toggle">
            <a className="btn-floating btn-large">
                <i className="material-icons">menu</i>
            </a>
            <ul>
                <li><Link to='/post' ><a className="btn-floating red"><i className="material-icons">add</i></a></Link></li>
                <li><a className="btn-floating blue"><i className="material-icons">keyboard_arrow_up</i></a></li>
            </ul>
        </div>;
    }
}

export default FABMenu;
