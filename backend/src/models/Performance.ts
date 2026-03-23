import mongoose, { Schema, Document } from 'mongoose';

export interface IPerformance extends Document {
  employeeId: mongoose.Schema.Types.ObjectId;
  reviewDate: Date;
  reviewerId: mongoose.Schema.Types.ObjectId;
  rating: number;
  comments: string;
}

const PerformanceSchema: Schema = new Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  reviewDate: { type: Date, required: true, default: Date.now },
  reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comments: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IPerformance>('Performance', PerformanceSchema);
