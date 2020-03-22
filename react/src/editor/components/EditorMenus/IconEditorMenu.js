import React, { Component } from 'react';
import '../../../css/EditorMenuComponents.css';
import {
    SelectIcon,
    LinkInput, 
    AlignmentInput,
    SetView, 
} from './EditorMenuComponents';



class IconEditor extends Component {
    render() {
        return (
            <div className="IconEditorContainer">
                    <SelectIcon />
                    <SetView />
                    <LinkInput />
                    <AlignmentInput />
            </div>
        );
    };
}

export default IconEditor