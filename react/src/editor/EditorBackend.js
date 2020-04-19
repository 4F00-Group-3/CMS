class EditorBackend {
    constructor() {
        this.state = {
            page: this.all(),
        }
    }

    /**
     * This method returns the backend page
     */
    getPage() {
        return this.state.page;
    }

    /**
     * This method returns an html string for the page rendered in a PageSection.
     * To be called in PageSection class.
     * 
     * @param {String} page_title 
     * @param {HTMLCollection} _htmlCollection 
     */
    returnHTMLString(page_title, _htmlCollection) {
        var htmlCollection = _htmlCollection;
        var result = "<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><title>" + page_title + "</title></head><body>";
        //console.log(htmlCollection)

        for (let index = 0; index < htmlCollection.length; index++) {
            const element = htmlCollection[index];
            if (element.innerHTML.includes("</svg>") && element.innerHTML.includes("font-size")) {
                //fix icon css here
                var css = element.innerHTML.substring(
                    element.innerHTML.lastIndexOf("style=\"") + 1,
                    element.innerHTML.lastIndexOf(";\">")
                ).split("=")[1].split(';');

                for (let cssIndex = 0; cssIndex < css.length; cssIndex++) {
                    console.log(css[cssIndex])
                    if (css[cssIndex].includes("font-size")) {
                        //extracts font-size and changes it to height
                        var returned = css.splice(cssIndex, 1);
                        var newCSS = "style=\"" + returned[0].replace("font-size", "height") + ";\"";

                        console.log(newCSS)
                        //injects height into appropriate div that way the icon renders as the right size
                        result += element.innerHTML.replace("role=\"img\"", ("role=\"img\" " + newCSS))
                    }
                }
            }
            else {
                result += element.innerHTML;
            }
        }
        var closingHTMLTags = "</body></html>";
        result += closingHTMLTags;
        return result;
    }

    /**
     * This method recursively traverses the page to find the page section with the matching id, and modified its style according to the provided style key and value
     * @param {*} id id of the page section to modify
     * @param {*} style_key the style key to modify
     * @param {*} style_value the value of the style key to change to
     */
    getSubMenuItem_Style(id, style_key, style_value) {
        var pageSection = this.getSubMenuItem(this.state.page, id);
        var style = JSON.parse(JSON.stringify(pageSection['style'][0]));
        style["" + style_key] = style_value;
        pageSection['style'][0] = style;
    };

    /**
     * This method recursively finds the page section within a page and modified the desired json field with the provided json value
     * @param {*} id id of page section to modify 
     * @param {*} jsonField the json field within the page section to modify
     * @param {*} jsonValue the json value to set the modified json field to
     */
    getSubMenuItem_Text(id, jsonField, jsonValue) {
        var pageSection = this.getSubMenuItem(this.state.page, id);
        pageSection["" + jsonField] = jsonValue;
    }

    /**
    * This method recursively finds the pagesection with the matching id within the provides page
    * @param {*} subMenuItems The array (page) to recursively traverse
    * @param {*} id id to be found within array
    */
    getSubMenuItem(subMenuItems, id) {
        if (subMenuItems) {
            for (var i = 0; i < subMenuItems.length; i++) {
                if (subMenuItems[i].id === id) {
                    return subMenuItems[i];
                } else {
                    var found = this.getSubMenuItem(subMenuItems[i].page, id);
                    if (found) return found;
                }
            }
        }
    };

    /**
     * This method recursively finds the pagesection with the matching id within the provides page and deletes it
     * @param {*} subMenuItems The array (page) to recursively traverse
     * @param {*} id id to be found within array
     */
    getSubMenuItem_Delete(subMenuItems, id) {
        if (subMenuItems) {
            for (var i = 0; i < subMenuItems.length; i++) {
                if (subMenuItems[i].id === id) {
                    subMenuItems.splice(i, 1);
                    return;
                } else {
                    var found = this.getSubMenuItem_Delete(subMenuItems[i].page, id);
                    if (found) return found;
                }
            }
        }
    };

    /**
     * This method will add or remove columns from a row component
     * @param {*} rowId the id of the row to edit
     * @param {*} numColumns the new number of columns with in the row
     */
    editSectionRow(rowId, numColumns) {
        var page = this.getPage(); // get the current page

        // Find the row element to edit based on rowId
        for (let index = 0; index < page.length; index++) {
            var pageSection = page[index];
            var exitingRowColumns = parseInt(pageSection.col)

            // Row is found
            if (pageSection.id === rowId) {

                if (exitingRowColumns < numColumns) {         // add a column
                    for (var i = exitingRowColumns; i < numColumns; i++) {
                        pageSection.page.push(this.returnBasicColumnObj(rowId, (i + 1)))
                    }
                }
                else if (exitingRowColumns > numColumns) {    // remove a column
                    for (var i = numColumns; i < exitingRowColumns; i++) {
                        pageSection.page.pop();
                    }
                }

                // update number of column values
                pageSection.col = numColumns;

                // return num columns, this is used in editor to pass to RowEditorMenu to show current column count
                return numColumns;
            }
        }
    }

    /**
     * This method returns a basic column object to add to a row
     * @param {*} rowId row id to associate this column with
     * @param {*} colId the column id of this column object within the row
     */
    returnBasicColumnObj(rowId, colId) {
        var jsonObj = {
            id: rowId + "|" + colId,
            type: "column",
            style: [],
            page: [
                {
                    id: rowId + "|" + colId + "|" + 1,
                    type: "heading",
                    text: "Column " + colId,
                    parent: "column",
                    style: [
                        {
                            color: "black",
                            fontSize: "10vh",
                            textAlign: "left",
                        }
                    ],
                }
            ]
        };
        return jsonObj;
    }

    /**
     * This is where we would request JSON page from backend
     */
    all() {
        //TODO: the following code will change to a ajax function to return a saved user page from database
        // This is for testing purposes
        return [
            // {
            //     "id": 1,
            //     "type": "heading",
            //     "text": "Your Homepage",
            //     "style": [
            //         {
            //             "color": "black",
            //             "fontSize": "81px",
            //             "textAlign": "center",
            //             "fontFamily": "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif"
            //         }
            //     ]
            // },
            // {
            //     "id": 12,
            //     "type": "spacer",
            //     "text": "heading 1",
            //     "style": [
            //         {
            //             "color": "black",
            //             "fontSize": "13px",
            //             "textAlign": "left"
            //         }
            //     ]
            // },
            // {
            //     "id": 2,
            //     "type": "image",
            //     "text": "alt text here",
            //     "url": "https://images.unsplash.com/photo-1528557692780-8e7be39eafab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            //     "style": [
            //         {
            //             "width": "px",
            //             "borderRadius": "5px",
            //             "marginLeft": "0",
            //             "marginRight": "0",
            //             "marginTop": "0",
            //             "marginBottom": "0",
            //             "textAlign": "center"
            //         }
            //     ]
            // },
            // {
            //     "id": 3,
            //     "type": "row",
            //     "style": [],
            //     "col": 1,
            //     "page": [
            //         {
            //             "id": "3|1",
            //             "type": "column",
            //             "style": [],
            //             "page": []
            //         }
            //     ]
            // },
            // {
            //     "id": 4,
            //     "type": "row",
            //     "style": [],
            //     "col": 1,
            //     "page": [
            //         {
            //             "id": "4|1",
            //             "type": "column",
            //             "style": [],
            //             "page": []
            //         }
            //     ]
            // },
            // {
            //     "id": 13,
            //     "type": "spacer",
            //     "text": "heading 1",
            //     "style": [
            //         {
            //             "color": "black",
            //             "fontSize": "12px",
            //             "textAlign": "left"
            //         }
            //     ]
            // },
            // {
            //     "id": 6,
            //     "type": "heading",
            //     "text": "Add videos and pictures to express your company's unique culture",
            //     "style": [
            //         {
            //             "color": "black",
            //             "fontSize": "38px",
            //             "textAlign": "center",
            //             "fontFamily": "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif"
            //         }
            //     ]
            // },
            // {
            //     "id": 14,
            //     "type": "spacer",
            //     "text": "heading 1",
            //     "style": [
            //         {
            //             "color": "black",
            //             "fontSize": "12px",
            //             "textAlign": "left"
            //         }
            //     ]
            // },
            // {
            //     "id": 5,
            //     "type": "video",
            //     "text": "heading 1",
            //     "url": "https://youtu.be/X4Q7d0CtYyk",
            //     "style": [
            //         {
            //             "color": "black",
            //             "fontSize": "10vh",
            //             "textAlign": "center",
            //             "height": "500px",
            //             "width": "750px",
            //             "margin": "auto",
            //             "autoplay": "0",
            //             "loop": "0"
            //         }
            //     ]
            // },
            // {
            //     "id": 11,
            //     "type": "divider",
            //     "text": "rounded divider",
            //     "style": [
            //         {
            //             "borderTop": "8px solid #000000",
            //             "borderRadius": "0px",
            //             "width": "100%"
            //         }
            //     ]
            // },
            // {
            //     "id": 7,
            //     "type": "heading",
            //     "text": "Create custom buttons",
            //     "style": [
            //         {
            //             "color": "black",
            //             "fontSize": "43px",
            //             "textAlign": "center",
            //             "fontFamily": "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif"
            //         }
            //     ]
            // },
            // {
            //     "id": 8,
            //     "type": "button",
            //     "text": "Your Button",
            //     "href": "#",
            //     "style": [
            //         {
            //             "color": "#000000",
            //             "backgroundColor": "#696969",
            //             "textAlign": "center",
            //             "border": "0px",
            //             "borderRadius": "12px"
            //         }
            //     ]
            // },
            // {
            //     "id": 10,
            //     "type": "divider",
            //     "text": "rounded divider",
            //     "style": [
            //         {
            //             "borderTop": "8px solid #0a0606",
            //             "borderRadius": "0px",
            //             "width": "100%"
            //         }
            //     ]
            // },
            // {
            //     "id": 9,
            //     "type": "heading",
            //     "text": "Get started by clicking an element to edit it!",
            //     "style": [
            //         {
            //             "color": "black",
            //             "fontSize": "40px",
            //             "textAlign": "center",
            //             "fontFamily": "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif"
            //         }
            //     ]
            // },
            // {
            //     "id": 15,
            //     "type": "heading",
            //     "text": "Or, try adding other elements to the site by choosing one to the left in the editor!",
            //     "style": [
            //         {
            //             "color": "black",
            //             "fontSize": "22px",
            //             "textAlign": "center",
            //             "fontFamily": "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif"
            //         }
            //     ]
            // }
        ];

    }

    /**
     * This method add a page section element to the page
     * @param {*} pageSection The page section to add to page
     * @param {*} subPageSection mainly to add a pagesection within a column
     * @param {*} elementId id of the page section, mainly used for column, to set a unique id to the subPageSection
     */
    add(pageSection, subPageSection, elementId) {
        var page = this.state.page;
        var jsonObj;
        switch (pageSection) {
            case "Heading": {
                jsonObj = {
                    id: page.length + 1,
                    type: "heading",
                    text: "heading 1",
                    style: [
                        {
                            backgroundColor: "#FFF",
                            color: "black",
                            fontSize: "10vh",
                            textAlign: "left",
                            fontFamily: "Georgia, serif",
                            marginBottom: "0px",
                        }
                    ],
                }
                this.state.page.push(jsonObj)
                break;
            }
            case "Dividers": {
                jsonObj = {
                    id: page.length + 1,
                    type: "divider",
                    text: "rounded divider",
                    style: [
                        {
                            borderTop: "8px solid #bbb",
                            borderRadius: "5px",
                            width: "100%",
                        }
                    ],
                }
                this.state.page.push(jsonObj)
                break;
            }
            case "Image": {
                jsonObj = {
                    id: page.length + 1,
                    type: "image",
                    text: "alt text here",
                    url: "https://images.unsplash.com/photo-1583485056322-f0ba6fe51508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1006&q=80",
                    style: [
                        {
                            width: "50%",
                            borderRadius: "5px",
                            marginLeft: "0",
                            marginRight: "0",
                            marginTop: "0",
                            marginBottom: "0",
                            textAlign: "center",
                            backgroundColor: "#FFF",
                        }
                    ],
                }
                this.state.page.push(jsonObj)
                break;
            }
            case "Button": {
                jsonObj = {
                    id: page.length + 1,
                    type: "button",
                    text: "button text here",
                    href: "#",
                    style: [
                        {
                            color: "#000",
                            backgroundColor: "#FFF",
                            textAlign: "center",
                            border: "0px",
                            borderRadius: "0px",
                        }
                    ],
                }
                this.state.page.push(jsonObj)
                break;
            }
            case "Spacer": {
                jsonObj = {
                    id: page.length + 1,
                    type: "spacer",
                    text: "heading 1",
                    style: [
                        {
                            color: "black",
                            fontSize: "12px",
                            textAlign: "left",
                        }
                    ],
                }
                this.state.page.push(jsonObj)
                break;
            }
            case "Video": {
                jsonObj = {
                    id: page.length + 1,
                    type: "video",
                    text: "heading 1",
                    url: "https://youtu.be/X4Q7d0CtYyk",
                    style: [
                        {
                            color: "black",
                            fontSize: "10vh",
                            textAlign: "center",
                            height: "200px",
                            width: "300px",
                            margin: "auto",
                            autoplay: "0",
                            loop: "0",
                        }
                    ],
                }
                this.state.page.push(jsonObj)
                break;
            }
            case "Icon": {
                jsonObj = {
                    id: page.length + 1,
                    type: "icon",
                    faClassName: "faBell",
                    size: "1x",
                    style: [
                        {
                            color: "black",
                            fontSize: "10vh",
                            textAlign: "left",
                        }
                    ],
                }
                this.state.page.push(jsonObj)
                break;
            }
            case "Row": {
                var colObj = this.returnBasicColumnObj(page.length + 1, 1);
                jsonObj = {
                    id: page.length + 1,
                    type: "row",
                    style: [],
                    col: 1,
                    page: [colObj]
                };
                this.state.page.push(jsonObj);
                break;
            }
            case "Column": {
                var rowId = elementId.split("|")[0]; // row id
                var columnId = elementId.split("|")[1]; // column id

                // find column element to add SubPageSection to
                var column = this.getSubMenuItem(this.getPage(), rowId + "|" + columnId)

                // Create a SubPageSection element with unique id
                var backend = new EditorBackend();
                backend.add(subPageSection);
                var pageSectionToAdd = backend.getPage()[0];
                pageSectionToAdd.id = rowId + "|" + columnId + "|" + (column.page.length + 1);

                // Add SubPageSection to Column
                column.page.push(pageSectionToAdd);
                break;
            }
            default: {
                console.log("Not a valid page section!");
                break;
            }
        }
    }
}
export default EditorBackend;