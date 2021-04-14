import React from "react";
import {
  Button,
  Row,
  Col,
  ButtonGroup,
  Image,
  Container,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faAngleDown,
  faBell,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

function TopMenu() {
  return (
    <div className="full-content top-menu">
      <Container>
        <Row>
          <Col sm="12" md="8" className="intership-request">
            <ButtonGroup className="mr-2 float-left">
              <Button variant="outline-secondary" className="mr-3" size="sm" href="/espace-gestion/ajouter-une-offre-de-stage">
                <FontAwesomeIcon icon={faPlus} /> Ajouter une offre de stage
              </Button>
              <Button variant="outline-secondary" size="sm" href="/espace-gestion/ajouter-une-demande-de-stage">
                <FontAwesomeIcon icon={faPlus} /> Ajouter une demande de stage
              </Button>
            </ButtonGroup>
          </Col>
          <Col sm="12" md="4" className="user-infos-and-actions">
            <Row>
              <Col xs={6} md={6}>
                <div className="display-flex-alignment user-top-bar-infos float-right">
                  <div className="user-name-role">
                    <strong>John Doe</strong>
                    <label>Admin</label>
                  </div>
                  <Image
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_178c47f9a49%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_178c47f9a49%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2261.2109375%22%20y%3D%2294.8%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    roundedCircle
                    className=""
                  />
                  <div className="pl-2 pt-2">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                </div>
              </Col>
              <Col xs={6} md={6}>
                <div className="display-flex-alignment float-right">
                  <div className="mr-3 pt-2">
                    <FontAwesomeIcon icon={faBell} color="#bfc3d0" />
                  </div>
                  <div className="mr-3 pt-2"> 
                    <FontAwesomeIcon icon={faSignOutAlt} color="#bfc3d0" />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopMenu;
