import React, { Component } from 'react';
import ListItem from '../components/ListItem';
import Editor from '../../editor/Editor';
import NewWindow from 'react-new-window'


class Page extends Component {
    constructor(props) {
        super(props);

        this.handlePageEdit = this.handlePageEdit.bind(this);
        this.handlePageDelete = this.handlePageDelete.bind(this);
        this.handleOnPageCancel = this.handleOnPageCancel.bind(this);

        this.state = {
            'isEditing': false,

        }

    }


    handlePageEdit() {
        this.setState({
            'isEditing': true,
        });
        console.log("time to edit a page");
    }

    handlePageDelete(id) {
        console.log("time to delete a page " + this.props.id);
        this.props.onPageDelete(this.props.id)
    }

    handleOnPageCancel() {
        this.setState({
            'isEditing': false,
        });
        console.log("time to cancel a page ");
    }

    onEditorUnload = () => {
        this.setState({isEditing: false})
    }

    render() {
        var result = null;
        if (this.state.isEditing) {
            result =
                <>
                    <NewWindow 
                    name={"Editor"}  
                    title={"Editor"}
                    onUnload={this.onEditorUnload}>
                        <Editor
                            onPageCancel={this.handleOnPageCancel}
                            page={this.props.page}
                        />
                    </NewWindow>
                    <ListItem
                        type={"page"}
                        {...this.props}
                        isEditing={this.props.isEditing}
                        onPageEdit={this.handlePageEdit}
                        onPageDelete={this.handlePageDelete}

                    />
                </>;

        }
        else {
            result = <ListItem
                type={"page"}
                {...this.props}
                isEditing={this.props.isEditing}
                onPageEdit={this.handlePageEdit}
                onPageDelete={this.handlePageDelete}

            />;
        }

        return result;
    }
}

export default Page;