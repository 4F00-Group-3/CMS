export default class EditorBackend {
    all() {
        return [
            {
                id: 0,
                type: "heading",
                text: "heading 1",
                style: [
                    {
                        color: "black",
                        fontSize: "10vh",
                        textAlign: "left",
                    }
                ],
            },
            {
                id: 1,
                type: "heading",
                text: "heading 2",
                style: [
                    {
                        color: "black",
                        fontSize: "20vh",
                        textAlign: "center",
                    }
                ],
            },
            {
                id: 2,
                type: "heading",
                text: "heading 3",
                style: [
                    {
                        color: "black",
                        fontSize: "30vh",
                        textAlign: "right",
                    }
                ],
            },
            {
                id: 3,
                type: "divider",
                text: "rounded divider",
                style: [
                    {
                        borderTop: "8px solid #bbb",
                        borderRadius: "5px",
                    }
                ],
            },
            {
                id: 4,
                type: "divider",
                text: "dashed divider",
                style: [
                    {
                        borderTop: "3px dashed #bbb",
                        borderRadius: "5px",
                    }
                ],
            },
            {
                id: 5,
                type: "divider",
                text: "solid divider",
                style: [
                    {
                        borderTop: "3px solid #bbb",
                    }
                ],
            },
            {
                id: 6,
                type: "image",
                text: "alt text here",
                url: "https://images.unsplash.com/photo-1583485056322-f0ba6fe51508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1006&q=80",
                style: [
                    {
                        width: "100%",
                        borderRadius: "5px",
                    }
                ],
            },
            {
                id: 7,
                type: "divider",
                text: "dotted divider",
                style: [
                    {
                        borderTop: "3px dotted #bbb",
                        borderRadius: "5px",
                    }
                ],
            },
            {
                id: 8,
                type: "button",
                text: "button text here",
                onClick: "some script maybe or something idk",
                style: [
                    {
                        borderTop: "3px dotted #bbb",
                        borderRadius: "5px",
                    }
                ],
            }
        ];
    }
}
