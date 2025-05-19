module.exports = function makeAddUser({ addUser }) {
    return async function addUserHandler(httpRequest) { 
        const { name, email } = httpRequest.body || {}; 
        if (!name || !email) {
            return {
                statusCode: 400,
                body: { error: "Missing required fields" }
            };
        }
  
        try {
            const user = await addUser({ name, email }); 
            return {
                statusCode: 201,   
                body: user
            };
        } catch (error) {
            console.error(error);
            return {
                statusCode: 500,
                body: { error: error.message }
            };
        }
    };
};
