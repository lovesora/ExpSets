//material ui
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
//use material-ui theme's viralbes
import muiThemeable from 'material-ui/styles/muiThemeable';


class Post extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            descImgWrapper: {
                display: 'none'
            },
            // { key: 0, label: 'Angular' }
            chipData: this.props.defaultData.tags
        };

        this.style = {
            container: {
                margin: '48px 72px'
            },
            title: {
                color: this.props.muiTheme.palette.textColor
            },
            chipWrapper: {
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: '14px'
            },
            chip: {
                margin: 4,
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

    componentDidMount() {
        $('input[name="file"]').change(e => {
            let file = $(e.target).prop('files')[0];

            let data = new FormData();
            data.append('file', file);

            this.props.uploadImg(data);
        });
    }

    handleRequestChipDelete(key) {
        let chipData = this.state.chipData;
        const chipToDelete = chipData.map((chip) => chip.key).indexOf(key);
        chipData.splice(chipToDelete, 1);
        this.setState({chipData: chipData});
    }

    renderChip(data) {
        return <Chip
            key={data.key}
            onRequestDelete={() => this.handleRequestChipDelete(data.key)}
            style={this.style.chip}
        >
            {data.label}
        </Chip>;
    }

    handleTapPost(e) {
        let title = this.title;
        let tags = this.state.chipData.map(data => data.label);
        let content = this.content;
        let data = { title, tags, content };
        this.props.post(data);
    }

    render() {
        return <div style={this.style.container}>
            <h4 style={this.style.title}>发布文章</h4>
            <TextField
                name = 'title'
                floatingLabelText = "标题"
                fullWidth = {true}
                onChange = {e => {
                    this.title = e.target.value;
                }}
                multiLine={false}
                defaultValue={this.props.defaultData.title}
            />
            <div style={this.style.chipWrapper}>
                {this.state.chipData.map(this.renderChip, this)}
            </div>
            <AutoComplete
                name='tags'
                hintText="请选择标签"
                filter={AutoComplete.caseInsensitiveFilter}
                dataSource={this.dataSource}
                onNewRequest={(v, k) => {
                    let chipData = this.state.chipData;
                    let key = chipData.length;
                    chipData.push({
                        key,
                        label: v
                    })
                    this.setState({ chipData: chipData });
                    $('input[name="tags"]').val('');
                }}
                floatingLabelText="+标签"
                fullWidth={true}
            />
            <div style={{
                display: this.props.uploaded ? 'flex' : 'none'
            }}>
                <img height="200" src={this.props.defaultData.descImg} />
            </div>
            <RaisedButton
                label="请选择描述图片"
                labelPosition="before"
                primary={true}
                style={this.style.uploadButton}
                containerElement="label"
            >
                <input type="file" name="file" style={this.style.uploadInput} />
            </RaisedButton>
            <TextField
                name = 'content'
                floatingLabelText = "内容"
                defaultValue={this.props.defaultData.content}
                fullWidth = {true}
                onChange = {e => {
                    this.content = e.target.value;
                }}
                multiLine={true}
                rows={10}
            />
            <RaisedButton
                label="发布"
                labelPosition="before"
                primary={true}
                style={this.style.postButton}
                containerElement="label"
                onTouchTap={this.handleTapPost.bind(this)}
            >
            </RaisedButton>
        </div>;
    }
}

export default muiThemeable()(Post);
