import React, { Component } from "react";
import AjaxCall from "./../../ajax" //change this
import Pages from "./../components/Pages";
class DashboardBackend {
  constructor() {
    this.deleted = [];
    this.updates = [];
    this.pages = undefined;
    this.dash = '';
  }



  getPages = (dash) => {
    if(this.dash == ''){
      this.dash = dash;
    }

    AjaxCall(
      { function: "getAllPages", websiteId: sessionStorage.getItem('siteId') || 0 },
      (response) => {
        if (!response.toString().includes("false")) {

          let pagesList = JSON.parse(response.split('php-cgi')[1].trim());

          for (let i = 0; i < pagesList.length; i++) {
            pagesList[i].file = JSON.parse(pagesList[i].file);
          }

          this.pages = pagesList;
          dash.setState({ page:  <Pages backend={this}/> });

          
          
          console.log(this.pages);
        }
      }
    );
  }

  all() {
    var arr = [
      {
        'id': 1,
        'title': 'Home',
        'segment': 'home',
        'body': [],
      },
      {
        'id': 2,
        'title': 'About',
        'segment': 'about',
        'body': [],
      },
      {
        'id': 3,
        'title': 'Products',
        'segment': 'products',
        'body': [],
      },
      {
        'id': 4,
        'title': 'Contact',
        'segment': 'contact',
        'body': [],
      },
    ]

    if (arr.length <= this.pages) {
      arr = this.pages
    }

    return arr.filter((page) => this.deleted.indexOf(page.id) === -1)
      .map((page) => {
        this.updates.forEach((update) => {
          if (update[0] === page.id) {
            page[update[1]] = update[2];
          }
        });

        return page;
      });

  }
  /*Receives id of page to delete, then loops through all pages to find matching
  page and removes it.
  Each const page is the id of a page -1, so by subtracting one from id on
  the comparison, we get an effective compare and the page is removed from pages
  */
  delete(id) {
    for (const page in this.pages) {
      if (page == id - 1) {
        delete this.pages[page];
      }
    }
  }

  update(id, field, value) {
    this.updates.push([id, field, value]);
  }

  updatePages = (id, name, segment, body) => {
    AjaxCall(
      { function: "addPage", websiteId: sessionStorage.getItem('siteId') || 0, pageName: name },
      (response) => {
        // console.log(response);
        if (!response.toString().includes("false")) {
          let pageInfo = JSON.parse(response.split('php-cgi')[1].trim());
          let pages_id = pageInfo[0];
          let path = pageInfo[1];
          let file = [];
          // console.log(pageInfo);
          this.pages.push({ pages_id, name, file, path });
          this.dash.setState({ page:  <Pages backend={this}/> });
          console.log(this.pages);
          // this.getPages(this.dash);
        } else {
          console.log('failed to add page');
        }

        
      }
    );

    
    // console.log(this.pages);
  }
}

export default DashboardBackend;