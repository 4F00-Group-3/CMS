import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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
import { ChromePicker } from 'react-color';
import { AlignmentInput } from './EditorMenuComponents';

class IconEditorMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textColorPickerActive: false,
            sizeUnits: "px"
        };
    }

    /**
    * This method accounts for the units that the user selects for border radius
    * @param {units of size} value 
    */
    onSizeUnitChange(value) {
        this.setState({ sizeUnits: value, })
    }

    /**
     * This method re-renders the colour pickers based on which btn is clicked
     */
    handleColorPicker = () => {
        if (this.state.textColorPickerActive === false) {
            this.setState({ textColorPickerActive: true })
        }
        else {
            this.setState({ textColorPickerActive: false })
        }
    }

    /**
     * This method dynamically shows a color picker on button click.
     * As well, sets the css for the correct color.
     * @param {the button selected - "text" for text color, "background" for background color} btn 
     */
    returnColorPicker() {
        if (this.state.textColorPickerActive === true) {

            return (
                <>
                    <Button onClick={() => this.handleColorPicker()}>Close Color Picker</Button>
                    <ChromePicker
                        color={"#000"}
                        onChange={(event) => {
                            this.props.menuComponentOnClick(
                                "color|" + event.hex)
                        }}
                    />
                </>);

        }
        else {
            return (<Button onClick={() => this.handleColorPicker()}>Open Color Picker</Button>);
        }
    }

    render() {
        return (<>
            <div className=""></div>
            {<Form className="border bg-light rounded p-1" onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label className="d-block font-weight-bold">Edit Icon</Form.Label>

                </Form.Group>

                {/* select icon */}
                <Form.Row>
                    <Form.Label>Select Icon:</Form.Label>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Button
                        onClick={
                                () =>
                                    this.props.menuComponentOnClick("faClassName|faAddressBook|faClassName")}
                        >
                            <FontAwesomeIcon icon={faAddressBook} />
                        </Button>
                    </Col>
                    <Col>
                        <Button
                        onClick={
                                () =>
                                    this.props.menuComponentOnClick("faClassName|faBell|faClassName")}
                        >
                            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                        </Button>
                    </Col>
                    <Col>
                        <Button
                        onClick={
                                () =>
                                    this.props.menuComponentOnClick("faClassName|faBook|faClassName")}
                        >
                            <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                        </Button>
                    </Col>
                    <Col>
                        <Button
                        onClick={
                                () =>
                                    this.props.menuComponentOnClick("faClassName|faCamera|faClassName")}
                        >
                            <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
                        </Button>
                    </Col>
                    <Col>
                        <Button
                        onClick={
                                () =>
                                    this.props.menuComponentOnClick("faClassName|faCreditCard|faClassName")}
                        >
                            <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                        </Button>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Button onClick={
                                () =>
                                    this.props.menuComponentOnClick("faClassName|faEye|faClassName")}
                        >
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={
                                () =>
                                    this.props.menuComponentOnClick("faClassName|faGift|faClassName")}
                        >
                            <FontAwesomeIcon icon={faGift}></FontAwesomeIcon>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={
                                () =>
                                    this.props.menuComponentOnClick("faClassName|faHeart|faClassName")}
                        >
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={
                                () =>
                                    this.props.menuComponentOnClick("faClassName|faLaptop|faClassName")}
                        >
                            <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={
                                () =>
                                    this.props.menuComponentOnClick("faClassName|faLock|faClassName")}
                        >
                            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                        </Button>
                    </Col>
                </Form.Row>



                {/* select border colour */}
                <Form.Row className="mt-2">
                    <Col>
                        <Form.Label className="d-block left" >Colour:</Form.Label>
                    </Col>
                    <Col>
                        {this.returnColorPicker()}
                    </Col>
                </Form.Row>

                {/* set size */}
                <Form.Row className="mt-2">
                    <Col>
                        <Form.Label className="d-block left">Size:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            onChange={
                                (event) =>
                                    this.props.menuComponentOnClick("fontSize|" + event.target.value + this.state.sizeUnits)}
                            className=""
                            type="number"
                            min="0"
                            placeholder="0" />
                    </Col>
                    <Col>
                        <Form.Control
                            onChange={(event) => this.onSizeUnitChange(event.target.value)}
                            as="select"
                            className="">
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
                        <AlignmentInput
                            onClick={this.props.menuComponentOnClick}
                        />
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

export default IconEditorMenu;
