import React, { Component } from 'react';
import ListItem from '../components/ListItem';


class Page extends Component {
    constructor(props) {
        super(props);
        this.handlePageEdit = this.handlePageEdit.bind(this);
        this.handlePageDelete = this.handlePageDelete.bind(this);
    }

    /**
     * This method handles when the edit button is clicked.
     */
    handlePageEdit() {
        this.props.loadEditor(this.props.page)
    }

    /**
     * This method handles when the delete button is clicked.
     */
    handlePageDelete(id) {
        this.props.onPageDelete(this.props.id)
    }

    /**
     * This handles the editor closing.  
     * unused
     */
    onEditorUnload = () => {
        this.setState({isEditing: false})
    }

    /**
     * This method renders a list item onto the display representing a page.
     */
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