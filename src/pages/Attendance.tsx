import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  CheckCircle2Icon,
  XCircleIcon,
  AlertCircleIcon,
  CalendarIcon
} from
  'lucide-react';
import { StatCard } from '../components/StatCard';
const weeklyData = [
  {
    id: 1,
    name: 'Kavishka Dilshan',
    mon: 'present',
    tue: 'present',
    wed: 'late',
    thu: 'present',
    fri: 'present',
    hours: '41.5'
  },
  {
    id: 2,
    name: 'Lahiru Welagedara',
    mon: 'present',
    tue: 'present',
    wed: 'present',
    thu: 'present',
    fri: 'leave',
    hours: '32.0'
  },
  {
    id: 3,
    name: 'Amila Chinthana',
    mon: 'leave',
    tue: 'leave',
    wed: 'present',
    thu: 'present',
    fri: 'present',
    hours: '24.0'
  },
  {
    id: 4,
    name: 'kavidu Heshan',
    mon: 'present',
    tue: 'late',
    wed: 'present',
    thu: 'present',
    fri: 'present',
    hours: '40.2'
  },
  {
    id: 5,
    name: 'Sandun Priyaranga',
    mon: 'present',
    tue: 'present',
    wed: 'present',
    thu: 'absent',
    fri: 'present',
    hours: '31.5'
  },
  {
    id: 6,
    name: 'Pasan Gunasinha',
    mon: 'present',
    tue: 'present',
    wed: 'present',
    thu: 'present',
    fri: 'present',
    hours: '42.0'
  }];

const StatusIcon = ({ status }: { status: string; }) => {
  switch (status) {
    case 'present':
      return <CheckCircle2Icon className="w-5 h-5 text-emerald-500 mx-auto" />;
    case 'absent':
      return <XCircleIcon className="w-5 h-5 text-red-500 mx-auto" />;
    case 'late':
      return <AlertCircleIcon className="w-5 h-5 text-amber-500 mx-auto" />;
    case 'leave':
      return (
        <div className="w-5 h-5 rounded-full bg-slate-200 mx-auto border border-slate-300" />);

    default:
      return null;
  }
};
export function Attendance() {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [clockTime, setClockTime] = useState<string | null>(null);
  const handleClockToggle = () => {
    if (!isClockedIn) {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      setClockTime(`${displayHours}:${minutes} ${ampm}`);
    }
    setIsClockedIn(!isClockedIn);
  };
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header & Clock Action */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-1">
            Attendance Tracking
          </h2>
          <p className="text-slate-500">
            Manage daily attendance and timesheets.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-slate-50 p-2 pr-6 rounded-xl border border-slate-100">
          <motion.button
            whileTap={{
              scale: 0.95
            }}
            onClick={handleClockToggle}
            className={`relative flex items-center justify-center w-14 h-14 rounded-xl shadow-sm transition-colors ${isClockedIn ? 'bg-red-500 hover:bg-red-600' : 'bg-emerald-500 hover:bg-emerald-600'}`}>

            {isClockedIn &&
              <span className="absolute inset-0 rounded-xl animate-ping bg-red-400 opacity-20"></span>
            }
            <ClockIcon className="w-6 h-6 text-white" />
          </motion.button>
          <div>
            <div className="text-sm font-semibold text-slate-900">
              {isClockedIn ? 'Clock Out' : 'Clock In'}
            </div>
            <div className="text-xs text-slate-500">
              {isClockedIn ?
                `Clocked in at ${clockTime}` :
                'Not clocked in yet'}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<CheckCircle2Icon className="w-6 h-6" />}
          title="Present Today"
          value="231"
          subtitle="On time"
          color="emerald"
          delay={0.1} />

        <StatCard
          icon={<XCircleIcon className="w-6 h-6" />}
          title="Absent"
          value="12"
          subtitle="Unplanned"
          color="red"
          delay={0.2} />

        <StatCard
          icon={<AlertCircleIcon className="w-6 h-6" />}
          title="Late Arrivals"
          value="5"
          subtitle="Needs review"
          color="amber"
          delay={0.3} />

        <StatCard
          icon={<CalendarIcon className="w-6 h-6" />}
          title="On Leave"
          value="14"
          subtitle="Approved leaves"
          color="blue"
          delay={0.4} />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Weekly Table */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.5
          }}
          className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

          <div className="p-6 border-b border-slate-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">
              Weekly Timesheet
            </h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" /> Present
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-500" /> Late
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500" /> Absent
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-4 py-4 text-center">Mon</th>
                  <th className="px-4 py-4 text-center">Tue</th>
                  <th className="px-4 py-4 text-center">Wed</th>
                  <th className="px-4 py-4 text-center">Thu</th>
                  <th className="px-4 py-4 text-center">Fri</th>
                  <th className="px-6 py-4 text-right">Total Hrs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {weeklyData.map((row) =>
                  <tr
                    key={row.id}
                    className="hover:bg-slate-50/50 transition-colors">

                    <td className="px-6 py-4 font-medium text-slate-900">
                      {row.name}
                    </td>
                    <td className="px-4 py-4">
                      <StatusIcon status={row.mon} />
                    </td>
                    <td className="px-4 py-4">
                      <StatusIcon status={row.tue} />
                    </td>
                    <td className="px-4 py-4">
                      <StatusIcon status={row.wed} />
                    </td>
                    <td className="px-4 py-4">
                      <StatusIcon status={row.thu} />
                    </td>
                    <td className="px-4 py-4">
                      <StatusIcon status={row.fri} />
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-slate-700">
                      {row.hours}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mini Calendar */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.6
          }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">

          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">
              {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-slate-100 rounded text-slate-400">
                &lt;
              </button>
              <button className="p-1 hover:bg-slate-100 rounded text-slate-400">
                &gt;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-slate-500 mb-2">
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-sm">
            {/* Empty days for start of month */}
            {(() => {
              const now = new Date();
              const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
              const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
              const today = now.getDate();

              const emptyCells = [];
              for (let i = 0; i < firstDay; i++) {
                emptyCells.push(
                  <div key={`empty-${i}`} className="aspect-square p-2 text-slate-300">
                    {new Date(now.getFullYear(), now.getMonth(), -firstDay + i + 1).getDate()}
                  </div>
                );
              }

              const dayCells = [];
              for (let day = 1; day <= daysInMonth; day++) {
                const isToday = day === today;
                const isWeekend = new Date(now.getFullYear(), now.getMonth(), day).getDay() === 0 ||
                  new Date(now.getFullYear(), now.getMonth(), day).getDay() === 6;
                const hasEvent = [5, 12, 25].includes(day); // Mock events

                dayCells.push(
                  <div
                    key={day}
                    className={`aspect-square flex flex-col items-center justify-center rounded-lg relative cursor-pointer hover:bg-slate-50 transition-colors ${isToday
                        ? 'bg-emerald-50 text-emerald-700 font-bold border border-emerald-200'
                        : isWeekend
                          ? 'text-slate-400 bg-slate-50/50'
                          : 'text-slate-700'
                      }`}>
                    {day}
                    {hasEvent && <div className="w-1 h-1 bg-amber-500 rounded-full absolute bottom-1.5" />}
                  </div>
                );
              }

              return [...emptyCells, ...dayCells];
            })()}
          </div>
        </motion.div>
      </div>
    </div>);

}