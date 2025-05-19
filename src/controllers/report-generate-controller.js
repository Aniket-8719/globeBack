module.exports = function makeReportGenerate({ addJob }) {
    return async function reportHandler(httpRequest) {
      const { id } = httpRequest.params || {};
  
      if (!id) {
        return res.status(400).json({ error: 'User ID is required' });
      }
  
      try {
        const userId = id;
        await addJob('generate-report', { userId });
        return {
          statusCode: 200,
          body: { message: "Report is queued for generating" },
        };
      } catch (error) {
        console.error(error);
        return {
          statusCode: 500,
          body: { error: error.message },
        };
      }
    };
  };
  