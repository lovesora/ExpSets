import './header.scss';
import '../../css/tools.scss';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleLogin } from '../../redux/actions/ac_modal.js';

import resources from '../../js/constants/resouces.js';

class Header extends React.Component {
    constructor(...args) {
        super(...args);
        this.style =  {
            nav: {
                transition: "background-color .375s"
            }
        }
        this.isLogin = false;
    }

    changeBgColor() {
        let winPos = $(window).scrollTop();
        if (winPos) {
            $('.app-header nav').addClass('z-depth-2')
                .removeClass('z-depth-0');
        } else {
            $('.app-header nav').addClass('z-depth-0')
                .removeClass('z-depth-2');
        }
    }

    changeBgColorByCarousel(eleId) {
        let winPos = $(window).scrollTop();
        let carouselPos = $(eleId).height();
        if (winPos && winPos >= carouselPos) {
            $('.app-header nav').addClass('z-depth-2')
                .removeClass('liuxin-bgc--transparent z-depth-0');
        } else if (winPos < carouselPos) {
            $('.app-header nav').addClass('liuxin-bgc--transparent z-depth-0')
                .removeClass('z-depth-2');
        }
    }

    componentWillMount() {
        currUser = Cookies.get('currUser');
        this.isLogin = !!currUser;
    }

    componentDidMount() {
        $(() => {
            $('.app-header__btn-slide-nav').sideNav({
                menuWidth: 300, // Default is 300
                edge: 'right', // Choose the horizontal origin
                closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: true // Choose whether you can drag to open on touch screens
            });

            $('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrainWidth: false, // Does not change width of dropdown to that of the activator
                hover: false, // Activate on hover
                gutter: 0, // Spacing from edge
                belowOrigin: false, // Displays dropdown below the button
                alignment: 'right', // Displays dropdown with edge aligned to the left of button
                stopPropagation: false // Stops event propagation
            });
        });

        $('.app-header__logout').click(() => {
            Cookies.remove('currUser');
            location.href = '/';
        });
    }

    renderLogined() {
        return <div>
            <ul className="right">
                <a href="#" className='dropdown-button' data-activates='dropdown1'><li>
                    <img className="app-header__head-img circle responsive-img" src={resources.img.head} />
                </li>
                <li><i className="material-icons">arrow_drop_down</i></li></a>
            </ul>
            <ul id='dropdown1' className='dropdown-content' style={{width: '180px'}}>
                <li><a href="#!"><i className="material-icons">account_circle</i>个人中心</a></li>
                <li className="divider"></li>
                <li><a className="app-header__logout" ><i className="material-icons">exit_to_app</i>注销</a></li>
            </ul>
        </div>
    }

    renderNotLogin() {
        return <div>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">首页</a></li>
                <li><a href="/post">文章</a></li>
                <li><a href="/qa">问答</a></li>
                <li>
                    <button href="" className="waves-effect waves-light btn" ref={button => {
                        $(button).click(() => {
                            this.props.toggleLogin(true);
                        });
                    }}>登录|注册</button>
                </li>
            </ul>
            <ul className="right hide-on-large-only">
                <li>
                    <span className="waves-effect" ref={button => {
                        $(button).click(() => {
                            this.props.toggleLogin(true);
                        });
                    }} >登录|注册</span>
                </li>
            </ul>
        </div>;
    }

    render() {
        let { changeBgcByEle } = this.props;

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

        return <div>
            <div className="app-header navbar-fixed">
                <nav style={this.style.nav}>
                    <div className="nav-wrapper">
                        <a href="#" data-activates="app-nav__slide-out" className="button-collapse app-header__btn-slide-nav"><i className=" nav-icon-menu material-icons">menu</i></a>
                        <a href="/" className="app-header__logo-link brand-logo">
                            <img src={resources.logo.primary} />
                        </a>
                        { this.isLogin ? this.renderLogined() : this.renderNotLogin()}
                    </div>
                </nav>
            </div>
            <ul id="app-nav__slide-out" className="side-nav">
                <li>
                    <div className="userView">
                        <div className="background"></div>
                        <a href="#"><img className="circle" src={resources.img.head} /></a>
                        <a href="#"><span className="white-text name">liuxin</span></a>
                        <a href="#"><span className="white-text email">475212506@qq.com</span></a>
                    </div>
                </li>
                <li><a href="/"><i className="material-icons">home</i>首页</a></li>
                <li>
                    <div className="divider"></div>
                </li>
                <li><a className="subheader">文章</a></li>
                <li><a href="/post"><i className="material-icons">border_color</i>最新文章</a></li>
                <li>
                    <div className="divider"></div>
                </li>
                <li><a className="subheader">问答</a></li>
                <li><a href="/qa"><i className="material-icons">chat</i>热门提问</a></li>
            </ul>
        </div>;
    }
}

let mapStateToProps = state => {
    return {
        changeBgcByEle: state.header.changeBgc.byEle
    };
};

let mapDispatchToProps = dispatch => bindActionCreators({ toggleLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
