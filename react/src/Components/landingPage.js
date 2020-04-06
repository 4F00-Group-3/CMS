import React, { Component } from "react";
import '../css/LandingPage.css';
import GetStarted from "./GetStarted";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class LandingPage extends Component {
  getStarted_OnClick = () => {
    this.setState({
      page: <GetStarted signUp_click={this.signUp_OnClick} />,
      activeButton: "get-started"
    });
  };

  render() {
    return (
      <>
        {/* {top banner} */}
        <Jumbotron className="logo-jumbotron side-by-side">
          <Row>
            <Col>
              <div className="left-logo">
                <section ref={this.props.scrollHome} id="landing">
                  <img src="./imagesFolder/logo.png" className="logo-size" alt='logo' />
                </section>
              </div>
            </Col>
            <Col>
              <div className='right-banner-text'>
                <h2 className="landing-page-title">
                  A website can take your business to the next level.
                </h2>
                <h4 className="landing-page-title">
                  Use our website to make yours.
              </h4>
              </div>
            </Col>
          </Row>
        </Jumbotron>

        <Jumbotron className='center-center-jumbotron'>
          <div>
            <p className='upper-case landing-page-title center'>Custom page design at your fingertips</p>
            <h2 className="landing-page-title center">
              Look like an expert right from the beginning.
            </h2>
            <h4 className="landing-page-title center">
              Create a website that brings your ideas to life.
              Start with any website template and customize it to fit
              your needs, whether you're making a portfolio, blog, or
              online store.
            </h4>
            <br />
            <div className="center-logo">
              <Button className='start-btn' raised ripple primary onClick={this.props.getStartedOnClick}>
                Get Started
              </Button>
            </div>
          </div>
        </Jumbotron>

        <Jumbotron className="faq-jumbotron" id="faqsec">
          <h1 className="faq-page">FAQ</h1>
        </Jumbotron>

        <Container fluid className="full-screen">
          <Row className="full-screen-row">
            <Col className='center-center-text' style={{ backgroundColor: "#6c5ce7" }}>
              <h1>
                What is a content management system?
              </h1>
            </Col>
            <Col className='center-center-text' style={{ backgroundColor: "#2d3436" }}>
              <p>
                A content management system or CMS as it’s usually called is a web platform which allows
                users to create websites (complete with their domain names and full control over design and
                content). Think of it as opening an online gateway for your customers to interact with your
                business 24/7 and/or an avenue for employees to share, store and have access to information
                vital to their work.
              </p>
            </Col>
          </Row>
        </Container>

        <Container fluid className="full-screen">
          <Row className="full-screen-row">
            <Col className='center-center-text' style={{ backgroundColor: "#2d3436" }}>
              <p>
                A content management system or CMS as it’s usually called is a web platform which allows
                users to create websites (complete with their domain names and full control over design and
                content). Think of it as opening an online gateway for your customers to interact with your
                business 24/7 and/or an avenue for employees to share, store and have access to information
                vital to their work.
              </p>
            </Col>
            <Col className='center-center-text' style={{ backgroundColor: "#a29bfe" }}>
              <h1>
                How can my business benefit from a CMS?
              </h1>
            </Col>
          </Row>
        </Container>

        <Container fluid className="full-screen">
          <Row className="full-screen-row">
            <Col className='center-center-text' style={{ backgroundColor: "#0984e3" }}>
              <h1>
                What user support is available to me?
              </h1>
            </Col>
            <Col className='center-center-text' style={{ backgroundColor: "#2d3436" }}>
              <p>
                A content management system or CMS as it’s usually called is a web platform which allows
                users to create websites (complete with their domain names and full control over design and
                content). Think of it as opening an online gateway for your customers to interact with your
                business 24/7 and/or an avenue for employees to share, store and have access to information
                vital to their work.
              </p>
            </Col>
          </Row>
        </Container>

        <Container fluid className="full-screen">
          <Row className="full-screen-row">
            <Col className='center-center-text' style={{ backgroundColor: "#2d3436" }}>
              <p>
                A content management system or CMS as it’s usually called is a web platform which allows
                users to create websites (complete with their domain names and full control over design and
                content). Think of it as opening an online gateway for your customers to interact with your
                business 24/7 and/or an avenue for employees to share, store and have access to information
                vital to their work.
              </p>
            </Col>
            <Col className='center-center-text' style={{ backgroundColor: "#74b9ff" }}>
              <h1>
                How do I know which plan to choose?
              </h1>
            </Col>
          </Row>
        </Container>

        <Container fluid className="full-screen">
          <Row className="full-screen-row">
            <Col className='center-center-text' style={{ backgroundColor: "#00cec9" }}>
              <h1>
                What challenges can I expect using a CMS?
              </h1>
            </Col>
            <Col className='center-center-text' style={{ backgroundColor: "#2d3436" }}>
              <p>
                A content management system or CMS as it’s usually called is a web platform which allows
                users to create websites (complete with their domain names and full control over design and
                content). Think of it as opening an online gateway for your customers to interact with your
                business 24/7 and/or an avenue for employees to share, store and have access to information
                vital to their work.
              </p>
            </Col>
          </Row>
        </Container>

        <Container fluid className="full-screen">
          <Row className="full-screen-row">
            <Col className='center-center-text' style={{ backgroundColor: "#2d3436" }}>
              <p>
                A content management system or CMS as it’s usually called is a web platform which allows
                users to create websites (complete with their domain names and full control over design and
                content). Think of it as opening an online gateway for your customers to interact with your
                business 24/7 and/or an avenue for employees to share, store and have access to information
                vital to their work.
              </p>
            </Col>
            <Col className='center-center-text' style={{ backgroundColor: "#81ecec" }}>
              <h1>
                I love your service! How can I leave a review?
              </h1>
            </Col>
          </Row>
        </Container>

        <Jumbotron className="plans-pricing-jumbotron" id="planspricing">
          <h1 className="faq-page">Plans & Pricing</h1>
        </Jumbotron>

        <Container fluid>
          <Row className="plans-pricing-row center-center-jumbotron">
            <Card className='plans-pricing-card' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
              <Card.Body>
                <Card.Title>Essentials</Card.Title>
                <Card.Text style={{color:"#000"}}>
                  Begin building a new web experience with a great package of starter tools!
            </Card.Text>
                <Button variant="primary" onClick={this.props.getStartedOnClick}>Get Started</Button>
              </Card.Body>
            </Card>

            <Card className='plans-pricing-card' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1558402529-d2638a7023e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
              <Card.Body>
                <Card.Title>Business</Card.Title>
                <Card.Text style={{color:"#000"}}>
                  Upgrade and get access to more advanced features that will help you increase your firms efficiency!
            </Card.Text>
                <Button variant="primary" onClick={this.props.getStartedOnClick}>Get Started</Button>
              </Card.Body>
            </Card>

            <Card className='plans-pricing-card' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
              <Card.Body>
                <Card.Title>Enterprise</Card.Title>
                <Card.Text style={{color:"#000"}}>
                  Get full access to all the tools your business needs to be at the top of its game!
            </Card.Text>
                <Button variant="primary" onClick={this.props.getStartedOnClick}>Get Started</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
    );
  }
}



export default LandingPage;
