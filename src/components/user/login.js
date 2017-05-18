import "../../css/tools.scss";
import "./login.scss";

import svgLogoBlack from '../../assets/imgs/logo_black.svg';

export default class Login extends React.Component {
    constructor(...args) {
        super(...args);
    }

    componentDidMount() {
    }

    signup() {
        $('#' + this.props.id).modal('close');
    }

    render() {
        return <div className="row liuxin-nom">
            <div id={this.props.id} className="app-login modal col s10 offset-s1 m8 offset-m2 l6 offset-l3 xl4 offset-xl4">
                <div className="app-login__content modal-content">
                    <h4 className="center"><img src={svgLogoBlack} /></h4>
                    <form>
                        <div className="input-field">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="app-login__username" type="text" className="validate" />
                            <label for="app-login__username">用户名</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">lock</i>
                            <input id="app-login__pw" type="password" className="validate" />
                            <label for="app-login__pw">密码</label>
                        </div>
                        <div className="app-login__auxiliary row">
                            <div className="col s12 m6 offset-m1">
                                <input type="checkbox" id="app-login__checkbox-remember" />
                                <label for="app-login__checkbox-remember">记住登录？</label>
                            </div>
                            <div className="col s8 offset-s4  m4">
                                <a onClick={this.signup.bind(this)} className="app-login__signup" href={"#"+this.props.signupId} className="grey-text">没有账号？注册</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a className="app-login__btn-login modal-action modal-close waves-effect waves-light btn">登录</a>
                    <a className="waves-effect waves-light btn-flat">忘记密码？</a>
                </div>
            </div>
        </div>;
    }
}
