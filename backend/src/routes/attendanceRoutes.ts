import { Router, Request, Response } from 'express';
import Attendance from '../models/Attendance';

const router = Router();

// Get all attendance records
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const records = await Attendance.find().populate('employeeId', 'firstName lastName');
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add an attendance record
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const record = new Attendance(req.body);
    const savedRecord = await record.save();
    res.status(201).json(savedRecord);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Invalid Data' });
  }
});

export default router;
