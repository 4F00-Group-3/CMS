import React, { Component, useRef, useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import { useDrag, useDrop } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import * as constants from "../../constants";
import PageSection from "./PageSection";
import Board from "./Board";
import Card from "./Card.jsx";
//import Container from "./Container.jsx";
import update from 'immutability-helper'
import {DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

const style = {
  width: "60%",
  height: "100vh",
  marginLeft: "50vh",
}

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const Hello = () => {
  try{
    console.log(this.returnPage());
  } catch (error){console.log("Error")}
}




    
    const order = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
    
        return result;
    };
    
    /*********************************************************** */
    const getItemStyle = (isDragging, draggableStyle) => ({

        background: isDragging ? 'lightblue' : 'rgb(250,250,250)', //when dragging, make background colour blue. Else grey.
        ...draggableStyle
    }); //style for when dragging
    
    /*********************************************************** */



class EditingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
        };
        //this.onDragEnd = this.onDragEnd.bind(this);
    }
/*
    getCardsArr(){
      this.returnPage();
      try{
        return cardsArr;
      } catch (error){}
    };*/

    /*********************************************************** 
    state = {
        page: this.props.page,
    };
*//*
    id2List = {
        droppable: 'items',
    };//?

    getList = id => this.id2List[id];//?
/*
    onDragEnd = result => {
        const { source, destination } = result;

        if (!destination) { //if invalid
            return;         //cancel
        }

        if (source.droppableId === destination.droppableId) {
            const items = order(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };
            this.setState(state);
        }
    }; 
    /*********************************************************** */


    

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

    /******************* *//*
    onDragEnd(result) {
        const { source, destination } = result;

        if (!result.destination) { //if invalid
            return;         //cancel
        }


        /*if (source.droppableId === destination.droppableId) {
            const items = order(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

        } *//*
        const items = reorder(
            this.returnPage(),
            result.source.index,
            result.destination.index
          );
      
          this.setState({
            items
          });

    };  //What to do after the drag is done
    /******************* */

    render() {

      const Container = () => {
        {
          try{
            console.log("!!!"+this.returnPage());
          }
          catch(error){console.log("!!! no page");}
      
          try{
            var x = this.returnPage();
          }
          catch (error){
            var x = [" "];
          }
      
          const [cards, setCards] = useState(x);
         
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
            console.log(this.props.page[index].id);
            return (
              <Card
                  key={this.props.page[index].id}
                  id={this.props.page[index].id}
                  type={this.props.page[index].type}
                  style={this.props.page[index].style[0]}
                  text={this.props.page[index].text}
                  faClassName={this.props.page[index].faClassName}
                  onClick={this.props.page[index].onClick}
                  url={this.props.page[index].url}
                  onSectionPush={this.props.page[index].onSectionPush}
                  index={index}
                  moveCard={moveCard}
                  
                />
                /*key={card.id}
                index={index}
                id={card.id}
                text={card.text}
                faClassName={card.faClassName}
                onClick={card.onClick}
                url={card.url}
                onSectionPush={card.onSectionPush}
                moveCard={moveCard}*/
              
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
        /*
        try{
            this.returnPage().map((item, index) => (
                //console.log("Index: "+index))
                console.log("Section: "+this.props.page[index].id))   //undefined NO GOOD
            )
        } catch(error){}
        if ( this.returnPage() != null ){   //if there is something on the editor screen, then we can drag and drop
            return (
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={ containerStyle }//whole editor page style
                            >
                            
                            {this.returnPage().map((item, index) => (//this.returnPage() returns array of sections (components)

                                //                section id                                   section id
                                <Draggable key={this.props.page[index].id} draggableId={this.props.page[index].id} index={index}>
                                
                                {(provided, snapshot) => (
                                    
                                    <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={
                                          getItemStyle(
                                          snapshot.isDragging,
                                          provided.draggableProps.style)
                                    }
                                    >
                                    {this.returnPage()[index]/*1component i.e. a header*//*}
                                    </div>
                                )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                /*
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {provided => (
                            <div style={containerStyle}>
                                {this.returnPage()}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                *//*
               );
        }
        else {      //if theres nothing on the editor screen yet, just print
            return(
                <div style={containerStyle}>
                    {this.returnPage()}
                </div>
            )
        }
    }
  }/**/
    return(
      <DndProvider backend={Backend}>
        <Container />
      </DndProvider>
    )
  }
}/** *///<Container />

/*
const containerStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightgreen' : 'lightgrey',    //change page color when dragging
});*/

const containerStyle = {
    background: "white",
    width: (100 - constants.EditorSideBarWidth) + "%",
    height: "100vh",
    border: "3px solid red",
    marginLeft: constants.EditorSideBarWidth,
} //containerStyle --> styling for whole page not 1 component



export default EditingPage;
