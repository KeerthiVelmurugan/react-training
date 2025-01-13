import React, { useState } from 'react';

const CapitalizeSentences = () => {
  const [text, setText] = useState('this is a sentence. this is another one! is this a question?');

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const transformParagraph = (paragraph) => {
    const sentences = paragraph.match(/[^.!?]+[.!?]*/g);
    const transformedSentences = sentences.map(sentence => capitalizeFirstLetter(sentence.trim()));
    return transformedSentences.join(' ');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const transformedText = transformParagraph(text);

  return (
    <div>
      <h1>Capitalize Sentences</h1>
      <textarea 
        value={text} 
        onChange={handleChange} 
        rows="5" 
        cols="50"
      />
      <h2>Transformed Paragraph</h2>
      <p>{transformedText}</p>
    </div>
  );
};

export default CapitalizeSentences;
