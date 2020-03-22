import React, { Component } from 'react';
import ListItem from '../components/ListItem';

class User extends Component {
    constructor(props) {
        super(props);
        this.handlePageDelete = this.handleDelete.bind(this);
        console.log(props);
    }

    handleDelete(id) {
        console.log("handling delete" + id);
        this.props.onDelete(id)
    }

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