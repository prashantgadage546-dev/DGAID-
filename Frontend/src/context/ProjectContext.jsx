import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const ProjectContext = createContext();
export const useProjects = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "user");

  const API_BASE = "http://localhost:5000/api";

  // Axios config with JWT
  const getConfig = () => ({
    headers: { Authorization: `Bearer ${token}` },
  });

  /**
   * ------------------------------------
   * Fetch all projects (public)
   * ------------------------------------
   */
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE}/projects`);
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * ------------------------------------
   * Admin actions (secured)
   * ------------------------------------
   */
  const addProject = async (project) => {
    if (role !== "admin") return alert("Only admins can add projects.");
    try {
      await axios.post(`${API_BASE}/projects`, project, getConfig());
      fetchProjects();
    } catch (err) {
      console.error("Error adding project:", err);
      alert(err.response?.data?.message || "Failed to add project");
    }
  };

  const updateProject = async (id, project) => {
    if (role !== "admin") return alert("Only admins can update projects.");
    try {
      await axios.put(`${API_BASE}/projects/${id}`, project, getConfig());
      fetchProjects();
    } catch (err) {
      console.error("Error updating project:", err);
      alert(err.response?.data?.message || "Failed to update project");
    }
  };

  const deleteProject = async (id) => {
    if (role !== "admin") return alert("Only admins can delete projects.");
    try {
      await axios.delete(`${API_BASE}/projects/${id}`, getConfig());
      fetchProjects();
    } catch (err) {
      console.error("Error deleting project:", err);
      alert(err.response?.data?.message || "Failed to delete project");
    }
  };

  /**
   * ------------------------------------
   * Register (user-only)
   * ------------------------------------
   */
  const register = async (full_name, _role, email, password, confirm_password) => {
    try {
      // 🔹 Force role = "user" (ignore any other input)
      const role = "user";
      const res = await axios.post(`${API_BASE}/auth/register`, {
        full_name,
        role,
        email,
        password,
        confirm_password,
      });
      alert(res.data.message || "Registration successful");
      return true;
    } catch (err) {
      console.error("Registration error:", err);
      alert(err.response?.data?.message || "Registration failed");
      return false;
    }
  };

  /**
   * ------------------------------------
   * Login
   * ------------------------------------
   */
  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API_BASE}/auth/login`, { email, password });
      const { token, role, message } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      setToken(token);
      setRole(role);

      alert(message || "Login successful");
      fetchProjects();
      return true;
    } catch (err) {
      console.error("Login error:", err);
      alert(err.response?.data?.message || "Login failed");
      return false;
    }
  };

  /**
   * ------------------------------------
   * Logout
   * ------------------------------------
   */
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken("");
    setRole("user");
    setProjects([]);
  };

  // Fetch projects on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        loading,
        addProject,
        updateProject,
        deleteProject,
        token,
        role,
        login,
        logout,
        register,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
