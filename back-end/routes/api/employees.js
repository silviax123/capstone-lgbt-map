const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController')


router.route('/')
    .get(employeesController.getAllEmployees)
    .post(employeesController.createNewEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee);

//:id is a named parameter and we're pulling it directly out of the url
// so we are responding with what we received 
router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;
