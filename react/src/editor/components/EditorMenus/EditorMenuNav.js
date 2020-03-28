import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class EditMenuNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            {<Form className="border bg-light rounded p-1" onSubmit={this.handleSubmit}>
            <Form.Row>
              <Col> <Button onClick={this.props.handleBack} variant="primary">Back</Button> </Col>
              <Col> <Button onClick={this.props.handleDelete} className="float-right bg-danger border-danger">Delete</Button> </Col>
            </Form.Row>
            </Form>}
        </>)}
}

export default EditMenuNav;