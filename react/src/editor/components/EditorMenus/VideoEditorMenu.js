import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class EditVideo extends Component {
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
              <Form.Label className="d-block font-weight-bold">Edit Video</Form.Label>
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

            {/* <Form.Label className="d-block mt-2">Border</Form.Label>

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
            </Form.Row> */}

            <Form.Row>
                <Col>
                    <Form.Label>URL for Video:</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="URL"/>
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

            <Form.Row className="mt-2">
                <Col>
                    <Form.Label>AutoPlay:</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="checkbox" value="Yes" name="autoplaybutton" style={{height:"20px"}}></Form.Control>
                </Col>
            </Form.Row>

            <Form.Row className="mt-2">
                <Col>
                    <Form.Label>Mute:</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="checkbox" value="Yes" name="mutebutton" style={{height:"20px"}}></Form.Control>
                </Col>
            </Form.Row>

            <Form.Row className="mt-2">
                <Col>
                    <Form.Label>Loop:</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="checkbox" value="Yes" name="loopbutton" style={{height:"20px"}}></Form.Control>
                </Col>
            </Form.Row>


            <Button variant="primary" type="submit">Save</Button>
          </Form>}</>
        /* <Container maxWidth="sm">
          <Card>
            <div className="boxPadding">
              <h2>Log into your account</h2>

              <form className="centerBoxItems">
                <label for="email">Username:</label>
                <br></br>
                <input
                  type="text"
                  id="email"
                  emailaddr="email"
                  class="emailaddressbar"
                />
                <br></br>
                <br></br>

                <label for="email">Password:</label>
                <br></br>
                <input type="text" id="pw" pass="pw" class="emailaddressbar" />
                <br></br>
                <br></br>
                <br></br>

                <input type="submit" value="Login" class="submitnextbutton" />
              </form>

              <a
                href="forgot-password.html"
                style={{ color: "grey", textdecoration: "none" }}
              >
                Forgot Password
              </a>
              <a
                href="create-account.html"
                style={{
                  color: "grey",
                  textdecoration: "none",
                  float: "right"
                }}
              >
                Create Account
              </a>
            </div>
          </Card>
        </Container> */
    );
  }
}

export default EditVideo;
