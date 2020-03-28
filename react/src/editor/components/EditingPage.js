import React, { Component, useRef, useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import { useDrag, useDrop } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import * as constants from "../../constants";
import PageSection from "./PageSection";
import Board from "./Board";
import Card from "./Card.jsx";
import update from 'immutability-helper'
import {DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

const style = {
  width: "60%",
  height: "100vh",
  marginLeft: "50vh",
}


class EditingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
        };
        //this.onDragEnd = this.onDragEnd.bind(this);
    }


    /**
     * This method renders a page from JSON onto the actual page editor
     * Can be reused for actual page viewing as well
     */
    returnPage() {
        try {
            let page = [];
            for (let index = 0; index < this.props.page.length; index++) {
                let section = this.props.page[index];
                page.push(
                    <PageSection 
                        index={section.id}
                        type={section.type}
                        style={section.style[0]}
                        text={section.text}
                        faClassName={section.faClassName}
                        onClick={section.onClick}
                        url={section.url}
                        onSectionPush={this.props.onSectionPush}
                    />
                )
            }

            return page;
        } catch (error) {
            return [];
        }
    }   //returns the sections added to the editor page

   

    render() {

      const Container = () => {
        {
          try{
            console.log("!!!"+this.returnPage());
          }
          catch(error){console.log("!!! no page");}
      
          /*
          try{
            var x = this.returnPage();
          }
          catch (error){
            var x = [" "];
          }
      
          const [cards, setCards] = useState(x);*///Doesn't work

          let x = [];
          try{
            for (let i = 0; i < this.props.page.length; i++) {  //works
              var y = {
                key:this.props.page[i].id,
                id:this.props.page[i].id,
                type:this.props.page[i].type,
                style:this.props.page[i].style[0],
                text:this.props.page[i].text,
                faClassName:this.props.page[i].faClassName,
                onClick:this.props.page[i].onClick,
                url:this.props.page[i].url,
                onSectionPush:this.props.page[i].onSectionPush,
              }
              x.push(y)
            }
          } catch(e){}

          const [cards, setCards] = useState(x)
         
          const moveCard = useCallback(
            (dragIndex, hoverIndex) => {
              const dragCard = cards[dragIndex]
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
          )
      
          const renderCard = (card, index) => {   //Renders a card (a component) i.e. an image or a header
            console.log("okokok"+card.id);
            return (      //returns a card which returns a page section with these vals
              <Card
                  key={card.id}
                  id={card.id}
                  type={card.type}
                  style={card.style[0]}
                  text={card.text}
                  faClassName={card.faClassName}
                  onClick={card.onClick}
                  url={card.url}
                  onSectionPush={card.onSectionPush}
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
      }

      
        console.log("Page: "+this.returnPage());
    
    return(
      <DndProvider backend={Backend}>
        <Container />
      </DndProvider>
    )
  }
}

const containerStyle = {
    background: "white",
    width: (100 - constants.EditorSideBarWidth) + "%",
    height: "100vh",
    border: "3px solid red",
    marginLeft: constants.EditorSideBarWidth,
} //containerStyle --> styling for whole page not 1 component



export default EditingPage;
