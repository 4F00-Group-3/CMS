import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ColourPicker from '../ColourPicker';
import {
    faAddressBook,
    faBell,
    faBook,
    faCamera,
    faCreditCard,
    faEye,
    faGift,
    faHeart,
    faLaptop,
    faLock,


} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class IconEditorMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    //add ifs to determine input
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.numberOfGuests);
    event.preventDefault();
  }

  render() {
    return (<>
          <div className=""></div>
          {<Form className="border bg-light rounded p-1" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label className="d-block font-weight-bold">Edit Icon</Form.Label>
              <Form.Label className="d-block">Margin:</Form.Label>
            </Form.Group>

            <Form.Row>
            <Col>
                <Form.Label>Left</Form.Label>
                <Form.Control type="number" placeholder="0"/>
              </Col>
              <Col>
                  <Form.Label>Top</Form.Label>
                <Form.Control type="number" placeholder="0"/>
              </Col>
              <Col>
                  <Form.Label>Right</Form.Label>
                <Form.Control type="number" placeholder="0"/>
              </Col>
              <Col>
                  <Form.Label>Bottom</Form.Label>
                <Form.Control type="number" placeholder="0"/>
              </Col>
            </Form.Row>

            <Form.Control as="select" className="d-block" style={{width:"15%"}}>
              <option>px</option>
              <option>%</option>
              <option>pt</option>
              <option>em</option>
              <option>vw</option>
              <option>vh</option>
            </Form.Control>

            <Form.Label className="d-block mt-2">Border</Form.Label>

            <Form.Row>
              <Col>
                <Form.Label>Style:</Form.Label>
              </Col>
              <Col>
                <Form.Control as="select" className="d-inline">
                  <option value="solid">Solid</option>
                  <option value="none">None</option>
                  <option value="hidden">Hidden</option>
                  <option value="dotted">Dotted</option>
                  <option value="dashed">Dashed</option>
                  <option value="double">Double</option>
                  <option value="groove">Groove</option>
                  <option value="ridge">Ridge</option>
                  <option value="inset">Inset</option>
                  <option value="outset">Outset</option>
                </Form.Control>
              </Col>
            </Form.Row>

            <Form.Row>
                <Form.Label>Select Icon:</Form.Label>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Button>
                        <FontAwesomeIcon icon = {faAddressBook}></FontAwesomeIcon>
                    </Button>
                </Col>
                <Col>
                    <Button>
                        <FontAwesomeIcon icon = {faBell}></FontAwesomeIcon>
                    </Button>
                </Col>
                <Col>
                    <Button>
                        <FontAwesomeIcon icon = {faBook}></FontAwesomeIcon>
                    </Button>
                </Col>
                <Col>
                    <Button>
                        <FontAwesomeIcon icon = {faCamera}></FontAwesomeIcon>
                    </Button>
                </Col>
                <Col>
                    <Button>
                        <FontAwesomeIcon icon = {faCreditCard}></FontAwesomeIcon>
                    </Button>
                </Col>
            </Form.Row>
            <Form.Row></Form.Row>
            <Form.Row>
                <Col>
                    <Button>
                        <FontAwesomeIcon icon = {faEye}></FontAwesomeIcon>
                    </Button>
                </Col>
                <Col>
                    <Button>
                        <FontAwesomeIcon icon = {faGift}></FontAwesomeIcon>
                    </Button>
                </Col>
                <Col>
                    <Button>
                        <FontAwesomeIcon icon = {faHeart}></FontAwesomeIcon>
                    </Button>
                </Col>
                <Col>
                    <Button>
                        <FontAwesomeIcon icon = {faLaptop}></FontAwesomeIcon>
                    </Button>
                </Col>
                <Col>
                    <Button>
                        <FontAwesomeIcon icon = {faLock}></FontAwesomeIcon>
                    </Button>
                </Col>
            </Form.Row>

            <Form.Row className="mt-2">
              <Col>
                <Form.Label>Icon Colour:</Form.Label>
              </Col>
              <Col>
                <ColourPicker/>
              </Col>
            </Form.Row>

            <Form.Row className="mt-2">
              <Col>
                <Form.Label>Width:</Form.Label>
              </Col>
              <Col>
                <Form.Control className="w-50" type="number"  min="0" placeholder="0"/>
                <Form.Control as="select" className="w-50">
                  <option>px</option>
                  <option>%</option>
                  <option>pt</option>
                  <option>em</option>
                  <option>vw</option>
                  <option>vh</option>
                </Form.Control>
              </Col>
            </Form.Row>

            <Form.Row className="mt-2">
              <Col>
                <Form.Label>Height:</Form.Label>
              </Col>
              <Col>
                <Form.Control className="w-50" type="number"  min="0" placeholder="0"/>
                <Form.Control as="select" className="w-50">
                  <option>px</option>
                  <option>%</option>
                  <option>pt</option>
                  <option>em</option>
                  <option>vw</option>
                  <option>vh</option>
                </Form.Control>
              </Col>
            </Form.Row>
            
            <Form.Row className="mt-2">
              <Col>
                <Form.Label>Alignment:</Form.Label>
              </Col>
              <Col>
                <Form.Control  as="select"className="d-inline">
                  <option>Left</option>
                  <option>Center</option>
                  <option>Right</option>
                </Form.Control>
              </Col>
            </Form.Row>

            <Button variant="primary" type="submit">Save</Button>
          </Form>}</>
    );
  }
}

export default IconEditorMenu;
