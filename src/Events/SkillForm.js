import React, { useState } from 'react';

export default function SkillForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skill: '',
    rating: 0,
  });

  const [stars, setStars] = useState(Array(10).fill(false));

const handleStarClick = (index) => {
  const newStars = stars.map((_, i) => i <= index);
  console.log(newStars)
  setStars(newStars);
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//   const handleStarClick = (star) => {
//     setFormData({ ...formData, rating: star });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-center">Skill Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Name:</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block">Email:</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block">Skill:</label>
          <select
            name="skill"
            className="w-full p-2 border rounded"
            value={formData.skill}
            onChange={handleChange}
            required
          >
            <option value="">Select a skill</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="CSS">CSS</option>
            <option value="Python">Python</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Experience (Rate out of 10):</label>
          <div className="flex space-x-1 text-2xl">
            {/* {Array.from({ length: 10 }, (_, index) => {
              const starNumber = index + 1;
              return (
                <span
                  key={starNumber}
                  className="cursor-pointer"
                  onClick={() => handleStarClick(starNumber)}
                >
                  {formData.rating >= starNumber ? '★' : '☆'}
                </span>
              );
            })} */}
            <div className="flex text-2xl space-x-1">
  {stars.map((filled, index) => (
    <span
      key={index}
      onClick={() => handleStarClick(index)}
      className="cursor-pointer"
    >
      {filled ? '★' : '☆'}
    </span>
  ))}
</div>

          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
