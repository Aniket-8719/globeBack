module.exports = function sendEmailJob(jobQueue){
    jobQueue.process('send-email', async (job,done) => {
        const { email, subject, message } = job.data;
      
        console.log(`Sending email to: ${email}`);
        console.log(`Subject: ${subject}`);
        console.log(`Message: ${message}`);
      
        await new Promise((resolve) => setTimeout(resolve, 8000));
      
        done(null,`Email sent to ${email}`);
      });
};
 
