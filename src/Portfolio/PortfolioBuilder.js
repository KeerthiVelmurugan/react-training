import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PortfolioBuilder({ setPortfolioData }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: [],
    education: [],
    experience: [],
    projects: [],
    summary: "",
  });

  const [skillInput, setSkillInput] = useState("");
  const [edu, setEdu] = useState({});
  const [exp, setExp] = useState({});
  const [proj, setProj] = useState({});
  const navigate = useNavigate();

  const updateForm = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const addToList = (field, value) => {
    if (!Object.values(value).some((v) => !v)) {
      updateForm(field, [...form[field], value]);
      if (field === "education") setEdu({});
      if (field === "experience") setExp({});
      if (field === "projects") setProj({});
    }
  };

  const saveToBrowser = () => {
    localStorage.setItem("portfolioData", JSON.stringify(form));
    alert("Saved to browser!");
  };

  const preview = () => {
    setPortfolioData(form);
    navigate("/preview");
  };

  return (
    <div className="builder">
      <h2>Portfolio Builder</h2>
      <input placeholder="Name" onChange={(e) => updateForm("name", e.target.value)} />
      <input placeholder="Email" onChange={(e) => updateForm("email", e.target.value)} />
      <input placeholder="Phone" onChange={(e) => updateForm("phone", e.target.value)} />
      <input placeholder="LinkedIn URL" onChange={(e) => updateForm("linkedin", e.target.value)} />
      <input placeholder="GitHub URL" onChange={(e) => updateForm("github", e.target.value)} />

      <div>
        <input
          placeholder="Add Skill"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
        />
        <button onClick={() => {
          updateForm("skills", [...form.skills, skillInput]);
          setSkillInput("");
        }}>
          Add Skill
        </button>
      </div>

      <div>
        <h4>Education</h4>
        <input placeholder="Degree" onChange={(e) => setEdu({ ...edu, degree: e.target.value })} />
        <input placeholder="Institution" onChange={(e) => setEdu({ ...edu, institution: e.target.value })} />
        <input placeholder="Year" onChange={(e) => setEdu({ ...edu, year: e.target.value })} />
        <button onClick={() => addToList("education", edu)}>Add Education</button>
      </div>

      <div>
        <h4>Experience</h4>
        <input placeholder="Job Title" onChange={(e) => setExp({ ...exp, title: e.target.value })} />
        <input placeholder="Company" onChange={(e) => setExp({ ...exp, company: e.target.value })} />
        <input placeholder="Duration" onChange={(e) => setExp({ ...exp, duration: e.target.value })} />
        <input placeholder="Description" onChange={(e) => setExp({ ...exp, description: e.target.value })} />
        <button onClick={() => addToList("experience", exp)}>Add Experience</button>
      </div>

      <div>
        <h4>Projects</h4>
        <input placeholder="Project Title" onChange={(e) => setProj({ ...proj, title: e.target.value })} />
        <input placeholder="Description" onChange={(e) => setProj({ ...proj, description: e.target.value })} />
        <input placeholder="Live Link" onChange={(e) => setProj({ ...proj, link: e.target.value })} />
        <button onClick={() => addToList("projects", proj)}>Add Project</button>
      </div>

      <textarea placeholder="Summary/About You" onChange={(e) => updateForm("summary", e.target.value)} />

      <div className="buttons">
        <button onClick={saveToBrowser}>Save to Browser</button>
        <button onClick={preview}>Preview Portfolio</button>
      </div>
    </div>
  );
}
