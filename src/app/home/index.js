import {Header} from "../../components/header/header.js";
import {Carousel} from "../../components/carousel/carousel.js";
import {CardList} from "../../components/card/card.js";
import {Footer} from "../../components/footer/footer.js";
import "./index.scss";

if ($('.home-index')[0]) {
    class CarouselHeader extends Header {
        constructor(...args) {
            super(...args);
        }

        changeBgColor() {
            let winPos = $(window).scrollTop();
            let carouselPos = $('#' + this.props.carouselId).height();
            if (winPos && winPos >= carouselPos) {
                $('nav.app-header__nav').addClass('z-depth-2')
                                        .removeClass('liuxin-bgc--transparent z-depth-0');
            } else if (winPos < carouselPos){
                $('nav.app-header__nav').addClass('liuxin-bgc--transparent z-depth-0')
                                        .removeClass('z-depth-2');
            }
        }
    }

    ReactDOM.render(
        <Carousel id="carousel" />,
        $('.home-index__carousel')[0]
    );

    ReactDOM.render(
        <CarouselHeader carouselId="carousel" />,
        $('.home-index__header')[0]
    );

    ReactDOM.render(
        <CardList />,
        $('.home-index__content')[0]
    );

    ReactDOM.render(
        <Footer />,
        $('.home-index__footer')[0]
    );
}
