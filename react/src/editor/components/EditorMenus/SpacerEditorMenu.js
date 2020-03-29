import React, { Component } from 'react';
import '../../../css/EditorMenuComponents.css';
import {
    SpacerThickness,
} from './EditorMenuComponents';

import {
    NumericInput
} from './EditorMenuComponents'



class SpacerEditorMenu extends Component {
    render() {
        return (
            <div className="SpacerEditorContainer editor-menu border bg-light rounded p-1">
                <NumericInput
                    rightAddon={"px"}
                    placeholder={"space size"}
                    inputType={"number"}
                    onChange={this.props.menuComponentOnClick}
                />
            </div>
        );
    };
}



export default SpacerEditorMenu