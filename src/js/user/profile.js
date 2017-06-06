//material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import CProfile from '../../components/profile/profile.js';

class Profile extends React.Component {
    render() {
        return <MuiThemeProvider>
            <CProfile />
        </MuiThemeProvider>;
    }
}

export default Profile;
