import React, { Component } from "react";
import "../../css/Dashboard.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick.bind();
    console.log(this.props);
  }

  onClick() {
    console.log(this.constructor.name + " was clicked");
  }

  render() {
    if (this.props.type === "page") {
      return (
        <Container className="PageListItem">
          <Row>
            <Col xs={12} sm={9} className='dash-text'>{this.props.title}</Col>
            <Col  className="center-right" xs={12} sm={1}>
              <Button
                className="inner-edit-dashButtons right"
                onClick={this.props.onPageEdit}
              >
                {" "}
              Edit
            </Button>
            </Col>
            <Col  className="center-right" xs={12} sm={1}>
              <Button
                href="#"
                className="inner-edit-dashButtons right"
                onClick={() => window.open('../../' + this.props.path, '_blank').focus()}
                variant='danger'
              >
                {" "}
              View
            </Button>
            </Col>
            <Col  className="center-right" xs={12} sm={1}>
              <Button
                href="#"
                className="inner-delete-dashButtons right"
                onClick={this.props.onPageDelete}
                variant='danger'
              >
                {" "}
              Delete
            </Button>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container className="UserListItem">
          <Row>
            <Col className='dash-text'>
              {this.props.title}
            </Col>
            <Col xs lg={2} style={{ padding: 0 }}>
              <Button
                href="#"
                className="inner-delete-dashButtons right"
                onClick={this.props.onDelete}
              >
                {" "}
              Delete
            </Button>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default ListItem;
