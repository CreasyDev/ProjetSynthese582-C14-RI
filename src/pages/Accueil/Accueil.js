import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { saveAs } from "file-saver";
import Header from "../../components/Header";
import OfferCard from "../../components/OfferCard";
import AppelActionOffreStage from "../../components/AppelActionOffreStage";
import AppelActionDemandeDeStage from "../../components/AppelActionDemandeDeStage";
import jobs from "../../data/jobs";

const jobOfferList = (jobs, type) => {
  return jobs.map((job) => {
    return (
      <Col sm="12" md="4" className="">
        <OfferCard offer={job} type={type} />
      </Col>
    );
  });
};

function Accueil() {
  var blobData = new Blob([jobs], { type: "application/json" });
  // saveAs(blob, "files/data.json");
  return (
    <>
      <Header page="homePage" />
      <div id="homeContent">
        <section className="home-section-searching-intership">
          <h2>Tu es à la recherche de ton stage de fin d'études?</h2>
          <p>
            C'est facile! parcourt la liste de stages ci-dessous et utilise notre outil de recherche afin de trouver rapidement ce qui correspond à ton besoin.
          </p>
        </section>
        <section>
          <Container>
            <Row>{jobOfferList(jobs)}</Row>
            <div className="button-section">
              <Button variant="danger" href="/offres-de-stage">
                Voir toutes les offres de stage
              </Button>
            </div>
          </Container>
        </section>
        <section>
          <AppelActionOffreStage />
        </section>
        <section className="home-section-looking-for-intership">
          <h2>Votre futur stagiaire se trouve ici.</h2>
          <p>
            Parcourer les différentes demandes de stage et la grande liste de
            candidats à notre disposition.
          </p>
        </section>
        <section>
          <Container>
            <Row>{jobOfferList(jobs, "demande")}</Row>
            <div className="button-section">
              <Button variant="danger" href="/candidats">Voir toutes les demandes</Button>
            </div>
          </Container>
        </section>
        <section>
          <AppelActionDemandeDeStage/>
        </section>
        <section className="home-section-simple-to-use">
          <h2>Facile à utiliser!</h2>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum.Fusce dapibus, tellus ac cursus commodo, tortor.
          </p>
          <img src="images/simple-to-use-show.png" alt="" />
          <div class="call-to-action-buttom">
            <Button href="/inscription" variant="info">
              Inscrivez-vous maintenant!
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Accueil;
