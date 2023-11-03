## Follow-Up Questions
## Architecture Explanation

  ### WebSocket Server: 
  - The WebSocket server is structured using the ws library, initialized alongside the HTTP server. The code to handle WebSocket connections is separated, in a module like initializeWebSocketServer, which takes care of creating new WebSocket connections, broadcasting messages, and handling connection closures.
  ### RESTful API Server: 
  - The RESTful API is built using Express.js. The code is organized with middleware to handle JSON requests, enable CORS, and structured routing for each endpoint. Each endpoint has its logic.

## Design Decisions

  - Libraries and Frameworks:
    - Express.js: Chosen for its wide adoption and ease of setting up RESTful APIs.
    - Mongoose: Used for MongoDB interactions, providing schema validation and easy data manipulation.
    - ws: A simple WebSocket library for Node.js, used for real-time communication.
    - axios: For making HTTP requests in the frontend code.
  - Request Handling: The server handles different types of HTTP requests by defining appropriate routes and methods. The WebSocket server listens for specific message types or patterns to perform actions.
  - Extensibility: Both servers can be extended by adding more routes, controllers, and services. Middleware can be used for additional functionality like authentication, rate-limiting, or other features.