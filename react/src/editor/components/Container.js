import React, { Component, useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import * as constants from "../../constants";
import PageSection from "./PageSection";
import Card from "./Card.jsx";
import update from 'immutability-helper'

const style = {
    marginLeft: "50vh",
}

const Container = () => {
    // {
      try{
        console.log("!!!"+this.returnPage());
      }
      catch(error){console.log("!!! no page");}

      let x = []; //empty array
      try{
        for (let i = 0; i < this.props.page.length; i++) {  //for each section
          var y = {   //get section values
            key:this.props.page[i].id,
            id:this.props.page[i].id,
            type:this.props.page[i].type,
            style:this.props.page[i].style[0],
            text:this.props.page[i].text,
            faClassName:this.props.page[i].faClassName,
            onClick:this.props.page.onClick,
            url:this.props.page[i].url,
            onSectionPush:this.props.onSectionPush,
          }
          x.push(y) //push to array
        }
        console.log(x);
      } catch(e){}

      const [cards, setCards] = useState(x) //set cards as section vals
     
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

        /*Update the page with the card's new order so that rearrangements reflect on page permanently.*/
        this.props.page[index].id = card.id;
        this.props.page[index].type = card.type;
        this.props.page[index].style[0] = card.style;
        this.props.page[index].text = card.text;
        this.props.page[index].faClassName = card.faClassName;
        this.props.page[index].onClick = card.onClick;
        this.props.page[index].url = card.url;
        this.props.page[index].onSectionPush = card.onSectionPush;

        return (      //returns a card which returns a page section with these vals
          <Card
              key={card.id}
              id={card.id}
              type={card.type}
              style={card.style}
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
    // }
  }

