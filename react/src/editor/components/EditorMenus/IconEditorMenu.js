
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
import { AlignmentInput, ColourPicker, BackgroundColorPicker } from './EditorMenuComponents';

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
                    <ColourPicker
                        onChange={this.props.menuComponentOnClick}
                    />
                </>);

        }
        else {
            return (<Button onClick={() => this.handleColorPicker()}>Open Color Picker</Button>);
        }
    }

    /**
 * This method toggles the section background colour picker
 */
    handleBGColorPicker = () => {
        if (this.state.sectionBgColorPickerActive === false) {
            this.setState({ sectionBgColorPickerActive: true });
        }
        else {
            this.setState({ sectionBgColorPickerActive: false });
        }
    }

    /**
    * This method returns the appropriate colour picker.  There are dual conditionals so this method could be 
    * used for both the background colour picker, and the heading colour picker.  
    * @param {bool} active 
    * @param {bool} bg 
    */
    returnSectionColorPicker(active) {
        if (active) {
            return (
                <>
                    <Button id='bgColorPickerButton' className="mt-2" onClick={this.handleBGColorPicker}>Close Color Picker</Button>
                    <BackgroundColorPicker
                        id='bgColorPicker'
                        onChange={this.props.menuComponentOnClick}
                    />
                </>);
        }
        else {
            return (<Button id='bgColorPickerButton' className="mt-2" onClick={this.handleBGColorPicker}>Open Color Picker</Button>);
        }
    }

    render() {
        return (<>
            <div className=""></div>
            {<Form className="rounded p-1 editor-menu" onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label className="d-block font-weight-bold">Edit Icon</Form.Label>

                </Form.Group>

                {/* select icon */}
                <Form.Row>
                    <Col className='left'><Form.Label >Select Icon:</Form.Label></Col>
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
                <Form.Row className="mt-2">
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
                    <Col className=" left-centered-label">
                        <Form.Label className="d-block left" >Colour:</Form.Label>
                    </Col>
                    <Col>
                        {this.returnColorPicker()}
                    </Col>
                </Form.Row>

                {/* set size */}
                <Form.Row className="mt-2">
                    <Col className="left-centered-label">
                        <Form.Label className="d-block">Size:</Form.Label>
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
                    <Col className="left-centered-label">
                        <Form.Label className="d-block ">Alignment:</Form.Label>
                    </Col>
                    <Col>
                        <AlignmentInput
                            onClick={this.props.menuComponentOnClick}
                        />
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col className='center'><Form.Label className="d-block left">Section Background Color:</Form.Label></Col>
                    <Col className='center'>
                        {this.returnSectionColorPicker(this.state.sectionBgColorPickerActive, true)}
                    </Col>
                </Form.Row>

            </Form>
            }
        </>
        );
    }
}

export default IconEditorMenu;
