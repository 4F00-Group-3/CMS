import React, { Component } from 'react';
import User from './User';
import '../../css/PageAdmin.css';

/*Popup class for the add page pop up, handles opening the popup and passing
information from it back to the add Page part */
class Popup extends Component {
    
    getNameOfUser=()=> {
        var nam = document.getElementById("unam").value;
        if (nam != ""){
            this.props.userName(nam);
            this.props.closePopup();
        }
        else {
            alert("Please enter a name");
        }
        
    }

    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
              <h3>{this.props.text}</h3>
              <label for="username">Enter Name:</label>
              <input type="text" id="unam" placeholder="" name="username" required></input>
              <br></br>
              <br></br>
              
              <button onClick={this.getNameOfUser}>Add</button>
              <button onClick={this.props.closePopup}>Cancel</button>
          </div>
        </div>
      );
    }
  }

class Users extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUserAdd = this.handleUserAdd.bind(this);
        this.state = {
            'users': this.props.backend.users,
            showPopup: false,
            userID : this.props.backend.users.length + 1,
        }
    }

    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
    }

    handleUserAdd() {
        console.log("user add clicked");
    }

    handleDelete(id) {
        console.log("user delete clicked");
        this.props.backend.delete(id);
        this.setState({
            'users': this.props.backend.users,
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
                        
                        <button onClick={this.togglePopup.bind(this)}>Add User</button>
                       {this.state.showPopup ? 
                            <Popup
                                text='Enter the name of the new user.'
                                closePopup={this.togglePopup.bind(this)}
                                userName={this.createUser}
                                
                                />
                            : null
                        }
                    </div>
            </>
        );
    }
    createUser=(uname)=> {
        this.props.backend.updateUsers(this.state.userID, uname);
        console.log(this.state.userID);
        this.setState({pages: this.props.backend.users, userID: this.state.userID+1});
    }
}



export default Users;