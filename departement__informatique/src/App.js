import './App.css';
import React from 'react';
import NoteDetails from "./components/noteDetails";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Notes from "./components/Notes";
import EmploiTemps from './components/EmploiTemps';
function App() {

  return (
      <div>

              <NavBar/>
              <div>
                  <Router>
                  <Switch>
                      <Route path="/Home" component={Home}></Route>
                      <Route path="/TableauAffichage" component={Notes}></Route>
                      <Route path="/EmploiDuTemps" component={EmploiTemps}></Route>
                      <Route path="/NoteDetails" component={NoteDetails}></Route>
                  </Switch>
                  </Router>
              </div>
          <Footer/>
      </div>



  );
}

export default App;
