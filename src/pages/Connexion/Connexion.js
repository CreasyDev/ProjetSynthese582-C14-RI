import React from "react";
import { ButtonGroup, Button, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import FormInputFeedBackControl from "../../components/FormInputFeedBackControl";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
import utilisateurs from "../../data/utilisateurs";
// import { toast } from "react-toastify";

// toast.configure();

class Connexion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValidated: false,
      isLogged: false,
      courriel: "",
      password: "",
    };

    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {}

  setFormValidated = (isValidated) => {
    this.setState({ isFormValidated: isValidated });
  };

  handleFormInput = (e, inputId) => {
    switch (inputId) {
      case "courriel":
        this.setState({ courriel: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      default:
        return;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setFormValidated(true);

    const { courriel, password } = this.state;

    const userFound = utilisateurs.filter(
      (utilisateur) =>
        utilisateur.courriel === courriel && utilisateur.motDePasse === password
    );
    if (userFound.length !== 0) {
      this.setState({ isLogged: true });

      // sauvegarde de la session de l'utilisateur dans le localStorage
      localStorage.setItem("isLogged", true);
      localStorage.setItem("user-info", {
        id: userFound.id,
        nom: userFound.nom,
        prenom: userFound.prenom,
      });
    }
  };

  renderForm() {
    const { courriel, password } = this.state;

    return (
      <Form
        className="modification-fiche-candidat-formulaire"
        noValidate
        validated={this.state.isFormValidated}
        onSubmit={this.handleSubmit}
      >
        <Form.Group>
          <Form.Label>Nom d'utilisateur/courriel*</Form.Label>
          <Form.Control
            required
            type="text"
            value={courriel}
            onChange={(e) => this.handleFormInput(e, "courriel")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer un nom d'utilisateur." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mot de passe*</Form.Label>
          <Form.Control
            type="password"
            required
            value={password}
            onChange={(e) => this.handleFormInput(e, "password")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez entrer votre mot de passe." />
        </Form.Group>
        <div className="float-right">
          <ButtonGroup size="sm" className="card-button">
            <Button variant="light" className="mr-2">
              Annuler
            </Button>
            <Button variant="info" type="submit" onClick={this.handleSubmit}>
              Se connecter
            </Button>
          </ButtonGroup>
        </div>
      </Form>
    );
  }

  renderContent() {
    return (
      <>
        <Header page="connexion" title="Connexion" />
        <section className="">
          <Container>{this.renderForm()}</Container>
        </section>
      </>
    );
  }

  render() {
    if (this.state.isLogged) return <Redirect to="/" />;
    return this.renderContent();
  }
}

export default withRouter(Connexion);
