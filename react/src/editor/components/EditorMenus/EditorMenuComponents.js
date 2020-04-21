import React, { Component } from 'react';
import '../../../css/EditorMenuComponents.css';
import {
    faAlignLeft,
    faAlignCenter,
    faAlignRight,
    faAlignJustify,
    faBan,
    faStar,
    faFont
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChromePicker } from 'react-color';
import { Button } from 'react-bootstrap';

export class NumericInput extends Component {
    render() {
        return (
            <div className="NumericInput input-group mb-3">
                <input onChange={(event) => this.props.onChange("fontSize|" + event.target.value + "px")} type={this.props.inputType} className="form-control" placeholder={this.props.placeholder} aria-label={this.props.placeholder} aria-describedby="basic-addon1" />

                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon1">{this.props.rightAddon}</span>
                </div>
            </div>
        )
    }
}

export class TextInput extends Component {
    render() {
        return (
            <div className="TextInput">
                <p className="Title">Title</p>
                <div className="Input-Container">
                    <input onChange={(event) => this.props.onChange("text|" + event.target.value + "|text")} type="text" placeholder="Heading Text"></input>
                </div>
            </div>
        );
    }
}

export class LinkInput extends Component {
    render() {
        return (
            <div className="LinkInput">
                <p className="Title">{this.props.title}</p>
                <div className="Input-Container">
                    <input onChange={(event) => this.props.onChange("url|" + event.target.value + "|url")} type="text" placeholder="Place URL or Type"></input>
                </div>
            </div>
        );
    }
}

export class SizeInput extends Component {
    render() {
        return (
            <div className="SizeInput">
                <p className="Title">Size</p>
                <select id="SizeSelector">
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>X-Large</option>
                </select>
            </div>
        );
    }
}

export class HTMLTagInput extends Component {
    render() {
        return (
            <div className="HTMLTagInput">
                <label className="Title">Size</label>
                <select id="HeadingTagSelector">
                    <option>H1</option>
                    <option>H2</option>
                    <option>H3</option>
                    <option>H4</option>
                    <option>H5</option>
                    <option>H6</option>
                </select>
            </div>
        );
    }
}

export class AlignmentInput extends Component {
    render() {
        return (
            <div className="AlignmentInput" >
                <Button onClick={() => this.props.onClick("textAlign|left")}>
                    <FontAwesomeIcon icon={faAlignLeft} />
                </Button>
                <Button onClick={() => this.props.onClick("textAlign|center")}>
                    <FontAwesomeIcon icon={faAlignCenter} />
                </Button>
                <Button onClick={() => this.props.onClick("textAlign|right")}>
                    <FontAwesomeIcon icon={faAlignRight} />
                </Button>
                <Button onClick={() => this.props.onClick("textAlign|justify")}>
                    <FontAwesomeIcon icon={faAlignJustify} />
                </Button>
            </div>
        );
    }
}


export function ButtonType() {
    return (
        <div className="ButtonType">
            <p className="Title">Type</p>
            <select id="TypeSelector">
                <option>Default</option>
                <option>Info</option>
                <option>Success</option>
                <option>Warning</option>
                <option>Danger</option>
            </select>
        </div>
    );
}

export function DividerStyle() {
    return (
        <div className="DividerStyle">
            <p className="Title">Style</p>
            <select id="DividerStyleSelector">
                <option>Solid</option>
                <option>Double</option>
                <option>Dotted</option>
                <option>Dashed</option>
            </select>
        </div>
    );
}

export function DividerColour() {
    return (
        <div className="DividerColour">
            <p className="Title">Colour</p>
            <select id="DividerColourSelector">
                <option>Black</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Grey</option>
                <option>Orange</option>
                <option>Red</option>
                <option>Purple</option>
                <option>White</option>
                <option>Yellow</option>
            </select>
        </div>
    );
}

export function DividerWidth() {
    return (
        <div className="DividerWidth">
            <p className="Title">Width</p>
            <div className="WidthContainer">
                <NumericInput className="DividerWidthValue" min={0} max={100} value={100} size="4"></NumericInput>
                {/* <input type="range" min = "0" max = "100" value = "100" id = "divideWidth"></input>
                <input type="text" id = "textInputDiv" placeholder = "100"></input> */}
            </div>
        </div>
    );
}

export function AddElement() {
    return (
        <div className="AddElementOptions">
            <p className="Title">Add Element</p>
            <div>
                <button>
                    <FontAwesomeIcon icon={faBan} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faFont} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faStar} />
                </button>
            </div>
        </div>
    );
}

export function SpacerThickness() {
    return (
        <div className="SpacerThickness">
            <p className="Title">Space</p>
            <div className="ThicknessContainer">
                <NumericInput className="SpacerThicknessValue" min={0} max={1000} value={50} size="5"></NumericInput>
                {/* <input type="range" min = "0" max = "1000" value = "50" id = "spaceThickness"></input>
                <input type="text" id = "textInputSpacer" placeholder = "50"></input> */}
            </div>
        </div>
    );
}



