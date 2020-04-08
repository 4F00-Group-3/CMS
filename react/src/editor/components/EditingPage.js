import React, { Component, useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Card from "./Card.jsx";
import update from 'immutability-helper'

class EditingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page,
      active: 0
    }
  }

  /**
   * This element sets highlights the current element the user is editing
   * @param {*} id id of the active element
   */
  handleActiveElement = (id) => {
    this.setState({ active: id });
  }

  /**
   * This method renders a page from JSON onto the actual page editor
   * Can be reused for actual page viewing as well
   * Returns the sections added to the editor page
   */
  returnPage() {
    let x = []; //empty array
    try {
      for (let i = 0; i < this.props.page.length; i++) {  //for each section
        var y = {   //get section values
          page: this.props.page[i],
          onSectionPush: this.props.onSectionPush,
          // clicked is used later inside the PageSection to highlight a selected PageSection Component
          clicked: this.state.active === this.props.page[i].id,
          onClick: this.handleActiveElement
        }
        x.push(y) //push to array
      }
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
        this.props.page[index] = card.page;

        return (
          <Card
            page={card.page}
            key={index}
            onClick={card.onClick}
            onSectionPush={card.onSectionPush}
            clicked={card.clicked}
            index={index}
            moveCard={moveCard}
          />
        )
      }

      return (
        <div>
          {cards.map((card, i) => renderCard(card, i))}
        </div>
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
