import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header";

function Apropos() {
  return (
    <>
      <Header page="aboutPage" title="À propos" />
      <section className="">
        <Container>
          <Row>
            <Col sm="12" md="6" className="">
              <div class="eStage-section">
                <img src="images/eStage.png" alt="" />
              </div>
            </Col>
            <Col sm="12" md="6" className="about-text-section">
              <p>
                15 années d’expériences, notre agence est située à Québec, au
                Canada, nous servons sans distinction les stagiaires et les
                entreprises web dans le monde. Nous accordons une grande
                importance à l'environnement de travail de notre équipe. Nous
                estimons important que chacun soit fier de faire partie de
                l'équipe <strong>eStage</strong> : autant pour les stagiaires
                que pour les entreprises qui sont à leur recherche.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section">
        <Container>
          <Row>
            <Col sm="12" md="6" className="about-text-section">
              <div class="about-section-points">
                <div class="">
                  <img
                    src="images/campaign-creators-gMsnXqILjp4-unsplash.jpg"
                    alt=""
                  />
                </div>
                <h3>NOTRE MISSION</h3>
                <p>
                  <strong>eStage</strong> s’épanouie dans le but de vous
                  permettre un passage simple et efficace vers Internet et les
                  technologies informatiques. Pour y arriver, nous n'accordons
                  aucun compromis sur le service à la clientèle et veillons à ce
                  que vous ayez toujours les candidats idéals. Nous misons sur
                  la progression de nos stagiaires, qui eux, deviendront les
                  relèves pour les années à venir, ainsi que la satisfaction de
                  nos entrepreneurs.
                </p>
              </div>
            </Col>
            <Col sm="12" md="6" className="about-text-section">
              <div class="about-section-points">
                <div class="">
                  <img src="images/leon-MUZFKa_mttU-unsplash.jpg" alt="" />
                </div>
                <h3>NOS SERVICES</h3>
                <p>
                  Nous sommes l’intermédiaire entre deux mondes, et apportons
                  nos conseils éclairés sur le choix de vos candidats et du type
                  d’entreprises
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Apropos;
