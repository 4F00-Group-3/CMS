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
import AjaxCall from "../ajax";

let backend = new DashboardBackend()
let userAdminBackend = new UserAdminBackend()

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: <Pages backend={backend}/>,
            response: "",
        }
        //backend.returnAllPages();
        // this.componentDidMount().bind(this);
    }

    componentDidMount() {
        console.log("ajaxcall"); // to see if it actually went thru
        AjaxCall({ function: 'getAllPages', schema: 'testschema'}, // There is no response from this call coming, having Casey look into this
            function (response) {
                console.log(response);
                backend.setPages(response);
            });
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