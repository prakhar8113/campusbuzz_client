import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [profile, setProfile] = useState(null);
  // console.log("HHHHHHHHHh");
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (token) {
          // Validate token with backend
          // const { data } = await axios.get("http://localhost:4001/api/users/my-profile", {
          //   { withCredentials: true }
          // };
          setIsAuthenticated(true);
          const { data } = await axios.get(
            "https://campusbuzz-server.onrender.com/api/users/my-profile",
            { withCredentials: true }
          );
          setProfile(data);
          setIsAuthenticated(true);
        } else {
          console.log("heyy");
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
      }
    };

    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(
          "https://campusbuzz-server.onrender.com/api/blogs/all-blogs"
        );
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    checkAuthentication();
    fetchBlogs();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        blogs,
        profile,
        setProfile,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
