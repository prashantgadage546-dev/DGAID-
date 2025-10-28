import React, { useState } from "react";

import "./styles/ContactUs.css";

const InputField = ({ label, name, type, placeholder, value, onChange }) => (
  <div className="contact-field">
    <label className="contact-label" htmlFor={name}>{label}</label>
    <div className="contact-input-box">
      <input
        id={name}
        className="contact-input-element"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  </div>
);

const TextArea = ({ label, name, placeholder, value, onChange }) => (
  <div className="contact-field">
    <label className="contact-label" htmlFor={name}>{label}</label>
    <div className="contact-textarea-box">
      <textarea
        id={name}
        className="contact-textarea-element"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      ></textarea>
    </div>
  </div>
);

// WhatsApp Button Component
const ButtonWhatsApp = ({ text, phoneNumber }) => (
  <a
    href={`https://wa.me/${phoneNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    className="contact-btn whatsapp-btn"
>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="white"
      viewBox="0 0 24 24"
      style={{ marginRight: "8px", verticalAlign: "middle" }}
    >
      <path d="M20.52 3.48A11.78 11.78 0 0012 0C5.37 0 0 5.37 0 12c0 2.13.56 4.13 1.53 5.92L0 24l6.33-1.53A11.91 11.91 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zm-8.5 17.04c-1.96 0-3.88-.52-5.56-1.5l-.4-.23-3.76.91.95-3.67-.24-.39a10.932 10.932 0 01-1.52-5.5c0-6.08 4.94-11.02 11.02-11.02 2.95 0 5.73 1.15 7.81 3.23 2.08 2.08 3.23 4.87 3.23 7.82 0 6.08-4.94 11.02-11.02 11.02zm5.89-7.73c-.32-.16-1.89-.93-2.18-1.03-.29-.1-.5-.16-.71.16s-.81.98-.99 1.18c-.18.19-.36.21-.68.07-.32-.16-1.35-.5-2.57-1.58-.95-.84-1.59-1.88-1.78-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.36.48-.54.16-.18.21-.32.32-.53.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.98-2.32-.26-.61-.53-.53-.71-.54-.18 0-.39-.01-.6-.01-.21 0-.55.08-.84.39-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.31c.16.21 2.27 3.47 5.5 4.87 3.23 1.4 3.23.93 3.81.87.58-.05 1.89-.77 2.16-1.52.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.6-.37z"/>
    </svg>
    {text}
  </a>
);

const ContactUsPremium = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact_number: "",
    project_desc: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted (UI only)");
    setFormData({ fullname: "", email: "", contact_number: "", project_desc: "" });
  };

  return (
    <section className="contact-section">
      <div className="contact-left">
        <h1 className="contact-heading">
          Our Technology Experts <br /> Are Change Catalysts
        </h1>
        <p className="contact-subtitle">
          Book a free consultation call with our experts today.
        </p>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <InputField
            label="Full Name"
            name="fullname"
            type="text"
            placeholder="Enter your name"
            value={formData.fullname}
            onChange={handleChange}
          />
          <InputField
            label="Email ID*"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Contact Number*"
            name="contact_number"
            type="tel"
            placeholder="Enter your number"
            value={formData.contact_number}
            onChange={handleChange}
          />
          <TextArea
            label="Describe Your Project / Idea*"
            name="project_desc"
            placeholder="Describe briefly..."
            value={formData.project_desc}
            onChange={handleChange}
          />

          <div className="contact-button-box">
            {/* Request Proposal Button */}
            <button className="contact-btn" type="submit">
              Request Proposal
            </button>

            {/* WhatsApp Button */}
            <ButtonWhatsApp text="WhatsApp" phoneNumber="8263083161" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUsPremium;