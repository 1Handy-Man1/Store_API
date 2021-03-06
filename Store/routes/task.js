const express = require('express')
const router = express.Router()

const {getAllTasks, updateTask, deleteTask, createTask, getTask} = require('../controllers/product')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;