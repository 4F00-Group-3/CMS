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
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YouTube from "react-youtube";

class PageSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page,
    };
  }

  toggleClickClass = () => {
    this.props.onSectionPush(
      this.props.index,
      this.props.type,
      this.props.style
    );
    this.props.toggleClickClass(this.props.index);
  };

  returnYouTube(url, height, width, autoplay, loop) {
    var splitURL = url.split("/");
    console.log(splitURL);
    let result =
      splitURL[0] + "//" + splitURL[2] + "/embed/" + splitURL[3] + "/";
    console.log(result);

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
      <YouTube videoId={splitURL[3]} opts={opts} onReady={this._onReady} />
    );
  }

  returnIcon(icon) {
    switch (icon) {
      case "faLock": {
        return <FontAwesomeIcon size={this.props.size} icon={faLock} />;
      }
      case "faLaptop": {
        return <FontAwesomeIcon size={this.props.size} icon={faLaptop} />;
      }
      case "faHeart": {
        return <FontAwesomeIcon size={this.props.size} icon={faHeart} />;
      }
      case "faGift": {
        return <FontAwesomeIcon size={this.props.size} icon={faGift} />;
      }
      case "faEye": {
        return <FontAwesomeIcon size={this.props.size} icon={faEye} />;
      }
      case "faCreditCard": {
        return <FontAwesomeIcon size={this.props.size} icon={faCreditCard} />;
      }
      case "faCamera": {
        return <FontAwesomeIcon size={this.props.size} icon={faCamera} />;
      }
      case "faBook": {
        return <FontAwesomeIcon size={this.props.size} icon={faBook} />;
      }
      case "faAddressBook": {
        return <FontAwesomeIcon size={this.props.size} icon={faAddressBook} />;
      }
      case "faBell": {
        return <FontAwesomeIcon size={this.props.size} icon={faBell} />;
      }
      default: {
        return <FontAwesomeIcon size={this.props.size} icon={faLaptop} />;
      }
    }
  }

  returnElement() {
    switch (this.props.type) {
      case "heading": {
        return (
          <h1 key={this.props.index} style={this.props.style}>
            {this.props.text}
          </h1>
        );
      }

      case "divider": {
        return <hr key={this.props.index} style={this.props.style} />;
      }
      case "image": {
        return (
          <div style={{ textAlign: this.props.style["textAlign"] }}>
            <img
              key={this.props.index}
              style={this.props.style}
              src={this.props.url}
              alt={this.props.text}
            />
          </div>
        );
      }
      case "button": {
        return (
          <div style={{ textAlign: this.props.style["textAlign"] }}>
            <a
              className={"btn btn-primary"}
              key={this.props.index}
              href={this.props.href}
              style={this.props.style}
            >
              {this.props.text}
            </a>
          </div>
        );
      }
      case "spacer": {
        return (
          <div key={this.props.index} style={this.props.style}>
            {"\xa0"}
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
