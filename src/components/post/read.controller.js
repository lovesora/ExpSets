//view
import ReadView from './read.view.js';


//material ui
  //theme provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class ReadController extends React.Component {
    constructor(...args) {
        super(...args);

        let postlist = this.props.postlist;
        let index = postlist.map(v => v.post.id).indexOf(Number(this.props.id));
        let data = postlist[index];

        this.state = {
            data
        };
    }

    render() {
        return <MuiThemeProvider>
            <ReadView data={this.state.data}/>
        </MuiThemeProvider>;
    }
}

let mapStateToProps = state => {
    return {
        postlist: state.post.list.all
    };
};

let mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReadController);
