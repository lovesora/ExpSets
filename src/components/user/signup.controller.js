//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//actions
import { toggleSignup } from '../../redux/actions/ac_modal.js';
import { logged } from '../../redux/actions/ac_user.js';


//view
import SignupView from './mui-signup.js';


//material ui
import Snackbar from 'material-ui/Snackbar';


//restful api
import apis from '../../js/constants/restful-api.js';


class SignupController extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            isOpen: false,
            msg: ''
        }
    }

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
        this.setState({
            msg,
            isOpen: true
        });
        if (result.user) {
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
        return <div>
            <SignupView
                onUsernameChanged   = {this.onUsernameChanged.bind(this)}
                usernameError       = {this.state.usernameError}
                onEmailChanged      = {this.onEmailChanged.bind(this)}
                emailError          = {this.state.emailError}
                onPwChanged         = {this.onPwChanged.bind(this)}
                pwError             = {this.state.pwError}
                onClickSignup       = {this.onClickSignup.bind(this)}
            />
            <Snackbar
              open              ={this.state.isOpen}
              message           ={this.state.msg}
              autoHideDuration  ={4000}
              bodyStyle         ={{textAlign: 'center'}}
            />
        </div>;
    }
}

let mapStateToProps = state => {
    return {};
};

let mapDispatchToProps = dispatch => bindActionCreators({ toggleSignup, logged }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignupController);
