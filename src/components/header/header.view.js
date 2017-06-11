//material ui
  //use material-ui theme's viralbes
import muiThemeable from 'material-ui/styles/muiThemeable';
  //components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
  //material icons
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ExitToAppIcon from 'material-ui/svg-icons/action/exit-to-app';
import AccountCircleIcon from 'material-ui/svg-icons/action/account-circle';


//custom svg icon
import LogoSvgIcon from '../../resources/logo-svg-icon.js';


//react-router
import { browserHistory } from 'react-router';
import { url } from '../../router/routes.js';


class Login extends React.Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton
                {...this.props}
                label="登录 | 注册"
                onTouchTap = {() => {
                    this.props.toggleLogin(true);
                }}
            />
        );
    }
}


class Logged extends React.Component {
    static muiName = 'IconMenu';

    render() {
        return <IconMenu
            {...this.props}
            iconButtonElement = {
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin = {{horizontal: 'right', vertical: 'top'}}
            anchorOrigin = {{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem
                primaryText = "个人中心"
                leftIcon = {<AccountCircleIcon />}
                onTouchTap = {e => {
                    browserHistory.push(url.profile);
                }}
            />
            <MenuItem
                primaryText = "注销"
                leftIcon = {<ExitToAppIcon />}
                onTouchTap = {e => {
                    this.props.logged(false);
                    Cookies.remove('currUser');
                    browserHistory.push(url.home);
                    this.props.openSnackbar('注销成功！');
                }}
            />
      </IconMenu>;
    }
}


class Header extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            zDepth: 2,
            bgc: this.props.muiTheme.palette.transparent,
            position: 'fixed'
        }
        this.style =  {
            AppBar: {
                transition: 'background-color .375s',
                top: '0px'
            }
        }
    }

    changeBgColor() {
        let winPos = $(window).scrollTop();
        if (winPos) {
            this.setState({
                zDepth: 2,
                bgc: this.props.muiTheme.palette.primary1Color,
                position: 'fixed'
            })
        } else {
            this.setState({
                zDepth: 0,
                bgc: this.props.muiTheme.palette.primary1Color,
                position: 'static'
            })
        }
    }

    changeBgColorByCarousel(eleId) {
        let winPos = $(window).scrollTop();
        let carouselPos = $(eleId).height();
        if (winPos && winPos >= carouselPos) {
            this.setState({
                zDepth: 2,
                bgc: this.props.muiTheme.palette.primary1Color
            })
        } else if (winPos < carouselPos) {
            this.setState({
                zDepth: 0,
                bgc: this.props.muiTheme.palette.transparent
            })
        }
    }

    scrollListener(props) {
        let { changeBgcByEle } = props;

        if (!!changeBgcByEle) {
            this.changeBgColorByCarousel(changeBgcByEle);
            //scroll
            $(window).scroll(event => {
                this.changeBgColorByCarousel(changeBgcByEle);
            });
        } else {
            this.changeBgColor();

            //scroll
            $(window).scroll(event => {
                this.changeBgColor();
            });
        }
    }

    componentDidMount() {
        this.scrollListener(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.scrollListener(nextProps);
    }

    render() {
        return (
            <div>
                <AppBar
                    style = {{...this.style.AppBar, backgroundColor: this.state.bgc, position: this.state.position}}
                    zDepth = {this.state.zDepth}
                    title = {<LogoSvgIcon
                                svgStyle = {{
                                    marginTop: '17px',
                                    cursor: 'pointer'
                                }}
                                onTouchTap = {() => {
                                    browserHistory.push(url.home);
                                }}
                                color={this.props.muiTheme.palette.canvasColor}
                            />}
                    onLeftIconButtonTouchTap = {() => {
                        this.props.toggleDrawer(true);
                    }}
                    iconElementRight = {this.props.isLogged !== false ? <Logged logged={this.props.logged} openSnackbar={this.props.openSnackbar} /> : <Login {...{toggleLogin: this.props.toggleLogin}} />}
                />
            </div>
        );
    }
}

export default muiThemeable()(Header);
