import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // reset error

    try {
      const result = await signIn(email, password); // await async function

      if (result?.success) {
        navigate("/e-commerce-app"); // redirect to home
      } else {
        setError(result?.message || "Sign in failed");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred during sign in");
    }
  };

  return (
    <div style={{ padding: "50px", maxWidth: "400px", margin: "0 auto", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "10px" }}
        />
        <button type="submit" style={{ padding: "10px" }}>Sign In</button>
      </form>
      <p style={{ marginTop: "10px" }}>
        New user? <Link to="/signup">Sign Up here</Link>
      </p>
    </div>
  );
};

export default SignIn;
