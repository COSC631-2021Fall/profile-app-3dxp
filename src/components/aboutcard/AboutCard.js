import React, {useEffect} from 'react';
import "./AboutCard.css"

export function AboutCard(props) {

    return(
        <div className="about-card">
            <span>Country: {props.country}</span>
            <span>Time Zone: {props.timeZone}</span>
        </div>
    );
}

AboutCard.defaultProps = {
    country: null,
    timezone: null
}

export function ContactCard(props){
    useEffect(() => document.title = `Contact Me @ ${props.phone}`)
    return (
        <div className="contact-card">
            <span>Phone: {props.phone}</span>
            <span>E-Mail: {props.email}</span>
        </div>
    );
}

ContactCard.defaultProps = {
    phone: null,
    email: null,
}