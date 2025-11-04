import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Sign In
  const signIn = async (email, password) => {
    try {
      // Replace with your API call
      const response = await fakeApiSignIn(email, password);
      if (response?.success) {
        setUser(response.user);
        localStorage.setItem("user", JSON.stringify(response.user));
      }
      return response;
    } catch (err) {
      console.error(err);
      return { success: false, message: "Sign in failed" };
    }
  };

  // Register
  const register = async (name, email, password) => {
    try {
      // Replace with your API call
      const response = await fakeApiRegister(name, email, password);
      if (response?.success) {
        setUser(response.user);
        localStorage.setItem("user", JSON.stringify(response.user));
      }
      return response;
    } catch (err) {
      console.error(err);
      return { success: false, message: "Registration failed" };
    }
  };

  // Sign Out
  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, register, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Dummy API functions (replace with real API)
const fakeApiSignIn = async (email, password) => {
  return { success: true, user: { name: "John Doe", email } };
};
const fakeApiRegister = async (name, email, password) => {
  return { success: true, user: { name, email } };
};
