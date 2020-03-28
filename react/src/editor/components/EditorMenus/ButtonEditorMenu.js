import React, { Component } from 'react';
import '../../../css/EditorMenuComponents.css';
import {
    AlignmentImage,
} from './EditorMenuComponents';
import { ChromePicker } from 'react-color';
import { Form, Col, Button } from 'react-bootstrap';



class ButtonEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marginUnits: "px",
            widthUnits: "px",
            borderRadiusUnits: "px",
            textColorPickerActive: false,
            bgColorPickerActive: false,
        }
    }


    /**
     * This method re-renders the colour pickers based on which btn is clicked
     */
    handleColorPicker = (btn) => {
        switch (btn) {
            case "text": {
                if (this.state.textColorPickerActive === false) {
                    this.setState({ textColorPickerActive: true })
                }
                else {
                    this.setState({ textColorPickerActive: false })
                }
                break;
            }
            case "background": {
                if (this.state.bgColorPickerActive === false) {
                    this.setState({ bgColorPickerActive: true })
                }
                else {
                    this.setState({ bgColorPickerActive: false })
                }
                break;
            }
            default: break;
        }
    }

    /**
     * This method dynamically shows a color picker on button click.
     * As well, sets the css for the correct color.
     * @param {the button selected - "text" for text color, "background" for background color} btn 
     */
    returnColorPicker(btn) {
        switch (btn) {
            case "text": {
                if (this.state.textColorPickerActive === true) {

                    return (
                        <>
                            <Button onClick={() => this.handleColorPicker(btn)}>Close Color Picker</Button>
                            <ChromePicker
                                color={"#000"}
                                onChange={(event) => { this.props.menuComponentOnClick("color|" + event.hex) }}
                            />
                        </>);

                }
                else {
                    return (<Button onClick={() => this.handleColorPicker(btn)}>Open Color Picker</Button>);
                }
            }
            case "background": {
                if (this.state.bgColorPickerActive === true) {
                    return (
                        <>
                            <Button onClick={() => this.handleColorPicker(btn)}>Close Color Picker</Button>
                            <ChromePicker
                                color={"#000"}
                                onChange={(event) => this.props.menuComponentOnClick("backgroundColor|" + event.hex)}
                            />
                        </>);

                }
                else {
                    return (<Button onClick={() => this.handleColorPicker(btn)}>Open Color Picker</Button>);
                }
            }
            default: break;
        }
    }

    /**
     * This method accounts for the units that the user selects for border radius
     * @param {units of border radius} value 
     */
    onBorderRadiusUnitChange(value) {
        this.setState({ borderRadiusUnits: value })
    }


    render() {
        return (
            <Form className="border bg-light rounded p-1 editor-menu ButtonEditorContainer">
                <Form.Group>
                    <Form.Label className="d-block font-weight-bold">Edit Button</Form.Label>
                </Form.Group>
                <Form.Row>
                    <Col><Form.Label className="d-block left">Text Color:</Form.Label></Col>
                    <Col>
                        {this.returnColorPicker("text")}
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col><Form.Label className="d-block left">Background Color:</Form.Label></Col>
                    <Col>
                        {this.returnColorPicker("background")}
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col><Form.Label className="d-block left w-50">Button Text:</Form.Label></Col>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="Heading Text"
                            onChange={(event) => this.props.menuComponentOnClick("text|" + event.target.value + "|text")}>
                        </Form.Control>
                    </Col>
                </Form.Row>

                <Form.Row className="mt-4">
                    <Col>
                        <Form.Label className="d-block left">Border Radius (Optional):</Form.Label>
                    </Col>

                    <Col>
                        <Form.Control
                            onChange={(event) => this.props.menuComponentOnClick("borderRadius|" + event.target.value + this.state.borderRadiusUnits)}

                            className="w-100"
                            type="number"
                            min="0"
                            placeholder="0" />

                    </Col>
                    <Col>
                        <Form.Control
                            onChange={(event) => this.onBorderRadiusUnitChange(event.target.value)}
                            as="select"
                            className="w-100">
                            <option>px</option>
                            <option>%</option>
                            <option>pt</option>
                            <option>em</option>
                            <option>vw</option>
                            <option>vh</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col><Form.Label className="d-block left">Alignment:</Form.Label></Col>
                    <Col>
                        <AlignmentImage onClick={this.props.menuComponentOnClick} />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col><Form.Label className="d-block left w-50">Button URL:</Form.Label></Col>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="URL"
                            onChange={(event) => this.props.menuComponentOnClick("href|" + event.target.value + "|href")}>
                        </Form.Control>
                    </Col>
                </Form.Row>
            </Form>
        );
    };
}

export default ButtonEditor