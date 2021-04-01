import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header";

function PolitiquesDeConfidentialite() {
  return (
    <>
      <Header page="politiquePage" title="Politiques De Confidentialité" />
      <section className="">
        <Container>
          <Row>
            <Col sm="12" md="6" className="">
              <div class="eStage-section">
                <img src="images/eStage.png" alt="" />
              </div>
            </Col>
            <Col sm="12" md="6" className="politique-text-section">
              <p>
                Pour commencer, vous pouvez vous connecter à votre compte sur
                notre site web ou créer un nouveau compte. Si vous avez des
                questions, des demandes spéciales, ou besoin d'assistance,
                n'hésitez pas à nous écrire à info@eStage.com.
              </p>
              <p>
                Vous trouverez la liste d’entreprises qui sont à la recherche de
                stagiaire en développement web à travers le monde. Les
                stagiaires peuvent déposer leur CV au moment de créer leur
                compte. Vous allez recevoir par courriel automatisé de
                confirmation.
              </p>
              <p>
                Une fois approuvée par notre administration, votre inscription
                sera confirmée, et vous serez en contact avec les entreprises
                qui vous conviendraient selon votre profil. L’entente sur les
                horaires et la rémunération sera dans votre responsabilité. Nous
                ne sommes donc pas responsables en aucun cas s’il y a un
                malentendu entre les deux partis.
              </p>
              <br></br>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default PolitiquesDeConfidentialite;
