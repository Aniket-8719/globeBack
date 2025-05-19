module.exports = function makeUpdateUser({UseQuery}){
      return async function modifyUser({ id, name, email }) {
         return await UseQuery.updateUser({ id, name, email });
      }
}