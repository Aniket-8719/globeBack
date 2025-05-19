const Queue = require('bull');

require('dotenv').config();
console.log("root:",process.env.REDIS_URL);

const jobQueue = new Queue('job-queue', process.env.REDIS_URL);

const addJob = (type, data) => {
  jobQueue.add(type, data, {
    attempts: 3, 
    backoff: 5000, 
  });
};

jobQueue.on('completed', (job) => {
  console.log(`Job completed with result: ${job.returnvalue}`);
});

jobQueue.on('failed', (job, err) => {
  console.log(`Job failed [${job.name}] with error: ${err.message}`);
}); 

module.exports = { addJob, jobQueue };
