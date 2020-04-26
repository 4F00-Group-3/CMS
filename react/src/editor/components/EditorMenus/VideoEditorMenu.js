import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { AlignmentVideo, AlignmentImage, BackgroundColorPicker } from './EditorMenuComponents';


class VideoEditorMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widthUnits: "px",
      heightUnits: "px",
      autoPlayClicked: 1,
      loopClicked: 1,
      sectionBgColorPickerActive: false,
    };

  }

  /**
  * This method accounts for the units that the user selects for border radius
  * @param {units of size} value 
  */
  onWidthUnitChange(value) {
    this.setState({ widthUnits: value, })
  }

  /**
  * This method accounts for the units that the user selects for border radius
  * @param {units of size} value 
  */
  onHeightUnitChange(value) {
    this.setState({ heightUnits: value, })
  }

  /**
   * This method tests if the autoplay button is clicked
   */
  autoPlayToggle() {
    if (this.state.autoPlayClicked === 0) {
      this.setState({ autoPlayClicked: 1 })
    }
    else {
      this.setState({ autoPlayClicked: 0 })
    }
  }


  /**
   * This method tests if the loop button is clicked
   */
  loopToggle() {
    if (this.state.loopClicked === 0) {
      this.setState({ loopClicked: 1 })
    }
    else {
      this.setState({ loopClicked: 0 })
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

  /**
   * This method renders the video editor menu onto the editor sidebar.
   */
  render() {
    return (<>
      <Form className=" rounded p-1 editor-menu" onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label className="d-block font-weight-bold">Edit Video</Form.Label>
        </Form.Group>

        <Form.Row>
          <Col>
            <Form.Label className="d-block center">URL for Video:</Form.Label>
          </Col>
          <Col>
            <Form.Control
              className="w-100 left"
              type="text"
              onChange={(event) => this.props.menuComponentOnClick("url|" + event.target.value + "|url")}
            />
          </Col>
        </Form.Row>

        <Form.Row className="mt-2">
          <Col>
            <Form.Label className="d-block center">Width:</Form.Label>
          </Col>
          <Col>
            <Form.Control
              onChange={
                (event) =>
                  this.props.menuComponentOnClick("width|" + event.target.value + this.state.widthUnits)}
              className=""
              type="number"
              min="0"
              placeholder="0" />
          </Col>
          <Col>
            <Form.Control
              onChange={(event) => this.onWidthUnitChange(event.target.value)}
              as="select"
              className="">
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
            <Form.Label>Height:</Form.Label>
          </Col>
          <Col>
            <Form.Control
              onChange={
                (event) =>
                  this.props.menuComponentOnClick("height|" + event.target.value + this.state.heightUnits)}
              className=""
              type="number"
              min="0"
              placeholder="0" />
          </Col>

          <Col>
            <Form.Control
              onChange={(event) => this.onHeightUnitChange(event.target.value)}
              as="select"
              className="">
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
            <Form.Label>Alignment:</Form.Label>
          </Col>
          <Col>
            <AlignmentVideo
              onClick={this.props.menuComponentOnClick}
            />
          </Col>
        </Form.Row>

        <Form.Row className="mt-2">
          <Col>
            <Form.Label>AutoPlay:</Form.Label>
          </Col>
          <Col>
            <Form.Control
              onChange={() => {
                this.autoPlayToggle();
                this.props.menuComponentOnClick("autoplay|" + this.state.autoPlayClicked);
              }}
              type="checkbox"
              value="Yes"
              name="autoplaybutton"
              style={{ height: "20px" }}
            />
          </Col>
        </Form.Row>

        <Form.Row className="mt-2">
          <Col>
            <Form.Label>Loop:</Form.Label>
          </Col>
          <Col>

            <Form.Control
              onChange={() => {
                this.loopToggle();
                this.props.menuComponentOnClick("loop|" + this.state.loopClicked);
              }}
              type="checkbox"
              value="Yes"
              name="loopbutton"
              style={{ height: "20px" }}
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
    </>
    );
  }
}

export default VideoEditorMenu;
