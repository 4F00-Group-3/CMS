/*import React, { useState, useCallback } from 'react'
import Card from './Card.jsx'
import update from 'immutability-helper'
import EditPage from './EditingPage';

const style = {
  width: "60%",
  height: "100vh",
  marginLeft: "50vh",
}

const Container = () => {
  {
    try{
      console.log("!!!"+EditPage.returnPager());
    }
    catch(error){}

    const [cards, setCards] = useState(EditPage.returnPager());
     
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
    const renderCard = (card, index) => {
      try{
        console.log(":::"+EditPage.returnPage());
      }
      catch (error){console.log("no");}
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
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
export default Container
