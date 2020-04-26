import React, { Component } from 'react';
import ListItem from '../components/ListItem';


class User extends Component {
    constructor(props) {
        super(props);
        this.handlePageDelete = this.handleDelete.bind(this);
    }

    /**
     * This method handles when a user gets deleted
     * @param {} id 
     */
    handleDelete(id) {
        this.props.onDelete(id)
    }

    /**
     * This method renders a list item for a single user onto the display
     */
    render() {

        return (
            <ListItem
                {...this.props}
                onDelete={() => this.handleDelete(this.props.id)}

            />
        );

    }
}

export default User;