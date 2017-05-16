import '../css/style.scss';

import {Header} from '../components/header/header.js';
import {Footer} from '../components/footer/footer.js';

export default React.createClass({
  render() {
    return (
        <div>
            <Header {...this.props} />
            {this.props.children}
            <Footer />
        </div>
    );
  }
})
