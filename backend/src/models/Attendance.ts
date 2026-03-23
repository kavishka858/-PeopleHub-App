import mongoose, { Schema, Document } from 'mongoose';

export interface IAttendance extends Document {
  employeeId: mongoose.Schema.Types.ObjectId;
  date: Date;
  status: 'Present' | 'Absent' | 'Late' | 'Half Day';
  checkIn?: string;
  checkOut?: string;
}

const AttendanceSchema: Schema = new Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  date: { type: Date, required: true, default: Date.now },
  status: { type: String, enum: ['Present', 'Absent', 'Late', 'Half Day'], required: true },
  checkIn: { type: String },
  checkOut: { type: String },
}, { timestamps: true });

export default mongoose.model<IAttendance>('Attendance', AttendanceSchema);
