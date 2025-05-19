module.exports = function makeGetUsers({
    UseQuery
}){
    return async function getUsers({}){
        return await UseQuery.getAllUsers();
    }
};
