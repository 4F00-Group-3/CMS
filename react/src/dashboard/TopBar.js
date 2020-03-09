import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as constants from '../editor/constants'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Icon } from 'react-mdl';



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
        const { navCollapsed } = this.state
        return (
            <div>
                <Navbar className="bg-light justify-content-between" sticky="top" style={TopBarContainerStyles} color="light" light expand="md">
                    <NavbarBrand href="#">{/**this has to be here so icon is right aligned**/}</NavbarBrand>
                    <NavbarBrand href="#">

                        <i className="fa fa-address-book" style={TopBarIconStyle}></i>

                    </NavbarBrand>
                </Navbar>
            </div>
        )
    }
}

const TopBarContainerStyles = {
    height: constants.TopBarHeight,
    //marginLeft: constants.SideBarWidth,
}

const TopBarIconStyle = {
    height: "5vh",
    width: "5vh",
}

export default TopBar