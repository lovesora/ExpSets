//material ui provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//component
import Post from '../../components/post/mui-post.js';


export default React.createClass({
  render() {
    return (
      <div>
        <MuiThemeProvider>
            <Post />
        </MuiThemeProvider>
      </div>
    )
  }
});
