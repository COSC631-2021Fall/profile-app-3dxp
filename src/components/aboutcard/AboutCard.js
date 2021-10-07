import React, {Component} from 'react';
import "./AboutCard.css"

export class AboutCard extends Component {

    static defaultProps = {
        country: null,
        timeZone: null
    }

    render() {
        return(
            <div className="about-card">
                <span>Country: {this.props.country}</span>
                <span>Time Zone: {this.props.timeZone}</span>
            </div>
        );
    }
}

export class ContactCard extends Component {

    static defaultProps = {
        phone: null,
        email: null,
    }
    render(){
        return (
            <div className="contact-card">
                <span>Phone: {this.props.phone}</span>
                <span>E-Mail: {this.props.email}</span>
            </div>
        );
    }
}
