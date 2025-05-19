module.exports = function sendOtpJob(jobQueue) {
   jobQueue.process('send-otp', async (job)=>{

    console.log(`Sending OTP to phone: ${job.data.phone}`);

    await new Promise((resolve)=> setTimeout(resolve,2000));

    console.log(`OTP sent to phone: ${job.data.phone}`);

      return `OTP sent to ${job.data.phone}`;
   })
  };
  
  