class UserAdminBackend {
    constructor() {
      this.deleted = [];
      this.updates = [];
    }
  
    all() {
      return [
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
      ].filter((user) => this.deleted.indexOf(user.id) === -1)
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
      this.deleted.push(id);
    }
  
    update(id, field, value){
      this.updates.push([id, field, value]);
    }
  }
  
  export default UserAdminBackend;