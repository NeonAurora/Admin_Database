const API_URL = "http://localhost:5001/api/overallStats";

export const addOverallStat = async (data) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Error submitting data");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Add more functions to interact with the API as needed (e.g., getOverallStat, updateOverallStat, deleteOverallStat)
