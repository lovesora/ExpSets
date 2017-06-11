//view
import SignupView from './signup.view.js';


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


class SignupController extends React.Component {
    srvSignup(data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: apis.user.signup.url,
                type: apis.user.signup.type,
                data: data,
                dataType: 'json',
                success: result => resolve(result),
                error: msg => reject(msg)
            });
        });
    }

    /**
     * @param  {[Object]} data [{username: 'liuxin'}]
     * @return success {isExist}
     */
    srvCheckUsername(data) {
        return new Promise( (resolve, reject) => {
            $.ajax({
                url: apis.user.checkUsername.url,
                type: apis.user.checkUsername.type,
                data: data,
                dataType: 'json',
                success: result => resolve(result),
                error: msg => reject(msg)
            });
        })
    }

    async onClickSignup(data) {
        let result = await this.srvSignup(data);
        let msg = result.error ? console.log(result.error) || '注册失败！' : '注册成功！';
        this.props.openSnackbar(msg);
        if (result.user) {
            Cookies.set('currUser', result.user);
            this.props.toggleSignup(false);
            this.props.logged(result.user);
        }
    }

    async onUsernameChanged(username) {
        let { isExist } = await this.srvCheckUsername({ username });
        let msg = isExist ? '该用户名已存在！' : '';
        return msg;
    }

    onEmailChanged(email) {
        return !new RegExp(/\w+@\w+/).test(email)? '邮箱格式错误！' : '';
    }

    onPwChanged(pw) {
        return pw.length < 8 ? '密码过短！' : '';
    }

    render() {
        return <MuiThemeProvider>
            <SignupView
                isOpen              = {this.props.isOpen}
                toggleLogin         = {this.props.toggleLogin}
                toggleSignup        = {this.props.toggleSignup}
                onUsernameChanged   = {this.onUsernameChanged.bind(this)}
                onEmailChanged      = {this.onEmailChanged.bind(this)}
                onPwChanged         = {this.onPwChanged.bind(this)}
                onClickSignup       = {this.onClickSignup.bind(this)}
            />
        </MuiThemeProvider>;
    }
}

let mapStateToProps = state => {
    let isOpen = state.modal.toggle.openSignup;

    return {
        isOpen
    };
};

let mapDispatchToProps = dispatch => bindActionCreators({ toggleLogin, toggleSignup, logged, openSnackbar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignupController);
