import React, { Component, useRef } from "react";
/* import React, { useRef } from "react";
 */ import { DndProvider } from "react-dnd";
import { useDrag, useDrop } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import * as constants from "../../constants";
import PageSection from "./PageSection";
import Board from "./Board";
import Card from "./Card";

class EditingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page
    };
  }

  Refresh() {
    this.setState({ page: this.props.page });
  }

  /**
   * This method renders a page from JSON onto the actual page editor
   * Can be reused for actual page viewing as well
   */

  returnPage() {
    function Tile() {
      /* ... */
      return <DndProvider backend={Backend}>...</DndProvider>;
    }
    try {
      console.log(this.props.page);
      let page = [];
      for (let index = 0; index < this.props.page.length; index++) {
        let section = this.props.page[index];
        page.push(
          // the page wrapped in the draggable
          <div className="Title">
            <main className="flexbox">
              <Board id="board-1">
                <Card id="card-1" className="card" draggable="true">
                  <PageSection
                    type={section.type}
                    index={index}
                    style={section.style[0]}
                    text={section.text}
                    faClassName={section.faClassName}
                    onClick={section.onClick}
                    url={section.url}
                  />
                </Card>
              </Board>
            </main>
          </div>
        );
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
    } catch (error) {}
  }

  render() {
    return <div style={containerStyle}>{this.returnPage()}</div>;
  }
}

export const ItemTypes = {
  HEADING: "heading",
  IMAGE: "image",
  BUTTON: "button",
  DIVIDERS: "dividers",
  SPACER: "spacer",
  SIZE: "size",
  ICON: "icon",
  VIDEO: "video"
};

/*function Heading() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.HEADING },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move"
      }}
    >
      ♘
    </div>
  );
}

function Image() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.IMAGE },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
}

function Button() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.BUTTON },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
}

function Dividers() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.DIVIDERS },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
}

function Spacer() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.SPACER },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
}

function Size() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.SIZE },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
}

function Icon() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.ICON },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
}

function Video() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.VIDEO },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
}*/

const containerStyle = {
  background: "white",
  width: 100 - constants.EditorSideBarWidth + "%",
  height: "100vh",
  border: "3px solid red",
  marginLeft: constants.EditorSideBarWidth
};

const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move"
};

/* const Card = ({ id, text, index, moveCard }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div ref={ref} style={{ ...style, opacity }}>
      {text}
    </div>
  );
}; */

/* export default Card; */

export default EditingPage;
