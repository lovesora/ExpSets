//material ui
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


//react router
import {Link} from 'react-router';

class FAB extends React.Component {
    constructor(...args) {
        super(...args);
        this.style = {
            position: 'fixed',
            right: '20px',
            bottom: '20px',
            zIndex: 1000
        };
    }

    render() {
        return <div>
            <Link to='/post'>
                <FloatingActionButton mini={true} secondary={true} style={this.style}>
                    <ContentAdd />
                </FloatingActionButton>
            </Link>
        </div>;
    }
}

export default FAB;
