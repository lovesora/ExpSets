//material ui
  //theme provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
  //actioins
import { closeSnackbar } from '../../redux/actions/ac_snackbar.js';


//view
import SnackbarView from './snackbar.view.js';


class SnackbarController extends React.Component {
    render() {
        return <MuiThemeProvider>
            <SnackbarView
                isOpen={this.props.isOpen}
                msg={this.props.msg}
                duration={this.props.duration}
                closeSnackbar={this.props.closeSnackbar}
            />
        </MuiThemeProvider>;
    }
}


let mapStateToProps = state => {
    return {
        isOpen: state.snackbar.isOpen,
        msg: state.snackbar.msg,
        duration: state.snackbar.duration
    };
};

let mapDispatchToProps = dispatch => bindActionCreators({ closeSnackbar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarController);
