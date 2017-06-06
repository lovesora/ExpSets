//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//actions
import { toggleLogin } from '../../redux/actions/ac_modal.js';
import { logged } from '../../redux/actions/ac_user.js';


//view
import LoginView from './mui-login.js';


//material ui
import Snackbar from 'material-ui/Snackbar';


//restful api
import apis from '../../js/constants/restful-api.js';


class LoginController extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            isOpen: false,
            msg: ''
        }
    }

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
        this.setState({
            msg,
            isOpen: true
        });
    }

    render() {
        return <div>
            <LoginView
                onClickLogin       = {this.onClickLogin.bind(this)}
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

let mapDispatchToProps = dispatch => bindActionCreators({ toggleLogin, logged }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginController);
