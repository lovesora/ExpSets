//material ui
import Divider from 'material-ui/Divider';


//card
import Card from './card.controller.js';


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
            <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>;
    }
}


class CardlistView extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        let cardlist = this.props.cardlistData;
        let cards = cardlist.map(v => {
            return <Card data={v} />
        });

        return <div>
            <div className='row'>
                {cards}
            </div>;
            <Divider />
            <Pagination />
        </div>
    }
}

export default CardlistView;
