import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import PageSection from "./PageSection"

const Card = ({ page, onClick, onSectionPush, index, moveCard, clicked }) => {

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
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div ref={ref}>
      <PageSection
        page={page}
        onSectionPush={onSectionPush}
        clicked={clicked}
        onClick={onClick}
      />
    </div>
  )
}

export default Card;
