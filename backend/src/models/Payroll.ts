import mongoose, { Schema, Document } from 'mongoose';

export interface IPayroll extends Document {
  employeeId: mongoose.Schema.Types.ObjectId;
  month: string;
  year: number;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  status: 'Pending' | 'Paid';
}

const PayrollSchema: Schema = new Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  month: { type: String, required: true },
  year: { type: Number, required: true },
  basicSalary: { type: Number, required: true },
  allowances: { type: Number, default: 0 },
  deductions: { type: Number, default: 0 },
  netSalary: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
}, { timestamps: true });

export default mongoose.model<IPayroll>('Payroll', PayrollSchema);
