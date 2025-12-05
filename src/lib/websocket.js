async function connectOrderSocket(getAccessToken, onMessage) {
  let token = await getAccessToken(); // refresh if needed
  const backendWs = process.env.NEXT_PUBLIC_BACKEND_WS_URL;
  const wsUrl = `${backendWs}/ws/orders/?token=${token}`;

  const socket = new WebSocket(wsUrl);

  socket.onopen = () => console.log("WS connected:", backendWs);
  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      onMessage(data);
    } catch (err) {
      console.error("WS parse error:", err);
    }
  };

  socket.onclose = () => console.log("WS closed");

  return socket;
}
