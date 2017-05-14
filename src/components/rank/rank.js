export class Rank extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return <ul className="collection">
            <li className="collection-header center">
                <h4>{this.props.title}</h4></li>
            <li className="collection-item avatar">
                <i className="material-icons circle">send</i>
                <span className="title">Title</span>
                <p>First Line
                    <br /> Second Line
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
            <li className="collection-item avatar">
                <i className="material-icons circle">folder</i>
                <span className="title">Title</span>
                <p>First Line
                    <br /> Second Line
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
            <li className="collection-item avatar">
                <i className="material-icons circle green">insert_chart</i>
                <span className="title">Title</span>
                <p>First Line
                    <br /> Second Line
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
            <li className="collection-item avatar">
                <i className="material-icons circle red">play_arrow</i>
                <span className="title">Title</span>
                <p>First Line
                    <br /> Second Line
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
        </ul>;
    }
}
