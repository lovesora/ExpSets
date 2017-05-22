import "./carousel.scss";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { eleFinished } from '../../redux/actions/ac_header.js';

import RouteUrls from '../../js/routes/routes.js';
import imgCarousel_1 from '../../assets/imgs/carousel_1.jpg';
import imgCarousel_2 from '../../assets/imgs/carousel_2.jpg';
import imgCarousel_3 from '../../assets/imgs/carousel_3.jpg';
import imgCarousel_4 from '../../assets/imgs/carousel_4.jpg';
class CarouselItem extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return <div style={{backgroundImage: imgCarousel_1, backgroundPosition: "center", backgroundRepeat: "no-repeat"}} className="carousel-item grey-text" href="#two!">
            <br />
            <br />
            <br />
            <br />
            <h2>Second Panel</h2>
            <p className="grey-text">This is your second panel</p>
        </div>;
    }
}

class Carousel extends React.Component {
    constructor(...args) {
        super(...args);
        this.items = [];
        for (let i = 1; i < 4; i++) {
            this.items[i] = <CarouselItem bgi={imgCarousel_1} />;
        }

        this.style = RouteUrls.root == this.props.location.pathname ? {
            marginTop: "-64px"
        }: {};
    }

    componentDidMount() {
        $('.carousel.carousel-slider').carousel({ fullWidth: true });

        let { eleFinished } = this.props;
        eleFinished('.carousel__container');
    }

    render() {
        return <div className="carousel__container" style={this.style}>
            <div className="carousel carousel-slider center" data-indicators="true">
                {this.items}
            </div>
        </div>;
    }
}

let mapStateToProps = state => {
    return {};
};

let mapDispatchToProps = dispatch => bindActionCreators({ eleFinished }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
