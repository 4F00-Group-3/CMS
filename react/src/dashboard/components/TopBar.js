import React, { Component } from 'react'
import '../../css/PageAdmin.css'
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';

class TopBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="bg-light justify-content-between TopBar" sticky="top"  color="light" light expand="md">
                    <NavbarBrand href="#">{/**this has to be here so icon is right aligned**/}</NavbarBrand>
                    <NavbarBrand href="#">
                        <i className="fa fa-address-book TopBar-Icon"></i>
                    </NavbarBrand>
                </Navbar>
            </div>
        )
    }
}

export default TopBar