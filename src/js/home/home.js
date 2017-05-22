import Carousel from '../../components/carousel/carousel.js';
import CardList from '../../components/card/card.js';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Carousel {...this.props} />
                <CardList />
            </div>
        )
    }
};
