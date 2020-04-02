import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content, Cell, Grid, Card, CardTitle, CardActions, CardText } from "react-mdl";
import { Link } from "react-router-dom";
import '../css/TemplatePage.css'

export default class TemplatePage extends Component {

    render() {
        return (
            <div className="TemplatePage">
                <div className="Header">
                    <Header transparent title="NO." style={{ color: "white" }}>
                        <Navigation>
                        <p style={{ color: "white", textAlign: "right" }}>
                            Account
                        </p>
                        </Navigation>
                    </Header>

                    <h1 className="TemplatePageTitle">
                    Choose a Unique Template
                    </h1>
                    <h4 className="TemplatePageSubtitle">
                    Here at NO we have all the templates. <br />
                    Just the most and the best. <br />
                    Pick your favourite.  
                    </h4>
                </div>
                <div className="Content">
                    <Grid>
                        <Cell col={12}>
                            <div className="ContentGrid">
                                {/* Card 1 */}
                                <Card className="CardStyle" shadow={0}>
                                    <CardTitle 
                                        expand 
                                        style=
                                        {{
                                            background: "black"
                                        }}
                                    />
                                    <CardText className="CardText">
                                        Custom
                                    </CardText>
                                </Card>
                                {/* Card 2 */}
                                <Card className="CardStyle" shadow={0}>
                                    <CardTitle 
                                        expand 
                                        style=
                                        {{
                                            background: "black"
                                        }}
                                    />
                                    <CardText className="CardText">
                                        Template 1
                                    </CardText>
                                </Card>
                                {/* Card 3 */}
                                <Card className="CardStyle" shadow={0}>
                                    <CardTitle 
                                        expand 
                                        style=
                                        {{
                                            background: "black"
                                        }}
                                    />
                                    <CardText className="CardText">
                                        Template 2
                                    </CardText>
                                </Card>
                                {/* Card 4 */}
                                <Card className="CardStyle" shadow={0}>
                                    <CardTitle 
                                        expand 
                                        style=
                                        {{
                                            background: "black"
                                        }}
                                    />
                                    <CardText className="CardText">
                                        Template 3
                                    </CardText>
                                </Card>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </div>
        );
    }
}
