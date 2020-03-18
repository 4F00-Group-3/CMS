import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import AjaxCall from "./ajax"

// check for login before render
AjaxCall({function:'currentUser'}, function(response){
    //do something with the server response
    
    if(response == 0){
        console.log(window.location.href);
        //replace this with react page 
        window.location.href = 'https://www.cosc.brocku.ca/~c4f00g03/login.php';
    } else {
        console.log(response);
        ReactDOM.render(<App />, document.getElementById("root"));
    }
});

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
