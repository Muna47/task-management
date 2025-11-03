const express = require('express');
const router = express.Router();

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


router.get('/', (req, res) => {
    res.json(tasks);
});


router.get('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    
    res.json(task);
});

module.exports = router;