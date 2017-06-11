//material ui
import muiThemeable from 'material-ui/styles/muiThemeable';
import Chip from 'material-ui/Chip';


class ReadView extends React.Component {
    constructor(...args) {
        super(...args);

        let date = this.props.data.post.create_at;
        this.state = {
            createAt: new Date(date).toLocaleString()
        }
        this.style = {
            container: {
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: this.props.muiTheme.palette.accent2Color
            },
            text: {
                textAligh: 'center'
            },
            chip: {
                marginLeft: '12px'
            },
            chipWrapper: {
                display: 'flex',
                flexDirection: 'row'
            },
            content: {
                margin: '32px'
            }
        }
    }

    render() {
        return <div>
            <div style={this.style.container}>
                <h3 style={this.style.text}>{this.props.data.post.title}</h3>
                <div style={this.style.chipWrapper}>
                    <Chip style={this.style.chip}>{this.props.data.author.name}</Chip>
                    <Chip style={this.style.chip}>{this.state.createAt}</Chip>
                </div>
            </div>
            <pre style={this.style.content}>{this.props.data.post.content}</pre>
        </div>;
    }
}

export default muiThemeable()(ReadView);
