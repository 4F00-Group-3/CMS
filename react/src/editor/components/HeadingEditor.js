import React, { Component } from 'react';
import '../../css/Component.css';
import '../../css/HeadingEditor.css';
import {
    faAlignLeft,
    faAlignCenter,
    faAlignRight,
    faAlignJustify
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TextInput() {
    return (
        <div className="TextInput">
            <p className="Title">Title</p>
            <div className="Input-Container">
                <input type="text" placeholder="Heading Text" onBlur={addTextToHeading}></input>
            </div>
        </div>
    );
}

function addTextToHeading(textbox) {
    console.log(textbox);
}

function LinkInput() {
    return (
        <div className="LinkInput">
            <p className="Title">Link</p>
            <div className="Input-Container">
                <input type="text" placeholder="Place URL or Type" onBlur={addLinkToHeading}></input>
            </div>
        </div>
    );
}

function addLinkToHeading(input) {
    console.log(input);
}

function SizeInput() {
    return (
        <div className="SizeInput">
            <p className="Title">Size</p>
            <select id="SizeSelector" onBlur={changeSize}>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>X-Large</option>
            </select>
        </div>
    );
}

function changeSize(select) {
    console.log(select);
}

function HTMLTagInput() {
    return (
        <div className="HTMLTagInput">
            <label className="Title">Size</label>
            <select id="HeadingTagSelector" onBlur={changeHeadingType}>
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

function changeHeadingType(select) {
    console.log(select);
}

function AlignmentInput() {
    return (
        <div className="AlignmentInput">
            <p className="Title">Alignment</p>
            <div>
                <button>
                    <FontAwesomeIcon icon={faAlignLeft} onClick={changeAlignment} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faAlignCenter} onClick={changeAlignment} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faAlignRight} onClick={changeAlignment} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faAlignJustify} onClick={changeAlignment} />
                </button>
            </div>
        </div>
    );
}

function changeAlignment(button) {
    console.log(button)
}

class HeadingEditor extends Component {
    render() {
        return (
            <div className="HeadingEditorContainer">
                    <TextInput />
                    <LinkInput />
                    <SizeInput />
                    <HTMLTagInput />
                    <AlignmentInput />
            </div>
        );
    };
}

export default HeadingEditor