import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../../../css/Editor.css';

class EditMenuNav extends Component {
  /**
   * This menu renders the edit menu navigation on the editor, which is what allows the user to 
   * delete components from the editing page, or go back to a previous menu.
   */
  render() {
    return (
      <>
        <Form className={"back-delete-menu rounded p-1 edit-menu-nav " + this.props.className} onSubmit={this.handleSubmit}>
          <Form.Row>
            <Col> <Button id='backButton' onClick={this.props.handleBack} className="float-left" variant="primary">Back</Button> </Col>
            <Col> <Button onClick={this.props.handleDelete} className="float-right bg-danger border-danger">Delete</Button> </Col>
          </Form.Row>
        </Form>
      </>
    )
  }
}

export default EditMenuNav;