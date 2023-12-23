import React, { useState } from 'react';
import './Lorem.css';
import text from './data.json';

const LoremGenerator = () => {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [generatedText, setGeneratedText] = useState('');
  const [dummyState, setDummyState] = useState(false);

  const generateLorem = () => {
    try {
      const jsonData = text;

      if (numParagraphs <= 0) {
        alert("Ayyo! You know that you wrote a negative input 😵");
        return;
      }

      if (numParagraphs > 8) {
        alert("Ayyo! You are demanding too many paragraphs in one go, kindly take a little 😃");
        return;
      }

      const paragraphs = Array.from({ length: numParagraphs }, (_, index) => jsonData[index % jsonData.length]);

      console.log('Generated paragraphs:', paragraphs);

      setGeneratedText(paragraphs.join('\n\n'));

      // Force a re-render
      setDummyState((prev) => !prev);
    } catch (error) {
      console.error('Error loading JSON data:', error);
    }
  };

  return (
    <div className="generator-container">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <label>
        Paragraphs:
        <input
          type="number"
          value={numParagraphs}
          onChange={(e) => setNumParagraphs(e.target.value)}
        />
      </label>
      <button onClick={generateLorem}>GENERATE</button>
      {generatedText && (
        <div className="output-container">
          {generatedText.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default LoremGenerator;
