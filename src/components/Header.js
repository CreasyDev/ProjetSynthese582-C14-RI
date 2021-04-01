import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Header = ({ page = "homePage", title }) => {
  let pageHeaderClass = "";
  switch (page) {
    case "homePage":
      pageHeaderClass = "standard-header";
      break;
    case "aboutPage":
      pageHeaderClass = "standard-header";
      break;
    case "account-access":
      pageHeaderClass = "standard-header";
      break;
    case "interShipOfferListPage":
      pageHeaderClass = "intership-offer-list-header";
      break;
    case "lookingForIntershipListPage":
      pageHeaderClass = "looking-for-intership-list-header";
      break;
    case "offerIntershipDetailPage":
      pageHeaderClass = "offer-intership-detail-header";
      break;
    default:
      pageHeaderClass = "standard-header";
  }

  const headerClass = "header-bg " + pageHeaderClass;
  const titleHtml = title === undefined ? null : title;
  return (
    <Row>
      <Col sm="12" md="12">
        <header id="home" className={headerClass}>
          <div className="overlay-fluid-block">
            <Container>
              <div className="text-center">
                <div className="home-wrapper">
                  <div className="home-content">
                    <h1>Trouvez votre stage!</h1>
                    <div className="row">
                      <div className="col-xs-12 home-search">
                        <div className="home-contact">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Mot clé"
                            />
                            <input
                              type="submit"
                              className="form-control"
                              value="Rechercher"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="home-header-bottom-h1">{titleHtml}</h1>
              </div>
            </Container>
          </div>
        </header>
      </Col>
    </Row>
  );
};

export default Header;
