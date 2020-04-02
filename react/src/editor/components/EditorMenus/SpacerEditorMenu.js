import React, { Component } from 'react';
import '../../../css/EditorMenuComponents.css';
import {
    SpacerThickness,
} from './EditorMenuComponents';

import {
    NumericInput
} from './EditorMenuComponents'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';



class SpacerEditorMenu extends Component {
    render() {
        return (
            <Form className="border bg-light rounded p-1 editor-menu">
                <Form.Group>
                    <Form.Label className="d-block font-weight-bold">Edit Space</Form.Label>
                </Form.Group>
                <Form.Row>
                    <Col><Form.Label className="d-block left w-50">Space Height</Form.Label></Col>
                    <Col>
                        <NumericInput
                            rightAddon={"px"}
                            placeholder={"space size"}
                            inputType={"number"}
                            onChange={this.props.menuComponentOnClick}
                        />
                    </Col>
                </Form.Row>
            </Form>
        );
    };
}



export default SpacerEditorMenu