export function VideoSource() {
    return (
        <div className="VideoSource">
            <p className="Title">Type</p>
            <select id="TypeSelector">
                <option>Youtube</option>
                <option>Vimeo</option>
                <option>Dailymotion</option>
                <option>Self Hosted</option>
            </select>
        </div>
    );
}

export function VideoStartTime() {
    return (
        <div className="VideoStart">
            <p className="Title">Start</p>
            <div className="VidStartContainer">
                <input type="text"></input>
            </div>
        </div>
    );
}

export function VideoEndTime() {
    return (
        <div className="VideoEnd">
            <p className="Title">End</p>
            <div className="VidEndContainer">
                <input type="text"></input>
            </div>
        </div>
    );
}

export function AutoPlaySwitch() {
    return (
        <div className="AutoPlay">
            <p className="Title">Autoplay</p>
            <div className="AutoPlayContainer">
                <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    );
}

export function MuteVideoSwitch() {
    return (
        <div className="Mute">
            <p className="Title">Mute</p>
            <div className="MuteContainer">
                <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    );
}

export function LoopVideoSwitch() {
    return (
        <div className="Loop">
            <p className="Title">Loop</p>
            <div className="LoopContainer">
                <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    );
}

export function SelectImage() {
    return (
        <div className="SelectImage">
            <p className="Title">Select Image</p>
            <div className="SelectImageContainer">
                <button type="button">Select Image</button>
            </div>
        </div>
    );
}

export function SelectIcon() {
    return (
        <div className="SelectIcon">
            <p className="Title">Select Icon</p>
            <div className="SelectIconContainer">
                <button type="button">Select Icon</button>
            </div>
        </div>
    );
}

export function SetView() {
    return (
        <div className="SetView">
            <p className="Title">Set View</p>
            <select id="ViewSelector">
                <option>Default</option>
                <option>Stacked</option>
                <option>Framed</option>
            </select>
        </div>
    );
}

export function SetImageSize() {
    return (
        <div className="SetImageSize">
            {/* <p className="Title">Image Size</p> */}
            <div className="ImageSizeContainer">
                <div className="Selector">
                    <p className="Title">Image Size</p>
                    <select id="ImageSizeSelector">
                        <option>Custom</option>
                        <option>Set Size 1</option>
                        <option>Set Size 2</option>
                    </select>
                </div>
                <br></br>
                <div>
                    <label for="height" className="HeightTag">Height:&nbsp;</label>
                    <input type="text" id="height" maxLength="4" size="5"></input>

                    <label for="width" className="WidthTag">&nbsp;&nbsp;&nbsp;&nbsp;Width: &nbsp;</label>
                    <input type="text" id="width" maxLength="4" size="5"></input>
                    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                    <div className="ImageApply">
                        <button type="button">Apply</button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export function SetCaption() {
    return (
        <div className="SetCaption">
            <p className="Title">Caption</p>
            <div className="SetCaptionContainer">
                <input type="text"></input>
            </div>
        </div>
    );
}

export class ColourPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: '#fff',
        };
        this.handler = this.handler.bind(this);
    }

    handler() {
        this.props.onChange("color|" + this.state.background)
    }

    handleOnChange = (color) => {
        this.setState({ background: color.hex });
        this.handler()
    };


    render() {
        return (
            <ChromePicker
                color={this.state.background}
                onChange={this.handleOnChange}
            />
        );
    }
}

export class BackgroundColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: '#fff',
        };
        this.handler = this.handler.bind(this);
    }

    handler() {
        this.props.onChange("backgroundColor|" + this.state.background)
    }

    handleOnChange = (color) => {
        this.setState({ background: color.hex });
        this.handler()
    };


    render() {
        return (
            <ChromePicker
                color={this.state.background}
                onChange={this.handleOnChange}
            />
        );
    }
}

export class AlignmentImage extends Component {
    render() {
        return (
            <div className="AlignmentInput" >
                <Button onClick={() => {
                    this.props.onClick("textAlign|left");
                }}>
                    <FontAwesomeIcon icon={faAlignLeft} />
                </Button>
                <Button onClick={() => {
                    this.props.onClick("textAlign|center");
                }}>
                    <FontAwesomeIcon icon={faAlignCenter} />
                </Button>
                <Button onClick={() => {
                    this.props.onClick("textAlign|right");
                }}>
                    <FontAwesomeIcon icon={faAlignRight} />
                </Button>
            </div>
        );
    }
}

export class AlignmentVideo extends Component {
    render() {
        return (
            <div className="AlignmentInput" >
                <Button onClick={() => {
                    this.props.onClick("margin|auto auto auto 0px");
                }}>
                    <FontAwesomeIcon icon={faAlignLeft} />
                </Button>
                <Button onClick={() => {
                    this.props.onClick("margin|auto auto auto auto");
                }}>
                    <FontAwesomeIcon icon={faAlignCenter} />
                </Button>
                <Button onClick={() => {
                    this.props.onClick("margin|auto 0px auto auto");
                }}>
                    <FontAwesomeIcon icon={faAlignRight} />
                </Button>
            </div>
        );
    }
}