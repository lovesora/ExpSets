import style from "./post.scss";

import wangEditor from 'wangeditor';

export class Post extends React.Component {
    constructor(...args) {
        super(...args);
    }

    componentWillMount() {}

    componentDidMount() {
        $(() => {

            var editor = new wangEditor($('#post-post__editor')[0]);
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
        return <div>
            <form>
                <div>
                    <div>
                      <input id="post-post__title" type="text" />
                      <label for="post-post__title">标题</label>
                    </div>
                    <div>
                        <div id="chips-autocomplete">chipsAutocomplete}></div>
                    </div>
                    <div>
                        <div id="post-post__editor">
                            <p>请输入内容...</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>;
    }
}
