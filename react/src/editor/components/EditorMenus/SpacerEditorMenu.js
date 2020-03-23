import React, { Component } from 'react';
import '../../../css/EditorMenuComponents.css';
import {
    SpacerThickness,
} from './EditorMenuComponents';



class SpacerEditor extends Component {
    render() {
        return (
            <div className="SpacerEditorContainer">
                    <SpacerThickness />
            </div>
        );
    };
}

export default SpacerEditor