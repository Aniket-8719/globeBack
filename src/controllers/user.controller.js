const UserUseCase = require('../use-cases/user.usecase');
const getUsercases = require("../use-cases/index");

const UserController = {
  async getUsers(req, res) {
    try {
      const users = await getUsercases.getUsers({});
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getUser(req, res) {
    try {
      const user = await UserUseCase.getUser(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createUser(req, res) {
    try {
      const { name, email } = req.body;
      const newUser = await UserUseCase.addUser(name, email);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateUser(req, res) {
    try {
      const { name, email } = req.body;
      const updatedUser = await UserUseCase.modifyUser(req.params.id, name, email);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await UserUseCase.getUser(req.params.id);
      if(!user) return res.status(404).json({ message: 'User Not found' });
      await UserUseCase.removeUser(req.params.id);
      res.status(200).json({ message: 'User Delete Successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = UserController;
