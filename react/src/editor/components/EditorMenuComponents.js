import React, { Component } from 'react';
import '../../css/EditorMenuComponents.css';
import {
    faAlignLeft,
    faAlignCenter,
    faAlignRight,
    faAlignJustify
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class NumericInput extends Component {
    render() {
        return (
            <div className="NumericInput input-group mb-3">
                <input type={this.props.inputType} className="form-control" placeholder={this.props.placeholder}  aria-label={this.props.placeholder} aria-describedby="basic-addon1" />
                
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
                    <input type="text" placeholder="Heading Text"></input>
                </div>
            </div>
        );
    }
}

export class LinkInput extends Component {
    render() {
        return (
            <div className="LinkInput">
                <p className="Title">Link</p>
                <div className="Input-Container">
                    <input type="text" placeholder="Place URL or Type"></input>
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
                <p className="Title">Alignment</p>
                <div>
                    <button onClick={() => this.props.onClick("textAlign:left")}>
                        <FontAwesomeIcon icon={faAlignLeft} />
                    </button>
                    <button onClick={() => this.props.onClick("textAlign:center")}>
                        <FontAwesomeIcon icon={faAlignCenter} />
                    </button>
                    <button onClick={() => this.props.onClick("textAlign:right")}>
                        <FontAwesomeIcon icon={faAlignRight} />
                    </button>
                    <button onClick={() => this.props.onClick("textAlign:justify")}>
                        <FontAwesomeIcon icon={faAlignJustify} />
                    </button>
                </div>
            </div>
        );
    }
}