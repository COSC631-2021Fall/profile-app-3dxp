import React, {Component} from 'react';
import "./ExperienceCard.css"

export default class ExperienceCard extends Component {

    static defaultProps = {
        image: null,
        title: null,
        content: null,
        from: null,
        until: null,
        tags: null,
    }

    renderBody(){
        const image = this.props.image && <img className="experience-card-image" src={this.props.image} alt="Company Logo"/>
        const title = this.props.title && <span className="experience-card-title">{this.props.title}</span>
        const range = (this.props.from && this.props.until) && <div className="experience-card-range">{this.props.from} - {this.props.until}</div>
        const content = this.props.content && <div className="experience-card-content">{this.props.content}</div>
        const tags = this.props.tags && <div className="experience-card-tags">Tags: {this.props.tags}</div>

        return (
            <div className="experience-card">
                {image}
                {title}
                {range}
                {content}
                {tags}
            </div>
        );
    }

    render() {
        return this.renderBody();
    }
}
