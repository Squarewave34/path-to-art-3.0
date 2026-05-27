// 1
const Project = require('../models/projectModel')

// create projects
const createProject = async(req, res)=>{
    try {
        const {title, artworkType, collection, status, important, current, process, notes, inspoBord, images, deadline, startDate,
        reminder, collaborator, collaboratorLinks} = req.body

        const project = await Project.create({title, artworkType, collection, status, important, current, process, notes, inspoBord, images, deadline, startDate,
        reminder, collaborator, collaboratorLinks});
    } catch (error) {
        res.json({error: error.message})
        console.log(`error in controller/project.js create a project: ${error}`)
    }
}

// Read projects
const readProjects = async(req, res)=>{
    try {
        const projects = await Project.find({})
        // add .sort({createdAt: -1}) for sort by date + descending
        // res.json({ projects });
        console.log(projects)
    } catch (error) {
        console.log(`error in controller/project.js read a project: ${error}`)
    }
}


// Read a project
const readProject = async(req, res)=>{
    try {
        const project = await Project.findById({_id: req.params.id})
        console.log(project)
        
    } catch (error) {
        console.log(`error in controller/project.js read a project: ${error}`)
    }
}

// Update a project
const updateProject = async(req, res)=>{
    try {
        const project = await Project.findByIdAndUpdate({_id: req.params.id}, {...req.body})
    } catch (error) {
        console.log(`error in controller/project.js update a project: ${error}`)
    }
}

// Delete a project
const deleteProject = async(req, res)=>{
    try {
        const project = await Project.findByIdAndDelete({_id: req.params.id})
    } catch (error) {
        console.log(`error in controller/project.js delete a project: ${error}`)
    }
}

// 2
module.exports = {
    createProject,
    readProjects,
    readProject,
    updateProject,
    deleteProject
}
