//view
import PostView from './post.view.js';


//material ui
  //theme provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//react-router
import { browserHistory } from 'react-router';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
  //action
import { openSnackbar } from '../../redux/actions/ac_snackbar.js';


//restful api
import apis from '../../server/restful-api.js';


class PostController extends React.Component {
    constructor(...args) {
        super(...args);

        if (!Cookies.get('currUser')) {
            browserHistory.push('/');
        }

        this.state = {
            data: {
                title: '',
                tags: [],
                descImg: '',
                content: ''
            },
            uploaded: false,
            descImgFilename: ''
        }
    }

    srvUploadImg(data) {
        return new Promise( (resolve, reject) => {
            $.ajax({
                url: apis.upload.img.url,
                type: apis.upload.img.type,
                data: data,
                cache: false,
                processData: false,
                contentType: false,
                dataType: 'json',
                success: result => resolve(result),
                error: msg => reject(msg)
            });
        });
    }

    srvPost(data) {
        return new Promise( (resolve, reject) => {
            $.ajax({
                url: apis.post.post.url,
                type: apis.post.post.type,
                data: data,
                dataType: 'json',
                success: result => resolve(result),
                error: msg => reject(msg)
            });
        });
    }

    async uploadImg(file) {
        let result = await this.srvUploadImg(file);
        if (result.path) {
            let filename = result.filename;
            let imgUrl = apis.host + '/' + result.destination + result.filename;
            this.setState({
                data: {
                    descImg: imgUrl
                },
                uploaded: true,
                descImgFilename: filename
            });
        }
    }

    async post(data) {
        data.author = Cookies.getJSON('currUser').id;
        data.desc_img = this.state.descImgFilename;
        let result = await this.srvPost(data);
        if (Boolean(result)) {
            this.props.openSnackbar('发布成功！');
            browserHistory.push('/');
        } else {
            this.props.openSnackbar('发布失败！');
        }
    }

    render() {
        return <MuiThemeProvider>
            <PostView
                defaultData={this.state.data}
                uploaded={this.state.uploaded}
                uploadImg={this.uploadImg.bind(this)}
                post={this.post.bind(this)}
            />
        </MuiThemeProvider>;
    }
}

let mapStateToProps = state => {
    return {};
};

let mapDispatchToProps = dispatch => bindActionCreators({ openSnackbar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostController);
