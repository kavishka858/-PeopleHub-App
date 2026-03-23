import mongoose, { Schema, Document } from 'mongoose';

export interface IEmployee extends Document {
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  role: string;
  status: 'Active' | 'Inactive' | 'On Leave';
  joinDate: Date;
}

const EmployeeSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: String, enum: ['Active', 'Inactive', 'On Leave'], default: 'Active' },
  joinDate: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model<IEmployee>('Employee', EmployeeSchema);
