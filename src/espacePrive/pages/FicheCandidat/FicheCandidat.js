import React from "react";
import {
  Col,
  Row,
  Badge,
  ButtonGroup,
  Button,
  Table,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTimesCircle,
  faLevelDownAlt,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import utilisateurs from "../../../data/utilisateurs";
import FormInputFeedBackControl from "../../../components/FormInputFeedBackControl";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
// import { toast } from "react-toastify";

// toast.configure();

class FicheCandidat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ficheCandidatId: null,
      message: "",
    };

    this.handleMessageInput = this.handleMessageInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const ficheCandidatId = this.props.match.params.id;
    if (ficheCandidatId) this.setState({ ficheCandidatId });
  }

  setFormValidated = (isValidated) => {
    this.setState({ isFormValidated: isValidated });
  };

  handleMessageInput = (e) => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setFormValidated(true);
  };

  renderContent() {
    const { ficheCandidatId, message } = this.state;

    const utilisateur = utilisateurs[ficheCandidatId - 1];
    if (!utilisateur) return null;

    return (
      <div className="fiche-candidat">
        <div className="title">
          <h4>
            Fiche du candidat <FontAwesomeIcon icon={faLevelDownAlt} />
          </h4>
          <Badge variant="dark">Retour à la liste</Badge>
        </div>
        <div className="action-buttons">
          <ButtonGroup className="mr-2 float-right">
            <Button variant="light" className="mr-3" size="sm" href={`/espace-prive/modifier-candidat/${utilisateur.id}`}>
              <FontAwesomeIcon icon={faEdit} color="green" /> Modifier
            </Button>
            <Button variant="light" size="sm">
              <FontAwesomeIcon icon={faTimesCircle} color="red" /> Supprimer
            </Button>
          </ButtonGroup>
        </div>
        <div className="user-infos">
          <div className="user-name-title">
            <FontAwesomeIcon icon={faUserGraduate} />
            <strong>
              {utilisateur.prenom} {utilisateur.nom}
            </strong>
          </div>
          <Table bordered table-vcenter className="user-infos-table">
            <tbody>
              <tr>
                <th>Nom et prénom du stagiaire :</th>
                <td>
                  {utilisateur.prenom} {utilisateur.nom}
                </td>
              </tr>
              <tr>
                <th>Établissement scolaire :</th>
                <td>{utilisateur.etablissementScolaire}</td>
              </tr>
              <tr>
                <th>Programme de formation :</th>
                <td>{utilisateur.description}</td>
              </tr>
              <tr>
                <th>Courriel :</th>
                <td>{utilisateur.courriel}</td>
              </tr>
              <tr>
                <th>Téléphone :</th>
                <td>{utilisateur.telephone}</td>
              </tr>
              <tr>
                <th>Ville :</th>
                <td>{utilisateur.ville}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Form
          noValidate
          validated={this.state.isFormValidated}
          onSubmit={this.handleSubmit}
        >
          <Form.Group>
            <Form.Label>Communiquer avec le candidat</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={8}
              placeholder="Communiquer avec le candidat"
              value={message}
              onChange={this.handleMessageInput}
            />
            <FormInputFeedBackControl feedBackText="Veuillez entrer un message valide." />
          </Form.Group>
          <div class="float-right">
            <Button
              variant="info"
              size="sm"
              type="submit"
              onClick={this.handleSubmit}
            >
              Envoyer
            </Button>
          </div>
        </Form>
        <Row>
          <Col sm="12" className="intership-request"></Col>
        </Row>
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default withRouter(FicheCandidat);
