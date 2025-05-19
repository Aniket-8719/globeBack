module.exports = function makeAddUser({UseQuery}){
    return async function addUser({name,email}){
        return await UseQuery.createUser({name, email});
    }
}