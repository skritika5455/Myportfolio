import "./Entry.css";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const shapes = Array.from({ length: 40 });

export default function Entry() {
  return (
    <section className="entry">

      {/* FLOATING SHAPES */}
      {shapes.map((_, i) => (
        <span
          key={i}
          className={`float-shape shape-${i % 5}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 10}s`
          }}
        />
      ))}

      <div className="entry-container">

        {/* TEXT */}
        <motion.div
          className="entry-text"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Hi, I’m <span>Kritika Singh</span>
          </h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Aspiring Computer Science Student
          </motion.h2>

          <p>
            Frontend Developer || Java Enthusiast || Cloud-Savvy
          </p>

          <div className="entry-buttons">

            {/* CONTACT → MAIL */}
            <a
              href="mailto:kritikasingh@gmail.com?subject=Portfolio%20Contact&body=Hi%20Kritika,"
              className="primary"
            >
              Contact Me
            </a>

            {/* RESUME */}
            <a
              href="/Kritika_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary"
            >
              View Resume
            </a>

          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="entry-image"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={profile} alt="profile" />
        </motion.div>

      </div>
    </section>
  );
}
