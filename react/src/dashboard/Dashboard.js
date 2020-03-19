import React, { Component } from 'react';
import Pages from './Pages';
import TopBar from './TopBar';
import SideBar from './SideBar';
import * as constants from '../constants';
import '../css/PageAdmin.css'
import UserAdmin from './UserAdmin';
import Settings from './Settings';
import {Redirect, Router} from 'react-router-dom';
import DashboardBackend from './DashboardBackend';

let backend = new DashboardBackend()

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
                    {page: <UserAdmin/>},
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
                })
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

const PagesContainerStyle = {
    marginLeft: (constants.SideBarWidthAsInt) + "vh",
    marginRight: (constants.SideBarWidthAsInt) + "vh",
    marginTop: "2vh",
    margin: "auto",
    width: "80%",
    //border: "3px solid green",
    padding: "10px",
}

const ListItemContainer = {
    margin: "auto",
    width: "90%",
    // border: "0px solid green",
    padding: "10px",
    borderRadius: "16px",
    background: "lightgrey",
    marginBottom: "5px"
}

const PageListStyle = {
    listStyleType: "none",
    margin: "auto",
    width: "100%",
    //border: "3px solid green",
    padding: "10px",
}

const sideBySide = {
    display: "flex",
    flexDirection: "row",
}




export default Dashboard;