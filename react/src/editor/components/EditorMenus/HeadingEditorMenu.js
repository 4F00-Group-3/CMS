import React, { Component } from 'react';
import {
    TextInput,
    ColourPicker,
    AlignmentInput,
    NumericInput
} from './EditorMenuComponents';


class HeadingEditor extends Component {

    onChange(props) {
        console.log(props);
    }

    render() {
        return (
            <>
                <div className="HeadingEditorContainer">
                    <TextInput
                        onChange={this.props.menuComponentOnClick}
                    />
                    <p>Text Color:</p>
                    <ColourPicker
                        onChange={this.props.menuComponentOnClick}
                    />
                    <NumericInput
                        rightAddon={"px"}
                        placeholder={"Font size"}
                        inputType={"number"}
                        onChange={this.props.menuComponentOnClick}
                    />
                    <AlignmentInput onClick={this.props.menuComponentOnClick} />
                </div>
                <div className="PrimaryButton">
                    <button type="button" className="btn btn-primary">Back</button>
                </div>
            </>
        );
    };
}

export default HeadingEditor