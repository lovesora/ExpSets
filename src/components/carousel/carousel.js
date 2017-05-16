import "./carousel.scss";
import RouteUrls from '../../js/routes/routes.js';
class CarouselItem extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return <div style={{background: this.props.bgUrl}} className="carousel-item grey-text" href="#two!">
            <br />
            <br />
            <br />
            <br />
            <h2>Second Panel</h2>
            <p className="grey-text">This is your second panel</p>
        </div>;
    }
}

export class Carousel extends React.Component {
    constructor(...args) {
        super(...args);
        this.items = [];
        for (let i = 1; i < 4; i++) {
            this.items[i] = <CarouselItem bgUrl={"url(../../assets/imgs/carousel_" + i + ".jpg) center no-repeat"} />;
        }

        this.style = RouteUrls.root == this.props.location.pathname ? {
            marginTop: "-64px"
        }: {};
    }

    componentDidMount() {
        $('.carousel.carousel-slider').carousel({ fullWidth: true });
    }

    render() {
        return <div id={this.props.id} className="carousel__container" style={this.style}>
            <div className="carousel carousel-slider center" data-indicators="true">
                {this.items}
            </div>
        </div>;
    }
}
