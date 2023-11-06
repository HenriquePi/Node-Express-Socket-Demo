// index.js
const express = require('express');
const cors = require('cors');
const http = require('http');
const initializeWebSocketServer = require('./socket');

const connectDB = require('./db');
const Resource = require('./models/Resource');

const app = express();
const server = http.createServer(app);

// Initialize the WebSocket server
initializeWebSocketServer(server);

// Connect to the database
connectDB();

// Middlewares
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enable CORS for all requests

// RESTful API endpoints
// POST endpoint for creating resources
app.post('/resources', async (req, res) => {
  try {
    const resource = new Resource(req.body);
    await resource.save();
    res.status(201).send({ message: 'Resource created', resource });
  } catch (error) {
    res.status(400).send({ message: 'Error creating resource', error });
  }
});
// GET endpoint for reading resources
app.get('/resources', async (req, res) => {
  try {
    const resources = await Resource.find({});
    res.status(200).send(resources);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching resources', error });
  }
});
// DELETE endpoint for deleting resources
app.delete('/resources/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    await Resource.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).send({ message: 'Resource not found', error });
  }
});

// Set the port
const PORT = process.env.PORT || 1337;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
