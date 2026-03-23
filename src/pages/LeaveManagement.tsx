import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarIcon,
  PlusIcon,
  CheckIcon,
  XIcon,
  ClockIcon } from
'lucide-react';
import { StatCard } from '../components/StatCard';
const pendingRequests = [
{
  id: 1,
  name: 'Kavishka Dilshan',
  type: 'Sick Leave',
  dates: 'Sep 20 - Sep 21',
  reason: 'Fever and cold',
  status: 'pending',
  avatar: 'KD',
  color: 'bg-amber-500'
},
{
  id: 2,
  name: 'Kavidu Heshan',
  type: 'Casual Leave',
  dates: 'Sep 25 - Sep 27',
  reason: 'Family function',
  status: 'pending',
  avatar: 'KH',
  color: 'bg-purple-500'
},
{
  id: 3,
  name: 'Amila Chinthana',
  type: 'Earned Leave',
  dates: 'Oct 1 - Oct 10',
  reason: 'Vacation',
  status: 'pending',
  avatar: 'AC',
  color: 'bg-blue-600'
}];

const leaveHistory = [
{
  id: 101,
  type: 'Casual Leave',
  dates: 'Aug 12 - Aug 13',
  days: 2,
  status: 'Approved'
},
{
  id: 102,
  type: 'Sick Leave',
  dates: 'Jul 05 - Jul 05',
  days: 1,
  status: 'Approved'
},
{
  id: 103,
  type: 'Earned Leave',
  dates: 'Jun 10 - Jun 15',
  days: 5,
  status: 'Rejected'
}];

export function LeaveManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-1">
            Leave Management
          </h2>
          <p className="text-slate-500">Track balances and manage requests.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
          
          <PlusIcon className="w-4 h-4" />
          Apply for Leave
        </button>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<CalendarIcon className="w-6 h-6" />}
          title="Casual Leave"
          value="8/12"
          subtitle="Days remaining"
          color="blue"
          delay={0.1} />
        
        <StatCard
          icon={<CalendarIcon className="w-6 h-6" />}
          title="Sick Leave"
          value="5/7"
          subtitle="Days remaining"
          color="emerald"
          delay={0.2} />
        
        <StatCard
          icon={<CalendarIcon className="w-6 h-6" />}
          title="Earned Leave"
          value="15/21"
          subtitle="Days remaining"
          color="purple"
          delay={0.3} />
        
        <StatCard
          icon={<CalendarIcon className="w-6 h-6" />}
          title="Comp Off"
          value="2/3"
          subtitle="Days remaining"
          color="amber"
          delay={0.4} />
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pending Requests (HR View) */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            delay: 0.5
          }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Pending Approvals
            </h3>
            <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
              3 New
            </span>
          </div>

          <div className="space-y-4">
            {pendingRequests.map((req) =>
            <div
              key={req.id}
              className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
              
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${req.color}`}>
                    
                      {req.avatar}
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">{req.name}</h4>
                      <p className="text-xs text-slate-500">
                        {req.type} • {req.dates}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4 bg-white p-2.5 rounded-lg border border-slate-100">
                  "{req.reason}"
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg text-sm font-medium transition-colors">
                    <CheckIcon className="w-4 h-4" /> Approve
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-sm font-medium transition-colors">
                    <XIcon className="w-4 h-4" /> Reject
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* My Leave History */}
        <motion.div
          initial={{
            opacity: 0,
            x: 20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            delay: 0.6
          }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          
          <h3 className="text-lg font-semibold text-slate-900 mb-6">
            My Leave History
          </h3>
          <div className="space-y-4">
            {leaveHistory.map((leave) =>
            <div
              key={leave.id}
              className="flex items-center justify-between p-4 rounded-xl border border-slate-100">
              
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">{leave.type}</h4>
                    <p className="text-sm text-slate-500">
                      {leave.dates} • {leave.days} day(s)
                    </p>
                  </div>
                </div>
                <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${leave.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : leave.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                
                  {leave.status}
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Apply Leave Modal */}
      <AnimatePresence>
        {isModalOpen &&
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.95
            }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
            
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">
                  Apply for Leave
                </h3>
                <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600">
                
                  <XIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Leave Type
                  </label>
                  <select className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
                    <option>Casual Leave</option>
                    <option>Sick Leave</option>
                    <option>Earned Leave</option>
                    <option>Comp Off</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Start Date
                    </label>
                    <input
                    type="date"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none" />
                  
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      End Date
                    </label>
                    <input
                    type="date"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none" />
                  
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Reason
                  </label>
                  <textarea
                  rows={3}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                  placeholder="Briefly explain your reason...">
                </textarea>
                </div>
              </div>
              <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded-lg transition-colors">
                
                  Cancel
                </button>
                <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                
                  Submit Request
                </button>
              </div>
            </motion.div>
          </div>
        }
      </AnimatePresence>
    </div>);

}