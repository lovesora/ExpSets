//view
import HeaderView from './header.view.js';


//material ui
  //theme provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
  //actions
import { toggleLogin } from '../../redux/actions/ac_modal.js';
import { toggleDrawer } from '../../redux/actions/ac_drawer.js';
import { logged } from '../../redux/actions/ac_user.js';
import { openSnackbar } from '../../redux/actions/ac_snackbar.js';


class HeaderController extends React.Component {
    render() {
        return <MuiThemeProvider>
            <HeaderView {...this.props} />
        </MuiThemeProvider>;
    }
}

let mapStateToProps = state => {
    return {
        changeBgcByEle: state.header.changeBgc.byEle,
        isLogged: state.user.logged
    };
};

let mapDispatchToProps = dispatch => bindActionCreators({ toggleLogin, toggleDrawer, logged, openSnackbar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderController);
