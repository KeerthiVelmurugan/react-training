import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function PortfolioPreview({ data }) {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div ref={componentRef} className="preview">
        <h1>{data.name}</h1>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>LinkedIn:</strong> {data.linkedin}</p>
        <p><strong>GitHub:</strong> {data.github}</p>
        <h3>Summary</h3>
        <p>{data.summary}</p>

        <h3>Skills</h3>
        <ul>{data.skills?.map((s, i) => <li key={i}>{s}</li>)}</ul>

        <h3>Education</h3>
        <ul>
          {data.education?.map((e, i) => (
            <li key={i}>{e.degree}, {e.institution} ({e.year})</li>
          ))}
        </ul>

        <h3>Experience</h3>
        <ul>
          {data.experience?.map((e, i) => (
            <li key={i}>
              <strong>{e.title}</strong> at {e.company} ({e.duration})<br />
              <em>{e.description}</em>
            </li>
          ))}
        </ul>

        <h3>Projects</h3>
        <ul>
          {data.projects?.map((p, i) => (
            <li key={i}>
              <strong>{p.title}</strong><br />
              {p.description}<br />
              <a href={p.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handlePrint}>Download as PDF</button>
    </div>
  );
}
