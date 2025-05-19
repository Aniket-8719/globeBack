const { jobQueue } = require('./queue');

const sendEmailJob = require('./send-Email-job');
const sendEmail = sendEmailJob(jobQueue);

const sendOtpJob = require('./send-OTP-job');
const sendOTP = sendOtpJob(jobQueue);

const generateReportJob = require('./generate-Report-job');
const generateReport = generateReportJob(jobQueue);

module.exports = {sendEmail,sendOTP,generateReport}
