import style from "./carousel.scss";


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { eleFinished } from '../../redux/actions/ac_header.js';


//materialize js
import 'materialize-css/js/global.js';
import 'materialize-css/js/carousel.js';


//server
import API from '../../server/restful-api.js';

class CarouselItem extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return <div style={{backgroundImage: 'url('+this.props.bgi+')', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}} className="carousel-item grey-text" href="#two!">
            <br />
            <br />
            <br />
            <br />
            <h2></h2>
            <p className="grey-text"></p>
        </div>;
    }
}

class Carousel extends React.Component {
    constructor(...args) {
        super(...args);
        this.items = [];
        for (let i = 1; i <= 4; i++) {
            this.items[i] = <CarouselItem bgi={ API.host + "/assets/carousel_" + i + ".jpg"} />;
        }

        this.style = {
            marginTop: "-64px"
        };
    }

    srvGetCarousel(imgPath) {
        return new Promise( (resolve, reject) => {
            $.ajax({
                url: urls.home.carousel.url,
                type: urls.home.carousel.type,
                data: imgPath,
                dataType: 'json',
                success: result => resolve(result),
                error: msg => reject(msg)
            });
        })
    }

    componentDidMount() {
        $(() => {
            $('.carousel.carousel-slider').carousel({ fullWidth: true });
        });

        let { eleFinished } = this.props;
        eleFinished('.' + style['carousel__container']);
    }

    render() {
        return <div className={style['carousel__container']} style={this.style}>
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
