import React, { Component } from 'react';
import "../../css/PageSection.css";
import {
    faAddressBook,
    faBell,
    faBook,
    faCamera,
    faCreditCard,
    faEye,
    faGift,
    faHeart,
    faLaptop,
    faLock,


} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YouTube from 'react-youtube';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { colors } from '@material-ui/core';
import EditingPage from './EditingPage';
import Editor from '../Editor'



class PageSection extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         page: this.props.page,
    //     }
    // }

    toggleClickClass = () => {
        this.props.onSectionPush(this.props.page.id, this.props.page.type, this.props.page.style[0]);
        this.props.toggleClickClass(this.props.page.index);
    }

    returnYouTube(url, height, width, autoplay, loop) {
        var splitURL = url.split("/");
        console.log(splitURL)
        let result = splitURL[0] + "//" + splitURL[2] + "/embed/" + splitURL[3] + "/"
        console.log(result);

        const opts = {
            height: height,
            width: width,
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: autoplay,
                loop: loop,
            }
        };

        return (
            <YouTube
                videoId={splitURL[3]}
                opts={opts}
                onReady={this._onReady}
            />)

    }

    returnIcon(icon) {
        switch (icon) {
            case "faLock": {
                return <FontAwesomeIcon size={this.props.page.size} icon={faLock} />;
            }
            case "faLaptop": {
                return <FontAwesomeIcon size={this.props.page.size} icon={faLaptop} />;
            }
            case "faHeart": {
                return <FontAwesomeIcon size={this.props.page.size} icon={faHeart} />;
            }
            case "faGift": {
                return <FontAwesomeIcon size={this.props.page.size} icon={faGift} />;
            }
            case "faEye": {
                return <FontAwesomeIcon size={this.props.page.size} icon={faEye} />;
            }
            case "faCreditCard": {
                return <FontAwesomeIcon size={this.props.page.size} icon={faCreditCard} />;
            }
            case "faCamera": {
                return <FontAwesomeIcon size={this.props.page.size} icon={faCamera} />;
            }
            case "faBook": {
                return <FontAwesomeIcon size={this.props.page.size} icon={faBook} />;
            }
            case "faAddressBook": {
                return <FontAwesomeIcon size={this.props.page.size} icon={faAddressBook} />;
            }
            case "faBell": {
                return <FontAwesomeIcon size={this.props.page.size} icon={faBell} />;
            }
            default: {
                return <FontAwesomeIcon size={this.props.page.size} icon={faLaptop} />
            }
        }
    }

    /**
     * This method returns the a user specified number of cols.
     */
    returnColumns() {
        var numCols = this.props.page.col;
        // ensures max number of columns is 12
        if (numCols > 12) {
            numCols = 12;
        };
        console.log("page", this.props.page)
        var cols = [];
        for (var i = 0; i < numCols; i++) {
            cols.push(
                <Col key={i}>
                    {/* <div style={{ height: "100px", backgroundColor: "red" }}>
                        <EditingPage page={this.props} onSectionPush={this.props.onSectionPush} setActive={this.props.setActive} />
                    </div> */}
                </Col>
            );
        }
        return cols;
    }

    renderColumnPage(col) {
        //might need to pass a onSelectionPush and stuff into the backend.. not sure..TODO
        return (
            <div style={{ height: "100px", backgroundColor: "red" }}>
                <EditingPage page={col.page} onSectionPush={this.props.onSectionPush} setActive={this.props.setActive} />
            </div>
        );
    }

    returnElement() {
        switch (this.props.page.type) {
            case "heading": {
                return (
                    <h1
                        key={this.props.page.index}
                        style={this.props.page.style[0]}>
                        {this.props.page.text}
                    </h1>
                )
            }
            case "divider": {
                return (<hr key={this.props.page.index} style={this.props.page.style[0]} />);
            }
            case "image": {
                return (<div style={{ textAlign: this.props.page.style[0]['textAlign'] }}><img key={this.props.page.index} style={this.props.page.style[0]} src={this.props.page.url} alt={this.props.page.text} /></div>)
            }
            case "button": {
                return (<div style={{ textAlign: this.props.page.style[0]['textAlign'] }}><a className={"btn btn-primary"} key={this.props.page.index} href={this.props.page.href} style={this.props.page.style[0]}>{this.props.page.text}</a></div>)
            }
            case "spacer": {
                return (
                    <div key={this.props.page.index} style={this.props.page.style[0]}>
                        {'\xa0'}
                    </div>
                );
            }
            case "video": {
                console.log();
                return (
                    <div key={this.props.page.index} style={this.props.page.style[0]}>
                        {this.returnYouTube(
                            this.props.page.url,
                            this.props.page.style[0]["height"],
                            this.props.page.style[0]["width"],
                            this.props.page.style[0]["autoplay"],
                            this.props.page.style[0]["loop"])}
                    </div>
                );
            }
            case "icon": {
                return (
                    <div key={this.props.page.index} style={this.props.page.style[0]}>
                        {this.returnIcon(this.props.page.faClassName)}
                    </div>
                )
            }
            case "row": {
                console.log("PageSection row: ", this.props);
                return (
                    <div key={this.props.page.index}>
                        <Row>
                            {/* {this.returnColumns()} */}
                            <Col>
                                <div style={{ height: "100px", backgroundColor: "red" }}>
                                    <EditingPage page={this.props} onSectionPush={this.props.page.onSectionPush} setActive={this.props.page.setActive} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                );
            }
            case "column": {
                return (
                    <div key={this.props.page.index}>
                        <Col>
                            <div style={{ height: "100px", backgroundColor: "red" }}>
                                <EditingPage page={this.props} onSectionPush={this.props.page.onSectionPush} setActive={this.props.page.setActive} />
                            </div>
                        </Col>
                    </div>
                );
            }
            default: {
                console.log("Not a caught switch in pagesection.js!");
                break;
            }
        }
    }

    render() {
        const isClicked = this.props.page.clicked;
        var classList = isClicked ? "pageSectionClick" : "pageSection";
        return (
            <div className={classList} onClick={this.toggleClickClass}>
                {this.returnElement()}
            </div>
        );
    }
}

export default PageSection;