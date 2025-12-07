// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function ProtectedRoute({ children, role }) {
  const { user, token } = useAuthStore();

  // 🧠 1. Si pas connecté
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // 🛑 2. Si le rôle requis ne correspond pas
  if (role && user.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ 3. Sinon, autoriser l’accès
  return <>{children}</>;
}
