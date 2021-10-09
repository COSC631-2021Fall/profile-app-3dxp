import "./ExperienceCard.css"
import {useState} from "react";

export default function ExperienceCard(props){
    const [isSelected, toggle] = useState(false);

    const image = props.image && <img className="experience-card-image" src={props.image} alt="Company Logo"/>
    const title = props.title && <span className="experience-card-title">{props.title}</span>
    const range = (props.from && props.until) && <div className="experience-card-range">{props.from} - {props.until}</div>
    const content = props.content && <div className="experience-card-content">{props.content}</div>
    const tags = props.tags && <div className="experience-card-tags">Tags: {props.tags}</div>

    return (
        <div
            className="experience-card"
            style={{backgroundColor:isSelected ? 'green' : 'transparent'}}
            onClick={() => toggle(!isSelected)}
        >
            {image}
            {title}
            {range}
            {content}
            {tags}
        </div>
    );
}

ExperienceCard.defaultProps = {
    image: null,
    title: null,
    content: null,
    from: null,
    until: null,
    tags: null,
}