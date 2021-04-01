import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import ListeOffreDeStage from "./pages/ListeOffreDeStage/ListeOffreDeStage";
import Candidats from "./pages/ListeDemamdeDeStage/Candidats";
import Apropos from "./pages/Apropos/Apropos";
import Contact from "./pages/Contact/Contact";
import PolitiquesDeConfidentialite from "./pages/PolitiquesDeConfidentialite/PolitiquesDeConfidentialite";

function RouteManagement() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/offres-de-stage" component={ListeOffreDeStage} />
          <Route exact path="/candidats" component={Candidats} />
          <Route path="/apropos" component={Apropos} />
          <Route path="/politique" component={PolitiquesDeConfidentialite} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouteManagement;
