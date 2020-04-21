import React, { Component } from 'react';
import ListItem from '../components/ListItem';
import Editor from '../../editor/Editor';
import NewWindow from 'react-new-window'


class Page extends Component {
    constructor(props) {
        super(props);
        this.handlePageEdit = this.handlePageEdit.bind(this);
        this.handlePageDelete = this.handlePageDelete.bind(this);
    }


    handlePageEdit() {
        this.props.loadEditor(this.props.page)
    }

    handlePageDelete(id) {
        // console.log("time to delete a page " + this.props.id);
        this.props.onPageDelete(this.props.id)
    }

    onEditorUnload = () => {
        this.setState({isEditing: false})
    }

    render() {
        var result = <ListItem
                type={"page"}
                {...this.props}
                isEditing={this.props.isEditing}
                onPageEdit={this.handlePageEdit}
                onPageDelete={this.handlePageDelete}
                title={this.props.name}    

            />;

        return result;
    }
}

export default Page;