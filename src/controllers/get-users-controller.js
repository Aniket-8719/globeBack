module.exports = function makeGetUsers({ getUsers }) {
    return async function getUsersHandler(httpRequest) {
      const headers = {
        'Content-Type': 'application/json'
      };
      try {
        const users = await getUsers({});
        return {
          headers,
          statusCode: 200,
          body: users
        };
      } catch (error) {
        console.log(error);
        return {
          headers,
          statusCode: 500,
          body: { error: error.message }
        };
      }
    };
  }
  