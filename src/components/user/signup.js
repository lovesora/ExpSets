import "../../css/tools.scss";
import "./signup.scss";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleLogin, toggleSignup } from '../../redux/actions/ac_modal.js';

import Verify from '../../js/tools/Verify.js';

import resources from '../../js/constants/resouces.js';
import urls from '../../js/constants/urls.js';

class Signup extends React.Component {
    constructor(...args) {
        super(...args);
    }

    srvSignup(data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: urls.user.signup.url,
                type: urls.user.signup.type,
                data: data,
                dataType: 'json',
                success: result => resolve(result),
                error: msg => reject(msg)
            });
        });
    }

    srvCheckUsername(data) {
        return new Promise( (resolve, reject) => {
            $.ajax({
                url: urls.user.checkUsername.url,
                type: urls.user.checkUsername.type,
                data: data,
                dataType: 'json',
                success: result => resolve(result),
                error: msg => reject(msg)
            });
        })
    }

    /**
     * [validInputData 验证input输入是否合法]
     * @return {[Boolean]} [合法返回true 非法返回false]
     */
    validInputData() {
        let isPass = true;

        let username = $('#app-signup__username').val();
        let email = $('#app-signup__email').val();
        let pw = $('#app-signup__pw').val();
        let verify = $('#app-signup__verify').val();

        if (!username || !email || !pw || !verify) {
            isPass = false;
        }

        $('.app-signup form input').each(function() {
            if ($(this).hasClass('invalid')) {
                isPass = false;
            }
        });

        return isPass && { username, email, pw };
    }

    componentDidMount() {
        //modal初始化
        $('.modal').modal({
            opacity: 0.3,
            complete: () => {
                this.props.toggleSignup(false);
            }
        });

        $('#app-signup__username').change(async () => {
            let { isExist } = await this.srvCheckUsername({
                username: $('#app-signup__username').val()
            });
            if (isExist) {
                $('#app-signup__username').removeClass('valid');
                $('#app-signup__username').addClass('invalid');
            } else {
                $('#app-signup__username').removeClass('invalid');
                $('#app-signup__username').addClass('valid');
            }
        });

        //生成验证码
        let verifyCode = new Verify({
            id: 'app-signup__verify-code'
        });

        //input 去掉 validate后点击label没反应，只有手动设置focus
        $('.app-signup form input').each(function() {
            $(this).find("+ label").click(() => {
                $(this).focus();
            });
        })

        //用户输入验证码后自动验证
        $('#app-signup__verify').change(function(e) {
            if (verifyCode.validate($(this).val())) {
                $(this).removeClass('invalid');
                $(this).addClass('valid');
            } else {
                $(this).removeClass('valid');
                $(this).addClass('invalid');
            }
        });

        //注册按钮点击事件
        $('.app-signup__btn-signup').click(async e => {
            e.preventDefault();
            let data = this.validInputData();
            if (data) {
                $('.app-signup__btn-signup').tooltip({
                    delay: 10,
                    position: 'top',
                    tooltip: 'OK'
                });
                $('.app-signup__btn-signup').mouseover();

                try {
                    let { user } = await this.srvSignup(data);
                    Cookies.set('currUser', user, {
                        expires: 3,
                        path: '/'
                    });
                    $('.app-signup.modal').modal('close');
                    location.href = '/';
                } catch (e) {
                    console.log(e);
                }
            } else {
                $('.app-signup__btn-signup').tooltip({
                    delay: 10,
                    position: 'top',
                    tooltip: '请输入正确信息！'
                });
                $('.app-signup__btn-signup').mouseover();
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen) {
            $('.app-signup.modal').modal('open');
        }
    }

    render() {
        return <div className="row liuxin-nom">
            <div className="app-signup modal col s10 offset-s1 m8 offset-m2 l6 offset-l3 xl4 offset-xl4">
                <div className="modal-content">
                    <h4 className="center"><img src={resources.logo.black} /></h4>
                    <form action="#">
                        <div className="input-field row">
                            <div className="col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input type="text" id="app-signup__username" data-length="10" />
                                <label for="app-signup__username" data-error="该用户名已存在" data-success="OK">用户名</label>
                            </div>
                        </div>
                        <div className="input-field row">
                            <div className="col s12">
                                <i className="material-icons prefix">email</i>
                                <input type="email" id="app-signup__email" className="validate" />
                                <label for="app-signup__email" data-error="邮箱格式错误" data-success="OK">邮箱</label>
                            </div>
                        </div>
                        <div className="input-field row">
                            <div className="col s12">
                                <i className="material-icons prefix">lock</i>
                                <input type="password" id="app-signup__pw" className="validate" />
                                <label for="app-signup__pw" data-error="密码格式错误" data-success="OK">密码</label>
                            </div>
                        </div>
                        <div className="input-field">
                            <div className="row">
                                <div className="col s6" style={{position:'relative'}}>
                                    <i className="material-icons prefix">verified_user</i>
                                    <input type="text" id="app-signup__verify" className="" />
                                    <label for="app-signup__verify" data-error="验证码错误" data-success="OK">验证码</label>
                                </div>
                                <div className="col s6">
                                    <div id="app-signup__verify-code"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a className="app-signup__btn-signup waves-effect waves-light btn">注册</a>
                    <a onClick={() => {
                        this.props.toggleLogin(true);
                    }} className="app-signup__btn-login modal-action modal-close waves-effect waves-light btn-flat">已有账号？登录</a>
                </div>
            </div>
        </div>;
    }
}

let mapStateToProps = state => {
    let isOpen = state.modal.toggle.isSignup;

    return {
        isOpen
    };
};

let mapDispatchToProps = dispatch => bindActionCreators({ toggleLogin, toggleSignup }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
