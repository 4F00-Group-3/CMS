import React, { Component } from 'react';
import '../../../css/EditorMenuComponents.css';
import { 
    SelectImage, 
    SetImageSize, 
    AlignmentInput, 
    SetCaption, 
    LinkInput 
} from './EditorMenuComponents';



class ImageEditor extends Component {
    render() {
        return (
            <div className="ImageEditorContainer">
                <SelectImage />
                <SetImageSize />
                <AlignmentInput />
                <SetCaption />
                <LinkInput />
            </div>
        );
    };
}

export default ImageEditor