import React from "react";

const TermsOfService = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1>Terms of Service</h1>
      <p><strong>Effective Date:</strong> June 3, 2025</p>
      <p>
        Welcome to Brilian Chat App. By accessing or using our application, you agree to be bound by the following terms and conditions. 
        Please read these terms carefully before using the app.
      </p>

      <h2>1. Use of the App</h2>
      <ul>
        <li>
          The app is provided "as is" without any warranties, express or implied. We do not guarantee that the app will be error-free or uninterrupted.
        </li>
        <li>
          You are solely responsible for securing your credentials, including your private key and mnemonic. 
          Losing these credentials may result in the permanent loss of access to your chats.
        </li>
        <li>
          You agree not to use the app for any illegal or unauthorized purposes.
        </li>
      </ul>

      <h2>2. Limitation of Liability</h2>
      <ul>
        <li>
          We are not liable for any loss of data or other damages resulting from misuse of the app, unauthorized access, or technical issues.
        </li>
        <li>
          To the maximum extent permitted by law, we disclaim all liability for any indirect, incidental, or consequential damages.
        </li>
      </ul>

      <h2>3. User Responsibilities</h2>
      <ul>
        <li>
          You are responsible for ensuring the security of your device and the confidentiality of your credentials.
        </li>
        <li>
          You agree to comply with all applicable laws and regulations while using the app.
        </li>
        <li>
          You must not attempt to reverse-engineer, decompile, or tamper with the app in any way.
        </li>
      </ul>

      <h2>4. Changes to Terms</h2>
      <p>
        We reserve the right to update or modify these terms at any time. Any changes will be effective immediately upon posting within the app. 
        Your continued use of the app after changes are made constitutes your acceptance of the updated terms.
      </p>

      <h2>5. Termination</h2>
      <p>
        We reserve the right to terminate or suspend your access to the app at our sole discretion, without prior notice, 
        if you violate these terms or engage in any unauthorized activities.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions or concerns about these Terms of Service, please contact us at:
      </p>
      <ul>
        <li>Email: <a href="mailto:chatsupport@idbrilian.com">chatsupport@idbrilian.com</a></li>
        <li>Website: <a href="https://chat.idbrilian.com">https://chat.idbrilian.com</a></li>
      </ul>
    </div>
  );
};

export default TermsOfService;