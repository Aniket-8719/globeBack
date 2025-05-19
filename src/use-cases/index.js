const userDb = require('../data-access/index');

const makeGetUsers = require("./get-users");
const getUsers = makeGetUsers({UseQuery: userDb});

const makeGetUserById = require("./get-userById");
const getUserById = makeGetUserById({UseQuery: userDb}); 

const makeAddUser = require("./add-user");
const addUser = makeAddUser({UseQuery: userDb});

const makeUpdateUser = require("./update-user");
const updateUser = makeUpdateUser({UseQuery: userDb});


const makeDeleteUser = require("./delete-user");
const deleteUser = makeDeleteUser({UseQuery: userDb});

const useCases = {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};

module.exports = useCases;