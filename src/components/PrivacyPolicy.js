import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> June 3, 2025</p>
      <p>
        Brilian Chat App ("we", "our", or "us") is committed to protecting your privacy. 
        This Privacy Policy explains how we collect, use, and safeguard your information when you use our application. 
        Please read this policy carefully to understand our practices regarding your data.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Secret Information:</strong> When you create an account, we store your public key and address locally on your device. 
          Your private key and mnemonic are securely stored using SecureStore and are never shared with us or any third party.
        </li>
        <li>
          <strong>Chat Data:</strong> Messages sent and received are encrypted and stored locally on your device. 
          We do not have access to your chat content.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>When you chat with someone or a group, you provide your public key and your partner's public key. The app transfers encrypted data to the correct public key.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>3. How We Protect Your Information</h2>
      <ul>
        <li>
          <strong>Encryption:</strong> All sensitive data, including private keys and chat messages, are encrypted and stored securely on your device.
        </li>
        <li>
          <strong>No Data Sharing:</strong> We do not share your personal information with third parties.
        </li>
        <li>
          <strong>Secure Storage:</strong> Private keys and mnemonics are stored using SecureStore, ensuring they are inaccessible to unauthorized parties.
        </li>
      </ul>

      <h2>4. Your Rights</h2>
      <ul>
        <li>Access and manage your account and chat data.</li>
        <li>Delete your account and chat data by uninstalling the app.</li>
      </ul>

      <h2>5. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted within the app, 
        and the "Effective Date" will be updated accordingly.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <ul>
        <li>Email: <a href="mailto:chatsupport@idbrilian.com">chatsupport@idbrilian.com</a></li>
        <li>Website: <a href="https://chat.idbrilian.com">https://chat.idbrilian.com</a></li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;