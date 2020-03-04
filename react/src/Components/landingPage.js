import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class landingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <h2 className="home-page-title">
              Proin placerat finibus porttitor mauris eu malesuada.
            </h2>
            <h4 className="home-page-subtitle">
              Proin placerat finibus porttitor mauris eu malesuada.
            </h4>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default landingPage;
