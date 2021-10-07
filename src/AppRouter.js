import {BrowserRouter, Switch, Route } from "react-router-dom"
import {ExperienceList} from "./components/experiencelist/ExperienceList";
import {experience, personalInfo} from "./Data";
import {AboutCard, ContactCard} from "./components/aboutcard/AboutCard";
import {AppNav} from "./AppNav";


export default function Pages() {
    return (
        <BrowserRouter>
            <AppNav />
            <Switch>
                <Route exact path="/">
                    <ExperienceList {...experience} />
                </Route>
                <Route exact path="/experience">
                    <ExperienceList {...experience} />
                </Route>
                <Route exact path="/about" >
                    <AboutCard {...personalInfo} />
                    <ContactCard {...personalInfo} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}