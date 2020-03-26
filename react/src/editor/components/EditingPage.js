import React, { Component } from 'react';
import * as constants from '../../constants';
import PageSection from './PageSection';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';  //drag and drop


    
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
        }
    }

    /*********************************************************** 
    state = {
        page: this.props.page,
    };
*/
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

        }
    }   //returns the sections added to the editor page

    /******************* */
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

        } 

    };  //What to do after the drag is done
    /******************* */

    render() {
        console.log("Page: "+this.returnPage());
        /*
        try{
            this.returnPage().map((item, index) => (
                //console.log("Index: "+index))
                console.log("Section: "+this.props.page[index]))   //undefined NO GOOD
            )
        } catch(error){}*/
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
                                    {this.returnPage()[index]/*1component i.e. a header*/}
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
                */
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
}

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
    
}//containerStyle --> styling for whole page not 1 component



export default EditingPage;
