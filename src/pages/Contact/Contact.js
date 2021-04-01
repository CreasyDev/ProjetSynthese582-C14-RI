import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header";

function Contact() {
  return (
    <>
      <Header page="contactPage" title="Contactez-nous" />
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
                N'hésitez pas à nous écrire à info@eStage.com.
              </p>
              <br></br>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
