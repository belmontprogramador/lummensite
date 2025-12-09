"use client";
import axios from "axios";

const api = axios.create({
  baseURL: "https://botgrupo.lummen-app.com",
  timeout: 30000,
});

// Interceptor para incluir token JWT
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("@token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  config.headers["x-api-key"] = "Ofuturoeosucessoenosso";

  return config;
});

export default api;
