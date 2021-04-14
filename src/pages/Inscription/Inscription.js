import React from "react";
import { Badge, ButtonGroup, Button, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import FormInputFeedBackControl from "../../components/FormInputFeedBackControl";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
// import { toast } from "react-toastify";

// toast.configure();

class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValidated: false,
      isAccountCreated: false,
      login: "",
      courriel: "",
      password: "",
      typeUtilisateur: ""
    };

    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {

  }

  setFormValidated = (isValidated) => {
    this.setState({ isFormValidated: isValidated });
  };

  handleFormInput = (e, inputId) => {
    switch (inputId) {
      case "login":
        this.setState({ login: e.target.value });
        break;
      case "courriel":
        this.setState({ courriel: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      case "typeUtilisateur":
        this.setState({ typeUtilisateur: e.target.value });
        break;
      default:
        return;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setFormValidated(true);

    //this.setState({ isAccountCreated: true });
  };

  renderHeader() {
    return (
      <>
        <div className="title">
          <h4>
            Ajouter une demande de stage{" "}
            <FontAwesomeIcon icon={faLevelDownAlt} />
          </h4>
          <Badge variant="dark">Retour à la liste des demandes de stage</Badge>
        </div>
      </>
    );
  }

  renderForm() {
    const {
      login,
      courriel,
      password,
      typeUtilisateur
    } = this.state;

    return (
      <Form
        className="modification-fiche-candidat-formulaire"
        noValidate
        validated={this.state.isFormValidated}
        onSubmit={this.handleSubmit}
      >
        <Form.Group>
          <Form.Label>Nom d'utilisateur*</Form.Label>
          <Form.Control
            required
            type="text"
            value={login}
            onChange={(e) => this.handleFormInput(e, "login")}
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
        <Form.Group>
          <Form.Label>Courriel*</Form.Label>
          <Form.Control
            type="text"
            required
            value={courriel}
            onChange={(e) => this.handleFormInput(e, "courriel")}
          />
          <FormInputFeedBackControl feedBackText="Veuillez une adresse courriel." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Vous êtes ?*</Form.Label>
          <Form.Control as="select" value={typeUtilisateur}>
            <option value="stagiaire">un stagiaire</option>
            <option value="entreprise">une entreprise</option>
          </Form.Control>
        </Form.Group>
        <div className="float-right">
          <ButtonGroup size="sm" className="card-button">
            <Button variant="light" className="mr-2">
              Annuler
            </Button>
            <Button variant="info" type="submit" onClick={this.handleSubmit}>
              S'inscrire
            </Button>
          </ButtonGroup>
        </div>
      </Form>
    );
  }

  renderContent() {
    return (
      <>
        <Header page="inscription" title="Inscription" />
        <section className="">
          <Container>
            {this.renderForm()}
          </Container>
        </section>
      </>
    );
  }

  render() {
    if (this.state.isAccountCreated) return <Redirect to="/nos-plats" />;
    return this.renderContent();
  }
}

export default withRouter(Inscription);
