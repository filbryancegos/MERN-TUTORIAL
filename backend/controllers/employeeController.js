const asyncHandler = require('express-async-handler')

const createEmployee = asyncHandler(async (req, res) => {
  console.log(req.body);

  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({message: 'Create Empoyee'})
})

const getEmployees = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Get Empoyees'})
})

const getEmployee = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Get Empoyee ${req.params.id}`})
})

const updateEmployee = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update Empoyee ${req.params.id}`})
})

const deleteEmployee = asyncHandler (async (req, res) => {
  res.status(200).json({message: `Delete Empoyee ${req.params.id}`})
})


module.exports = {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
}