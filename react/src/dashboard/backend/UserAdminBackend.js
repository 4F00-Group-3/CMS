class UserAdminBackend {
    constructor() {
      this.deleted = [];
      this.updates = [];
      this.users = this.all();
    }
  
    all() {
      var arr = [
        {
          'id': 1,
          'title': 'User 1',
        },
        {
          'id': 2,
          'title': 'User 2',
        },
        {
          'id': 3,
          'title': 'User 3',
        },
        {
          'id': 4,
          'title': 'User 4',
        },
      ]
      
      if(arr.length <= this.users) {
        arr = this.users
      }
      
      return arr.filter((user) => this.deleted.indexOf(user.id) === -1)
      .map((user) => {
        this.updates.forEach((update) => {
          if(update[0] === user.id){
            user[update[1]] = update[2];
          }
        });
  
        return user;
      });
  
    }
  
    delete(id) {
      for (const user in this.users) {
        if (user == id-1) {
          delete this.users[user];
        }
      }
    }
  
    update(id, field, value){
      this.updates.push([id, field, value]);
    }

    updateUsers(id, title){
      this.users.push({id, title});
    }
  }
  
  export default UserAdminBackend;