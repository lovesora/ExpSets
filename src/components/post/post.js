import "./post.scss";
export class Post extends React.Component {
    constructor(...args) {
        super(...args);
    }

    componentWillMount() {}

    componentDidMount() {
        $(() => {
            $('.chips-autocomplete').material_chip({
                placeholder: '+标签',
                secondaryPlaceholder: '请输入标签',
                autocompleteOptions: {
                    data: {
                        'Javascript': null,
                        'Node.js': null,
                        'React.js': null,
                        'Webpack': null,
                        'CSS3': null
                    },
                    limit: Infinity,
                    minLength: 1
                }
            });

            var editor = new wangEditor($('.post-post__editor')[0]);
            editor.config.menuFixed = false;
            wangEditor.config.printLog = false;
            editor.config.codeDefaultLang = 'javascript'
            editor.config.mapAk = 'xipbBxwbkpQbUEzmqYi4LUhWb9fp8SjI';
            editor.create();
        });
    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {}

    render() {
        return <div className="post-post row">
            <form className="col s12">
                <div className="row">
                    <div className="col s12 input-field">
                      <input id="post-post__title" type="text" className="validate" />
                      <label for="post-post__title">标题</label>
                    </div>
                    <div className="col s12 input-field">
                        <div className="chips chips-autocomplete"></div>
                    </div>
                    <div className="col s12 input-field">
                        <div id="post-post__editor" className="post-post__editor">
                            <p>请输入内容...</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <button className="col s3 offset-s8 m2 offset-m9 xl1 offset-xl10 btn waves-effect waves-light" type="submit" name="action">提交
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </form>
        </div>;
    }
}
