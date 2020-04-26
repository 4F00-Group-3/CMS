import React, { Component } from "react";
import {
    Header,
    Navigation
} from "react-mdl";

/**
 * unused, I think
 */
class NavBar extends Component{
    render(){
        return (
            <Header transparent title="NO." style={{ color: "white" }}>
            <Navigation>
              <a href="/loginpage">Log In</a>
              <a href="/getstarted" style={{ fontWeight: "bold" }}>
                Get Started
              </a>
              <a href="/#pl-pr">Plans & Pricing</a>
              <a href="/#faq-page">FAQ</a>
            </Navigation>
          </Header>
        );
    }
}
export default NavBar;