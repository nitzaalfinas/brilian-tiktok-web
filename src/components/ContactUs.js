import React from "react";

const ContactUs = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        We’d love to hear from you! If you have any questions, feedback, or concerns, feel free to reach out to us through the following channels:
      </p>
      <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", backgroundColor: "#f9f9f9" }}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Email:</strong> <a href="mailto:chatsupport@idbrilian.com" style={{ color: "#007bff", textDecoration: "none" }}>chatsupport@idbrilian.com</a>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Website:</strong> <a href="https://chat.idbrilian.com" style={{ color: "#007bff", textDecoration: "none" }}>https://chat.idbrilian.com</a>
          </li>
          {/* <li style={{ marginBottom: "10px" }}>
            <strong>Phone:</strong> <a href="tel:+1234567890" style={{ color: "#007bff", textDecoration: "none" }}>+1 (234) 567-890</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;