//view
import ProfileView from './profile.view.js';


//material ui
  //theme provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//react router
import {browserHistory} from 'react-router';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
  //action
import { openSnackbar } from '../../redux/actions/ac_snackbar.js';


//restful api
import apis from '../../server/restful-api.js';


class ProfileController extends React.Component {
    constructor(...args) {
        super(...args);
        if (!Cookies.get('currUser')) {
            browserHistory.push('/');
        } else {
            let currUser = Cookies.getJSON('currUser');
            let birth = new Date(currUser.birth);
            console.log(birth);
            this.state = {
                id: currUser.id,
                username: currUser.username,
                email: currUser.email,
                headImgUrl: apis.host + currUser.head_img,
                isMale: undefined === currUser.is_male ? '1' : currUser.is_male,
                birth: birth
            };
        }
    }

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
        });
    }

    srvUpdateUserInfo(data) {
        return new Promise( (resolve, reject) => {
            $.ajax({
                url: apis.user.updateInfo.url,
                type: apis.user.updateInfo.type,
                data: data,
                dataType: 'json',
                success: result => resolve(result),
                error: msg => reject(msg)
            });
        });
    }

    srvUploadHeadImg(data) {
        return new Promise( (resolve, reject) => {
            $.ajax({
                url: apis.upload.img.url,
                type: apis.upload.img.type,
                data: data,
                cache: false,
                processData: false,
                contentType: false,
                dataType: 'json',
                success: result => resolve(result),
                error: msg => reject(msg)
            });
        });
    }

    async updateHeadImg(file) {
        let result = await this.srvUploadHeadImg(file);
        if (result.path) {
            let head_img = result.filename;
            let affectedCount = await this.updateInfo({ head_img });

            if (affectedCount instanceof Array && affectedCount[0] == 1) {
                this.props.openSnackbar('头像修改成功！');
                let currUser = Cookies.getJSON('currUser');
                let headImgUrl = '/' + result.destination + result.filename;
                Cookies.set('currUser', {...currUser, ...{ head_img: headImgUrl }});
                this.setState({ headImgUrl: apis.host + headImgUrl});
                return true;
            } else {
                console.log(affectedCount);
                return false;
            }
        }
    }

    async updateInfo(data) {
        let id = this.state.id;
        let { affectedCount } = await this.srvUpdateUserInfo({ id, data});
        return affectedCount;
    }

    async updateUsername(username) {
        let { isExist } = await this.srvCheckUsername({ username });
        if (isExist) {
            this.props.openSnackbar('该用户名已存在！');
            return false;
        } else {
            let affectedCount = await this.updateInfo({ username });

            if (affectedCount instanceof Array && affectedCount[0] == 1) {
                this.props.openSnackbar('用户名修改成功！');
                let currUser = Cookies.getJSON('currUser');
                Cookies.set('currUser', {...currUser, ...{ username }});
                this.setState({ username });
                return true;
            } else {
                console.log(affectedCount);
                return false;
            }
        }
    }

    async updateEmail(email) {
        if (new RegExp(/\w+@\w+/).test(email)) {
            let affectedCount = await this.updateInfo({ email });

            if (affectedCount instanceof Array && affectedCount[0] == 1) {
                this.props.openSnackbar('邮箱修改成功！');
                let currUser = Cookies.getJSON('currUser');
                Cookies.set('currUser', {...currUser, ...{ email }});
                this.setState({ email });
                return true;
            } else {
                console.log(affectedCount);
                return false;
            }
        } else {
            this.props.openSnackbar('邮箱格式错误！');
            return false;
        }
    }

    async updateSex(isMale) {
        let affectedCount = await this.updateInfo({ is_male: isMale });
        if (affectedCount instanceof Array && affectedCount[0] == 1) {
            this.props.openSnackbar('修改性别成功！');
            let currUser = Cookies.getJSON('currUser');
            Cookies.set('currUser', {...currUser, ...{ is_male: Boolean(isMale) }});
            this.setState({ isMale });
            return true;
        } else {
            console.log(affectedCount);
            return false;
        }
    }

    async updateBirth(birth) {
        let affectedCount = await this.updateInfo({ birth });
        if (affectedCount instanceof Array && affectedCount == 1) {
            this.props.openSnackbar('修改生日成功！');
            let currUser = Cookies.getJSON('currUser');
            Cookies.set('currUser', {...currUser, ...{ birth }});
            return true;
        } else {
            console.log(affectedCount);
            return false;
        }
    }

    render() {
        return <MuiThemeProvider>
            <ProfileView
                {...this.state}
                updateUsername  = {this.updateUsername.bind(this)}
                updateEmail     = {this.updateEmail.bind(this)}
                updateSex       = {this.updateSex.bind(this)}
                updateBirth     = {this.updateBirth.bind(this)}
                updateHeadImg   = {this.updateHeadImg.bind(this)}
            />
        </MuiThemeProvider>;
    }
}


let mapStateToProps = state => {
    return {};
};

let mapDispatchToProps = dispatch => bindActionCreators({ openSnackbar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileController);
