import { Link } from "react-scroll";

function Portfolio() {
  return (
    <div>
      <nav>
        <Link to="home" smooth={true} duration={1000}>Home</Link>
        <Link to="about" smooth={true} duration={5000}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>

      <section id="home" style={{ height: "100vh" }}> <h2>Home</h2> </section>
      <section id="about" style={{ height: "100vh" }}> <h2>About</h2> </section>
      <section id="projects" style={{ height: "100vh" }}> <h2>Projects</h2> </section>
      <section id="contact" style={{ height: "100vh" }}> <h2>Contact</h2> </section>
    </div>
  );
}

export default Portfolio;
