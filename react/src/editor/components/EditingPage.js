import React, { Component } from 'react';
import * as constants from '../constants';
import PageSection from './PageSection';

class EditingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
        }
    }


    Refresh() {
        this.setState({page: this.props.page});
    }

    /**
     * This method renders a page from JSON onto the actual page editor
     * Can be reused for actual page viewing as well
     */
    returnPage() {
        try {
            console.log(this.props.page);
            let page = [];
            for (let index = 0; index < this.props.page.length; index++) {
                let section = this.props.page[index];
                page.push(
                    <PageSection 
                        type={section.type} 
                        index={index} 
                        style={section.style[0]}
                        text={section.text}
                        faClassName={section.faClassName}
                        onClick={section.onClick}
                        url={section.url}

                        />)
                // switch (section.type) {
                //     case "heading": {
                //         page.push(<h1 key={index} style={section.style[0]}>{section.text}</h1>)
                //         break;
                //     }
                //     case "divider": {
                //         page.push(<hr key={index} style={section.style[0]} />);
                //         break;
                //     }
                //     case "image": {
                //         page.push(<img key={index} src={section.url} alt={section.text} style={section.style[0]} />)
                //         break;
                //     }
                //     case "button": {
                //         page.push(<button key={index} onClick={section.onClick} style={section.style[0]}>{section.text}</button>)
                //         break;
                //     }
                //     case "spacer": {
                //         page.push(<div key={index} style={section.style[0]}></div>);
                //         break;
                //     }
                //     case "video": {
                //         page.push(
                //             <video style={section.style[0]} controls>
                //                 <source src={section.url} type="video/mp4" />
                //                 Your browser does not support HTML5 video.
                //             </video>
                //         );
                //         break;
                //     }
                //     case "icon": {
                //         page.push(<i className={section.faClassName} style={section.style[0]}/>)
                //         break;
                //     }
                //     default: {
                //         console.log("Not a heading!");
                //         break;
                //     }
                // }

            }

            return page;
        } catch (error) {

        }
    }

    render() {
        return (
            <div style={containerStyle}>
                {this.returnPage()}
            </div>
        );
    }
}

const containerStyle = {
    background: "white",
    width: (100 - constants.EditorSideBarWidth) + "%",
    height: "100vh",
    border: "3px solid red",
    marginLeft: constants.EditorSideBarWidth,
}

export default EditingPage;