import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const { register } = useContext(AuthContext); // make sure register exists
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const result = await register(name, email, password);
      if (result?.success) {
        navigate("/e-commerce-app"); // redirect to home after registration
      } else {
        setError(result?.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred during registration");
    }
  };

  return (
    <div style={{ padding: "50px", maxWidth: "400px", margin: "0 auto", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required style={{ padding: "10px" }} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: "10px" }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: "10px" }} />
        <button type="submit" style={{ padding: "10px" }}>Register</button>
      </form>
      <p style={{ marginTop: "10px" }}>
        Already have an account? <Link to="/signin">Sign In here</Link>
      </p>
    </div>
  );
};

export default SignUp;
