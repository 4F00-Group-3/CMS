import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ColourPicker, BackgroundColorPicker } from './EditorMenuComponents';

class EditDividerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widthUnits: "px",
      heightUnits: "px",
      heightValue: "8",
      textColorPickerActive: false,
      borderColour: "#bbb",
      borderStyle: "solid",
      borderUnits: "px",
      sectionBgColorPickerActive: false,
    }
  }

  /**
  * This method accounts for the units that the user selects for border radius
  * @param {units of border radius} value 
  */
  onStyleUnitChange(value) {
    this.setState({ borderStyle: value, })
  }

  /**
  * This method accounts for the units that the user selects for border radius
  * @param {units of border radius} value 
  */
  onWidthUnitChange(value) {
    this.setState({ widthUnits: value, })
  }

  /**
  * This method accounts for the units that the user selects for border radius
  * @param {units of border radius} value 
  */
  onHeightUnitChange(value) {
    this.setState({ heightUnits: value, })
  }

  /**
  * This method accounts for the units that the user selects for border radius
  * @param {units of border radius} value 
  */
  onBorderRadiusUnitChange(value) {
    this.setState({ borderUnits: value, })
  }

  /**
   * This method re-renders the colour pickers based on which btn is clicked
   */
  handleColorPicker = () => {
    if (this.state.textColorPickerActive === false) {
      this.setState({ textColorPickerActive: true })
    }
    else {
      this.setState({ textColorPickerActive: false })
    }
  }


  handleColourChange = (colourString) => {
    // This is due to ColourString being undefined at the beginning when ColourPicker is first created
    try {
      var colour = colourString.split("|")[1];
      this.props.menuComponentOnClick(
        "borderTop|" + this.state.heightValue +
        this.state.heightUnits + " " +
        this.state.borderStyle + " " +
        colour);
    } catch (e) {
    }
  }

  /**
   * This method dynamically shows a color picker on button click.
   * As well, sets the css for the correct color.
   * @param {the button selected - "text" for text color, "background" for background color} btn 
   */
  returnColorPicker() {
    if (this.state.textColorPickerActive === true) {

      return (
        <>
          <Button onClick={() => this.handleColorPicker()}>Close Color Picker</Button>
          <ColourPicker
            onChange={this.handleColourChange}
          />
        </>);

    }
    else {
      return (<Button onClick={() => this.handleColorPicker()}>Open Color Picker</Button>);
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
      <>
        {<Form className="border rounded p-1 editor-menu" onSubmit={this.handleSubmit}>
          {/* title */}
          <Form.Group>
            <Form.Label className="d-block font-weight-bold">Edit Divider</Form.Label>
          </Form.Group>

          {/* set width  */}
          <Form.Row>
            <Col>
              <Form.Label className="d-block left">Width:</Form.Label>
            </Col>
            <Col>
              <Form.Control
                onChange={
                  (event) =>
                    this.props.menuComponentOnClick("width|" + event.target.value + this.state.widthUnits)}
                type="number"
                placeholder="0" />
            </Col>
            <Col>
              <Form.Control
                onChange={(event) => this.onWidthUnitChange(event.target.value)}
                as="select"
                className="d-block">
                <option value="px">px</option>
                <option value="%">%</option>
                <option value="pt">pt</option>
                <option value="em">em</option>
                <option value="vw">vw</option>
                <option value="vh">vh</option>
              </Form.Control>
            </Col>
          </Form.Row>

          {/* set height  */}
          <Form.Row>
            <Col>
              <Form.Label className="d-block left">Height:</Form.Label>
            </Col>
            <Col>
              <Form.Control
                onChange={
                  (event) => {
                    this.props.menuComponentOnClick(
                      "borderTop|" +
                      event.target.value +
                      this.state.heightUnits + " " +
                      this.state.borderStyle + " " +
                      this.state.borderColour);
                    this.setState({ heightValue: event.target.value })
                  }}
                type="number"
                placeholder="0" />
            </Col>

            {/* select border type  */}
            <Col>
              <Form.Control
                onChange={(event) => this.onHeightUnitChange(event.target.value)}
                as="select"
                className="d-block">
                <option>px</option>
                <option>pt</option>
                <option>em</option>
                <option>vw</option>
                <option>vh</option>
              </Form.Control>
            </Col>
          </Form.Row>

          {/* select border style */}
          <Form.Row>
            <Col>
              <Form.Label className="d-block left">Style:</Form.Label>
            </Col>
            <Col>

              <Form.Control
                as="select"
                className="d-inline"
                onChange={(event) => {
                  this.onStyleUnitChange(event.target.value);
                  this.props.menuComponentOnClick(
                    "borderTop|" +
                    this.state.heightValue +
                    this.state.heightUnits + " " +
                    event.target.value + " " +
                    this.state.borderColour);
                }}>
                <option value="solid">Solid</option>
                <option value="hidden">Hidden</option>
                <option value="dotted">Dotted</option>
                <option value="dashed">Dashed</option>
                <option value="double">Double</option>
                <option value="groove">Groove</option>
                <option value="ridge">Ridge</option>
                <option value="inset">Inset</option>
                <option value="outset">Outset</option>
              </Form.Control>
            </Col>
          </Form.Row>

          {/* select border colour */}
          <Form.Row className="mt-2">
            <Col>
              <Form.Label className="d-block left" >Colour:</Form.Label>
            </Col>
            <Col>
              {this.returnColorPicker()}
            </Col>
          </Form.Row>

          {/* select border radius */}
          <Form.Row className="mt-4">
            <Col>
              <Form.Label className="d-block left">Border Radius (Optional):</Form.Label>
            </Col>

            <Col>
              <Form.Control
                onChange={(event) => this.props.menuComponentOnClick(
                  "borderRadius|" +
                  event.target.value + this.state.borderUnits)}
                className=""
                type="number"
                min="0"
                placeholder="0" />
            </Col>
            <Col>
              <Form.Control
                as="select"
                className=""
                onChange={(event) => this.onBorderRadiusUnitChange(event.target.value)}>
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
            <Col className='center'><Form.Label className="d-block left">Section Background Color:</Form.Label></Col>
            <Col className='center'>
              {this.returnSectionColorPicker(this.state.sectionBgColorPickerActive, true)}
            </Col>
          </Form.Row>
        </Form>
        }</>
    );
  }
}

export default EditDividerMenu;
