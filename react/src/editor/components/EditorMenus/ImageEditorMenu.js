import React, { Component } from 'react';
import '../../../css/EditorMenuComponents.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { AlignmentImage } from './EditorMenuComponents';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import AjaxCall from './../../../ajax'; 

class ImageEditorMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marginUnits: "px",
            widthUnits: "px",
            borderRadiusUnits: "px",
            showImageGallery: false,
            images: [],
            imageElements: []
        }

        AjaxCall(
            { function: "getAccountMedia", accountId: sessionStorage.getItem('id') || 0 },
            (response) => {
                if (!response.toString().includes("false")) {
                    let responseArray = JSON.parse(response.split('php-cgi')[1].trim());
                    console.log(responseArray);
                    this.state.images =responseArray;
                    console.log(this.state.images);

                    var imageGallery = [];
                    for(let i=0; i<Math.ceil(responseArray.length / 2); i++){
                        var image1 = responseArray[i].path || "";
                        var image2 = responseArray[i+1].path || "";

                        imageGallery.push(<>
                            <Row>
                                <Col onClick={this.selectImageUpload}>
                                    <img src={image1} ></img>
                                </Col >
                                <Col onClick={this.selectImageUpload}>
                                    <img src={image2} ></img>
                                </Col>
                            </Row>
                        </>);

                        this.state.imageElements = imageGallery;
                    }
                  } else {
                    console.log('no images');
                  }
                // console.log(response.toString());
                return 'test';
            }
        );
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

    toggleShowImageGallery = () => {
        // this.props.menuComponentOnClick("url|" + event.target.value + "|url")
        this.setState({ showImageGallery: !this.state.showImageGallery });
    }

    uploadImage = () => {
        console.log('CHanged!');
        // ajax call to upload image and rerender, update url

                // AjaxCall(
        //     { function: "getAccountMedia", accountId: sessionStorage.getItem('id') || 0 },
        //     function(response) {
        //         if (!response.toString().includes("false")) {
        //             let responseArray = JSON.parse(response.split('php-cgi')[1].trim());
        //             console.log(responseArray);
        //           } else {

        //           }
        //         console.log(response.toString());
        //     }
        // );
    }

    selectImageUpload = () => {
        console.log('image Clicked!');
        //update url
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
                    <Col >
                        <Form.Control
                            as="select"
                            className="d-block w-50"
                            onChange={(event) => this.onMarginUnitChange(event.target.value)}>
                            <option>px</option>
                            <option>%</option>
                            <option>pt</option>
                            <option>em</option>
                            <option>vw</option>
                            <option>vh</option>
                        </Form.Control>
                    </Col>
                    <Col></Col>
                    <Col></Col>
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
                    <Col ><Form.Label className="float-left">Upload Image<br/>from URL:</Form.Label></Col>
                    <Col xs={6}>
                        <Form.Control
                        className=""
                        type="text"
                        onChange={(event) => this.props.menuComponentOnClick("url|" + event.target.value + "|url")}
                        />
                    </Col>
                    <Col><Button onClick={this.toggleShowImageGallery}><FontAwesomeIcon icon={faUpload} style={{fontSize:"18px"}} /></Button></Col>
                </Form.Row>

                {this.state.showImageGallery ?
                    <Container className="border bg-light rounded p-1">
                        <div style={{overflowY:"scroll", minHeight:"200px"}}>
                            {this.state.imageElements}   
                        </div>
  
                        <Row className="mt-4">
                            
                            <Col>  
                                <Form.Control  className="float-left" type="file" onChange={this.uploadImage}/>
                            </Col>

                            <Col> <Button className="float-right" onClick={this.toggleShowImageGallery}>Close</Button> </Col>
                        </Row>
                    </Container>
                    :
                    null
                }

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

export default ImageEditorMenu