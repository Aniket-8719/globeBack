module.exports = function makeGetUserById({getUserById}){
   return async function getUserByIdHanler(httpRequest) {
      const {id} = httpRequest.params;
      console.log("userID hai: ",id);
      try{
        const user = await getUserById(id);
        return {
            statusCode: 201,
            body: user
        }
      }catch(error){
        console.error(error);
        return {
            statusCode: 500,
            body: { error: error.message }
        };
    }

   }
}