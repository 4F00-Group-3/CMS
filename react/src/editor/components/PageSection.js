import React, { Component } from "react";
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
    faLock
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YouTube from 'react-youtube';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PageSection extends Component {

    /**
     * This method creates am embedded react youtube video component
     * @param {*} url The url of the Youtube video
     * @param {*} height the height of the Youtube Video
     * @param {*} width the width of the Youtube Video
     * @param {*} autoplay autoplay boolean
     * @param {*} loop loop boolean
     */
    returnYouTube(url, height, width, autoplay, loop) {
        var splitURL = url.split("/");
        let result = splitURL[0] + "//" + splitURL[2] + "/embed/" + splitURL[3] + "/";
    const opts = {
      height: height,
      width: width,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: autoplay,
        loop: loop,
      },
    };

        return (
            <YouTube
                videoId={splitURL[3]}
                opts={opts}
                onReady={this._onReady}
            />)
    }

    /**
     * This method renders a FontAwesomeIcon based on the name of the icon provided 
     * @param {*} icon the name of icon to render
     */
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
  }

    /**
     * This method renders the columns within a row
     * @param {*} numColumns the number of columns to render
     * @param {*} listOfColumns list of column elements
     */
    renderRowColumns(numColumns, listOfColumns) {
        var rowColumns = [];

        // create columns(which is basically an editing page) based on the user specified numColumns
        for (var i = 0; i < numColumns; i++) {
            rowColumns.push(
                <Col key={i}>
                    <PageSection page={listOfColumns[i]} onSectionPush={this.props.onSectionPush} />
                </Col>
            );
        }
        return rowColumns;
    }

    /**
     * This method renders the components within a column
     */
    renderColumnPages() {
        var numPages = this.props.page.page.length;
        var pages = [];
        for (var i = 0; i < numPages; i++) {
            pages.push(<PageSection key={i} page={this.props.page.page[i]} onSectionPush={this.props.onSectionPush} />);
        }
        return pages;
    }

    /**
     * This method returns a component based on props.page.type
     */
    returnElement() {
        switch (this.props.page.type) {
            case "heading": {
                return (
                    <h1
                        key={this.props.page.id}
                        style={this.props.page.style[0]}>
                        {this.props.page.text}
                    </h1>
                )
            }
            case "divider": {
                return (<hr key={this.props.page.id} style={this.props.page.style[0]} />);
            }
            case "image": {
                return (<div style={{ textAlign: this.props.page.style[0]['textAlign'] }}><img key={this.props.page.id} style={this.props.page.style[0]} src={this.props.page.url} alt={this.props.page.text} /></div>)
            }
            case "button": {
                return (<div style={{ textAlign: this.props.page.style[0]['textAlign'] }}><a className={"btn btn-primary"} key={this.props.page.id} href={this.props.page.href} style={this.props.page.style[0]}>{this.props.page.text}</a></div>)
            }
            case "spacer": {
                return (
                    <div key={this.props.page.id} style={this.props.page.style[0]}>
                        {'\xa0'}
                    </div>
                );
            }
            case "video": {
                return (
                    <div key={this.props.page.id} style={this.props.page.style[0]}>
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
                    <div key={this.props.page.id} style={this.props.page.style[0]}>
                        {this.returnIcon(this.props.page.faClassName)}
                    </div>
                )
            }
            case "row": {
                return (
                    <div key={this.props.page.id}>
                        <Row>
                            {this.renderRowColumns(this.props.page.col, this.props.page.page)}
                        </Row>
                    </div>
                );
            }
            case "column": {
                console.log('PageSection column', this.props.page);
                return (
                    <div key={this.props.page.id}>
                        {this.renderColumnPages()}
                    </div>
                );
            }
            default: {
                console.log("Not a caught switch in pagesection.js!", this.props);
                break;
            }
        }
    }

    render() {
        // this clicked methid here is used to height the selected page section
        const isClicked = this.props.page.clicked;
        var classList = isClicked ? "pageSectionClick" : "pageSection";
        return (
            <div className={classList} onClick={e => {
                this.props.onSectionPush(this.props.page.id, this.props.page.type, this.props.page.style[0]);
                e.stopPropagation();
            }}>
                {this.returnElement()}
            </div>
        );
      }
      case "video": {
        console.log();
        return (
          <div key={this.props.index} style={this.props.style}>
            {this.returnYouTube(
              this.props.url,
              this.props.style["height"],
              this.props.style["width"],
              this.props.style["autoplay"],
              this.props.style["loop"]
            )}
          </div>
        );
      }
      case "icon": {
        return (
          <div key={this.props.index} style={this.props.style}>
            {this.returnIcon(this.props.faClassName)}
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
    const isClicked = this.props.clicked;
    var classList = isClicked ? "pageSectionClick" : "pageSection";
    return (
      <div className={classList} onClick={this.toggleClickClass}>
        {this.returnElement()}
      </div>
    );
  }
}

export default PageSection;
