//import AjaxCall from "../../ajax" //change this

class DashboardBackend {
  constructor() {
    this.deleted = [];
    this.updates = [];
    this.pages = this.all();
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

    if(arr.length <= this.pages) {
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
      if (page == id-1) {
        delete this.pages[page];
      }
    }
  }

  update(id, field, value) {
    this.updates.push([id, field, value]);
  }

  updatePages(id, title, segment, body){
    this.pages.push({id, title, segment, body});
  }
}

export default DashboardBackend;