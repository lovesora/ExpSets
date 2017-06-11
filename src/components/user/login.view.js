//material ui
  //use material-ui theme's viralbes
import muiThemeable from 'material-ui/styles/muiThemeable';
  //components
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { ListItem } from 'material-ui/List';
import DatePicker from 'material-ui/DatePicker';
  //icon
import AcountBoxIcon from 'material-ui/svg-icons/action/account-box';
import LockIcon from 'material-ui/svg-icons/action/lock';
import VerifiedUserIcon from 'material-ui/svg-icons/action/verified-user';


//custom svg icon
import LogoSvgIcon from '../../resources/logo-svg-icon';


//verify
import VerifyDiv from '../verify/verification.js';


class Login extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            values:{
                username: '',
                pw: '',
                verify: ''
            },
            errors: {
                username: '',
                pw: '',
                verify: ''
            },
            isPass: false
        }
    }

    checkInputData() {
        let isPass = true;
        $.each(this.state.values, (k, v) => {
            isPass = isPass && !!v;
        });
        $.each(this.state.errors, (k, v) => {
            isPass = isPass && !v;
        });
        return isPass;
    }

    checkVerify(errorMsg) {
        this.setState($.extend(true, this.state, {
            errors: {
                verify: errorMsg
            }
        }), () => {
            this.setState({
                isPass: this.checkInputData()
            });
        });
    }

    render() {
        const actions = [
            <FlatButton
                style = {{
                    marginRight: '8px'
                }}
                onTouchTap = { e => {
                    this.props.toggleLogin(false);
                    this.props.toggleSignup(true);
                }}
                label = "没有账号？注册"
                primary = {false}
            />,
            <RaisedButton
                disabled = {!this.state.isPass}
                label="登录"
                primary={true}
                onTouchTap={e => {
                    let data = {...{}, ...this.state.values};
                    delete data.verify;
                    this.props.onClickLogin(data);
                }}
            />,
        ];
        return <div>
            <Dialog
                title= {<LogoSvgIcon bgc={this.props.muiTheme.palette.accent2Color} svgStyle={{marginTop: '16px', marginBottom: '16px'}}/>}
                actions={actions}
                modal={false}
                autoScrollBodyContent = {true}
                bodyStyle = {{border: 0}}
                open={this.props.isOpen}
                onRequestClose={this.props.toggleLogin}
            >
                <ListItem
                    disabled = {true}
                    leftIcon = {<AcountBoxIcon style={{marginTop: '44px'}}/>}
                    primaryText={
                        <TextField
                            name = 'username'
                            floatingLabelText = "用户名"
                            fullWidth = {true}
                            onChange = {e => {
                                let username = e.target.value;
                                this.setState($.extend(true, this.state, {
                                    values: { username }
                                }), () => {
                                    this.setState({
                                        isPass: this.checkInputData()
                                    });
                                });
                            }}
                            errorText = {this.state.errors.username}
                            value = {this.state.values.username}
                        />
                    }
                />
                <ListItem
                    disabled = {true}
                    leftIcon = {<LockIcon style={{marginTop: '44px'}}/>}
                    primaryText={
                        <TextField
                            name = 'pw'
                            floatingLabelText = "密码"
                            fullWidth = {true}
                            type = "password"
                            onChange = { e => {
                                let pw = e.target.value;
                                this.setState($.extend(true, this.state, {
                                    values: { pw }
                                }), () => {
                                    this.setState({
                                        isPass: this.checkInputData()
                                    });
                                });
                            }}
                            errorText = {this.state.errors.pw}
                            value = {this.state.values.pw}
                        />
                    }
                />
                <ListItem
                    disabled = {true}
                    leftIcon = {<VerifiedUserIcon style={{marginTop: '44px'}}/>}
                    primaryText={
                        <div>
                            <TextField
                                name = 'verify'
                                floatingLabelText = "验证码"
                                fullWidth = {false}
                                type = "text"
                                onChange = { e => {
                                    let verify = e.target.value;
                                    if (verify.length > 4)
                                        return;
                                    this.setState($.extend(true, this.state, {
                                        values: { verify }
                                    }));
                                }}
                                errorText = {this.state.errors.verify}
                                value = {this.state.values.verify}
                            />
                            <VerifyDiv id='1' verifyValue={this.state.values.verify} setVerifyErrorMsg={this.checkVerify.bind(this)} />
                        </div>
                    }
                />
            </Dialog>
        </div>;
    }
}

export default muiThemeable()(Login);
