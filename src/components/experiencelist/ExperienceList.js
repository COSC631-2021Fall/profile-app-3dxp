import React, {Component} from 'react';
import "./ExperienceList.css"
import ExperienceCard from "../experiencecard/ExperienceCard";

export class ExperienceList extends Component {

    static defaultProps = {
        cards: [
            {
                title: null,
                content: null,
                from: null,
                until: null,
                tags: null,
            }
        ]
    }

    render() {
        return(
            <div className="experience-list">
                {this.props.cards.map((card) =>
                    <div key={card.title} >
                        <ExperienceCard {...card} />
                    </div>)}
            </div>
        );
    }
}
