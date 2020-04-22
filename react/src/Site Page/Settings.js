import React, { Component } from "react";
import Subscription from "./Subscription";
import { Layout, Header, Content } from "react-mdl";

class Settings extends Component {
    /**
     * This method is for the 'login' button on the nav menu
     * this will redirect the user to login
     */
    modifySubscription_OnClick = () => {
        this.setState({
            page: <Subscription />,
            activeButton: "",
        });
    };

    render() {
        return (
            <>
                <div>
                    <Layout fixedHeader className="website-background">
                        <Content style={{ scrollbarWidth: "none" }}>
                            <h1>This is the settings page</h1>
                            <h3>Change your subscription level</h3>
                            {/* <Page> */}
                            <div>
                                <button onClick={this.modifySubscription_OnClick}>
                                    Modify Your Subscription
                                </button>
                            </div>
                            {/* </Page> */}
                            {this.state.page}
                        </Content>
                    </Layout>
                </div>
            </>
        );
    }
}

export default Settings;