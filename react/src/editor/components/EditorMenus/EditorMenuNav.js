import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class EditMenuNav extends Component {
    render() {
        return (<>
            {<Form className="border bg-light rounded p-1 editor-menu" onSubmit={this.handleSubmit}>
            <Form.Row>
              <Col> <Button id='backButton' onClick={this.props.handleBack} className="float-left" variant="primary">Back</Button> </Col>
              <Col> <Button onClick={this.props.handleDelete} className="float-right bg-danger border-danger">Delete</Button> </Col>
            </Form.Row>
            </Form>}
        </>)}
}

export default EditMenuNav;