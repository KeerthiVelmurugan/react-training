import React, { useRef } from "react";

function ScrollToSection() {
  // Create refs for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  // Scroll handlers
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior:"smooth" });
  };

  return (
    <div>
      <h1>Scroll to Sections Example</h1>
      <div style={{ position: "fixed", top: 10, right: 10 }}>
        <button onClick={() => scrollToSection(section1Ref)}>Go to Section 1</button>
        <button onClick={() => scrollToSection(section2Ref)}>Go to Section 2</button>
        <button onClick={() => scrollToSection(section3Ref)}>Go to Section 3</button>
      </div>

      <div
        ref={section1Ref}
        style={{ height: "100vh", backgroundColor: "#f8b400", padding: 20 }}
      >
        <h2>Section 1</h2>
        <p>This is the content of Section 1.</p>
      </div>

      <div
        ref={section2Ref}
        style={{ height: "100vh", backgroundColor: "#4caf50", padding: 20, color: "white" }}
      >
        <h2>Section 2</h2>
        <p>This is the content of Section 2.</p>
      </div>

      <div
        ref={section3Ref}
        style={{ height: "100vh", backgroundColor: "#2196f3", padding: 20, color: "white" }}
      >
        <h2>Section 3</h2>
        <p>This is the content of Section 3.</p>
      </div>
    </div>
  );
}

export default ScrollToSection;
