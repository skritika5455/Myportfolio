import "./ContactAlt.css";

export default function ContactAlt() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Let’s Connect</h2>
      <p className="contact-subtitle">
        Looking to collaborate? I’m open to opportunities.
      </p>
      {/* STAR BACKGROUND */}
<div className="stars">
  {Array.from({ length: 80 }).map((_, i) => (
    <span
      key={i}
      className="star"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${2 + Math.random() * 3}s`,
        animationDelay: `${Math.random() * 2}s`
      }}
    />
  ))}
</div>


      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3>Contact Info</h3>

          <p>
            📧{" "}
            <a href="mailto:kritikasingh@gmail.com">
              skritika5455@gmail.com
            </a>
          </p>

          <p>📞 +91 95691XXXXX</p>
          <p>📍 Bhopal, India</p>

          <div className="social-links">
            <a
              href="https://github.com/skritika5455"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kritika-singh-637969277/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:kritikasingh@gmail.com">
              Email
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully!");
            e.target.reset();
          }}
        >
          <h3>Send Message</h3>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}
