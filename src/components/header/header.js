import './header.scss';
import '../../css/tools.scss';
import {Login} from '../user/login.js';
import {Signup} from '../user/signup.js';
import RouteUrls from '../../js/routes/routes.js';

export class Header extends React.Component {
    constructor(...args) {
        super(...args);
    }
    changeBgColor() {
        let winPos = $(window).scrollTop();
        if (winPos) {
            $('nav.app-header__nav').addClass('z-depth-2')
                                    .removeClass('z-depth-0');
        } else {
            $('nav.app-header__nav').addClass('z-depth-0')
                                    .removeClass('z-depth-2');
        }
    }
    changeBgColorByCarousel() {
        let winPos = $(window).scrollTop();
        let carouselPos = $('#home-home__carousel').height();
        if (winPos && winPos >= carouselPos) {
            $('nav.app-header__nav').addClass('z-depth-2')
                                    .removeClass('liuxin-bgc--transparent z-depth-0');
        } else if (winPos < carouselPos){
            $('nav.app-header__nav').addClass('liuxin-bgc--transparent z-depth-0')
                                    .removeClass('z-depth-2');
        }
    }

    componentDidMount() {
        $('.app-header__btn-slide-nav').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });

        //modal
        $('.modal').modal({
            opacity: 0.3
        });

        if (RouteUrls.root == this.props.location.pathname) {
            this.changeBgColorByCarousel();

            //scroll
            $(window).scroll(event => {
                this.changeBgColorByCarousel();
            });
        } else {
            this.changeBgColor();

            //scroll
            $(window).scroll(event => {
                this.changeBgColor();
            });
        }

    }

    render() {
        console.log(this.props);
        return <div>
            <div className="app-header navbar-fixed">
                <nav className="app-header__nav">
                    <div className="nav-wrapper">
                        <a href="#" data-activates="app-nav__slide-out" className="button-collapse app-header__btn-slide-nav"><i className=" nav-icon-menu material-icons">menu</i></a>
                        <a href="#" className="app-header__logo-link brand-logo">
                            <img src="../../assets/imgs/logo.svg" />
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#">首页</a></li>
                            <li><a href="#">文章</a></li>
                            <li><a href="#">问答</a></li>
                            <li>
                                <a className="waves-effect waves-light btn" href="#app-login">登录|注册</a>
                            </li>
                        </ul>
                        <ul className="right hide-on-large-only">
                            <a href="#app-login" className="waves-effect">登录|注册</a>
                        </ul>
                    </div>
                </nav>
            </div>
            <Login id="app-login" signupId= "app-signup" />
            <Signup id="app-signup" loginId="app-login" />
            <ul id="app-nav__slide-out" className="side-nav">
                <li>
                    <div className="userView">
                        <div className="background"></div>
                        <a href="#"><img className="circle" src="../../../assets/imgs/head_img_1.png" /></a>
                        <a href="#"><span className="white-text name">liuxin</span></a>
                        <a href="#"><span className="white-text email">475212506@qq.com</span></a>
                    </div>
                </li>
                <li><a href="#!"><i className="material-icons">home</i>首页</a></li>
                <li>
                    <div className="divider"></div>
                </li>
                <li><a className="subheader">文章</a></li>
                <li><a href="#!"><i className="material-icons">border_color</i>最新文章</a></li>
                <li>
                    <div className="divider"></div>
                </li>
                <li><a className="subheader">问答</a></li>
                <li><a href="#!"><i className="material-icons">chat</i>热门提问</a></li>
            </ul>
        </div>;
    }
}
