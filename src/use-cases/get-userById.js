module.exports = function makeGetUserById({ UseQuery }) {
  return async function getUserById(id) {
    return await UseQuery.getUserById(id);
  }
}
