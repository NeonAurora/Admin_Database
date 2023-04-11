import React, { useState } from "react";
import DisplayForm from "components/OverallStatSearchFrom";

const API_URL = "http://localhost:5001/api/overallStats/search";

const SearchPage = () => {
  const [documentId, setDocumentId] = useState("");
  const [documentData, setDocumentData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${API_URL}/${documentId}`);
      const data = await response.json();
      setDocumentData(data);
    } catch (error) {
      setDocumentData(null);
      setError("Error: Document not found");
    }
  };

  return (
    <div>
      <h1>Search Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter the ID of the document you want to search for:
          <input
            type="text"
            value={documentId}
            onChange={(e) => setDocumentId(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>
        {error && <p>{error}</p>}
        {documentData && <DisplayForm documentData={documentData} />}
      </div>
    </div>
  );
};

export default SearchPage;
