// services/FeedbackService.js
import axios from 'axios';

const RASA_SERVER_URL = 'http://localhost:5005/webhooks/rest/webhook';

const getBotResponse = async (userMessage) => {
  try {
    const response = await axios.post(RASA_SERVER_URL, {
      sender: 'user',
      message: userMessage,
    });

    const botResponse = response.data[0].text;
    return botResponse;
  } catch (error) {
    console.error('Error communicating with Rasa:', error.message);
    throw new Error('Failed to get a response from the chatbot.');
  }
};

export default { getBotResponse };

