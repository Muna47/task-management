const express = require('express');
const app = express();
const port = 3000;

const tasks = [
    { 
        id: 1, 
        title: 'Learn Node.js', 
        completed: false,
        priority: 'high',
        createdAt: new Date('2025-01-15')
    },
    { 
        id: 2, 
        title: 'Build REST API', 
        completed: false,
        priority: 'high',
        createdAt: new Date('2025-01-20')
    },
    { 
        id: 3, 
        title: 'Study Express.js', 
        completed: true,
        priority: 'medium',
        createdAt: new Date('2025-01-10')
    },
    { 
        id: 4, 
        title: 'Setup Git Repository', 
        completed: true,
        priority: 'low',
        createdAt: new Date('2025-01-25')
    },
    { 
        id: 5, 
        title: 'Deploy to Production', 
        completed: false,
        priority: 'medium',
        createdAt: new Date('2025-02-01')
    }
];

app.get('/', (req, res) => {
    res.send('Task Management API is running!');
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime()
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});