//view
import CardlistView from './cardlist.view.js';


//material ui
  //theme provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
  //action
import { setPostListAll } from '../../redux/actions/ac_post.js';


//restful api
import apis from '../../server/restful-api.js';


class CardlistController extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            page: 0,
            limit: 8,
            data: {
                count: 0,
                cardList: []
            }
        }

        this.getCardlist({
            page: this.state.page,
            limit: this.state.limit
        });
    }

    srvGetCardlist(data) {
        return new Promise( (resolve, reject) => {
            $.ajax({
                url: apis.post.list.all.url,
                type: apis.post.list.all.type,
                data: data,
                dataType: 'json',
                success: result => resolve(result),
                error: msg => reject(msg)
            });
        });
    }

    async getCardlist(data) {
        let result = await this.srvGetCardlist(data);
        if (Boolean(result)) {
            this.setState({
                data: result
            });
            this.props.setPostListAll(result.cardList);
        }
    }

    render() {
        return <MuiThemeProvider>
            <CardlistView
                cardlistData={this.state.data.cardList}
                count={this.state.data.count}
            />
        </MuiThemeProvider>;
    }
}

let mapStateToProps = state => {
    return {};
};

let mapDispatchToProps = dispatch => bindActionCreators({ setPostListAll }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardlistController);
