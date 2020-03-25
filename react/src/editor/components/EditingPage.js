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
        padding: `10%`,   //make components suitable size
        margin: `1%`,    //make dark gray border wider
    
        background: isDragging ? 'lightblue' : 'rgb(250,250,250)', //when dragging, make background colour blue. Else grey.
    
        ...draggableStyle
    }); //style for when dragging
    
    
    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? 'lightgreen' : 'lightgrey',
        margin:`5%`,  //center components
        width: `90%`  //let draggable components take up most of page
    });
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

    id2List = {
        droppable: 'page',
    };

    getList = id => this.state[this.id2List[id]];

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
    }

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

    };
    /******************* */

    render() {
        console.log(this.returnPage());
        if ( this.returnPage() == null ){
            return(
                <div style={containerStyle}>
                    {this.returnPage()}
                </div>
            )
        }
        else {
            return (
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            >
                            
                            {this.returnPage().map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={
                                        containerStyle
                                        /*getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style)*/
                                    }
                                    >
                                    {this.returnPage()}
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
    }
}

const containerStyle = {
    background: "white",
    width: (100 - constants.EditorSideBarWidth) + "%",
    height: "100vh",
    border: "3px solid red",
    marginLeft: constants.EditorSideBarWidth,
}



export default EditingPage;
