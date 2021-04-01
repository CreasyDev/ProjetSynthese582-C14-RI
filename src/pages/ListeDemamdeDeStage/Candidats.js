import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import Header from "../../components/Header";
import OfferCard from "../../components/OfferCard";
import AppelActionDemandeDeStage from "../../components/AppelActionDemandeDeStage";
import jobs from "../../data/jobs";

const jobOfferList = (jobs, type) => {
  return jobs.map((job) => {
    return (
      <Col sm="12" md="12" className="">
        <OfferCard offer={job} type={type} />
      </Col>
    );
  });
};

function Candidats() {
  return (
    <>
      <Header page="offreListPage" title="Candidats" />
      <div id="offreListContent">
        <section className="">
          <Container>
            <Row>
              <Col sm="12" md="8" className="">
                <Row>{jobOfferList(jobs, "demande")}</Row>
                <div className="button-section">
                  <Button variant="danger" href="/offres-de-stage">
                    Charger plus
                  </Button>
                </div>
              </Col>
              <Col sm="12" md="4" className="call-to-action">
                <h2>Secteurs d'activité</h2>

                <ul>
                  <li>
                    {" "}
                    <a href="#">Administrations publiques</a>
                  </li>
                  <li>
                    <a href="#">Agriculture, foresterie, pêche et chasse</a>
                  </li>
                  <li>
                    <a href="#">Arts, spectacles et loisirs</a>
                  </li>
                  <li>
                    <a href="#">Construction</a>
                  </li>
                  <li>
                    <a href="#">Finance et assurances</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <AppelActionDemandeDeStage />
        </section>
        <br />
        <br />
      </div>
    </>
  );
}

export default Candidats;