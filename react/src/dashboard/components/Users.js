import React, { Component } from 'react';
import User from './User';
import '../../css/Dashboard.css';
import AjaxCall from "../../ajax";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap';

/*Popup class for the add page pop up, handles opening the popup and passing
information from it back to the add Page part */
class Popup extends Component {

    getNameOfUser = () => {
        var nam = document.getElementById("unam").value;
        if (nam != "") {
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
                <Container className='popup_inner' fluid="sm">
                    <Row>
                        <h3 className='popup-header center'>{this.props.text}</h3>
                    </Row>
                    <Row>
                        <Col>
                            <label  className='center'  for="username">Enter Name:</label>
                        </Col>
                        <Col>
                            <input className='dash-form-input center' type="text" id="unam" placeholder="" name="username" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className='btn btn-primary new-page-button' onClick={this.getNameOfUser}>Add</Button>
                        </Col>
                        <Col>
                            <Button className='btn btn-secondary new-page-button' onClick={this.props.closePopup}>Cancel</Button>
                        </Col>
                    </Row>
                </Container>
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
            userID: this.props.backend.users.length + 1,
        }
    }

    componentDidMount() {
        //THIS IS A BACKEND CALL TO RETRIEVE ALL USERS ASSOCIATED TO WEBSITEID
        console.log("response");
        var arr = [];
        AjaxCall({ function: 'getUsersData', websiteId: sessionStorage.getItem('siteId') },
            function (response) {
                console.log(response);
                let responseArray = JSON.parse(response.split('php-cgi')[1].trim());
                console.log(responseArray);
                arr = responseArray;
            });
        console.log(arr);
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
        //THIS IS A BACKEND CALL TO DELETE USER ASSOCIATED TO WEBSITEID BY A USERID
        //All console logs are for testing purposes
        var arr = [];
        AjaxCall({ function: 'deletePage', websiteId: sessionStorage.getItem('siteId'), userId: id },
            function (response) {
                console.log(response);
                let responseArray = JSON.parse(response.split('php-cgi')[1].trim());
                console.log(responseArray);
                arr = responseArray;
            });
        console.log(arr);
        //END OF BACKEND CALL

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
                                <li key={i} className="ListItemContainer">
                                    <User
                                        {...user}
                                        onDelete={this.handleDelete}
                                        user={this.state.users[i]}
                                    />
                                </li>
                            );
                        })}
                    </ol>

                    <button className='add-page-button btn btn-primary ' onClick={this.togglePopup.bind(this)}>Add User</button>
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
    createUser = (uname) => {
        this.props.backend.updateUsers(this.state.userID, uname);
        console.log(this.state.userID);
        this.setState({ pages: this.props.backend.users, userID: this.state.userID + 1 });
    }
}



export default Users;