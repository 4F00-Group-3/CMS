//import AjaxCall from "../../ajax" //change this

class DashboardBackend {
  constructor() {
    this.deleted = [];
    this.updates = [];
    this.pages = [];
  }

  loadPages(id, title, seg, body) {
    this.pages.push({id, title, seg, body});
  }

  clearPages(){
    this.pages = [];
  }

}

export default DashboardBackend;