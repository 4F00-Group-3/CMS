import React, { Component } from "react";
import "../../css/Editor.css";
import {
  faFont,
  faFileImage,
  faBars,
  faAlignRight,
  faAsterisk,
  faArrowDown,
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import EditorButton from '../components/EditorButton';
import HeadingEditorMenu from './EditorMenus/HeadingEditorMenu';
import ButtonEditorMenu from './EditorMenus/ButtonEditorMenu';
import EditDivider from './EditorMenus/EditDivider';
import IconEditorMenu from './EditorMenus/IconEditorMenu';
import ImageEditorMenu from './EditorMenus/ImageEditorMenu';
import VideoEditorMenu from './EditorMenus/VideoEditorMenu';

class EditorSideBar extends Component {
    returnMenu() {
        let menu = this.props.menu;
        switch (menu) {
            case "heading": {
                return <HeadingEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick}/>
            }
            case "divider": {
                return <EditDivider selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick}/>
            }
            case "image": {
                return <ImageEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick}/>
            }
            case "icon": {
                return <IconEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick}/>
            }
            case "video": {
                return <VideoEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick}/>
            }
            case "button": {
                return <ButtonEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick}/>
            }
            case "spacer": {
                return <EditDivider selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick}/>
            }
            default: {
                return <>
                    <EditorButton text="Heading" faIcon={faFont} onClick={this.props.onPush} />
                    <EditorButton text="Image" faIcon={faFileImage} onClick={this.props.onPush} />
                    <EditorButton text="Button" faIcon={faAsterisk} onClick={this.props.onPush} />
                    <EditorButton text="Dividers" faIcon={faBars} onClick={this.props.onPush} />
                    <EditorButton text="Spacer" faIcon={faAlignRight} onClick={this.props.onPush} />
                    <EditorButton text="Size" faIcon={faAsterisk} onClick={this.props.onPush} />
                    <EditorButton text="Icon" faIcon={faArrowDown} onClick={this.props.onPush} />
                    <EditorButton text="Video" faIcon={faCircle} onClick={this.props.onPush} />
                </>
            }
        }
    }

    
    render() {
        return (
          <HeadingEditorMenu
            selectedId={this.props.selectedId}
            menuComponentOnClick={this.props.menuComponentOnClick}
          />
        );
      }
      default: {
        return (
          <>
            <EditorButton
              text="Heading"
              faIcon={faFont}
              onClick={this.props.onPush}
            />
            <EditorButton
              text="Image"
              faIcon={faFileImage}
              onClick={this.props.onPush}
            />
            <EditorButton
              text="Button"
              faIcon={faAsterisk}
              onClick={this.props.onPush}
            />
            <EditorButton
              text="Dividers"
              faIcon={faBars}
              onClick={this.props.onPush}
            />
            <EditorButton
              text="Spacer"
              faIcon={faAlignRight}
              onClick={this.props.onPush}
            />
            <EditorButton
              text="Size"
              faIcon={faAsterisk}
              onClick={this.props.onPush}
            />
            <EditorButton
              text="Icon"
              faIcon={faArrowDown}
              onClick={this.props.onPush}
            />
            <EditorButton
              text="Video"
              faIcon={faCircle}
              onClick={this.props.onPush}
            />
          </>
        );
      }
    }
  }

  render() {
    return (
      <div className="Editor-SideBar-Container">
        {/* editor menus to be tested here */}
        {this.returnMenu()}
      </div>
    );
  }
}

export default EditorSideBar;
