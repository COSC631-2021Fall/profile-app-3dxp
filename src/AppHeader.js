import React, {Component} from "react";

export class AppHeader extends Component {



    render() {
        return(
            <div className="App-header">
                <div className="App-header-image">
                    <img src={this.props.image} alt="Person"/>
                </div>
                <div className="App-header-title">
                    <h1>{this.props.name}</h1>
                </div>
            </div>
        );
    }
}
