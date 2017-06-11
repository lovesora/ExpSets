import Carousel from '../components/carousel/carousel.js';
import Cardlist from '../components/cardlist/cardlist.controller.js';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { eleFinished } from '../redux/actions/ac_header.js';


class HomeRoute extends React.Component {
    constructor(...args) {
        super(...args);
    }

    componentDidMount() {
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave.bind(this)
        );
    }

    routerWillLeave(nextLocation) {
        this.props.eleFinished('');
    }

    render() {
        return <div>
                <Carousel />
                <Cardlist />
            </div>;
    }
}

let mapStateToProps = state => {
    return {};
};

let mapDispatchToProps = dispatch => bindActionCreators({ eleFinished }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeRoute);
