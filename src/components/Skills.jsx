import "./Skills.css";
import skills from "./skillsData";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Skills & Expertise
      </motion.h2>

      <p className="skills-subtitle">
        My go-to stack for building responsive and efficient applications.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
          >
            <motion.i
              className={`skill-icon ${skill.icon}`}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />

            <h3>{skill.name}</h3>

            {/* Progress Bar */}
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              />
            </div>

            <span className="skill-percent">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
