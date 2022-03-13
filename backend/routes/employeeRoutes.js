const express = require('express')
const router = express.Router()

const { 
  createEmployee,
  getEmployees, 
  getEmployee, 
  updateEmployee, 
  deleteEmployee } = require('../controllers/employeeController')

router.post('/', createEmployee)
router.get('/', getEmployees)
router.get('/:id', getEmployee)
router.put('/:id', updateEmployee)
router.delete('/:id', deleteEmployee)

// router.post('/', (req, res) => {
//   res.status(200).json({message: 'Create Empoyees'})
// })

// router.put('/:id', (req, res) => {
//   res.status(200).json({message: `Update Empoyee ${req.params.id}`})
// })

// router.get('/:id', (req, res) => {
//   res.status(200).json({message: `Get Empoyee ${req.params.id}`})
// })

// router.delete('/:id', (req, res) => {
//   res.status(200).json({message: `Delete Empoyee ${req.params.id}`})
// })


module.exports = router