import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import Column from './column';
//import '@atlaskit/css-reset';
//import initialData from './initial-data';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

class App extends React.Component {
    state = data;

    render(){
        return this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />;
        });
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

