import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default class RowEditorMenu extends Component {

    render() {
        return (
            <Form className="border bg-light rounded p-1 editor-menu">
                <Form.Group>
                    <Form.Label className="d-block font-weight-bold">Edit Row</Form.Label>
                </Form.Group>
                <Form.Row>
                    <Col>
                        <Form.Label className="d-block left w-50">Add Columns</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            type="number"
                            min="1"
                            max="12"
                            placeholder="Number of Columns"
                            onChange={(event) => this.props.menuComponentOnClick("Col|" + event.target.value)}
                        >
                        </Form.Control>
                    </Col>
                </Form.Row>
            </Form>
        );
    };
}