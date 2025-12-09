import { io, Socket } from "socket.io-client";

const SOCKET_URL = "https://botgrupo.lummen-app.com";

export function createMessagesSocket(): Socket {
  let token = null;

  // Garantir que o código só rode no navegador
  if (typeof window !== "undefined") {
    token = localStorage.getItem("@token");
  }

  const socket = io(SOCKET_URL, {
    transports: ["websocket"], // 🔥 evita fallback para polling
    auth: {
      token: token,
      apiKey: "Ofuturoeosucessoenosso",
    },
  });

  return socket;
}
