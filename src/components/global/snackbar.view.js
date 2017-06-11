//material ui
  //component
import Snackbar from 'material-ui/Snackbar';


class SnackbarView extends React.Component {
    render() {
        return <div>
            <Snackbar
                open              ={this.props.isOpen}
                message           ={this.props.msg}
                autoHideDuration  ={this.props.duration}
                bodyStyle         ={{textAlign: 'center'}}
                onRequestClose    ={reason => {
                    this.props.closeSnackbar();
                }}
            />
        </div>;
    }
}

export default SnackbarView;
