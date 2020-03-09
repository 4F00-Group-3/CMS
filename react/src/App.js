import React from 'react';
import Editor from './editor/Editor';
import PagesDashBackend from './dashboard/PagesDashBackend';
import Backend from './editor/EditorBackend';

var page = new Backend().getPage();

function App() {
  return (
    <div>
        {/* <Editor page = {page}/> */}
        <PagesDashBackend/>
    </div>
  )
}

export default App