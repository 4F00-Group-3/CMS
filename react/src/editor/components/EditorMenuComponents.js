import React from 'react';
import '../../css/EditorMenuComponents.css';
import {
    faAlignLeft,
    faAlignCenter,
    faAlignRight,
    faAlignJustify
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TextInput() {
    return (
        <div className="TextInput">
            <p className="Title">Title</p>
            <div className="Input-Container">
                <input type="text" placeholder="Heading Text"></input>
            </div>
        </div>
    );
}

export function LinkInput() {
    return (
        <div className="LinkInput">
            <p className="Title">Link</p>
            <div className="Input-Container">
                <input type="text" placeholder="Place URL or Type"></input>
            </div>
        </div>
    );
}

export function SizeInput() {
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

export function HTMLTagInput() {
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

export function AlignmentInput() {
    return (
        <div className="AlignmentInput">
            <p className="Title">Alignment</p>
            <div>
                <button>
                    <FontAwesomeIcon icon={faAlignLeft}/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faAlignCenter}/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faAlignRight}/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faAlignJustify} />
                </button>
            </div>
        </div>
    );
}