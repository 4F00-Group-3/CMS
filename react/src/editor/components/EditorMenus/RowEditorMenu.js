import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import EditMenuNav from './EditorMenuNav';

export default class RowEditorMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columnNumber: this.props.selectedRowNumberOfColumns
        }
    }

    /**
     * This method handles the number of columns the user desired to place inside a row component
     * This method also ensured that number of columns does stays between 1 and 12
     * @param {*} numColumns number of columns
     */
    handleNumColumnsinRow(numColumns) {
        var columnNum = numColumns;
        if (columnNum < 13 && columnNum > 0) {
            this.setState({ columnNumber: columnNum });
            this.props.menuComponentOnClick("Col|" + columnNum);
        }
    }

    /**
    * This method adds appends a PageSection component in to the EditingPage
    * It does this by appending it to the page json (handled in the EditorBackend)
    * This new page object is re-rendered on to the EditingPage when setState is called
    * @param the name of the component which is recieved from the the button clicked on EditorSidebar
    */
    AddElementToColumn = (name) => {
        this.props.onPush("Column", name, this.props.selectedId, this.state.columnId);
    }

    /**
     * This method renders the row editor menu onto the editor sidebar.
     */
    render() {
        return (
            <div className=" rounded p-1 editor-menu">
                <div>
                    <label className="d-block font-weight-bold">Edit Row</label>
                </div>
                <Row>
                    <Col>
                        <Form.Label className="d-block left w-50">Add Columns</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            type="number"
                            min="1"
                            max="12"
                            placeholder="Number of Columns"
                            value={this.state.columnNumber}
                            onChange={(event) => {
                                this.handleNumColumnsinRow(event.target.value);
                            }}
                        >
                        </Form.Control>
                    </Col>
                </Row>
                <EditMenuNav  handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} />
            </div>
        );
    };
}