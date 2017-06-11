//view
import CardView from './card.view.js';


//material ui
  //theme provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class CardController extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            data: this.props.data
        };
    }

    render() {
        return <MuiThemeProvider>
            <CardView
                data={this.state.data}
            />
        </MuiThemeProvider>;
    }
}

export default CardController;
