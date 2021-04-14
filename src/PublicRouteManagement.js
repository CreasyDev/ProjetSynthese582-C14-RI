import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import ListeOffreDeStage from "./pages/ListeOffreDeStage/ListeOffreDeStage";
import Candidats from "./pages/ListeDemamdeDeStage/Candidats";
import Apropos from "./pages/Apropos/Apropos";
import Contact from "./pages/Contact/Contact";
import Inscription from "./pages/Inscription/Inscription";
import Connexion from "./pages/Connexion/Connexion";
import PolitiquesDeConfidentialite from "./pages/PolitiquesDeConfidentialite/PolitiquesDeConfidentialite";
import EspacePriveApp from './espacePrive/App';

function PublicRouteManagement() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/offres-de-stage" component={ListeOffreDeStage} />
          <Route path="/candidats" component={Candidats} />
          <Route path="/apropos" component={Apropos} />
          <Route path="/politique" component={PolitiquesDeConfidentialite} />
          <Route path="/contact" component={Contact} />
          <Route path="/inscription" component={Inscription} />
          <Route path="/connexion" component={Connexion} />
          <Route path="/espace-prive" component={EspacePriveApp} />
        </Switch>
      </Router>
    </div>
  );
}

export default PublicRouteManagement;
