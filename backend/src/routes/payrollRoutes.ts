import { Router, Request, Response } from 'express';
import Payroll from '../models/Payroll';

const router = Router();

router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const payrolls = await Payroll.find().populate('employeeId', 'firstName lastName');
    res.json(payrolls);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const payroll = new Payroll(req.body);
    const savedPayroll = await payroll.save();
    res.status(201).json(savedPayroll);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Invalid Data' });
  }
});

export default router;
