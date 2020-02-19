import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class App extends React.Component {

  render() {
    return (
      <div className='sidebar'>


        <SideNav
          onSelect={(selected) => {
            // Add your code here
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                Home
              </NavText>
            </NavItem>
            <NavItem eventKey="charts">
              <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                Charts
              </NavText>
              <NavItem eventKey="charts/linechart">
                <NavText>
                  Line Chart
                  </NavText>
              </NavItem>
              <NavItem eventKey="charts/barchart">
                <NavText>
                  Bar Chart
                  </NavText>
              </NavItem>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    );
  }
}

export default App;