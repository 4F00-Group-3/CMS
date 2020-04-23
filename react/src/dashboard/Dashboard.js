import React, { Component } from "react";
import Pages from "./components/Pages";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import "../css/Dashboard.css";
import Users from "./components/Users";
import Settings from "./components/Settings";
import DashboardBackend from "./backend/DashboardBackend";
import UserAdminBackend from "./backend/UserAdminBackend";
import Editor from '../editor/Editor';
import {
  Header,
} from "react-mdl";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

let backend = new DashboardBackend();
let userAdminBackend = new UserAdminBackend();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      isEditing: false,
    };

    if (sessionStorage.getItem('id') === null || sessionStorage.getItem('siteId') === null) {
      props.handleHomeClick();
    }
  }

  componentDidMount = () => {
    backend.getPages(this);
  }

  returnToDash = () => {
    console.log('returning to dash')
    this.setState({
      page: <Pages
        loadEditor={this.loadEditor}
        backend={backend} />,
      isEditing: false
    });
  }

  loadEditor = (page) => {
    this.setState({
      page:
        <Editor
          page={page}
          returnToDash={this.returnToDash}
        />,
      isEditing: true,
    }
    )
  }

  onPush = buttonName => {
    console.log(buttonName);
    switch (buttonName) {
      case "Pages": {
        this.setState({
          page: <Pages
            loadEditor={this.loadEditor}
            backend={backend} />
        });
        break;
      }
      case "Users": {
        this.setState({ page: <Users backend={userAdminBackend} /> });
        break;
      }
      case "Settings": {
        this.setState({ page: <Settings /> });
        break;
      }
      case "Log Out": {
        sessionStorage.clear();
        this.props.handleHomeClick();
        break;
      }
      default: {
        break;
      }
    }
  };

  /**
     * This function returns the top navigation
     */
  TopNav() {
    return (
      <Header className={"dash-topnav"} transparent style={{ backgroundColor: "#000" }}>
        <Row className='topnav-row'>
          <Col>
            <button onClick={this.props.handleHomeClick} className="main-top-home-nav" />
          </Col>
          <Col style={{ textAlign: 'right' }}>
            <button
              onClick={() => this.onPush("Log Out")}
              className={"button button-primary"}
            >
              Log Out
                      </button>
          </Col>
        </Row>
      </Header>
    );
  }

  render() {
    if (this.state.isEditing) {
      return <>{this.state.page}</>
    }
    else {

      return (
        <>
          <div style={{ overflow: "hidden", width: "100%", height: "100%", }}>
            {this.TopNav()}
            <Container className="dashboard-jumbotron" fluid >
              <h1 className="site-page-header">Manage Your Site</h1>
              <Row>
                <Col style={{ textAlign: "right" }}>
                  <Button onClick={() => this.onPush("Pages")} className="dashboard-button">Pages</Button>
                </Col>
                <Col>
                  <Button onClick={() => this.onPush("Users")} className="dashboard-button">Users</Button>
                </Col>
              </Row>
            </Container>
              {this.state.page}
              <Button onClick={this.props.handleSitePageClick} className="return-to-sites-btn">Return to Sites</Button>
          </div>
        </>
      );
    }

  }

}

export default Dashboard;
