import React, { Component } from "react";
import { Layout, Header, Content } from "react-mdl";

class UserManual extends Component {
  render() {
    return (
      <>
        <div>
          <Layout fixedHeader className="website-background">
            <Content style={{ scrollbarWidth: "none" }}>
              <div>
                <iframe
                  src="https://drive.google.com/file/d/1MwbY9F0jgwucSeek6NNVVbjiav7j1oE6/preview"
                  width="1280"
                  height="960"
                ></iframe>
              </div>
            </Content>
          </Layout>
        </div>
      </>
    );
  }
}

export default UserManual;
