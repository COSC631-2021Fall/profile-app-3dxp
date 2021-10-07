import './App.css';
import {AppHeader} from "./AppHeader";
import {AppNav} from "./AppNav";
import Pages from "./AppRouter";
import {personalInfo} from "./Data";

export default function App() {
  return (
    <div className="App">
        <AppHeader name={personalInfo.name} image={personalInfo.image} />
        <Pages />
    </div>
  );
}
