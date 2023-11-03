// Import WebSocket library
const WebSocket = require('ws');

const initializeWebSocketServer = (server) => {
  // Create a new WebSocket server instance
  const wss = new WebSocket.Server({ server });

  // Set up a connection event listener
  wss.on('connection', function connection(ws) {
    console.log('A new client connected.');

    // Broadcast to all clients function
    const broadcast = (data) => {
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    };

    // Set up a message event listener for the client
    // log received message
    // broadcast message to all connected clients
    ws.on('message', function incoming(message) {
      console.log('Received message from client:', message);

      // Broadcast message to all connected clients
      broadcast(message);
    });

    // Handle client disconnection
    ws.on('close', function close() {
      console.log('Client has disconnected.');
    });
  });

  console.log('WebSocket server has been initialized.');
};

module.exports = initializeWebSocketServer;
