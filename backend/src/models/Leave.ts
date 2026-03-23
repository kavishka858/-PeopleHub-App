import mongoose, { Schema, Document } from 'mongoose';

export interface ILeave extends Document {
  employeeId: mongoose.Schema.Types.ObjectId;
  startDate: Date;
  endDate: Date;
  type: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

const LeaveSchema: Schema = new Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  type: { type: String, required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
}, { timestamps: true });

export default mongoose.model<ILeave>('Leave', LeaveSchema);
