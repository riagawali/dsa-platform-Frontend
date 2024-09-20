import axios from "axios";

const API_URL = "http://localhost:5000"; // Your backend base URL

// Fetch questions based on topic and difficulty
export const getQuestions = async (topic, difficulty) => {
  try {
    const response = await axios.get(`${API_URL}/api/questions`, {
      params: { topic, difficulty },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};

// Function to update user's progress
export const updateUserProgress = async (userId, completedQuestion) => {
  try {
    const response = await axios.post(`${API_URL}/api/users/update-progress`, {
      userId,
      completedQuestion,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user progress", error);
  }
};

// Function to get Socratic feedback from ChatGPT
export const getSocraticFeedback = async (userCode, question) => {
  try {
    const response = await axios.post(`${API_URL}/api/chat/socratic-feedback`, {
      userCode,
      question,
    });

    return response.data; // Return the full response, expecting { feedback: 'feedback text' }
  } catch (error) {
    console.error("Error getting Socratic feedback", error);
    return { feedback: "Something went wrong. Please try again." };
  }
};
