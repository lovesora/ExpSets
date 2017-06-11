export default class Footer extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        let imgPath = [
            require('../../assets/imgs/001-github-sign.png'),
            require('../../assets/imgs/002-social-google-plus-square-button.png'),
            require('../../assets/imgs/003-twitter-logo-on-black-background.png'),
            require('../../assets/imgs/004-facebook-logo.png'),
        ]
        const ImgIcons = imgPath.map(img => {
            return <a className="app-footer__social-link grey-text text-lighten-3" href="https://github.com/lovesora">
                <img src={img} />
            </a>
        })
        const Imglogo = require('../../assets/imgs/logo.svg');
        return <footer className="app-footer page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text"><img src={Imglogo} /></h5>
                        <p className="grey-text text-lighten-4">ExpSets是一个基于React技术栈的大学生知识分享平台。</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Contact Me</h5>
                        <ul>
                            <li>
                                <p className="grey-text text-lighten-3">
                                    Email:475212506@qq.com
                                </p>
                            </li>
                            <li>
                                <p className="grey-text text-lighten-3" href="#!">
                                    Tel:18502342464
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row liuxin-nomb">
                        <div className="col s12 m6 center-align">
                            <p>Copyright © 2016 ExpSets</p>
                        </div>
                        <div className="footer-copyright__links-container col s12 m6 center">
                            {ImgIcons}
                        </div>
                    </div>
                </div>
            </div>
        </footer>;
    }
}
