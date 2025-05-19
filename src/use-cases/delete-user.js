module.exports = function makeDeleteUser({UseQuery}){
    return async function deleteUser(id) {
        return await UseQuery.deleteUser(id);
    }
}