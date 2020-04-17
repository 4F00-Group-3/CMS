import React, { Component, useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Card from "./Card.jsx";
import update from 'immutability-helper'
import ReactDOM from 'react-dom';
import AjaxCall from './../../ajax';

class EditingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page,
      active: 0,
      autosaveTimer: ''
    }
  }

  componentDidMount () {
    //start saving every 15 seconds
    if(this.state.page !== undefined){ //page not set if clicking editor from master nav menu
      this.state.autosaveTimer = window.setInterval(this.save, 5000); //milliseconds ... 15000
    }
  }

  componentWillUnmount = () => {
    //stop saving when editor is unmounted
    clearInterval(this.state.autosaveTimer);
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this);
    console.log(document.getElementById('root'));
  }

  save = () => {
    console.log(this.state.page);
    var _pageId = this.state.page.pages_id;
    var _page = this.state.page.file;

    ReactDOM.findDOMNode(this);
    var html = this.returnHTMLString(this.state.page.name, document.getElementsByClassName('page-section'));

    AjaxCall({function:"savePage", websiteId:sessionStorage.getItem('siteId') || 0, pageId:_pageId || 0, page:JSON.stringify(_page), html:html},
        (response) => {
            console.log('page saved!');
        }
    );
  }

    /**
   * This method returns an html string for the page rendered in a PageSection.
   * To be called in PageSection class.
   * 
   * @param {String} page_title 
   * @param {HTMLCollection} _htmlCollection 
   */
  returnHTMLString(page_title, _htmlCollection) {
    var htmlCollection = _htmlCollection;
    var result = "<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><title>" + page_title + "</title></head><body>";
    console.log(htmlCollection)

    for (let index = 0; index < htmlCollection.length; index++) {
        const element = htmlCollection[index];
        if (element.innerHTML.includes("</svg>") && element.innerHTML.includes("font-size")) {
            //fix icon css here
            var css = element.innerHTML.substring(
                element.innerHTML.lastIndexOf("style=\"") + 1,
                element.innerHTML.lastIndexOf(";\">")
            ).split("=")[1].split(';');

            for (let cssIndex = 0; cssIndex < css.length; cssIndex++) {
                console.log(css[cssIndex])
                if (css[cssIndex].includes("font-size")) {
                    //extracts font-size and changes it to height
                    var returned = css.splice(cssIndex, 1);
                    var newCSS = "style=\"" + returned[0].replace("font-size", "height") + ";\"";

                    console.log(newCSS)
                    //injects height into appropriate div that way the icon renders as the right size
                    result += element.innerHTML.replace("role=\"img\"", ("role=\"img\" " + newCSS))
                }
            }
        }
        else {
            result += element.innerHTML;
        }
    }
    var closingHTMLTags = "</body></html>";
    result += closingHTMLTags;
    return result;
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
