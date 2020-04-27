import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import '../css/GetStarted.css';
import {
  FooterSection,
  Footer,
  FooterLinkList,
} from "react-mdl";
import Payments from "./payments";

class GetStarted extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSignUp: false
    };

    if (sessionStorage.getItem('id') === null) {
      this.state.showSignUp = true;
    }
  }

  /**
   * This method returns the footer to be displayed on the bottom of the get started page
   */
  Footer() {
    return (
      <div style={{ paddingbottom: "60px" }}>
        <Footer className='login-footer' size="mini">
          <FooterSection type="left" logo="North.">
            <FooterLinkList>
              <a target="_blank" href="https://drive.google.com/open?id=1bModZ1EzBEdGyZltHlMCmiW2o0fjjEmC">Help</a>
              <a target="_blank" href="https://drive.google.com/open?id=1tWE13UlHbMgXlFPAvF59OO0xwQB_wCrt">Privacy Policy</a>
              <a target="_blank" href="https://drive.google.com/open?id=1NtARcUGS2ygw1dfAhPEHjpanxqG8OuH-">Terms & Conditions</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </div>);
  }


  /**
   * This method renders the get started page onto the display
   * This class is to be called in the homepage class
   */
  render() {
    return (
      <>
        <Jumbotron className='get-started-container center-center-jumbotron-get-started'>
          <Row className="get-started-row">
            <Card className='plans-pricing-card' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
              <Card.Body>
                <Card.Title>Essentials</Card.Title>
                <Card.Text style={{ color: "#000" }}>
                  Begin building a new web experience with a great package of starter tools!
              </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Visual Editor</ListGroupItem>
                <ListGroupItem>Platform Security</ListGroupItem>
                <ListGroupItem>Manage 1 Site</ListGroupItem>
              </ListGroup>
              <Card.Body className='sign-up-container'>
                {this.state.showSignUp ?
                  <a href="#" onClick={this.props.signUp_click}>
                    Sign up
                    </a>
                  : null
                }
              </Card.Body>
              <Card.Body>
                <Payments className='paypal-btn' amount={10}
                  handleSitePageClick={this.props.handleSitePageClick}
                >Pay</Payments>
              </Card.Body>
            </Card>

            <Card className='plans-pricing-card' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1558402529-d2638a7023e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
              <Card.Body>
                <Card.Title>Business</Card.Title>
                <Card.Text style={{ color: "#000" }}>
                  Upgrade and get access to more advanced features that will help you increase your firms efficiency!
              </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Visual Editor</ListGroupItem>
                <ListGroupItem>Platform Security</ListGroupItem>
                <ListGroupItem>Manage 2-3 Sites</ListGroupItem>
              </ListGroup>
              <Card.Body className='sign-up-container'>
                {this.state.showSignUp ?
                  <a href="#" onClick={this.props.signUp_click}>
                    Sign up
                    </a>
                  : null
                }
              </Card.Body>
              <Card.Body>
                <Payments amount={20}
                  handleSitePageClick={this.props.handleSitePageClick}
                >Pay</Payments>
              </Card.Body>
            </Card>

            <Card className='plans-pricing-card' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
              <Card.Body>
                <Card.Title>Enterprise</Card.Title>
                <Card.Text style={{ color: "#000" }}>
                  Get full access to all the tools your business needs to be at the top of its game!
              </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Visual Editor</ListGroupItem>
                <ListGroupItem>Platform Security</ListGroupItem>
                <ListGroupItem>Manage up to 5 Sites</ListGroupItem>
              </ListGroup>
              <Card.Body className='sign-up-container'>
                {this.state.showSignUp ?
                  <a href="#" onClick={this.props.signUp_click}>
                    Sign up
                    </a>
                  : null
                }
              </Card.Body>
              <Card.Body>
                <Payments amount={30}
                  handleSitePageClick={this.props.handleSitePageClick}
                >Pay</Payments>
              </Card.Body>
            </Card>
          </Row>
        </Jumbotron>
        <p className={'creds'} style={{ color: "#FFF!important" }}>
          Use our service for free for the first month! Use the following PayPal credentials:
          <br />
          Username: sb-odp9i1081433@personal.example.com Password:
          dJQhG+S9
        </p>
        {this.Footer()}
      </>
    );
  }
}

export default GetStarted;
