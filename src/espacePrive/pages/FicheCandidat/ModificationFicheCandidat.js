import React from "react";
import { Badge, ButtonGroup, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import FormInputFeedBackControl from "../../../components/FormInputFeedBackControl";
import {
  recupererDonneesUtilisateurs,
  modifierUtilisateur,
} from "../../../helper/crud";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
// import { toast } from "react-toastify";

// toast.configure();

class ModificationFicheCandidat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ficheCandidatId: null,
      isUserUpdated: false,
      nom: "",
      prenom: "",
      etablissementScolaire: "",
      description: "",
      courriel: "",
      telephone: "",
      ville: "",
    };

    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const ficheCandidatId = this.props.match.params.id;
    const utilisateur = recupererDonneesUtilisateurs()[ficheCandidatId - 1];

    if (!ficheCandidatId) {
    } else {
      this.setState({ ficheCandidatId });
      try {
        const {
          nom,
          prenom,
          etablissementScolaire,
          description,
          courriel,
          telephone,
          ville,
        } = utilisateur;
        this.setState({
          nom,
          prenom,
          etablissementScolaire,
          description,
          courriel,
          telephone,
          ville,
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
      case "nom":
        this.setState({ nom: e.target.value });
        break;
      case "prenom":
        this.setState({ prenom: e.target.value });
        break;
      case "etablissementScolaire":
        this.setState({ etablissementScolaire: e.target.value });
        break;
      case "description":
        this.setState({ description: e.target.value });
        break;
      case "courriel":
        this.setState({ courriel: e.target.value });
        break;
      case "telephone":
        this.setState({ telephone: e.target.value });
        break;
      case "ville":
        this.setState({ ville: e.target.value });
        break;
      default:
        return;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setFormValidated(true);

    const {
      nom,
      prenom,
      etablissementScolaire,
      description,
      courriel,
      telephone,
      ville,
      ficheCandidatId,
    } = this.state;

    const utilisateurModifie = {
      nom,
      prenom,
      etablissementScolaire,
      description,
      courriel,
      telephone,
      ville,
    };

    const status = modifierUtilisateur(ficheCandidatId, utilisateurModifie);
    //if (status) this.setState({ isUserUpdated: true });
  };

  renderHeader() {
    return (
      <>
        <div className="title">
          <h4>
            Modification des informations du candidat{" "}
            <FontAwesomeIcon icon={faLevelDownAlt} />
          </h4>
          <Badge variant="dark">Retour à la fiche du candidat</Badge>
        </div>
      </>
    );
  }

  renderForm() {
    const {
      nom,
      prenom,
      etablissementScolaire,
      description,
      courriel,
      telephone,
      ville,
      ficheCandidatId
    } = this.state;

    return (
      <Form
        className="modification-fiche-candidat-formulaire"
        noValidate
        validated={this.state.isFormValidated}
        onSubmit={this.handleSubmit}
      >
        <Form.Group>
          <Form.Label>Nom du stagiaire*</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entrer le nom"
            value={nom}
            onChange={(e) => this.handleFormInput(e, "nom")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer un nom valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Prénom du stagiaire*</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entrer le prénom"
            value={prenom}
            onChange={(e) => this.handleFormInput(e, "prenom")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer un prénom valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Établissement scolaire</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entrer l'établissement scolaire"
            value={etablissementScolaire}
            onChange={(e) => this.handleFormInput(e, "etablissementScolaire")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer un établissement scolaire valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Programme de formation</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Entrer le programme de formation"
            value={description}
            onChange={(e) => this.handleFormInput(e, "description")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer un programme de formation valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Courriel</Form.Label>
          <Form.Control
            type="mail"
            placeholder="Entrer le courriel"
            required
            value={courriel}
            onChange={(e) => this.handleFormInput(e, "courriel")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer un courriel valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Téléphone</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Entrer le téléphone"
            required
            value={telephone}
            onChange={(e) => this.handleFormInput(e, "telephone")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer un numéro de téléphone valide." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Ville</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer la ville"
            required
            value={ville}
            onChange={(e) => this.handleFormInput(e, "ville")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer une ville valide." />
        </Form.Group>
        <div className="float-right">
          <ButtonGroup size="sm" className="card-button">
            <Button variant="light" className="mr-2" href={`/espace-prive/fiche-candidat/${ficheCandidatId}`}>
              Annuler
            </Button>
            <Button variant="info" type="submit" onClick={this.handleSubmit}>
              Valider
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
    const lienRetour = `/espace-prive/fiche-candidat/${this.state.ficheCandidatId}`;
    if (this.state.isUserUpdated) return <Redirect to={lienRetour} />;
    return this.renderContent();
  }
}

export default withRouter(ModificationFicheCandidat);
