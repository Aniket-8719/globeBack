module.exports = function makeUpdateUser({ updateUser }) {
    return async function updateUserHandler(httpRequest) { 
       const { id } = httpRequest.params;
       const { name, email } = httpRequest.body || {}; 
       try {
         const user = await updateUser({id,name,email}); 
         if (!user) {
             return {
                 statusCode: 404,
                 body: { error: "User not found" }
             };
         }
         return {
             statusCode: 200,
             body: user
         };
       } catch (error) {
         console.error(error);
         return {
             statusCode: 500,
             body: { error: error.message }
         };
       }
    }
 };
 