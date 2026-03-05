import "./Education.css";
import { useState } from "react";

import class10 from "../assets/class10-result.jpg";
import class12 from "../assets/class12-result.jpg";

export default function Education() {
  const [showResult, setShowResult] = useState(null);

  // 🔹 Semester CGPA Data
  const semesterResults = {
    "Sem 1": "SGPA: 8.75",
    "Sem 2": "SGPA: 8.29",
    "Sem 3": "SGPA: 9.04",
    "Sem 4": "SGPA: 8.88",
    "Sem 5": "SGPA: 9.08",
    "Sem 6": "SGPA: 9.13",
    "Sem 7": "SGPA: 9.25",
  };

  return (
    <section className="education-section" id="education">
      <h2 className="edu-title">Education</h2>
      <div className="edu-underline"></div>

      {/* X & XII */}
      <div className="edu-grid">
        <div className="edu-card glow">
          <h3>X (Secondary)</h3>
          <p><b>School:</b> Aryan Public School</p>
          <p><b>Board:</b> CBSE</p>
          <p><b>Percentage:</b> 74.80%</p>
          <button onClick={() => setShowResult({ type: "image", value: class10 })}>
            View Result
          </button>
        </div>

        <div className="edu-card glow">
          <h3>XII (Senior Secondary)</h3>
          <p><b>School:</b> Aryan Public School</p>
          <p><b>Board:</b> CBSE</p>
          <p><b>Stream:</b> PCM</p>
          <p><b>Percentage:</b> 72.60%</p>
          <button onClick={() => setShowResult({ type: "image", value: class12 })}>
            View Result
          </button>
        </div>
      </div>

      {/* BTECH */}
      <div className="edu-center">
        <div className="edu-card glow strong-glow">
          <h3>B.Tech (Computer Science)</h3>
          <p><b>College:</b> Technocrats Institute of Technology</p>
          <p>Affiliated to RGPV, Bhopal</p>

          <div className="semester">
            {Object.keys(semesterResults).map((sem) => (
              <span
                key={sem}
                onClick={() =>
                  setShowResult({ type: "cgpa", value: semesterResults[sem], sem })
                }
              >
                {sem}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RESULT MODAL */}
      {showResult && (
        <div className="result-modal">
          <div className="result-box">
            <button className="close-btn" onClick={() => setShowResult(null)}>
              ✕
            </button>

            {showResult.type === "image" && (
              <img src={showResult.value} alt="Result" />
            )}

            {showResult.type === "cgpa" && (
              <div className="cgpa-box">
                <h3>{showResult.sem}</h3>
                <p>{showResult.value}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
