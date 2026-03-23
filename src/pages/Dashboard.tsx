import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  UsersIcon,
  UserCheckIcon,
  CalendarOffIcon,
  WalletIcon,
  PlusIcon,
  FileTextIcon,
  CheckCircleIcon,
  ClockIcon
} from
  'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from
  'recharts';
import { StatCard } from '../components/StatCard';
const attendanceData = [
  {
    name: 'Mon',
    value: 94
  },
  {
    name: 'Tue',
    value: 96
  },
  {
    name: 'Wed',
    value: 92
  },
  {
    name: 'Thu',
    value: 95
  },
  {
    name: 'Fri',
    value: 91
  }];

const departmentData = [
  {
    name: 'Engineering',
    value: 45,
    color: '#10b981'
  },
  {
    name: 'Design',
    value: 22,
    color: '#3b82f6'
  },
  {
    name: 'Marketing',
    value: 18,
    color: '#f59e0b'
  },
  {
    name: 'Sales',
    value: 32,
    color: '#8b5cf6'
  },
  {
    name: 'HR',
    value: 12,
    color: '#ec4899'
  },
  {
    name: 'Finance',
    value: 15,
    color: '#64748b'
  }];

const activities = [
  {
    id: 1,
    text: 'Rahul Sharma applied for sick leave',
    time: '2 hours ago',
    icon: CalendarOffIcon,
    color: 'text-amber-500',
    border: 'border-amber-500'
  },
  {
    id: 2,
    text: 'Priya Patel completed Q3 review',
    time: '4 hours ago',
    icon: CheckCircleIcon,
    color: 'text-emerald-500',
    border: 'border-emerald-500'
  },
  {
    id: 3,
    text: 'New employee Amit Kumar onboarded',
    time: 'Yesterday',
    icon: UsersIcon,
    color: 'text-blue-500',
    border: 'border-blue-500'
  },
  {
    id: 4,
    text: 'Payroll processed for September',
    time: 'Yesterday',
    icon: WalletIcon,
    color: 'text-purple-500',
    border: 'border-purple-500'
  },
  {
    id: 5,
    text: 'Team meeting scheduled for Friday',
    time: '2 days ago',
    icon: ClockIcon,
    color: 'text-slate-500',
    border: 'border-slate-500'
  }];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};
export function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Welcome Banner */}
      <motion.div
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-1">
            Good morning, Kavishka Dilshan 👋
          </h2>
          <p className="text-slate-500">
            Here's what's happening across your organization today.
          </p>
        </div>
        <div className="text-right hidden md:block">
          <div className="text-sm font-medium text-slate-900">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="text-xs text-slate-500">Q3 2026</div>
        </div>
      </motion.div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<UsersIcon className="w-6 h-6" />}
          title="Total Employees"
          value="248"
          subtitle="Active across all departments"
          trend="+12 this month"
          color="emerald"
          delay={0.1} />

        <StatCard
          icon={<UserCheckIcon className="w-6 h-6" />}
          title="Present Today"
          value="231"
          subtitle="93.1% attendance rate"
          color="blue"
          delay={0.2} />

        <StatCard
          icon={<CalendarOffIcon className="w-6 h-6" />}
          title="Pending Leaves"
          value="14"
          subtitle="Requires your approval"
          trend="5 urgent"
          color="amber"
          delay={0.3} />

        <StatCard
          icon={<WalletIcon className="w-6 h-6" />}
          title="Payroll Due"
          value="Rs 24.5L"
          subtitle="Estimated for September"
          trend="Due in 5 days"
          color="purple"
          delay={0.4} />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            delay: 0.5,
            duration: 0.4
          }}
          className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">

          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Weekly Attendance
            </h3>
            <select className="text-sm border-slate-200 rounded-md text-slate-600 focus:ring-emerald-500 focus:border-emerald-500">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={attendanceData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 0
                }}>

                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0" />

                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#64748b',
                    fontSize: 12
                  }}
                  dy={10} />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#64748b',
                    fontSize: 12
                  }}
                  domain={[80, 100]} />

                <Tooltip
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                  formatter={(value: number) => [`${value}%`, 'Attendance']} />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorValue)" />

              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Department Distribution */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            delay: 0.6,
            duration: 0.4
          }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">

          <h3 className="text-lg font-semibold text-slate-900 mb-6">
            Headcount by Dept
          </h3>
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={departmentData}
                layout="vertical"
                margin={{
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0
                }}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#e2e8f0" />

                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#475569',
                    fontSize: 12
                  }}
                  width={80} />

                <Tooltip
                  cursor={{
                    fill: '#f1f5f9'
                  }}
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }} />

                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                  {departmentData.map((entry, index) =>
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  )}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">

          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Recent Activity
            </h3>
            <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={activity.id}
                  variants={itemVariants}
                  className={`flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border-l-4 ${activity.border}`}>

                  <div
                    className={`p-2 rounded-full bg-slate-100 ${activity.color}`}>

                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-800">
                      {activity.text}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </motion.div>);

            })}
          </div>
        </motion.div>

        {/* Quick Actions */}
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
            delay: 0.8
          }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">

          <h3 className="text-lg font-semibold text-slate-900 mb-6">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200">
                <PlusIcon className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-700 group-hover:text-emerald-700">
                Add Employee
              </span>
            </button>
            <button className="w-full flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-purple-500 hover:bg-purple-50 transition-all group">
              <div className="p-2 rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-200">
                <WalletIcon className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-700 group-hover:text-purple-700">
                Process Payroll
              </span>
            </button>
            <button className="w-full flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-500 hover:bg-amber-50 transition-all group">
              <div className="p-2 rounded-lg bg-amber-100 text-amber-600 group-hover:bg-amber-200">
                <FileTextIcon className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-700 group-hover:text-amber-700">
                Review Leaves
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>);

}