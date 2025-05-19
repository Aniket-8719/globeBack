module.exports = function makeSendOTP({ addJob }) {
  return async function OtpHandler(httpRequest) {
    const { phone } = httpRequest.body || {};

    if (!phone) {
      return res.status(400).json({ error: "Phone number is required" });
    }

    try {
      await addJob('send-otp', { phone });
      return {
        statusCode: 200,
        body: { message: "OTP is queued for sending" },
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
