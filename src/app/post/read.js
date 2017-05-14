import {Header} from "../../components/header/header.js";
import {Footer} from "../../components/footer/footer.js";
import {BreadCrumbs} from "../../components/breadcrumbs/breadcrumbs.js";
import {Read as PostRead} from "../../components/post/read.js";
import {Rank} from "../../components/rank/rank.js";


if ($('.post-read')[0]) {
    ReactDOM.render(
        <Header />,
        $('.post-read__header')[0]
    );
    ReactDOM.render(
        <BreadCrumbs />,
        $('.post-read__breadcrumbs')[0]
    );
    ReactDOM.render(
        <PostRead />,
        $('.post-read__content-left')[0]
    );
    ReactDOM.render(
        <div>
            <Rank title="Mosted View" />
            <Rank title="Mosted Favor" />
        </div>,
        $('.post-read__content-right')[0]
    );
    ReactDOM.render(
        <Footer />,
        $('.post-read__footer')[0]
    );
}
