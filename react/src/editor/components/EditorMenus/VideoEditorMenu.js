import React, { Component } from 'react';
import '../../../css/EditorMenuComponents.css';
import {
    AutoPlaySwitch, 
    LinkInput,
    VideoSource, 
    VideoStartTime, 
    VideoEndTime, 
    MuteVideoSwitch, 
    LoopVideoSwitch,
} from './EditorMenuComponents';



class VideoEditor extends Component {
    render() {
        return (
            <div className="SpacerEditorContainer">
                    <VideoSource />
                    <LinkInput />
                    <VideoStartTime />
                    <VideoEndTime />
                    <AutoPlaySwitch />
                    <MuteVideoSwitch />
                    <LoopVideoSwitch />
            </div>
        );
    };
}

export default VideoEditor