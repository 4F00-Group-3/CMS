class EditorBackend {
    constructor() {
        this.state = {
            page: this.all(),
        }
    }

    getPage() {
        return this.state.page;
    }

    getRowPage(id) {
        console.log("backend, getrowpage", this.state.page)
        // var row;

        // for (var i = 0; i < this.state.page.length; i++) {
        //     if (this.state.page[i].id === id) {
        //         row = this.state.page[i].page;
        //     }
        // }
        // return row;
    }

    getSubMenuItem_Style(id, style_key, style_value) {
        // console.log("item", subMenuItems)
        // if (subMenuItems) {
        //     for (var i = 0; i < subMenuItems.length; i++) {
        //         if (subMenuItems[i].id === id) {
        //             //  return subMenuItems[i];
        //             var style = JSON.parse(JSON.stringify(subMenuItems[i]['style'][0]));
        //             style["" + style_key] = style_value;
        //             subMenuItems[i]['style'][0] = style;
        //             return;
        //         } else {
        //             // var found = this.getSubMenuItem(subMenuItems[i].page, id);
        //             // if (found) return found;
        //             this.getSubMenuItem_Style(subMenuItems[i].page, id, style_key, style_value);
        //             // if (found) return found;
        //         }
        //     }
        // }
        var pageSection = this.getSubMenuItem(this.state.page, id);
        var style = JSON.parse(JSON.stringify(pageSection['style'][0]));
        style["" + style_key] = style_value;
        pageSection['style'][0] = style;
    };

    getSubMenuItem_Text(id, jsonField, jsonValue) {
        var pageSection = this.getSubMenuItem(this.state.page, id);
        pageSection["" + jsonField] = jsonValue;
    }

    getSubMenuItem(subMenuItems, id) {
        console.log("item", subMenuItems)
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

    editSectionStyle(_id, style_key, style_value) {
        var page = this.getPage()
        var result = [];
        for (let index = 0; index < page.length; index++) {
            var pageSection = page[index];
            console.log(pageSection);
            if (pageSection.id === _id) {

                //repopulate new css
                var css = pageSection.style[0];
                var newCSS = {};
                for (var attribute in css) {
                    if (attribute === style_key) {
                        newCSS[attribute] = style_value;
                    }
                    else {
                        newCSS[attribute] = css[attribute];
                    }
                }

                console.log(newCSS);

                //repopulate new page section
                var newPageSection = {};
                for (const key in pageSection) {
                    if (key === "style") {
                        newPageSection[key] = [newCSS];
                    }
                    else {
                        newPageSection[key] = pageSection[key];
                    }
                }

                result.push(newPageSection);

                console.log("section style changed", newPageSection)
            }
            else {
                result.push(pageSection)
            }

        }
        this.state.page = result;
    }

    /**
     * This method will add or remove columns from a row component
     * @param {*} rowId the id of the row to edit
     * @param {*} numColumns the new number of columns with in the row
     */
    editSectionRow(rowId, numColumns) {
        console.log("in edit sec row", rowId, numColumns)
        var page = this.getPage()
        var result = [];
        for (let index = 0; index < page.length; index++) {
            var pageSection = page[index];
            var exitingRowColumns = parseInt(pageSection.col)
            console.log("edit row", pageSection)
            console.log(pageSection.col + "<" + numColumns);
            console.log(pageSection.col < numColumns)
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
                console.log("new pagesection in row edit", pageSection);
                // update number of column values
                pageSection.col = numColumns;
                result.push(pageSection);
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
                    text: "heading 1",
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
     * This method edits a text field in the json file
     * It can be used in replacing any text value from any json field
     * Including id, text, url
     * 
     * @param {id of page section to be edited} id 
     * @param {json field (key) to have value replaced} jsonField 
     * @param {new value} text 
     */
    editTextField(id, jsonField, text) {
        console.log(id, jsonField, text)
        var page = this.getPage()
        var result = [];
        for (let index = 0; index < page.length; index++) {
            var pageSection = page[index];
            if (pageSection.id === id) {
                //replace text here
                var newPageSection = {}
                for (const key in pageSection) {
                    if (key === jsonField) {
                        newPageSection[key] = text;
                    }
                    else {
                        newPageSection[key] = pageSection[key];
                    }
                }
                result.push(newPageSection);
            }
            else {
                result.push(pageSection)
            }

        }
        this.state.page = result;
    }

    /**
     * This is where we would request JSON page from backend
     */
    all() {
        return [
            // {
            //     id: 0,
            //     type: "heading",
            //     text: "heading 1",
            //     style: [
            //         {
            //             color: "black",
            //             fontSize: "10vh",
            //             textAlign: "left",
            //         }
            //     ],
            // },
            // {
            //     id: 1,
            //     type: "heading",
            //     text: "heading 2",
            //     style: [
            //         {
            //             color: "black",
            //             fontSize: "20vh",
            //             textAlign: "center",
            //         }
            //     ],
            // },
            // {
            //     id: 2,
            //     type: "heading",
            //     text: "heading 3",
            //     style: [
            //         {
            //             color: "black",
            //             fontSize: "30vh",
            //             textAlign: "right",
            //         }
            //     ],
            // },
            // {
            //     id: 3,
            //     type: "divider",
            //     text: "rounded divider",
            //     style: [
            //         {
            //             borderTop: "8px solid #bbb",
            //             borderRadius: "5px",
            //         }
            //     ],
            // },
            // {
            //     id: 4,
            //     type: "divider",
            //     text: "dashed divider",
            //     style: [
            //         {
            //             borderTop: "3px dashed #bbb",
            //             borderRadius: "5px",
            //         }
            //     ],
            // },
            // {
            //     id: 5,
            //     type: "divider",
            //     text: "solid divider",
            //     style: [
            //         {
            //             borderTop: "3px solid #bbb",
            //         }
            //     ],
            // },
            // {
            //     id: 6,
            //     type: "image",
            //     text: "alt text here",
            //     url: "https://images.unsplash.com/photo-1583485056322-f0ba6fe51508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1006&q=80",
            //     style: [
            //         {
            //             width: "100%",
            //             borderRadius: "5px",
            //         }
            //     ],
            // },
            // {
            //     id: 7,
            //     type: "divider",
            //     text: "dotted divider",
            //     style: [
            //         {
            //             borderTop: "3px dotted #bbb",
            //             borderRadius: "5px",
            //         }
            //     ],
            // },
            // {
            //     id: 8,
            //     type: "button",
            //     text: "button text here",
            //     onClick: "some script maybe or something idk",
            //     style: [
            //         {
            //             borderTop: "3px dotted #bbb",
            //             borderRadius: "5px",
            //         }
            //     ],
            // }
        ];
    }

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
                            color: "black",
                            fontSize: "10vh",
                            textAlign: "left",
                            fontFamily: "Georgia, serif",
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
                            textAlign: "left",
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
                var rowId = elementId.split("|")[0];
                var columnId = elementId.split("|")[1];
                var column = this.getSubMenuItem(this.getPage(), rowId + "|" + columnId)
                console.log("backend column", column);

                var backend = new EditorBackend();
                backend.add(subPageSection);
                var pageSectionToAdd = backend.getPage()[0];
                pageSectionToAdd.id = rowId + "|" + columnId + "|" + (column.page.length + 1);

                column.page.push(pageSectionToAdd);

                // jsonObj = {
                //     id: page.length + 1,
                //     type: "column",
                //     style: [],
                //     page: [
                //         {
                //             id: 99,
                //             type: "heading",
                //             text: "heading 1",
                //             style: [
                //                 {
                //                     color: "black",
                //                     fontSize: "10vh",
                //                     textAlign: "left",
                //                 }
                //             ],
                //         }
                //     ]
                // };
                // this.state.page.push(jsonObj);
                break;
            }
            default: {
                console.log("Not a heading!");
                break;
            }
        }
    }
}
export default EditorBackend;