module.exports = function generateReportJob(jobQueue){
    jobQueue.process('generate-report', async (job) => {
        console.log(`Generating report for user: ${job.data.userId}`);
    
        await new Promise((resolve) => setTimeout(resolve, 3000)); 
    
        console.log(`Report generated for user: ${job.data.userId}`);
        return `Report for user ${job.data.userId}`;
      });
} 