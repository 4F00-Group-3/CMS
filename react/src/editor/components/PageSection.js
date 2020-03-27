import React, { Component } from 'react';
import "../../css/PageSection.css";

class PageSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
        }
    }

    returnElement() {
        switch (this.props.type) {
            case "heading": {
                return (
                    <h1
                        key={this.props.index}
                        style={this.props.style}>
                            {this.props.text}
                    </h1>
                )
            }
            case "divider": {
                return (<hr key={this.props.index} style={this.props.style} />);
            }
            case "image": {
                console.log(this.props.style['textAlign'])
                return (<div style = {{textAlign: this.props.style['textAlign']}}><img key={this.props.index}  style={this.props.style} src={this.props.url} alt={this.props.text}  /></div>)
            }
            case "button": {
                return (<button key={this.props.index} onClick={this.props.onClick} style={this.props.style}>{this.props.text}</button>)
            }
            case "spacer": {
                return (<div key={this.props.index} style={this.props.style}></div>);
            }
            case "video": {
                return (
                    <video key={this.props.index} style={this.props.style} controls>
                        <source src={this.props.url} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                );
            }
            case "icon": {
                return (<i key={this.props.index} className={this.props.faClassName} style={this.props.style} />)
            }
            default: {
                console.log("Not a caught switch in pagesection.js!");
                break;
            }
        }
    }

    render() {
        return (
            <div className="pageSection"  onClick={() => this.props.onSectionPush(this.props.index, this.props.type, this.props.style)}>
                {this.returnElement()}
            </div>
        );
    }
}

export default PageSection;