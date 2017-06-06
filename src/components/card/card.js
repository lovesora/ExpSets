//material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


import "./card.scss";

import svgSocialCSS3 from '../../assets/icons/social-css3.svg';
import svgSocialHTML5 from '../../assets/icons/social-html5.svg';

class CardItem extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            isOpen: false
        }
    }

    render() {
        const actions = [
          <FlatButton
            label="否"
            primary={true}
            onTouchTap={() => {
                this.setState({
                    isOpen: false
                });
            }}
          />,
          <FlatButton
            label="是"
            primary={true}
            onTouchTap={() => {
                this.setState({
                    isOpen: false
                });
            }}
          />,
        ];

        return <div className="col s12 m6 l4 xl3">
            <MuiThemeProvider>
                <Dialog
                  actions={actions}
                  modal={false}
                  open={this.state.isOpen}
                >
                  确认删除文章？
                </Dialog>
            </MuiThemeProvider>
            <div className="card hoverable">
                <div className="card-img-container card-image">
                    <img className="card-img" src={this.props.titleImgUrl} />
                    <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <div className="divider" style={{margin: "8px 0"}}></div>
                    <div className="chip">
                        <img src={svgSocialCSS3} />css3
                    </div>
                    <div className="chip">
                        <img src={svgSocialHTML5} />html5
                    </div>
                </div>
                <div className="card-action right-align">
                    <a ref={a => {
                        $(a).click(e => {
                            e.preventDefault();
                            this.setState({
                                isOpen: true
                            })
                        });
                    }} className="waves-effect waves-light btn-flat" href='#'>阅读</a>
                </div>
            </div>
        </div>;
    }
}

class Pagination extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return <ul className="pagination center-align">
            <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            <li className="active"><a href="#!">1</a></li>
            <li className="waves-effect"><a href="#!">2</a></li>
            <li className="waves-effect"><a href="#!">3</a></li>
            <li className="waves-effect"><a href="#!">4</a></li>
            <li className="waves-effect"><a href="#!">5</a></li>
            <li className="waves-effect"><a href="#!">6</a></li>
            <li className="waves-effect"><a href="#!">7</a></li>
            <li className="waves-effect"><a href="#!">8</a></li>
            <li className="waves-effect"><a href="#!">9</a></li>
            <li className="waves-effect"><a href="#!">10</a></li>
            <li className="waves-effect"><a href="#!">10</a></li>
            <li className="waves-effect"><a href="#!">11</a></li>
            <li className="waves-effect"><a href="#!">12</a></li>
            <li className="waves-effect"><a href="#!">13</a></li>
            <li className="waves-effect"><a href="#!">14</a></li>
            <li className="waves-effect"><a href="#!">15</a></li>
            <li className="waves-effect"><a href="#!">16</a></li>
            <li className="waves-effect"><a href="#!">17</a></li>
            <li className="waves-effect"><a href="#!">18</a></li>
            <li className="waves-effect"><a href="#!">19</a></li>
            <li className="waves-effect"><a href="#!">20</a></li>
            <li className="waves-effect"><a href="#!">21</a></li>
            <li className="waves-effect"><a href="#!">22</a></li>
            <li className="waves-effect"><a href="#!">23</a></li>
            <li className="waves-effect"><a href="#!">24</a></li>
            <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>;
    }
}

export default class CardList extends React.Component {
    constructor(...args) {
        super(...args);
        this.cardItems = [];
        for (let i = 0; i < 8; i++) {
            let img = require(`../../assets/imgs/img-card-0.jpg`);
            this.cardItems[i] = <CardItem titleImgUrl={img} />;
        }
    }

    render() {
        return <div>
            <div className="row">
                {this.cardItems}
            </div>
            <Pagination />
        </div>;
    }
}
