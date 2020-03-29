import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ChromePicker } from 'react-color';

class EditDividerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widthUnits: "px",
      textColorPickerActive: false,
      bgColorPickerActive: false,
    }
  }

  /**
  * This method accounts for the units that the user selects for border radius
  * @param {units of border radius} value 
  */
  onWidthUnitChange(value){
    this.setState({  widthUnits: value, })
    console.log(value, this.state);
  }


  /**
   * This method re-renders the colour pickers based on which btn is clicked
   */
  handleColorPicker = (btn) => {
    switch (btn) {
      case "text": {
        if (this.state.textColorPickerActive === false) {
          this.setState({ textColorPickerActive: true })
        }
        else {
          this.setState({ textColorPickerActive: false })
        }
        break;
      }
      case "background": {
        if (this.state.bgColorPickerActive === false) {
          this.setState({ bgColorPickerActive: true })
        }
        else {
          this.setState({ bgColorPickerActive: false })
        }
        break;
      }
      default: break;
    }
  }

  /**
   * This method dynamically shows a color picker on button click.
   * As well, sets the css for the correct color.
   * @param {the button selected - "text" for text color, "background" for background color} btn 
   */
  returnColorPicker(btn) {
    switch (btn) {
      case "text": {
        if (this.state.textColorPickerActive === true) {

          return (
            <>
              <Button onClick={() => this.handleColorPicker(btn)}>Close Color Picker</Button>
              <ChromePicker
                color={"#000"}
                onChange={(event) => { this.props.menuComponentOnClick("color|" + event.hex) }}
              />
            </>);

        }
        else {
          return (<Button onClick={() => this.handleColorPicker(btn)}>Open Color Picker</Button>);
        }
      }
      case "background": {
        if (this.state.bgColorPickerActive === true) {
          return (
            <>
              <Button onClick={() => this.handleColorPicker(btn)}>Close Color Picker</Button>
              <ChromePicker
                color={"#000"}
                onChange={(event) => this.props.menuComponentOnClick("backgroundColor|" + event.hex)}
              />
            </>);

        }
        else {
          return (<Button onClick={() => this.handleColorPicker(btn)}>Open Color Picker</Button>);
        }
      }
      default: break;
    }
  }

  render() {
    return (
      <>
        {<Form className="border bg-light rounded p-1" onSubmit={this.handleSubmit}>
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
                    this.props.menuComponentOnClick("width|" + event.target.value + this.state.widthRadiusUnits)}
                type="number"
                placeholder="0" />
            </Col>
            <Col>
              <Form.Control
                onChange={(event) => this.onWidthUnitChange(event.target.value)}
                as="select"
                className="d-block">
                <option value="px">px</option>
                <option  value="%">%</option>
                <option  value="pt">pt</option>
                <option  value="em">em</option>
                <option  value="vw">vw</option>
                <option  value="vh">vh</option>
              </Form.Control>
            </Col>
          </Form.Row>

          {/* set height  */}
          <Form.Row>
            <Col>
              <Form.Label className="d-block left">Height:</Form.Label>
            </Col>
            <Col>
              <Form.Control type="number" placeholder="0" />
            </Col>

            {/* select border type  */}
            <Col>
              <Form.Control as="select" className="d-block">
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
              <Form.Label className="d-block left">Style:</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" className="d-inline">
                <option value="solid">Solid</option>
                <option value="none">None</option>
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

          <Form.Row className="mt-2">
            <Col>
              <Form.Label className="d-block left" >Colour:</Form.Label>
            </Col>
            <Col>
              {this.returnColorPicker("background")}
            </Col>
          </Form.Row>
          <Form.Row className="mt-4">
            <Col>
              <Form.Label className="d-block">Border Radius (Optional):</Form.Label>
            </Col>

            <Col>
              <Form.Control className="" type="number" min="0" placeholder="0" />
            </Col>
            <Col>
              <Form.Control as="select" className="">
                <option>px</option>
                <option>%</option>
                <option>pt</option>
                <option>em</option>
                <option>vw</option>
                <option>vh</option>
              </Form.Control>
            </Col>
          </Form.Row>
        </Form>}</>
    );
  }
}

export default EditDividerMenu;
