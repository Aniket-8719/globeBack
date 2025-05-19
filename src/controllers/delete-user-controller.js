module.exports = function makeDeleteUser({deleteUser}){
    return async function deleteUserHandler(httpRequest){
        const {id} = httpRequest.params;
        try{
            const user = await deleteUser(id);
            return {
                statusCode: 201,
                body: user,
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