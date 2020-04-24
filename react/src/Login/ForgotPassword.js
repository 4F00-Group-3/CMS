import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Jumbotron } from "react-bootstrap";
import '../css/LoginPage.css';

class ForgotPassword extends Component {


    render() {
        return (
            <Jumbotron className='login-container'>
                <Container maxWidth="sm">
                    <Card  className='create-account-card'>
                        <h2>Forgot Password</h2>
                        <p style={{textAlign: "center"}}>
                            Please enter a new password that is secure.
                        </p>
                        <Form className="centerBoxItems" onSubmit={this.props.handlePasswordChangeSubmit}>
                            <Row>
                                <Col>
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                </Col>
                                <Col>
                                    <input
                                        type="text"
                                        id="email"
                                        emailaddr="email"
                                        className="create-account-form-input"
                                        name="email"
                                        onChange={this.props.handleChange}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor="pw">Password</Form.Label>
                                </Col>
                                <Col>
                                    <input
                                        type="password"
                                        id="pw"
                                        pass="pw"
                                        className="create-account-form-input"
                                        name="pw"
                                        
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label htmlFor="pw2">New Password</Form.Label>
                                </Col>
                                <Col>
                                    <input
                                        type="password"
                                        id="pw"
                                        name="pw2"
                                        pass2="pw2"
                                        className="create-account-form-input"
                                        onChange={this.props.handleChange}
                                    />
                                </Col>
                            </Row>
                            <Row className='center'>
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="submitnextbutton"
                                />
                            </Row>
                        </Form>
                        <Row>
                            <Col>
                                <input
                                    className='input-as-anchor'
                                    type="button"
                                    value="Back"
                                    onClick={this.props.back_onClick} />
                            </Col>
                            <Col>
                                {/* empty to align left */}
                            </Col>

                        </Row>
                    </Card>
                </Container>
            </Jumbotron>
        );
    }
}

export default ForgotPassword;