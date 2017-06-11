//view
import FABView from './fab.view.js';


//material ui
  //theme provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class FABController extends React.Component {
    render() {
        return <MuiThemeProvider>
            <FABView />
        </MuiThemeProvider>;
    }
}

export default FABController;
