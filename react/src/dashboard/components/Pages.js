import React, { Component } from 'react';
import Page from './Page';
import '../../css/PageAdmin.css'


class Pages extends Component {
    constructor(props) {
        super(props);
        this.handlePageEdit = this.handlePageEdit.bind(this);
        this.handlePageDelete = this.handlePageDelete.bind(this);
        this.handlePageInsert = this.handlePageInsert.bind(this);
        this.handlePageUpdate = this.handlePageUpdate.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            'pages': this.props.backend.all(),
        }
    }



    onClick() {
        console.log(this.constructor.name + " was clicked");
    }

    handlePageEdit() {
        console.log("handle page edit clicked");
    }

    handlePageDelete(id) {
        console.log("handle page delete clicked");
        this.props.backend.delete(id);
        this.setState({
            'pages': this.props.backend.all(),
        })
    }

    handlePageInsert() {
        console.log("handle page insert clicked");
    }

    handlePageUpdate(id, field, value) {
        this.props.backend.update(id, field, value);
        this.setState({
            'pages': this.props.backend.all(),
        })
    }

    render() {
        return (
            <>
                <div className="PagesContainer" >
                        <ol className="PageList">
                            {this.state.pages.map((page, i) => {
                                return (
                                    <li key={i}  className="ListItemContainer">
                                        <Page
                                            {...page}
                                            onPageEdit={this.handlePageEdit}
                                            onPageInsert={this.handlePageInsert}
                                            onPageUpdate={this.handlePageUpdate}
                                            onPageDelete={this.handlePageDelete}
                                            page={this.state.pages[i]}
                                        />
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
            </>
        );
    }
}

export default Pages;