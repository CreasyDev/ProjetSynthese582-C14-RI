import React from "react";
import { Badge, ButtonGroup, Button, Form, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import FormInputFeedBackControl from "../../../components/FormInputFeedBackControl";
import offres from "../../../data/jobs";
import secteursActivites from "../../../data/secteursActivites";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
// import { toast } from "react-toastify";

// toast.configure();

const renderSecteursActivites = () => {
  return secteursActivites.map((activite) => {
    return <option value={activite.id}>{activite.titre}</option>;
  });
};

class AjouterOffreDeStage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offreStageId: null,
      isFormValidated: false,
      titre: "",
      ville: "",
      entreprise: "",
      descriptionDetailee: "",
      infoSupplementaires: "",
      dateDebut: "",
      competencesAcquises: "",
      nombreHeuresParSemaine: "",
      dateParution: "",
      secteurActivite: "",
    };

    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const offreStageId = this.props.match.params.id;
    const offre = offres[offreStageId - 1];

    if (!offreStageId) {
    } else {
      this.setState({ offreStageId });
      try {
        const {
          titre,
          auteur,
          descriptionPosteRecherche,
          infoSupplementaires,
          ville,
          dateDebut,
          competencesAcquises,
          nombreHeuresParSemaine,
          dateParution,
          secteurActivite,
        } = offre;
        this.setState({
          titre,
          entreprise: auteur,
          descriptionDetailee: descriptionPosteRecherche,
          infoSupplementaires,
          ville,
          dateDebut,
          competencesAcquises,
          nombreHeuresParSemaine,
          dateParution,
          secteurActivite,
        });
      } catch (error) {
        console.error("error : " + error);
        /* toast.error("Error : aucun identifiant correspondant trouvé.", {
          position: toast.POSITION.TOP_RIGHT,
        });*/
      }
    }
  }

  setFormValidated = (isValidated) => {
    this.setState({ isFormValidated: isValidated });
  };

  handleFormInput = (e, inputId) => {
    switch (inputId) {
      case "titre":
        this.setState({ titre: e.target.value });
        break;
      case "entreprise":
        this.setState({ entreprise: e.target.value });
        break;
      case "descriptionDetailee":
        this.setState({ descriptionDetailee: e.target.value });
        break;
      case "infoSupplementaires":
        this.setState({ infoSupplementaires: e.target.value });
        break;
      case "ville":
        this.setState({ ville: e.target.value });
        break;
      case "dateDebut":
        this.setState({ dateDebut: e.target.value });
        break;
      case "competencesAcquises":
        this.setState({ competencesAcquises: e.target.value });
        break;
      case "nombreHeuresParSemaine":
        this.setState({ nombreHeuresParSemaine: e.target.value });
        break;
      case "dateParution":
        this.setState({ dateParution: e.target.value });
        break;
      case "secteurActivite":
        this.setState({ secteurActivite: e.target.value });
        break;
      default:
        return;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setFormValidated(true);
  };

  renderHeader() {
    return (
      <>
        <div className="title">
          <h4>
            Formulaire d'offre de stage{" "}
            <FontAwesomeIcon icon={faLevelDownAlt} />
          </h4>
          <Nav.Link href="/espace-prive/offres-de-stage">
            <Badge variant="dark" href="/espace-prive/offres-de-stage">
              Retour à la liste des offres de stage
            </Badge>
          </Nav.Link>
        </div>
      </>
    );
  }

  renderForm() {
    const {
      titre,
      entreprise,
      descriptionDetailee,
      infoSupplementaires,
      ville,
      dateDebut,
      competencesAcquises,
      nombreHeuresParSemaine,
      dateParution,
    } = this.state;

    return (
      <Form
        className="modification-fiche-candidat-formulaire"
        noValidate
        validated={this.state.isFormValidated}
        onSubmit={this.handleSubmit}
      >
        <Form.Group>
          <Form.Label>Titre de l'offre de stage*</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entrer le titre de l'offre de stage"
            value={titre}
            onChange={(e) => this.handleFormInput(e, "titre")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer un titre valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Entreprise*</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entrer une entreprise"
            value={entreprise}
            onChange={(e) => this.handleFormInput(e, "entreprise")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer une entreprise valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Secteur d'activité</Form.Label>
          <Form.Control as="select">{renderSecteursActivites()}</Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Ville*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer la ville"
            required
            value={ville}
            onChange={(e) => this.handleFormInput(e, "ville")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer une ville valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date de début du stage*</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date de début"
            required
            value={dateDebut}
            onChange={(e) => this.handleFormInput(e, "dateDebut")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez une date de début valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description détaillée*</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={4}
            placeholder="Description détaillée"
            value={descriptionDetailee}
            onChange={(e) => this.handleFormInput(e, "descriptionDetailee")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre d'heure par semaine*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Nombre d'heure par semaine"
            required
            value={nombreHeuresParSemaine}
            onChange={(e) => this.handleFormInput(e, "nombreHeuresParSemaine")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer un nombre d'heures par semaine valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Compétences acquises*</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={2}
            placeholder="Compétences acquises"
            value={competencesAcquises}
            onChange={(e) => this.handleFormInput(e, "competencesAcquises")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rémunération</Form.Label>
          <Form.Control as="select">
            <option value="oui">Oui</option>
            <option value="non">Non</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Possibilité d'emploi après le stage</Form.Label>
          <Form.Control as="select">
            <option value="oui">Oui</option>
            <option value="non">Non</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Date de parution</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date de parution"
            value={dateParution}
            onChange={(e) => this.handleFormInput(e, "dateParution")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer une date de parution valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Informations supplémentaires</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Informations supplémentaires"
            value={infoSupplementaires}
            onChange={(e) => this.handleFormInput(e, "infoSupplementaires")}
          />
        </Form.Group>
        <div className="float-right">
          <ButtonGroup size="sm" className="card-button">
            <Button variant="light" className="mr-2" href="/espace-prive/offres-de-stage">
              Annuler
            </Button>
            <Button variant="info" type="submit" onClick={this.handleSubmit}>
              Ajouter
            </Button>
          </ButtonGroup>
        </div>
      </Form>
    );
  }

  renderContent() {
    return (
      <div className="fiche-candidat">
        {this.renderHeader()}
        {this.renderForm()}
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default withRouter(AjouterOffreDeStage);
