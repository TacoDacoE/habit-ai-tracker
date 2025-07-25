// src/AISuggestions.js
import React, { useState } from "react";
import { askAI } from "./utils/askAI";

const AISuggestions = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const aiResponse = await askAI(prompt);
      setResponse(aiResponse);
    } catch (err) {
      setResponse("❌ Failed to get a response from the AI.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <section>
      <h2>🤖 Ask the Habit AI</h2>
      <textarea
        placeholder="Ask for habit suggestions or feedback..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: "0.75rem", borderRadius: "10px" }}
      />
      <button onClick={handleAskAI} style={{ marginTop: "1rem" }}>
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {response && (
        <div
          style={{
            background: "#fdf1f1",
            marginTop: "1.5rem",
            padding: "1rem",
            borderRadius: "12px",
            whiteSpace: "pre-wrap",
          }}
        >
          <strong>💡 AI Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </section>
  );
};

export default AISuggestions;

