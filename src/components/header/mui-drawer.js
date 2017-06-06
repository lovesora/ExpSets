//react-router
import {Link, IndexLink} from 'react-router';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../redux/actions/ac_drawer.js';
import { eleFinished } from '../../redux/actions/ac_header.js';


//use material-ui theme's viralbes
import muiThemeable from 'material-ui/styles/muiThemeable';


//material ui
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';


//material icons
import EmailIcon from 'material-ui/svg-icons/communication/email';
import HomeIcon from 'material-ui/svg-icons/action/home';
import BookIcon from 'material-ui/svg-icons/action/book';
import HelpIcon from 'material-ui/svg-icons/action/help';


import style from './mui-drawer.scss';

class ActiveLink extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return <Link {...this.props} style={{textDecoration: 'none'}} activeClassName={style['drawer__link--active']} />
    }
}



class DrawerMenu extends React.Component {
    constructor(...args) {
        super(...args);
        this.style = {
            infoContainer: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '48px',
                backgroundColor: this.props.muiTheme.palette.primary2Color
            },
            img: {
                borderRadius: "90px",
                marginTop: '24px',
                marginBottom: '8px'
            },
            p: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: this.props.muiTheme.palette.alternateTextColor
            }
        }
    }

    componentDidMount() {
        $('.'+style['drawer-item']).click(() => {
            this.props.toggleDrawer(false);
            this.props.eleFinished('');
            $('html,body').animate({scrollTop: '0px'}, 618);
        });
    }

    render() {
        // let _this = this;
        // $('.drawer-item').each(function() {
        //     if ($(this).parents('a.drawer__link--active').length > 0) {
        //         $(this).css('color', _this.props.muiTheme.palette.primary1Color);
        //         $(this).find('svg').css('fill', _this.props.muiTheme.palette.primary1Color);
        //     } else {
        //         $(this).css('color', _this.props.muiTheme.palette.primary3Color);
        //         $(this).find('svg').css('fill', _this.props.muiTheme.palette.primary3Color);
        //     }
        // })

        return <div>
            <Drawer
                open = {this.props.isOpen}
                onRequestChange = {this.props.toggleDrawer}
                docked = {false}
            >
                <div style={this.style.infoContainer}>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496252128899&di=e4e735c54b8d997b6985a32359eab92f&imgtype=0&src=http%3A%2F%2Fimages2015.cnblogs.com%2Fblog%2F409917%2F201604%2F409917-20160411220142254-1529522461.jpg" width="64px" height="64px" style={this.style.img} />
                    <p style={this.style.p}><EmailIcon style={{marginRight: '12px'}} color={this.props.muiTheme.palette.alternateTextColor} /><span>475212506@qq.com</span></p>
                </div>
                <IndexLink to='/' style={{textDecoration: 'none'}} activeClassName={style['drawer__link--active']}>
                    <MenuItem
                        className={style['drawer-item']}
                        leftIcon={<HomeIcon />}
                    >
                        首页
                    </MenuItem>
                </IndexLink>
                <ActiveLink to='/read'>
                    <MenuItem
                        className={style['drawer-item']}
                        leftIcon={<BookIcon />}
                    >
                        文章
                    </MenuItem>
                </ActiveLink>
                <ActiveLink to='/qa'>
                    <MenuItem
                        className={style['drawer-item']}
                        leftIcon={<HelpIcon />}
                    >
                        问答
                    </MenuItem>
                </ActiveLink>
            </Drawer>
        </div>;
    }
}

let mapStateToProps = state => {
    return {
        isOpen: state.drawer.isOpen
    };
};

let mapDispatchToProps = dispatch => bindActionCreators({ toggleDrawer, eleFinished }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(muiThemeable()(DrawerMenu));
