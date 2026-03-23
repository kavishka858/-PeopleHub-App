import { Router, Request, Response } from 'express';
import Employee from '../models/Employee';

const router = Router();

// Get all employees
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create an employee
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Invalid Data' });
  }
});

// Update an employee
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEmployee) {
      res.status(404).json({ message: 'Employee not found' });
      return;
    }
    res.json(updatedEmployee);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Invalid Data' });
  }
});

// Delete an employee
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) {
      res.status(404).json({ message: 'Employee not found' });
      return;
    }
    res.json({ message: 'Employee deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
