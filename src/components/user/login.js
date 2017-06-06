import '../../css/tools.scss';
import './login.scss';

//react-router
import { browserHistory } from 'react-router';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleLogin, toggleSignup } from '../../redux/actions/ac_modal.js';
import { logged } from '../../redux/actions/ac_user.js';

import Verify from '../../js/tools/Verify.js';

import resources from '../../js/constants/resouces.js';
import urls from '../../js/constants/urls.js';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';

class Login extends React.Component {
    constructor(...args) {
        super(...args);
    }

    srvLogin(data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: urls.user.login.url,
                type: urls.user.login.type,
                data: data,
                dataType: 'json',
                success: result => resolve(result),
                error: msg => reject(msg)
            })
        });
    }

    validInputData() {
        let isPass = true;

        let username = $('#app-login__username').val();
        let pw = $('#app-login__pw').val();
        let code = $('#app-login__verify').val();

        if (!username || !pw || !code) {
            isPass = false;
        }

        $('.app-login form input').each(function() {
            if ($(this).hasClass('invalid')) {
                isPass = false;
            }
        });

        return isPass && { username, pw };
    }

    componentDidMount() {
        $('.modal').modal({
            opacity: 0.3,
            complete: () => {
                this.props.toggleLogin(false);
            }
        });

        //生成验证码
        let verifyCode = new Verify({
            id: 'app-login__verify-code'
        });

        //input 去掉 validate后点击label没反应，只有手动设置focus
        $('.app-login form input').each(function() {
            $(this).find("+ label").click(() => {
                $(this).focus();
            });
        })

        //用户输入验证码后自动验证
        $('#app-login__verify').change(function(e) {
            if (verifyCode.validate($(this).val())) {
                $(this).removeClass('invalid');
                $(this).addClass('valid');
            } else {
                $(this).removeClass('valid');
                $(this).addClass('invalid');
            }
        });

        $('.app-login__btn-login').click(async e => {
            e.preventDefault();
            let data = this.validInputData();
            if (data) {
                $('.app-login__btn-login').tooltip({
                    delay: 10,
                    position: 'top',
                    tooltip: 'OK'
                });
                $('.app-login__btn-login').mouseover();

                try {
                    let { user } = await this.srvLogin(data);
                    if (user) {
                        Cookies.set('currUser', user, {
                            expires: 3,
                            path: '/'
                        });
                        $('.app-login.modal').modal('close');
                        this.props.logged('currUser');
                        browserHistory.push('/');
                    } else {
                        Materialize.toast('用户名或密码错误！', 4000);
                    }
                } catch(e) {
                    console.log(e);
                    Materialize.toast('登录失败！', 4000);
                }
            } else {
                $('.app-login__btn-login').tooltip({
                    delay: 10,
                    position: 'top',
                    tooltip: '请输入正确信息！'
                });
                $('.app-login__btn-login').mouseover();
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen) {
            $('.app-login.modal').modal('open');
        }
    }

    render() {
        return <div className="row liuxin-nom">
            <div className="app-login modal col s10 offset-s1 m8 offset-m2 l6 offset-l3 xl4 offset-xl4">
                <div className="app-login__content modal-content">
                    <h4 className="center"><img src={resources.logo.black} /></h4>
                    <form>
                        <div className="input-field row">
                            <div className="col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="app-login__username" type="text" className="validate" />
                                <label for="app-login__username">用户名</label>
                            </div>
                        </div>
                        <div className="input-field row">
                            <div className="col s12">
                                <i className="material-icons prefix">lock</i>
                                <input id="app-login__pw" type="password" className="validate" />
                                <label for="app-login__pw">密码</label>
                            </div>
                        </div>
                        <div className="input-field row">
                                <div className="col s6" style={{position: 'relative'}}>
                                    <i className="material-icons prefix">verified_user</i>
                                    <input type="text" id="app-login__verify" className="" />
                                    <label for="app-login__verify" data-error="验证码错误" data-success="OK">验证码</label>
                                </div>
                                <div className="col s6">
                                    <div id="app-login__verify-code"></div>
                                </div>
                        </div>
                        <div className="app-login__auxiliary row">
                            <div className="col s12 m6 offset-m1">
                                <MuiThemeProvider>
                                    <Checkbox
                                        label="记住登录？"
                                    />
                                </MuiThemeProvider>
                            </div>
                            <div className="col s8 offset-s4  m4">
                                <a onClick={() => {
                                    this.props.toggleSignup(true);
                                }} className="app-login__signup modal-action modal-close grey-text">没有账号？注册</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a className="app-login__btn-login waves-effect waves-light btn">登录</a>
                    <a className="waves-effect waves-light btn-flat">忘记密码？</a>
                </div>
            </div>
        </div>;
    }
}

let mapStateToProps = state => {
    let isOpen = state.modal.toggle.isLogin;

    return {
        isOpen
    };
};

let mapDispatchToProps = dispatch => bindActionCreators({ toggleLogin, toggleSignup, logged }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
