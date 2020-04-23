import React, { Component } from 'react';
import User from './User';
import '../../css/Dashboard.css';
import AjaxCall from "../../ajax";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap';

/*Popup class for the add page pop up, handles opening the popup and passing
information from it back to the add User part */
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
        }
    }

    componentDidMount() {
        //THIS IS A BACKEND CALL TO RETRIEVE ALL USERS ASSOCIATED TO WEBSITEID
        this.props.backend.clearUsers();
        var arr = [];
        AjaxCall({ function: 'getUsersData', websiteId: sessionStorage.getItem('siteId') },
            function (response) {
                console.log(response);
                let responseArray = JSON.parse(response.split('php-cgi')[1].trim());
                arr = responseArray;
        });
        setTimeout(()=> this.initUsers(arr), 2000);
    }

    initUsers(users) {

        if (users !== "false"){
            for (var i = 0; i<users.length; i++) {
                this.props.backend.loadUsers(users[i].id, users[i].firstName);
            }
            this.setState({
                users: this.props.backend.users, 

            });
        }
        else {
            console.log("Nothing to load");

        }
    }

    getUsers(){
        var arr = [];
        AjaxCall({function: 'getUsersData', websiteId: sessionStorage.getItem('siteId')},
            function (response) {
            console.log(response);
            let responseArray = JSON.parse(response.split('php-cgi')[1].trim());
            arr = responseArray;
            console.log(arr);

        });
        this.props.backend.clearUsers();
        console.log(this.props.backend.users);
        setTimeout(()=> this.updateUsers(arr), 2000);
    }

    updateUsers(users){
        console.log(users);
        for (var i = 0; i<users.length; i++) {
            this.props.backend.loadUsers(users[i].id, users[i].firstName);
        }
        this.setState({
            users: this.props.backend.users,             
        });

        console.log(this.props.backend.users);
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
        AjaxCall({function: 'deleteUser', websiteId: sessionStorage.getItem('siteId'), userId: id},
            function (response) {
                console.log(response);
                let responseArray = JSON.parse(response.split('php-cgi')[1].trim());
                console.log(responseArray);
                arr = responseArray;
            });
        //END OF BACKEND CALL
        setTimeout(()=> this.getUsers(), 1000);
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
        var arr = [];
        AjaxCall({function: 'addUser', websiteId: sessionStorage.getItem('siteId'), firstName: uname, lastName: 'test', 
        password: 'test123', email: 'test@testing.com', type:'Admin'},
            function (response) {
                console.log(response);
                let responseArray = JSON.parse(response.split('php-cgi')[1].trim());
                console.log(responseArray);
                arr = responseArray;
            });
        console.log(arr);
        setTimeout(()=> this.getUsers(), 1000);
    }
}



export default Users;