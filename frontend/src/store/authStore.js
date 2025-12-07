import { create } from "zustand";
import axios from "axios";

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,

  // 🟢 REGISTER
  register: async (fullname, email, password, phone, role) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        fullname,
        email,
        password,
        phone,
        role,
      });

      // Sauvegarde token + user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      set({
        user: res.data.user,
        token: res.data.token,
        loading: false,
      });
    } catch (error) {
      set({
        error:
          error.response?.data?.message || "Erreur lors de l’inscription",
        loading: false,
      });
    }
  },

  // 🟢 LOGIN
  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      set({
        user: res.data.user,
        token: res.data.token,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Erreur lors de la connexion",
        loading: false,
      });
    }
  },

  // 🔴 LOGOUT
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null, token: null });
  },

}));
