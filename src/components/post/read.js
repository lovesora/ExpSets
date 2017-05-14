import "./read.scss";
export class Read extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return <div className="post-read">
            <div className="post-read__title">
                <h3 className="flow-text">webpack多页应用架构系列（一）：一步一步解决架构痛点</h3>
                <div className="chip">
                    <img src="../../assets/icons/social-css3.svg" />css3
                </div>
                <div className="chip">
                    <img src="../../assets/icons/social-html5.svg" />html5
                </div>
                <div className="author chip">
                    By: array_huang
                </div>
                <div className="date chip">2016年09月07日发布</div>
            </div>
            <blockquote className="post-read__quote">
                <p>本文首发于Array_Huang的技术博客——实用至上，非经作者同意，请勿转载。</p>
                <p>原文地址：<a href="https://segmentfault.com/a/1190000006843916">https://segmentfault.com/a/1190000006843916</a></p>
                <p>如果您对本系列文章感兴趣，欢迎关注订阅这里：<a href="https://segmentfault.com/blog/array_huang">https://segmentfault.com/blog/array_huang</a></p>
            </blockquote>
            <div className="divider"></div>
            <div className="post-read__content">
                <section>
                    <h4 className="flow-text">这系列文章讲什么？</h4>
                    <p className="">本系列文章主要介绍如何用webpack这一当前流行的构建工具来设计一个多页应用的架构。请注意，本文并非新手教程，着重点更多是在于提供解决问题的思路，而非手把手带你装逼。</p>
                </section>
                <div className="divider"></div>
                <section>
                    <h4 className="flow-text">作者介绍</h4>
                    <p>本人供职于某互联网物流公司，专职前端，公司虽仍处于创业阶段，但产品线已经拉得挺长的了，因此所碰到的痒点、痛点也不少。我本是PHPer出身，对传统前端茹毛饮血的境况恨之入骨，幸得webpack这一神器，我感觉现在写前端已经跟写PHP差不多了（大误）。</p>
                </section>
                <div className="divider"></div>
                <section>
                    <h4 className="flow-text">示例代码</h4>
                    <p>本人供职于某互联网物流公司，专职前端，公司虽仍处于创业阶段，但产品线已经拉得挺长的了，因此所碰到的痒点、痛点也不少。我本是PHPer出身，对传统前端茹毛饮血的境况恨之入骨，幸得webpack这一神器，我感觉现在写前端已经跟写PHP差不多了（大误）。</p>
                </section>
            </div>
        </div>;
    }
}
