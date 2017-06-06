//react-router
import { browserHistory } from 'react-router';
import { url } from '../../js/constants/routes.js';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleLogin } from '../../redux/actions/ac_modal.js';
import { toggleDrawer } from '../../redux/actions/ac_drawer.js';
import { logged } from '../../redux/actions/ac_user.js';


//components
import DrawerMenu from './mui-drawer.js';


//use material-ui theme's viralbes
import muiThemeable from 'material-ui/styles/muiThemeable';
//material-ui components
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
import LogoSvgIcon from '../../js/resources/logo-svg-icon';


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

    // handleChange = (event, isLogged) => {
    //     this.setState({isLogged: isLogged});
    // };
    // <Toggle
    //   label="isLogged"
    //   defaultToggled={false}
    //   onToggle={this.handleChange}
    //   labelPosition="right"
    //   style={{margin: 20}}
    // />

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
                    iconElementRight = {this.props.isLogged !== false ? <Logged logged={this.props.logged} /> : <Login {...{toggleLogin: this.props.toggleLogin}} />}
                />
                <DrawerMenu />
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        changeBgcByEle: state.header.changeBgc.byEle,
        isLogged: state.user.logged
    };
};

let mapDispatchToProps = dispatch => bindActionCreators({ toggleLogin, toggleDrawer, logged }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(muiThemeable()(Header));
