import "./section.css"
import {Bold} from "../Bold/Bold";

function Section({ title, children }) {
    return (
        <div className="section">
            <h1>{title}</h1>
            {children}
        </div>
    );
}

function Subsection({ title, children }) {
    return (
        <div className="subsection">
            <br/><br/>
            <h2>{title}</h2>
            {children}
        </div>
    );
}

function Chapter({children}) {
    return (
        <div>
            <br/><br/>
            <Bold>
                {children}
            </Bold>
            <br/><br/>
        </div>
    );
}

function HDef() {
    return (
      <Chapter>Սահմանում՝</Chapter>
    );
}
function HPro() {
    return (
      <Chapter>Առավելությունները</Chapter>
    );
}
function HCon() {
    return (
      <Chapter>Թերությունները՝</Chapter>
    );
}
function HDec() {
    return (
      <Chapter>Սահմանում՝</Chapter>
    );
}

export {Section, Subsection ,Chapter, HDef, HPro, HCon, HDec};