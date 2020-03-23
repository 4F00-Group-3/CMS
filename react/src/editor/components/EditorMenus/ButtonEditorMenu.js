import React, { Component } from 'react';
import '../../../css/EditorMenuComponents.css';
import {
    ButtonType,
    TextInput, 
    LinkInput, 
    AlignmentInput,
    SizeInput,
    SelectIcon, 
} from './EditorMenuComponents';



class ButtonEditor extends Component {
    render() {
        return (
            <div className="ButtonEditorContainer">
                    <ButtonType />
                    <TextInput />
                    <LinkInput />
                    <AlignmentInput />
                    <SizeInput />
                    <SelectIcon />
            </div>
        );
    };
}

export default ButtonEditor