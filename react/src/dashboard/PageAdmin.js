import React, { Component } from 'react';
import Page from './Page';
import TopBar from './TopBar';
import SideBar from './SideBar';
import * as constants from '../editor/constants';



class PageAdmin extends Component {
    constructor(props) {
        super(props);
        this.handlePageEdit = this.handlePageEdit.bind(this);
        this.handlePageDelete = this.handlePageDelete.bind(this);
        this.handlePageInsert = this.handlePageInsert.bind(this);
        this.handlePageUpdate = this.handlePageUpdate.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            'pages': this.props.backend.all(),
        }
    }



    onClick() {
        console.log(this.constructor.name + " was clicked");
    }

    handlePageEdit() {
        console.log("handle page edit clicked");
    }

    handlePageDelete(id) {
        console.log("handle page delete clicked");
        this.props.backend.delete(id);
        this.setState({
            'pages': this.props.backend.all(),
        })
    }

    handlePageInsert() {
        console.log("handle page insert clicked");
    }

    handlePageUpdate(id, field, value) {
        this.props.backend.update(id, field, value);
        this.setState({
            'pages': this.props.backend.all(),
        })
    }

    render() {
        return (
            <>

                <TopBar />
                <div style={sideBySide}>

                    <SideBar />
                    <div style={PagesContainerStyle}>
                        <ol style={PageListStyle}>
                            {this.state.pages.map((page, i) => {
                                return (
                                    <li key={i} style={ListItemContainer}>
                                        <Page
                                            {...page}
                                            onPageEdit={this.handlePageEdit}
                                            onPageInsert={this.handlePageInsert}
                                            onPageUpdate={this.handlePageUpdate}
                                            onPageDelete={this.handlePageDelete}
                                            page={this.state.pages[i]}


                                        />
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
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




export default PageAdmin;