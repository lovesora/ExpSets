//material ui
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


//react router
import {Link} from 'react-router';


//restful api
import apis from '../../server/restful-api.js';


import {url} from '../../router/routes.js';


class CardView extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            expanded: true
        }
        this.style = {
            card: {
                padding: '6px'
            },
            cardText: {
                height: '160px'
            }
        }
    }

    handleExpandChange(expanded) {
        this.setState({
            expanded: expanded
        });
    }

    handleLookingPost() {}

    render() {
        let time = new Date(this.props.data.post.create_at).toLocaleString();
        return <div className='col s12 m6 l3' style={this.style.card}>
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange.bind(this)}>
                <CardHeader
                    title={this.props.data.author.name}
                    subtitle={time}
                    avatar={apis.host + this.props.data.author.head_img}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardMedia
                    expandable={true}
                    overlay={<CardTitle style={{textAlign: 'center'}} title={this.props.data.post.title} />}
                >
                    <img height='200' src={apis.host + this.props.data.post.desc_img} />
                </CardMedia>
                <CardText style={this.style.cardText} expandable={true}>
                    {this.props.data.post.content.slice(0, 110) + '...'}
                </CardText>
                <CardActions>
                    <Link to={url.read + this.props.data.post.id} >
                        <FlatButton label="阅读文章" onTouchTap={this.handleLookingPost.bind(this)} />
                    </Link>
                </CardActions>
            </Card>
        </div>;
    }
}

export default CardView;
