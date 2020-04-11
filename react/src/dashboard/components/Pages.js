import React, { Component } from 'react';
import Page from './Page';
import '../../css/Dashboard.css';
import AjaxCall from "../../ajax";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

/*Popup class for the add page pop up, handles opening the popup and passing
information from it back to the add Page part */
class Popup extends Component {

    getTitleOfPage = () => {
        var title = document.getElementById("ptit").value;
        if (title != "") {
            this.props.titlePage(title);
            this.props.closePopup();
        }
        else {
            alert("Enter a title for the new page")
        }

    }

    render() {
        return (
            <div className='popup'>
                <Container className='popup_inner' fluid="sm">
                    <Row>
                        <Col>
                            <h3 className='popup-header center'>{this.props.text}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label className='center' for="pagetitle">Enter Title:</label>
                        </Col>
                        <Col>
                            <input className='dash-form-input center' type="text" id="ptit" placeholder="" name="pagetitle" required />
                        </Col>


                    </Row>
                    <Row>
                        <Col className='right'>
                            <button className='btn btn-primary new-page-button' onClick={this.getTitleOfPage}>Add</button>
                        </Col>
                        <Col>
                            <button className='btn btn-secondary new-page-button' onClick={this.props.closePopup}>Cancel</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class Pages extends Component {

    constructor(props) {
        super(props);
        this.handlePageEdit = this.handlePageEdit.bind(this);
        this.handlePageDelete = this.handlePageDelete.bind(this);
        this.handlePageUpdate = this.handlePageUpdate.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            'pages': this.props.backend.pages,
            showPopup: false,
            pageID: this.props.backend.pages.length + 1,
        }

    }

    componentDidMount() {
        //THIS IS A BACKEND CALL TO RETRIEVE ALL PAGES ASSOCIATED TO WEBSITEID
        //All console logs are for testing purposes
        var arr = [];
        AjaxCall({ function: 'getPagesData', websiteId: sessionStorage.getItem('siteId') },
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

    onClick() {
        console.log(this.constructor.name + " was clicked");
    }

    handlePageEdit() {
        console.log("handle page edSDFGJDFZGJXFGJXFGJit clicked");
    }

    handlePageDelete(id) {
        console.log("handle page delete clicked");
        //THIS IS A BACKEND CALL TO DELETE PAGE ASSOCIATED TO WEBSITEID BY A PAGEID
        //All console logs are for testing purposes
        var arr = [];
        AjaxCall({ function: 'deleteUser', websiteId: sessionStorage.getItem('siteId'), pageId: id },
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
            'pages': this.props.backend.pages,
        })
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
                <div className="PagesContainer" >
                    <ul className="PageList">
                        {this.state.pages.map((page, i) => {
                            return (
                                <li key={i} className="ListItemContainer">
                                    <Page
                                        {...page}
                                        onPageEdit={this.handlePageEdit}
                                        onPageUpdate={this.handlePageUpdate}
                                        onPageDelete={this.handlePageDelete}
                                        page={this.state.pages[i]}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    <button className='add-page-button btn btn-primary' onClick={this.togglePopup.bind(this)}>Add Page</button>
                    {this.state.showPopup ?
                        <Popup
                            text='Enter the title of the new page.'
                            closePopup={this.togglePopup.bind(this)}
                            titlePage={this.createPage}
                        />
                        : null
                    }

                </div>
            </>
        );
    }

    createPage = (ptitle) => {
        this.props.backend.updatePages(this.state.pageID, ptitle, ptitle, []);
        console.log(this.state.pageID);
        this.setState({ pages: this.props.backend.pages, pageID: this.state.pageID + 1 });
    }
}

export default Pages;