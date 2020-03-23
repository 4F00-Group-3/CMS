/*Imports*/
import React, { Component } from 'react'; //required import
import ReactDOM from 'react-dom';         //required import
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';  //drag and drop


const getPanels = (count = 5) =>  //gives us 5 panels (can change count to any #)
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k}`,  //"item-1", "item-2" ... etc.
        content: `Panel ${k}. Sample Text. The user should be able to write whatever they like in these text components. Should the user want to re-arrange the components, they can do so simply with drag and drop.`   //sample content for now
    }));


const order = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


const getItemStyle = (isDragging, draggableStyle) => ({
    padding: `10%`,   //make components suitable size
    margin: `1%`,     //make dark gray border wider

    background: isDragging ? 'lightblue' : 'rgb(250,250,250)', //when dragging, make background colour blue. Else grey.

    ...draggableStyle
}); //style for when dragging


const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightgreen' : 'lightgrey',
    margin:`5%`,  //center components
    width: `90%`  //let draggable components take up most of page
});


/*App*/
class App extends Component {
    state = {
        items: getPanels(),
    };

    id2List = {
        droppable: 'items',
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
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

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.items.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }

}


ReactDOM.render(<App />, document.getElementById('root'));  //render project in DOM

