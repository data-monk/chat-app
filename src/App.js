import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Topbar from "./components/layout/Topbar";
import Navbar from "./components/layout/Navbar";
import ChatBox from './components/chatbox/ChatBox';
import Blank from './components/chatbox/Blank'
import "./App.css";
import "./style.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Navbar />
        <Switch>
        <Route exact path='/' component={ChatBox}/>
        <Route exact path='/job' component={Blank}/>
        <Route exact path='/profile' component={Blank}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
