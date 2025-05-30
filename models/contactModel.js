const twilio = require('twilio');
const dotenv = require('dotenv');

dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendContactDetails = async (userDetails) => {
  try {
    const message = `
      New Contact Submission:
      Name: ${userDetails.name}
      Phone: ${userDetails.phone}
      Email: ${userDetails.email}
      message:${userDetails.message}
    `;
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.CARD_OWNER_NUMBER
    });
    return { success: true, message: 'Details sent successfully!' };
  } catch (error) {
    console.error('Error sending SMS:', error);
    return { success: false, message: 'Failed to send details. Please try again.' };
  }
};

module.exports = { sendContactDetails };