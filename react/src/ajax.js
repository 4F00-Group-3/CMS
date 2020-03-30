import $ from "jquery";

//to include function in other files
//import AjaxCall from '../../ajax.js'; 

/**
 * Sends an asynchronous POST request to ajax.php
 * Each parameter in args is sent to ajax.php in the $_POST array
 * The callback function is used to handle the data that is returned from 
 * the server
 * 
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 * Example:
 * AjaxCall({function:'test', message:'hello'}, function(response){
 *   	//do something with the server response
 *     console.log(response);
 * });
 * 
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 * 
 * the above will call the PHP function 'test()' in ajax.php and print 
 * what is returned to the browser console
 * 
 * Ensure the variables are named correctly so PHP functions can access them
 * @param {Object} args 
 * @param {function} callback 
 */


export default function AjaxCall(args, callback) {
	$.post("../../php/ajax.php", args, callback);
}

/** Note: 
 * the above doesn't need to be an ajax function, just something I 
 * used to make it easier to test from EditorSidebar.js. We
 * can just import jquery and call $.post from any file:
 */

/*
var args = {  
    function:'addUser',
    email:'example@example.com', 
    firstName:'John', 
    lastName:'Smith', 
    type:'manager',  
    password:'password123'
};

$.post("../../ajax.php", args, function(response){
	//do something with the server response
    if(parseInt(response) == 1){
        alert("Successfully added user.");
    } else {
        //display error message
        alert("Cannot add user at this time.");
    }
});
*/


/*
$.post("../../ajax.php", {function:'currentUser'}, function(response){
	//do something with the server response
    if(parseInt(response) != 0){
        var CurrentUser = JSON.parse(response);
    } else {
        //no logged in user...
    }
});
*/
