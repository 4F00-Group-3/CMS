import React, { Component, useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import * as constants from "../../constants";
import PageSection from "./PageSection";
import Card from "./Card.jsx";
import update from 'immutability-helper'

const style = {
  // this is commented out because I mean to use an EditingPage withing a column component, which must take up the entire column
  // marginLeft: "50vh"
}


class EditingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page,
      active: 0
    }
  }


  toggleClickClass = (i) => {
    // console.log("Editing Page props: ", this.props);
    // console.log(i);
    this.setState({ active: i });
    this.props.setActive(i);
  }

  /**
   * This method renders a page from JSON onto the actual page editor
   * Can be reused for actual page viewing as well
   * Returns the sections added to the editor page
   */
  returnPage() {
    console.log("props page EditingPage", this.props.page)
    let x = []; //empty array
    try {
      // console.log(this.props.page)
      for (let i = 0; i < this.props.page.length; i++) {  //for each section
        var y = {   //get section values
          page: this.props.page[i],
          onSectionPush: this.props.onSectionPush,
          // toggleClickClass: this.toggleClickClass,
          // clicked is used later inside the PageSection to highlight a selected PageSection Component
          clicked: (this.state.active === this.props.page[i].id ? true : false),
          onClick: this.props.page.onClick
        }
        x.push(y) //push to array
      }
      console.log("EditingPage x ", x);
    } catch (e) { }
    return x;
  }

  render() {

    const Container = () => {
      let x = this.returnPage();

      /**
       * This sets up a setState handler called setCards
       * and inializes the state of the cards object with x
       */
      const [cards, setCards] = useState(x)

      /**
       * This is a call back method used to update the index of a moved card
       * which then updates the state.cards with the new arrangement.
       */
      const moveCard = useCallback(
        (dragIndex, hoverIndex) => {
          const dragCard = cards[dragIndex]
          // This code simulates the movement of the dragged card by inserting it into the hover index
          setCards(
            update(cards, {
              $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
              ],
            }),
          )
        },
        [cards],
      );

      /**
       * This method creates a PageSection component i.e. Header, Image etc
       * and wraps it inside a Card Component to allow verticle dragging
       * @param {*} card 
       * @param {*} index 
       */
      const renderCard = (card, index) => {

        // Updates page with new arrangement
        this.props.page[index]=card.page;

        return (      //returns a card which returns a page section with these vals
          <Card
            page={card.page}
            key={index}
            onClick={card.onClick}
            onSectionPush={card.onSectionPush}
            // toggleClickClass={card.toggleClickClass}
            clicked={card.clicked}
            index={index}
            moveCard={moveCard}
          />
        )
      }

      return (
        <>
          <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
        </>
      )
    }


    return (
      <DndProvider backend={Backend}>
        <Container />
      </DndProvider>
    )
  }
}

export default EditingPage;
