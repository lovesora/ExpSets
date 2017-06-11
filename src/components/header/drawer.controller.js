//view
import DrawerView from './drawer.view.js';


//material ui
  //theme provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
  //actions
import { toggleDrawer } from '../../redux/actions/ac_drawer.js';


class DrawerController extends React.Component {
    render() {
        return <MuiThemeProvider>
            <DrawerView {...this.props} />
        </MuiThemeProvider>;
    }
}

let mapStateToProps = state => {
    return {
        isOpen: state.drawer.isOpen
    };
};

let mapDispatchToProps = dispatch => bindActionCreators({ toggleDrawer }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DrawerController);
