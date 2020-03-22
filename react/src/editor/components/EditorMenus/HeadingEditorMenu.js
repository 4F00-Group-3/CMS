import React, { Component } from 'react';
import {
    TextInput,
    LinkInput,
    SizeInput,
    HTMLTagInput,
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
                    <TextInput />
                    <LinkInput />
                    <SizeInput />
                    <NumericInput
                        rightAddon={"px"}
                        placeholder={"Font size"}
                        inputType={"number"}
                    />
                    <HTMLTagInput />
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