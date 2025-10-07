import React, { useState } from 'react';

function SurveyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    feedback: '',
    recommend: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Feedback:', formData);
    alert('Feedback submitted. Check console!');
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Survey Feedback Form</h2>
      <form onSubmit={handleSubmit}>

        {/* Name */}
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />

        {/* Email */}
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />

        {/* Rating */}
        <label>Rate your experience:</label><br />
        {[1, 2, 3, 4, 5].map((num) => (
          <label key={num}>
            <input
              type="radio"
              name="rating"
              value={num}
              checked={formData.rating === num.toString()}
              onChange={handleChange}
            />
            {num}⭐
          </label>
        ))}<br /><br />

        {/* Feedback */}
        <label>Your Feedback:</label><br />
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          rows={4}
          placeholder="Write your thoughts..."
          required
        /><br /><br />

        {/* Recommendation */}
        <label>Would you recommend us?</label><br />
        {["Yes", "No"].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="recommend"
              value={option}
              checked={formData.recommend === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}<br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SurveyForm;
