//view
import LoginView from './login.view.js';


//material ui
  //theme provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
  //actions
import { toggleLogin, toggleSignup } from '../../redux/actions/ac_modal.js';
import { logged } from '../../redux/actions/ac_user.js';
import { openSnackbar } from '../../redux/actions/ac_snackbar.js';


//restful api
import apis from '../../server/restful-api.js';


class LoginController extends React.Component {
    srvLogin(data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: apis.user.login.url,
                type: apis.user.login.type,
                data: data,
                dataType: 'json',
                success: result => resolve(result),
                error: msg => reject(msg)
            });
        });
    }

    async onClickLogin(data) {
        let result = await this.srvLogin(data);
        let msg = result.error ? console.log(result.error) || '登录失败！' : '';
        if (!msg) {
            let { user } = result;
            if (!user) {
                msg = '密码错误！请重新输入密码';
            } else {
                msg = '登录成功！';
                Cookies.set('currUser', user);
                this.props.toggleLogin(false);
                this.props.logged(!!user);
            }
        }
        this.props.openSnackbar(msg);
    }

    render() {
        return <MuiThemeProvider>
            <LoginView
                onClickLogin    = {this.onClickLogin.bind(this)}
                toggleLogin     = {this.props.toggleLogin}
                toggleSignup    = {this.props.toggleSignup}
                isOpen          = {this.props.isOpen}
            />
        </MuiThemeProvider>;
    }
}

let mapStateToProps = state => {
    let isOpen = state.modal.toggle.openLogin;

    return {
        isOpen
    };
};

let mapDispatchToProps = dispatch => bindActionCreators({ toggleLogin, toggleSignup, logged, openSnackbar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginController);
