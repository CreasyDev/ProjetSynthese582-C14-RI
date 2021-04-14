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
          <Route exact path="/espace-gestion" component={Accueil} />
          <Route path="/espace-gestion/offres-de-stage" component={OffresDeStage} />
          <Route path="/espace-gestion/ajouter-une-offre-de-stage" component={AjouterOffreDeStage} />
          <Route path="/espace-gestion/demandes-de-stage" component={DemandesDeStage} />
          <Route path="/espace-gestion/ajouter-une-demande-de-stage" component={AjouterDemandeDeStage} />
          <Route path="/espace-gestion/candidats" component={Candidats} />
          <Route path="/espace-gestion/fiche-candidat/:id" component={FicheCandidat} />
          <Route path="/espace-gestion/modifier-candidat/:id" component={ModificationFicheCandidat} />
          <Route path="/espace-gestion/modifier-entreprise/:id" component={ModificationFicheEntreprise} />
          <Route path="/espace-gestion/entreprises" component={Entreprises} />
          <Route path="/espace-gestion/deconnexion" component={Accueil} />
        </Switch>
      </Router>
    </div>
  );
}

export default PrivateRouteManagement;
