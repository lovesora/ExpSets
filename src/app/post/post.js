import {Header} from "../../components/header/header.js";
import {Footer} from "../../components/footer/footer.js";
import {Post} from "../../components/post/post.js";


if ($('.post-post')[0]) {
    ReactDOM.render(
        <Header />,
        $('.post-post__header')[0]
    );
    ReactDOM.render(
        <Post />,
        $('.post-post__content')[0]
    );
    ReactDOM.render(
        <Footer />,
        $('.post-post__footer')[0]
    );
}
