import "../../css/tools.scss";
import "./signup.scss";

import svgLogoBlack from '../../assets/imgs/logo_black.svg';

export default class Signup extends React.Component {
    constructor(...args) {
        super(...args);
    }

    login() {
        $('#' + this.props.id).modal('close');
    }

    render() {
        return <div className="row liuxin-nom">
            <div id={this.props.id} className="app-signup modal col s10 offset-s1 m8 offset-m2 l6 offset-l3 xl4 offset-xl4">
                <div className="modal-content">
                    <h4 className="center"><img src={svgLogoBlack} /></h4>
                    <form action="#">
                        <div className="input-field">
                            <i className="material-icons prefix">account_circle</i>
                            <input type="text" id="app-signup__username" className="validate" data-length="10" />
                            <label for="app-signup__username" data-error="该用户名已存在" data-success="OK">用户名</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">email</i>
                            <input type="email" id="app-signup__email" className="validate" />
                            <label for="app-signup__email" data-error="邮箱格式错误" data-success="OK">邮箱</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">lock</i>
                            <input type="password" id="app-signup__pw" className="validate" />
                            <label for="app-signup__pw" data-error="密码格式错误" data-success="OK">密码</label>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a className="app-signup__btn-signup modal-action modal-close waves-effect waves-light btn">注册</a>
                    <a onClick={this.login.bind(this)} href={"#" + this.props.loginId} className="app-signup__btn-login modal-action modal-close waves-effect waves-light btn-flat">已有账号？登录</a>
                </div>
            </div>
        </div>;
    }
}
