import React, { Component } from 'react';
import '../../css/Component.css';
import {
    TextInput, 
    LinkInput, 
    SizeInput, 
    HTMLTagInput, 
    AlignmentInput
} from './EditorMenuComponents';



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