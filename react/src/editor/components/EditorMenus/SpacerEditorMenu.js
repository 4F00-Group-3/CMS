import React, { Component } from 'react';
import '../../../css/EditorMenuComponents.css';
import {
    SpacerThickness,
} from './EditorMenuComponents';

import {
    NumericInput
} from './EditorMenuComponents'



class SpacerEditor extends Component {
    render() {
        return (
            <div className="SpacerEditorContainer">
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



export default SpacerEditor