import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const fromRef = useRef();
  const [loading, setLoading] = useState();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const handleChange = (e) => {
  //   setFrom({
  //     ...from,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // do-this or do-that
  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // arguments -> serviceID, templateID, templateParams, publicKey
      await emailjs.send(
        "service_bxxjbhe",
        "template_cf2xw7j",
        {
          from_name: form.name,
          to_name: "Akash",
          from_email: form.email,
          reply_to: form.email,
          to_email: "akashsahu793@gmail.com",
          message: form.message,
        },
        "3h3glMk1XhoB0EzEp"
      );
      setLoading(false);
      alert("Your Message has been successfully sent!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Contact.jsx/line:49 -> error", error);
    }
  };

  return (
    <section className="my-20 c-space">
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="mt-3 text-lg text-white-600">
            Whether you're looking to build a new-website, improve your existing
            platform, or bring a unique, project to life, I'm here to help.
          </p>

          <form
            ref={fromRef}
            onSubmit={handleSubmit}
            className="flex flex-col mt-12 space-y-7 "
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                value={form.name}
                name="name"
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                onChange={handleChange}
                required
                value={form.message}
                className="field-input"
                placeholder="hi, I'm interested in..."
              />
            </label>
            <button
              className="field-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
