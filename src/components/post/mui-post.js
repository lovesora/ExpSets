//react-router
import { browserHistory } from 'react-router';


//material ui
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
//use material-ui theme's viralbes
import muiThemeable from 'material-ui/styles/muiThemeable';


//materialize js
// import 'materialize-css/js/global.js';
// import 'materialize-css/js/forms.js';
// import 'materialize-css/js/chips.js';

class Post extends React.Component {
    constructor(...args) {
        super(...args);
        if (!Cookies.get('currUser')) {
            browserHistory.push('/');
        }

        this.state = {
            values: {
                title: '',
                tags: '',
                content: ''
            },
            errors: {
                title: '',
                tags: '',
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
            uploadButton: {
                verticalAlign: 'middle',
            },
            postButton: {
                float: 'right'
            },
            uploadInput: {
                cursor: 'pointer',
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                width: '100%',
                opacity: 0,
            }
        };

        this.dataSource = ['Javascript', 'Node.js', 'Webpack', 'CSS3', 'HTML5', 'Gulp', 'React'];
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
            <h5 style={this.style.title}>发布文章</h5>
            <TextField
                name = 'title'
                floatingLabelText = "标题"
                fullWidth = {true}
                onChange = {e => {
                }}
                errorText = {this.state.errors.title}
                multiLine={false}
            />
            <AutoComplete
                name='tags'
                hintText="请选择标签"
                filter={AutoComplete.caseInsensitiveFilter}
                dataSource={this.dataSource}
                floatingLabelText="+标签"
                fullWidth={true}
            />
            <RaisedButton
                label="请选择描述图片"
                labelPosition="before"
                primary={true}
                style={this.style.uploadButton}
                containerElement="label"
            >
                <input type="file" style={this.style.uploadInput} />
            </RaisedButton>
            <TextField
                name = 'content'
                floatingLabelText = "内容"
                fullWidth = {true}
                onChange = {e => {
                }}
                errorText = {this.state.errors.content}
                multiLine={true}
                rows={10}
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

export default muiThemeable()(Post);
