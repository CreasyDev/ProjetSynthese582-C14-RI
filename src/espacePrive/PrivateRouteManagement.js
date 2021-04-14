import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import DemandesDeStage from "./pages/DemandesDeStage/DemandesDeStage";
import AjouterOffreDeStage from "./pages/OffresDeStage/AjouterOffreDeStage";
import AjouterDemandeDeStage from "./pages/DemandesDeStage/AjouterDemandeDeStage";
import OffresDeStage from "./pages/OffresDeStage/OffresDeStage";
import Candidats from "./pages/Candidats/Candidats";
import Entreprises from "./pages/Entreprises/Entreprises";
import FicheCandidat from "./pages/FicheCandidat/FicheCandidat";
import ModificationFicheCandidat from "./pages/FicheCandidat/ModificationFicheCandidat";
import ModificationFicheEntreprise from "./pages/Entreprises/ModificationFicheEntreprise";

function PrivateRouteManagement() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/espace-prive" component={Accueil} />
          <Route path="/espace-prive/offres-de-stage" component={OffresDeStage} />
          <Route path="/espace-prive/ajouter-une-offre-de-stage" component={AjouterOffreDeStage} />
          <Route path="/espace-prive/demandes-de-stage" component={DemandesDeStage} />
          <Route path="/espace-prive/ajouter-une-demande-de-stage" component={AjouterDemandeDeStage} />
          <Route path="/espace-prive/candidats" component={Candidats} />
          <Route path="/espace-prive/fiche-candidat/:id" component={FicheCandidat} />
          <Route path="/espace-prive/modifier-candidat/:id" component={ModificationFicheCandidat} />
          <Route path="/espace-prive/modifier-entreprise/:id" component={ModificationFicheEntreprise} />
          <Route path="/espace-prive/entreprises" component={Entreprises} />
          <Route path="/espace-prive/deconnexion" component={Accueil} />
        </Switch>
      </Router>
    </div>
  );
}

export default PrivateRouteManagement;
