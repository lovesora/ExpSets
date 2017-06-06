//react-router
import { browserHistory } from 'react-router';


//material ui
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
//use material-ui theme's viralbes
import muiThemeable from 'material-ui/styles/muiThemeable';


//materialize js
// import 'materialize-css/js/global.js';
// import 'materialize-css/js/forms.js';
// import 'materialize-css/js/chips.js';

class Comment extends React.Component {
    constructor(...args) {
        super(...args);
        if (!Cookies.get('currUser')) {
            browserHistory.push('/');
        }

        this.state = {
            values: {
                content: ''
            },
            errors: {
                content: ''
            }
        }
        this.style = {
            container: {
                margin: '48px 72px'
            },
            title: {
                color: this.props.muiTheme.palette.textColor
            },
            postButton: {
                float: 'right'
            }
        };

    }

    componentWillMount() {}

    componentDidMount() {
        // $(() => {
        //     $('.chips').material_chip({
        //         placeholder: '+标签',
        //         secondaryPlaceholder: '请输入标签',
        //         autocompleteOptions: {
        //             data: {
        //                 'Apple': null,
        //                 'Microsoft': null,
        //                 'Google': null
        //             },
        //             limit: Infinity,
        //             minLength: 1
        //         }
        //     });
        // });

        // $('[name="tags"]').keypress(function(e) {
        //     if (13 == e.keyCode) {
        //         this.value = <Chip>{this.value}</Chip>;
        //     }
        // });

    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {}

    render() {
        return <div style={this.style.container}>
            <h5 style={this.style.title}>回复</h5>
            <TextField
                name = 'content'
                floatingLabelText = "内容"
                fullWidth = {true}
                onChange = {e => {
                }}
                errorText = {this.state.errors.content}
                multiLine={true}
                rows={4}
            />
            <RaisedButton
                label="发布"
                labelPosition="before"
                primary={true}
                style={this.style.postButton}
                containerElement="label"
            >
            </RaisedButton>
        </div>;
    }
}

export default muiThemeable()(Comment);
