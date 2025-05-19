module.exports = function makeEmail({addJob}){
    return async function emailHandler(httpRequest){
        const { email, subject, message } = httpRequest.body || {}; 
        if (!email || !subject || !message) {
            return {
                statusCode: 400,
                body: {message: "Missing required fields"}
            };
        }
        try{
          await addJob('send-email',{email,subject,message});
          return {
            statusCode: 200,
            body: {message: "Email queued for sending"}
          }
 
        }catch(error){
            console.error(error);
            return {
                statusCode: 500,
                body: {error: error.message}
            }
        }

    }
}