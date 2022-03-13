const createEmployee = (req, res) => {
  res.status(200).json({message: 'Create Empoyee'})
}

const getEmployees = (req, res) => {
  res.status(200).json({message: 'Get Empoyees'})
}

const getEmployee = (req, res) => {
  res.status(200).json({message: `Get Empoyee ${req.params.id}`})
}

const updateEmployee = (req, res) => {
  res.status(200).json({message: `Update Empoyee ${req.params.id}`})
}

const deleteEmployee = (req, res) => {
  res.status(200).json({message: `Delete Empoyee ${req.params.id}`})
}


module.exports = {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
}