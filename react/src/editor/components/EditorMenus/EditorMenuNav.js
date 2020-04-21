import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../../../css/Editor.css';

class EditMenuNav extends Component {
    render() {
        return (<>
            {<Form className={"back-delete-menu rounded p-1 edit-menu-nav " + this.props.className} onSubmit={this.handleSubmit}>
            <Form.Row>
              <Col> <Button onClick={this.props.handleBack} className="float-left" variant="primary">Back</Button> </Col>
              <Col> <Button onClick={this.props.handleDelete} className="float-right bg-danger border-danger">Delete</Button> </Col>
            </Form.Row>
            </Form>}
        </>)}
}

export default EditMenuNav;