// import React, { Component } from 'react';
// import '../../../css/EditorMenuComponents.css';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';

// class ChooseImageMenu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             marginUnits: "px",
//             widthUnits: "px",
//             borderRadiusUnits: "px",
//         }
//     }

//     render(){
//         return (<>
//             <Form className="border bg-light rounded p-1 editor-menu" onSubmit={this.handleSubmit}>
//                 <Form.Group>
//                     <Form.Label className="d-block font-weight-bold">Edit Image</Form.Label>
//                     <Form.Label className="d-block left">Margin:</Form.Label>
//                 </Form.Group>

//                 <Form.Row className="image-editor-menu-form-row">
//                     <Form.Row>
//                         <Col><Form.Label>Left:</Form.Label></Col>
//                         <Col>
//                             <Form.Control onChange={(event) => this.props.menuComponentOnClick("marginLeft|" + event.target.value + this.state.marginUnits)} type="number" placeholder="0" />
//                         </Col>
//                         <Col><Form.Label>Right:</Form.Label></Col>
//                         <Col>
//                             <Form.Control onChange={(event) => this.props.menuComponentOnClick("marginRight|" + event.target.value + this.state.marginUnits)} type="number" placeholder="0" />
//                         </Col>

//                     </Form.Row>
//                     <Col >
//                         <Form.Control
//                             as="select"
//                             className="d-block w-50"
//                             onChange={(event) => this.onMarginUnitChange(event.target.value)}>
//                             <option>px</option>
//                             <option>%</option>
//                             <option>pt</option>
//                             <option>em</option>
//                             <option>vw</option>
//                             <option>vh</option>
//                         </Form.Control>
//                     </Col>
//                     <Col></Col>
//                     <Col></Col>
//                 </Form.Row>
//             </Form>
//         </>);
//     }
// }

// export default ChooseImageMenu;