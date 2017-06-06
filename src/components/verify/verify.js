//verify
import Verify from '../../js/tools/Verify.js';

class VerifyDiv extends React.Component {
    constructor(...args) {
        super(...args);
        this.id = 'app-verify-' + this.props.id
    }

    componentDidMount() {
        this.verifyCode = new Verify({
            id: this.id
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.verifyValue != nextProps.verifyValue) {
            if (nextProps.verifyValue.length < 4) {
                nextProps.setVerifyErrorMsg('验证码长度有误！');
            } else if (4 == nextProps.verifyValue.length) {
                if (this.verifyCode.validate(nextProps.verifyValue)) {
                    nextProps.setVerifyErrorMsg('');
                } else {
                    nextProps.setVerifyErrorMsg('验证码错误！');
                }
            }
        }
    }

    render() {
        return <div id={this.id} style={{width: '100px', display: 'inline-block', position: 'absolute', marginTop: '28px', marginLeft: '16px'}}></div>;
    }
}

export default VerifyDiv;
