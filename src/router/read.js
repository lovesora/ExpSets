import Read from '../components/post/read.controller.js';

export default class ReadRoute extends React.Component {
    render() {
        return <div>
                <Read id={this.props.params.id} />
            </div>;
    }
}
