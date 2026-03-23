import { Router, Request, Response } from 'express';
import Performance from '../models/Performance';

const router = Router();

router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const reviews = await Performance.find()
      .populate('employeeId', 'firstName lastName')
      .populate('reviewerId', 'firstName lastName');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const review = new Performance(req.body);
    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Invalid Data' });
  }
});

export default router;
