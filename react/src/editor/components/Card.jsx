import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import PageSection from "./PageSection"

// const style = { //styling of card
//   border: '1px solid green',
//   padding: '0.5rem 1rem',
//   marginBottom: '.5rem',
//   backgroundColor: 'white',
//   cursor: 'move',
// }

// const Card = ({ id, type, style, text, faClassName, onClick, url, onSectionPush, index, moveCard, href, toggleClickClass, clicked, col}) => { //section fields + index + moveCard
const Card = ({ page, onClick, onSectionPush, index, moveCard, toggleClickClass, clicked }) => { //section fields + index + moveCard
  
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2  //get vertical middle
      const clientOffset = monitor.getClientOffset()  //mouse pos
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {  //drag down only if 1/2 item height crossed
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {  //drag up only if 1/2 item height crossed
        return
      }
      moveCard(dragIndex, hoverIndex) //move card
      item.index = hoverIndex
      console.log("ITEM INDEX: " + item.index)
      console.log("HOVER INDEX: " + hoverIndex);
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, index},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <div ref={ref}>
      {   //card returns a page section
        <PageSection
          page={page}
          onSectionPush={onSectionPush}
          toggleClickClass={toggleClickClass}
          clicked={clicked}
        />
      }
    </div>
  )
}

export default Card;
