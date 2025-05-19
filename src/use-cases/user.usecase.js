const UseQuery = require('../data-access/user-data');

const UserUseCase = {
  async getUsers() {
    return await UseQuery.getAllUsers();
  },

  async getUser(id) {
    return await UseQuery.getUserById(id);
  },

  async addUser(name, email) {
    return await UseQuery.createUser(name, email);
  },

  async modifyUser(id, name, email) {
    return await UseQuery.updateUser(id, name, email);
  },

  async removeUser(id) {
    return await UseQuery.deleteUser(id);
  },
};

module.exports = UserUseCase;
