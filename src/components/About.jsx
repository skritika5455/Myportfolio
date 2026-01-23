import "./About.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about-section" id="about">

      {/* Floating Background Shapes */}
      <div className="about-shapes">
        <span className="shape circle"></span>
        <span className="shape triangle"></span>
        <span className="shape square"></span>
        <span className="shape circle small"></span>
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
        <span className="about-underline"></span>
      </motion.h2>

      {/* Content */}
      <motion.div
        className="about-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p>
          I'm <span>Kritika Singh</span>, a dedicated Computer Science undergraduate at
          Technocrats Institute of Technology Excellence, Bhopal, with a strong academic
          record and a deep interest in frontend and software development.
          I have consistently demonstrated academic excellence by securing top positions
          in my semester examinations three consecutive times, reflecting my discipline,
          consistency, and passion for learning. I enjoy building clean, responsive, and user-friendly web interfaces using
          HTML, CSS, JavaScript, and modern development practices.
        </p>

        <p>
          Beyond academics, I actively participate in hackathons and competitive
          programming, having solved 600+ problems on platforms like CodeChef and
          GeeksforGeeks.
          I am a self-motivated learner and adaptable team player, aiming to grow as a
          software engineer and build efficient, user-centric solutions.
        </p>
      </motion.div>
    </section>
  );
}
