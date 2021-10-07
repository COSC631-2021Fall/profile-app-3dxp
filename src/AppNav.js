import React, {Component} from "react";
import {Link} from "react-router-dom";

export class AppNav extends Component {

    render() {
        return(
            <div className="App-nav" >
                <ul>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                </ul>
            </div>
        );
    }
}
