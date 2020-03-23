import React, { Component } from 'react';
import Pages from './components/Pages';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import '../css/PageAdmin.css'
import Users from './components/Users';
import Settings from './components/Settings';
import {Redirect, Router} from 'react-router-dom';
import DashboardBackend from './backend/DashboardBackend';
import UserAdminBackend from './backend/UserAdminBackend';

let backend = new DashboardBackend()
let userAdminBackend = new UserAdminBackend()

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: <Pages backend={backend}/>,
        }
    }

    onPush = (buttonName) => {
        console.log(buttonName);
        switch(buttonName) {
            case "Pages": {
                this.setState(
                    {page: <Pages backend={backend}/>},
                );
                break;
            }
            case "Users": {
                this.setState(
                    {page: <Users backend={userAdminBackend}/>},
                );
                break;
            }
            case "Settings": {
                this.setState(
                    {page: <Settings/>},
                );
                break;
            }
            case "Log Out": {
                this.setState({
                    page: <Router><Redirect to='/' /></Router>,
                });
                break;
            }
            default: {
                break;
            }
        }
    }

    render() {
        return (
            <>
                <TopBar />
                <div className="SideBySide">
                    <SideBar onPush={this.onPush}/>
                    {this.state.page}
                </div>
            </>
        );
    }
}


export default Dashboard;