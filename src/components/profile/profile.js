//react router
import {browserHistory} from 'react-router';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { eleFinished } from '../../redux/actions/ac_header.js';


//material ui
import muiThemeable from 'material-ui/styles/muiThemeable';
import { ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';

import AcountBoxIcon from 'material-ui/svg-icons/action/account-box';


//Server
import API from '../../js/constants/restful-api.js';

class Profile extends React.Component {
    constructor(...args) {
        super(...args);
        if (!Cookies.get('currUser')) {
            browserHistory.push('/');
        }
        this.props.eleFinished('');
        this.style = {
            container: {
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // alignContent: 'center',
                backgroundColor: this.props.muiTheme.palette.accent2Color
            },
            p: {
                textAligh: 'center'
            }
        }
        let currUser = Cookies.get('currUser') ? JSON.parse(Cookies.get('currUser')) : {};

        this.state = {
            username: currUser.username || '',
            email: currUser.email || '',
            isMale: undefined === currUser.isMale ? '1' : currUser.isMale + '',
            birth: currUser.birth || ''
        }
    }

    componentDidMount() {
        $('.img-headimg').click(() => {
            $('[name="btn-headimg"]').click();
        });
    }

    render() {
        return <div>
            <div style={this.style.container}>
                <img className='img-headimg' style={{cursor: 'pointer'}} src={API.host + '/assets/default-head-img.png'} height='128' />
                <p style={this.style.p}>{this.state.username}</p>
            </div>
            <input type="file" name='btn-headimg' style={{display: 'none'}} />
            <div className="row">
                <div className="col s12 m6">
                    <ListItem
                        disabled = {true}
                        leftIcon = {<AcountBoxIcon style={{marginTop: '44px'}}/>}
                        primaryText={
                            <TextField
                                name = 'username'
                                floatingLabelText = "用户名"
                                defaultValue = {this.state.username}
                                fullWidth = {true}
                                onChange = {e => {
                                }}
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
                                defaultValue = {this.state.email}
                                type = 'email'
                                fullWidth = {true}
                                onChange = {e => {
                                }}
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
                                defaultSelected={this.state.isMale}
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
                                mode="landscape"
                                container="inline"
                                defaultValue={this.state.birth}
                                style = {{marginTop: '22px'}}
                                textFieldStyle = {{width: '100%'}}
                            />
                        }
                    />
                </div>
            </div>
        </div>;
    }
}


let mapStateToProps = state => {
    return {};
};

let mapDispatchToProps = dispatch => bindActionCreators({ eleFinished }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(muiThemeable()(Profile));
