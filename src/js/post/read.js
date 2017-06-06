import {Read as PostRead} from '../../components/post/read.js';


//material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Comment from '../../components/comment/comment.js';


export default React.createClass({
  render() {
    return (
      <div>
        <PostRead />
        <MuiThemeProvider>
            <Comment />
        </MuiThemeProvider>
      </div>
    )
  }
});
