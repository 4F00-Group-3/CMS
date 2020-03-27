import React, { Component } from 'react';
import '../../../css/EditorMenuComponents.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { AlignmentImage } from './EditorMenuComponents';


class ImageEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marginUnits: "px",
            widthUnits: "px",
            borderRadiusUnits: "px",
        }
    }

    onMarginUnitChange(value) {
        this.setState({ marginUnits: value })
    }

    onWidthUnitChange(value) {
        this.setState({ widthUnits: value })
    }

    onBorderRadiusUnitChange(value) {
        this.setState({ borderRadiusUnits: value })
    }

    render() {
        return (<>
            <Form className="border bg-light rounded p-1 editor-menu" onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label className="d-block font-weight-bold">Edit Image</Form.Label>
                    <Form.Label className="d-block left">Margin:</Form.Label>
                </Form.Group>

                <Form.Row className="image-editor-menu-form-row">
                    <Form.Row>
                        <Col><Form.Label>Left:</Form.Label></Col>
                        <Col>
                            <Form.Control onChange={(event) => this.props.menuComponentOnClick("marginLeft|" + event.target.value + this.state.marginUnits)} type="number" placeholder="0" />
                        </Col>
                        <Col><Form.Label>Right:</Form.Label></Col>
                        <Col>
                            <Form.Control onChange={(event) => this.props.menuComponentOnClick("marginRight|" + event.target.value + this.state.marginUnits)} type="number" placeholder="0" />
                        </Col>

                    </Form.Row>

                    {/* <Form.Row>
                        <Col><Form.Label>Top:</Form.Label></Col>
                        <Col>
                            <Form.Control onChange={(event) => this.props.menuComponentOnClick("marginTop|" + event.target.value + this.state.marginUnits)} type="number" placeholder="0" />
                        </Col>
                        <Col><Form.Label>Bottom:</Form.Label></Col>
                        <Col>
                            <Form.Control onChange={(event) => this.props.menuComponentOnClick("marginBottom|" + event.target.value + this.state.marginUnits)} type="number" placeholder="0" />
                        </Col>
                    </Form.Row> */}

                    <Col >
                        <Form.Control
                            as="select"
                            className="d-block"
                            onChange={(event) => this.onMarginUnitChange(event.target.value)}>
                            <option>px</option>
                            <option>%</option>
                            <option>pt</option>
                            <option>em</option>
                            <option>vw</option>
                            <option>vh</option>
                        </Form.Control>
                    </Col>
                </Form.Row>

                <Form.Row className="mt-2 left">
                    <Col>
                        <Form.Label>Width:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control onChange={(event) => this.props.menuComponentOnClick("width|" + event.target.value + this.state.marginUnits)} className="w-100" type="number" min="0" placeholder="0" />

                    </Col>
                    <Col>
                        <Form.Control
                            as="select"
                            className="w-100"
                            onChange={(event) => this.onWidthUnitChange(event.target.value)}
                        >
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
                    <Col>
                        <Form.Label className="d-block left">Upload Image from URL:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            className="w-100 left"
                            type="text"
                            onChange={(event) => this.props.menuComponentOnClick("url|" + event.target.value + "|url")}
                        />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label className="d-block left">Alignment:</Form.Label>
                    </Col>
                    <Col>
                        <AlignmentImage onClick={this.props.menuComponentOnClick} />
                    </Col>
                </Form.Row>

            </Form>
        </>
        );
    };
}

export default ImageEditor