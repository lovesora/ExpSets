//material ui
import muiThemeable from 'material-ui/styles/muiThemeable';
import { ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
  //icon
import AcountBoxIcon from 'material-ui/svg-icons/action/account-box';


class ProfileView extends React.Component {
    constructor(...args) {
        super(...args);
        this.style = {
            container: {
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: this.props.muiTheme.palette.accent2Color
            },
            p: {
                textAligh: 'center'
            }
        }
    }

    componentDidMount() {
        $('.img-headimg').click(() => {
            $('[name="headImgFile"]').click();
        });

        $('[name="headImgFile"]').change(e => {
            let file = $(e.target).prop('files')[0];

            let data = new FormData();
            data.append('file', file);

            this.props.updateHeadImg(data);
        });

        $('[name="username"]').blur(async e => {
            let username = e.target.value;
            if (username == this.props.username) {
                return;
            }
            let isSuccess = await this.props.updateUsername(username);
            isSuccess || (e.target.value = this.props.username);
        });

        $('[name="email"]').blur(async e => {
            let email = e.target.value;
            if (email == this.props.email) {
                return;
            }
            let isSuccess = await this.props.updateEmail(email);
            isSuccess || (e.target.value = this.props.email);
        });

    }

    render() {
        return <div>
            <div style={this.style.container}>
                <img className='img-headimg' style={{cursor: 'pointer', marginTop: '16px'}} src={this.props.headImgUrl} height='128' />
                <p style={this.style.p}>{this.props.username}</p>
            </div>
            <input type="file" name='headImgFile' style={{display: 'none'}} />
            <div className="row">
                <div className="col s12 m6">
                    <ListItem
                        disabled = {true}
                        leftIcon = {<AcountBoxIcon style={{marginTop: '44px'}}/>}
                        primaryText={
                            <TextField
                                name = 'username'
                                floatingLabelText = "用户名"
                                defaultValue = {this.props.username}
                                fullWidth = {true}
                            />
                        }
                    />
                </div>
                <div className="col s12 m6">
                    <ListItem
                        disabled = {true}
                        leftIcon = {<AcountBoxIcon style={{marginTop: '44px'}}/>}
                        primaryText={
                            <TextField
                                name = 'email'
                                floatingLabelText = "邮箱"
                                defaultValue = {this.props.email}
                                type = 'email'
                                fullWidth = {true}
                            />
                        }
                    />
                </div>
                <div className="col s12 m6">
                    <ListItem
                        disabled = {true}
                        leftIcon = {<AcountBoxIcon style={{marginTop: '44px'}}/>}
                        primaryText={
                            <RadioButtonGroup
                                name="sex"
                                defaultSelected={this.props.isMale ? '1' : '0'}
                                onChange = {async (e, v) => {
                                    let isMale = v;
                                    if (isMale == this.props.isMale) {
                                        return;
                                    }
                                    let isSuccess = await this.props.updateSex(isMale);
                                }}
                                style={{marginTop: '18px'}}
                            >
                                <RadioButton
                                    value="1"
                                    label="男"
                                />
                                <RadioButton
                                    value="0"
                                    label="女"
                                />
                            </RadioButtonGroup>
                        }
                    />
                </div>
                <div className="col s12 m6">
                    <ListItem
                        disabled = {true}
                        leftIcon = {<AcountBoxIcon style={{marginTop: '44px'}}/>}
                        primaryText={
                            <DatePicker
                                hintText="出生日期"
                                locale="zh-CN"
                                autoOk={true}
                                mode="landscape"
                                container="inline"
                                defaultDate={this.props.birth}
                                style = {{marginTop: '22px'}}
                                textFieldStyle = {{width: '100%'}}
                                formatDate = { date => {
                                    return date.toLocaleDateString();
                                }}
                                onChange = {async (e, v) => {
                                    let birth = v.toLocaleDateString();
                                    if (birth == this.props.birth) {
                                        return;
                                    }
                                    let isSuccess = await this.props.updateBirth(birth);
                                }}
                            />
                        }
                    />
                </div>
            </div>
        </div>;
    }
}

export default muiThemeable()(ProfileView);
