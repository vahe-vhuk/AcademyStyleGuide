import './App.css';


import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomeContent from "./pages/src/home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CppContent from "./pages/src/cpp";
import PyContent from "./pages/src/py";
import JavaContent from "./pages/src/java";
import JsContent from "./pages/src/js";
import TsContent from "./pages/src/ts";
import HTMLContent from "./pages/src/html";
import NfContent from "./pages/src/notfound";


function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Header/>
                    <HomeContent/>
                </Route>
                <Route path="/cpp">
                    <Header tittle="C++"/>
                    <CppContent/>
                </Route>
                <Route path="/python">
                    <Header tittle="Python"/>
                    <PyContent/>
                </Route>
                <Route path="/java">
                    <Header tittle="Java"/>
                    <JavaContent/>
                </Route>
                <Route path="/javascript">
                    <Header tittle="JavaScript"/>
                    <JsContent/>
                </Route>
                <Route path="/typescript">
                    <Header tittle="TypeScript"/>
                    <TsContent/>
                </Route>
                <Route path="/html-css">
                    <Header tittle="HTML/CSS"/>
                    <HTMLContent/>
                </Route>
                <Route path="*">
                    <Header/>
                    <NfContent/>
                </Route>
            </Switch>
        </Router>
        <Footer/>
    </div>
  );
}


export default App;
