import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!email.includes("@")) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }

    // Validate password
    if (
      password.length < 6 ||
      !/\d/.test(password) ||
      !/[a-zA-Z]/.test(password)
    ) {
      setPasswordError(
        "Password must be at least 6 characters long and contain at least one letter and one number"
      );
    } else {
      setPasswordError("");
    }

    // Proceed with login if no errors
    if (!emailError && !passwordError) {
      // Implement login logic here
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={handleEmailChange}
      />
      {emailError && <div className="error">{emailError}</div>}
      <label>Password</label>
      <input
        type="password"
        value={password}
        placeholder="Enter your Password"
        onChange={handlePasswordChange}
      />
      {passwordError && <div className="error">{passwordError}</div>}
      <button type="submit" className="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
