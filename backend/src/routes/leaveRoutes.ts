import { Router, Request, Response } from 'express';
import Leave from '../models/Leave';

const router = Router();

router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const leaves = await Leave.find().populate('employeeId', 'firstName lastName');
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const leave = new Leave(req.body);
    const savedLeave = await leave.save();
    res.status(201).json(savedLeave);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Invalid Data' });
  }
});

router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedLeave = await Leave.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLeave);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Invalid Data' });
  }
});

export default router;
