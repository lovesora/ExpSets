export class BreadCrumbs extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return <nav>
            <div className="nav-wrapper">
                <div className="col s12">
                    <a href="#!" className="breadcrumb">首页</a>
                    <a href="#!" className="breadcrumb">文章</a>
                    <a href="#!" className="breadcrumb">First Post</a>
                </div>
            </div>
        </nav>;
    }
}
