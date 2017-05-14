import "./footer.scss";
export class Footer extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return <footer className="app-footer page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text"><img src="../../assets/imgs/logo.svg" /></h5>
                        <p className="grey-text text-lighten-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                            <a className="app-footer__social-link grey-text text-lighten-3" href="#!">
                                <img height="100%" src="../../assets/imgs/001-github-sign.png" />
                            </a>
                            <a className="app-footer__social-link grey-text text-lighten-3" href="#!">
                                <img src="../../assets/imgs/002-social-google-plus-square-button.png" />
                            </a>
                            <a className="app-footer__social-link grey-text text-lighten-3" href="#!">
                                <img src="../../assets/imgs/003-twitter-logo-on-black-background.png" />
                            </a>
                            <a className="app-footer__social-link grey-text text-lighten-3" href="#!">
                                <img src="../../assets/imgs/004-facebook-logo.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>;
    }
}
