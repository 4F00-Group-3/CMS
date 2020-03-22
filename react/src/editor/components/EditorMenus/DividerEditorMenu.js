import React, { Component } from 'react';
import '../../../css/EditorMenuComponents.css';
import {
    DividerStyle,
    DividerColour,
    DividerWidth,
    AlignmentInput,
    AddElement,
} from './EditorMenuComponents';



class DividerEditor extends Component {
    render() {
        return (
            <div className="DividerEditorContainer">
                    <DividerStyle />
                    <DividerColour />
                    <DividerWidth />
                    <AlignmentInput />
                    <AddElement />
            </div>
        );
    };
}

export default DividerEditor