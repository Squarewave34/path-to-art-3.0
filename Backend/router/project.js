// 1
const express = require('express')
// 4
const {
    createProject,
    readProjects,
    readProject,
    updateProject,
    deleteProject
} = require('../controller/projects')

// 2
const router = express.Router()

// 5

// Create a project
router.post('/', createProject)
// Read projects
router.get('/', readProjects)
// Read a project
router.get('/:id', readProject)
// Update a project
router.put('/:id', updateProject)
// delete a project
router.delete('/:id', deleteProject)

// 3
module.exports = router