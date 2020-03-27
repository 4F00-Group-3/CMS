import React, { Component } from 'react';
import {
    TextInput,
    ColourPicker,
    AlignmentInput,
    NumericInput
} from './EditorMenuComponents';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';


class HeadingEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorPickerActive: false,
        }
    }

    handleColorPicker = () => {
        if (this.state.colorPickerActive === false) {
            this.setState({ colorPickerActive: true });
        }
        else {
            this.setState({ colorPickerActive: false });
        }
    }

    returnColorPicker(active) {
        if (active) {
            return (
                <>
                    <Button onClick={this.handleColorPicker}>Close Color Picker</Button>
                    <ColourPicker
                        onChange={this.props.menuComponentOnClick}
                    />
                </>);
        }
        else {
            return (<Button onClick={this.handleColorPicker}>Open Color Picker</Button>);
        }
    }

    render() {
        return (
            <>
                <Form className="border bg-light rounded p-1 editor-menu">
                    <Form.Group>
                        <Form.Label className="d-block font-weight-bold">Edit Image</Form.Label>
                    </Form.Group>
                    <Form.Row>
                        <Col><Form.Label className="d-block left w-50">Title</Form.Label></Col>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Heading Text"
                                onChange={this.props.menuComponentOnClick}>
                            </Form.Control>
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Col><Form.Label className="d-block left">Text Color:</Form.Label></Col>
                        <Col>
                            {this.returnColorPicker(this.state.colorPickerActive)}
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Col><Form.Label className="d-block left">Font Size:</Form.Label></Col>
                        <Col>
                            <NumericInput
                                rightAddon={"px"}
                                placeholder={"Font size"}
                                min="0"
                                inputType={"number"}
                                onChange={this.props.menuComponentOnClick}
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col><Form.Label className="d-block left">Alignment:</Form.Label></Col>
                        <Col>
                            <AlignmentInput onClick={this.props.menuComponentOnClick} />
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Col><Form.Label className="d-block left">Font-Family:</Form.Label></Col>
                        <Col>
                        <Form.Control
                            as="select"
                            className="d-block"
                            onChange={(event) => this.props.menuComponentOnClick("fontFamily|" + event.target.value)}>
                            <option>Georgia, serif</option>
                            <option>"Palatino Linotype", "Book Antiqua", Palatino, serif</option>
                            <option>"Times New Roman", Times, serif</option>
                            <option>Arial, Helvetica, sans-serif</option>
                            <option>"Arial Black", Gadget, sans-serif</option>
                            <option>"Comic Sans MS", cursive, sans-serif</option>
                            <option>Impact, Charcoal, sans-serif</option>
                            <option>"Lucida Sans Unicode", "Lucida Grande", sans-serif</option>
                            <option>Tahoma, Geneva, sans-serif</option>
                            <option>"Trebuchet MS", Helvetica, sans-serif</option>
                            <option>Verdana, Geneva, sans-serif</option>
                            <option>"Courier New", Courier, monospace</option>
                            <option>"Lucida Console", Monaco, monospace</option>
                        </Form.Control>
                        </Col>
                    </Form.Row>

                </Form>
            </>
        );
    };
}

export default HeadingEditor