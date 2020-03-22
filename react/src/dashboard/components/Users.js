import React, { Component } from 'react';
import User from './User';


class Users extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUserAdd = this.handleUserAdd.bind(this);
        this.state = {
            'users': this.props.backend.all(),
        }
    }

    handleUserAdd() {
        console.log("user add clicked");
    }

    handleDelete(id) {
        console.log("user delete clicked");
        this.props.backend.delete(id);
        this.setState({
            'users': this.props.backend.all(),
        })
    }

    render() {
        return (
            <>
               <div className="PagesContainer" >
                        <ol className="PageList">
                            {this.state.users.map((user, i) => {
                                return (
                                    <li key={i}  className="ListItemContainer">
                                        <User
                                            {...user}
                                            onDelete={this.handleDelete}
                                            user={this.state.users[i]}
                                        />
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
            </>
        );
    }
}

export default Users;