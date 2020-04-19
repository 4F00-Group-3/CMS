import React, { Component } from 'react';
import '../../../css/EditorMenuComponents.css';
import {
    NumericInput
} from './EditorMenuComponents'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BackgroundColorPicker } from './EditorMenuComponents';



class SpacerEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionBgColorPickerActive: false,
        }
    }

    /**
* This method toggles the section background colour picker
*/
    handleBGColorPicker = () => {
        if (this.state.sectionBgColorPickerActive === false) {
            this.setState({ sectionBgColorPickerActive: true });
        }
        else {
            this.setState({ sectionBgColorPickerActive: false });
        }
    }

    /**
    * This method returns the appropriate colour picker.  There are dual conditionals so this method could be 
    * used for both the background colour picker, and the heading colour picker.  
    * @param {bool} active 
    * @param {bool} bg 
    */
    returnSectionColorPicker(active) {
        if (active) {
            return (
                <>
                    <Button id='bgColorPickerButton' className="mt-2" onClick={this.handleBGColorPicker}>Close Color Picker</Button>
                    <BackgroundColorPicker
                        id='bgColorPicker'
                        onChange={this.props.menuComponentOnClick}
                    />
                </>);
        }
        else {
            return (<Button id='bgColorPickerButton' className="mt-2" onClick={this.handleBGColorPicker}>Open Color Picker</Button>);
        }
    }

    render() {
        return (
            <Form className=" rounded p-1 editor-menu">
                <Form.Group>
                    <Form.Label className="d-block font-weight-bold">Edit Space</Form.Label>
                </Form.Group>
                <Form.Row>
                    <Col><Form.Label className="d-block center">Space Height</Form.Label></Col>
                    <Col>
                        <NumericInput
                            rightAddon={"px"}
                            placeholder={"space size"}
                            inputType={"number"}
                            onChange={this.props.menuComponentOnClick}
                        />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col className='center'><Form.Label className="d-block center">Section Background Color:</Form.Label></Col>
                    <Col className='center'>
                        {this.returnSectionColorPicker(this.state.sectionBgColorPickerActive, true)}
                    </Col>
                </Form.Row>
            </Form>
        );
    };
}



export default SpacerEditor