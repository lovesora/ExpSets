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
  //icons
import AcountBoxIcon from 'material-ui/svg-icons/action/account-box';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import LockIcon from 'material-ui/svg-icons/action/lock';
import VerifiedUserIcon from 'material-ui/svg-icons/action/verified-user';


//custom svg icons
import LogoSvgIcon from '../../resources/logo-svg-icon.js';


//verify
import VerifyDiv from '../verify/verification.js';


class Signup extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            values: {
                username: '',
                email: '',
                pw: '',
                verify: ''
            },
            errors: {
                username: '',
                email: '',
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
        $.each(this.state.errors, (k, e) => {
            isPass = isPass && !e;
        })
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
                label = "已有账号？登录"
                primary = {false}
                style = {{
                    marginRight: '8px'
                }}
                onTouchTap = { e => {
                    this.props.toggleSignup(false);
                    this.props.toggleLogin(true);
                }}
            />,
            <RaisedButton
                disabled = {!this.state.isPass}
                label="注册"
                primary={true}
                onTouchTap={e => {
                    let data = {...{}, ...this.state.values};
                    delete data.verify;
                    this.props.onClickSignup(data);
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
                onRequestClose={this.props.toggleSignup}
            >
                <ListItem
                    disabled = {true}
                    leftIcon = {<AcountBoxIcon style={{marginTop: '44px'}}/>}
                    primaryText={
                        <TextField
                            name = 'username'
                            floatingLabelText = "用户名"
                            fullWidth = {true}
                            onChange = {async e => {
                                let username = e.target.value;
                                let errorMsg = await this.props.onUsernameChanged(username);
                                this.setState($.extend(true, this.state, {
                                    values: {
                                        username: username
                                    },
                                    errors: {
                                        username: errorMsg
                                    }
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
                    leftIcon = {<EmailIcon style={{marginTop: '44px'}}/>}
                    primaryText={
                        <TextField
                            name = 'email'
                            floatingLabelText = "邮箱"
                            fullWidth = {true}
                            type = 'email'
                            onChange = {e => {
                                let email = e.target.value;
                                let errorMsg = this.props.onEmailChanged(email);
                                this.setState($.extend(true, this.state, {
                                        values: {
                                            email: email
                                        },
                                        errors: {
                                            email: errorMsg
                                        }
                                    }
                                ), () => {
                                    this.setState({
                                        isPass: this.checkInputData()
                                    });
                                });
                            }}
                            errorText = {this.state.errors.email}
                            value = {this.state.values.email}
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
                            onChange = {e => {
                                let pw = e.target.value;
                                let errorMsg = this.props.onPwChanged(pw);
                                this.setState($.extend(true, this.state, {
                                        values: {
                                            pw: pw
                                        },
                                        errors: {
                                            pw: errorMsg
                                        }
                                    }
                                ), () => {
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
                                maxLength
                                fullWidth = {false}
                                type = "text"
                                onChange = {e => {
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
                            <VerifyDiv id='2' verifyValue={this.state.values.verify} setVerifyErrorMsg={this.checkVerify.bind(this)} />
                        </div>
                    }
                />
            </Dialog>
        </div>;
    }
}

export default muiThemeable()(Signup);
