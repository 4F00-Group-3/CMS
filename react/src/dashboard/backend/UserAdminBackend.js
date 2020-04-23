class UserAdminBackend {
    constructor() {
      this.deleted = [];
      this.updates = [];
      this.users = [];    
    }

    loadUsers(id, title) {
      this.users.push({id, title});
    }

    clearUsers(){
      this.users = [];
    }
  }
  
  export default UserAdminBackend;