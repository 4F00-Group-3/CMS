import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import '../css/GetStarted.css';

class GetStarted extends Component {
  render() {
    return (
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
            <Card.Body>
            <Button  onClick={this.props.signUp_click}>Sign Up</Button>
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
            <Card.Body>
            <Button  onClick={this.props.signUp_click}>Sign Up</Button>
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
              <ListGroupItem>Manage Unlimited Sites</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Button  onClick={this.props.signUp_click}>Sign Up</Button>
            </Card.Body>
          </Card>
        </Row>
      </Jumbotron>
    );
  }
}

export default GetStarted;
