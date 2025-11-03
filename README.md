# Task Management API

A RESTful API for managing tasks built with Node.js and Express.js.

## Features

- View all tasks with priority levels and creation dates
- Get individual task details by ID
- Health check endpoint
- Error handling for invalid requests

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Setup Instructions

1. **Clone the repository**
```bash
   git clone https://github.com/YOUR_USERNAME/task-management.git
   cd task-management
```

2. **Install dependencies**
```bash
   npm install
```

3. **Start the server**
```bash
   npm start
```

   The server will run at `http://localhost:3000`

## Project Structure
```
task-management/
├── src/
│   ├── index.js          # Main application file
│   └── routes/
│       └── tasks.js      # Task routes
├── package.json
├── .gitignore
└── README.md
```

## API Endpoints

### Root Endpoint
- **GET /** 
  - Description: Welcome message
  - Response: `"Task Management API is running!"`

### Tasks Endpoints
- **GET /tasks**
  - Description: Get all tasks
  - Response: Array of task objects
  - Example:
```json
    [
      {
        "id": 1,
        "title": "Learn Node.js",
        "completed": false,
        "priority": "high",
        "createdAt": "2025-01-15T00:00:00.000Z"
      }
    ]
```

- **GET /task/:id**
  - Description: Get a specific task by ID
  - Parameters: `id` (number)
  - Success Response (200): Task object
  - Error Responses:
    - 400: `{ "error": "Invalid ID format" }`
    - 404: `{ "error": "Task not found" }`

### Health Endpoint
- **GET /health**
  - Description: Check API health status
  - Response:
```json
    {
      "status": "healthy",
      "uptime": 123.456
    }
```

## Testing with curl
```bash
# Get all tasks
curl http://localhost:3000/tasks

# Get specific task
curl http://localhost:3000/task/1

# Check health
curl http://localhost:3000/health
```

## Testing with Postman

1. Open Postman
2. Create a new GET request
3. Enter the URL (e.g., `http://localhost:3000/tasks`)
4. Click "Send"
5. View the response

## Development

To run the server in development mode with auto-restart:
```bash
# Install nodemon (optional)
npm install --save-dev nodemon

# Add to package.json scripts:
"dev": "nodemon src/index.js"

# Run
npm run dev
```

## Author

Mymuna Islam

## License

ISC
