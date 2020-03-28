import React, { Component } from 'react';
import '../../../css/EditorMenuComponents.css';
import {
    SelectImage,
    AlignmentInput,
    SetCaption,
    LinkInput
} from './EditorMenuComponents';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



class ImageEditor extends Component {
    render() {
        return (<>
            <Form className="border bg-light rounded p-1" onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label className="d-block font-weight-bold">Edit Image</Form.Label>
                    <Form.Label className="d-block">Margin:</Form.Label>
                </Form.Group>

                <Form.Row>
                    <Col>
                        <Form.Control onChange={(event) => this.props.menuComponentOnClick("paddingLeft|" + event.target.value)} type="number" placeholder="0" />
                    </Col>
                    <Col>
                        <Form.Control type="number" placeholder="0" />
                    </Col>
                    <Col>
                        <Form.Control type="number" placeholder="0" />
                    </Col>
                    <Col>
                        <Form.Control type="number" placeholder="0" />
                    </Col>
                    <Col>
                        <Form.Control as="select" className="d-block" >
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
                    <Col>
                        <Form.Label>Width:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control className="w-50" type="number" min="0" placeholder="0" />

                    </Col>
                    <Col>
                        <Form.Control as="select" className="w-50">
                            <option>px</option>
                            <option>%</option>
                            <option>pt</option>
                            <option>em</option>
                            <option>vw</option>
                            <option>vh</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-4">
                    <Col>
                        <Form.Label className="d-block">Border Radius (Optional):</Form.Label>
                    </Col>

                    <Col>
                        <Form.Control className="w-50" type="number" min="0" placeholder="0" />

                    </Col>
                    <Col>
                        <Form.Control as="select" className="w-50">
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
                    <LinkInput
                        title={"Upload Image From URL"}
                        onChange={this.props.menuComponentOnClick}
                    />
                </Form.Row>
                <Button variant="primary" type="submit">Save</Button>
            </Form>
        </>
        );
    };
}

export default ImageEditor