import React from 'react';
import { motion } from 'framer-motion';
import {
  WalletIcon,
  DownloadIcon,
  IndianRupeeIcon,
  TrendingUpIcon,
  FileTextIcon } from
'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell } from
'recharts';
import { StatCard } from '../components/StatCard';
const payrollTrend = [
{
  month: 'Apr',
  amount: 22.5
},
{
  month: 'May',
  amount: 23.1
},
{
  month: 'Jun',
  amount: 23.4
},
{
  month: 'Jul',
  amount: 24.0
},
{
  month: 'Aug',
  amount: 24.2
},
{
  month: 'Sep',
  amount: 24.5
}];

const deptDistribution = [
{
  name: 'Engineering',
  value: 45
},
{
  name: 'Sales',
  value: 25
},
{
  name: 'Marketing',
  value: 15
},
{
  name: 'Design',
  value: 10
},
{
  name: 'Others',
  value: 5
}];

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#64748b'];
const payslips = [
{
  id: 1,
  name: 'Kavishka Dilshan',
  dept: 'Engineering',
  basic: 'Rs 85,000',
  hra: 'Rs 34,000',
  allow: 'Rs 12,000',
  ded: 'Rs 8,500',
  net: 'Rs 1,22,500'
},
{
  id: 2,
  name: 'Lahiru Welagedara',
  dept: 'Design',
  basic: 'Rs 65,000',
  hra: 'Rs 26,000',
  allow: 'Rs 8,000',
  ded: 'Rs 6,500',
  net: 'Rs 92,500'
},
{
  id: 3,
  name: 'Heshan Kavidu',
  dept: 'Marketing',
  basic: 'Rs 70,000',
  hra: 'Rs 28,000',
  allow: 'Rs 10,000',
  ded: 'Rs 7,000',
  net: 'Rs 1,01,000'
},
{
  id: 4,
  name: 'Pasan Gunasinha',
  dept: 'Sales',
  basic: 'Rs 55,000',
  hra: 'Rs 22,000',
  allow: 'Rs 15,000',
  ded: 'Rs 5,500',
  net: 'Rs 86,500'
},
{
  id: 5,
  name: 'Sandun Priyaranga',
  dept: 'Engineering',
  basic: 'Rs 80,000',
  hra: 'Rs 32,000',
  allow: 'Rs 10,000',
  ded: 'Rs 8,000',
  net: 'Rs 1,14,000'
}];

export function Payroll() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-1">
            Payroll Overview
          </h2>
          <p className="text-slate-500">
            Manage salaries, bonuses, and deductions.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg text-sm font-medium transition-colors shadow-sm">
            <DownloadIcon className="w-4 h-4" />
            Export Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
            <WalletIcon className="w-4 h-4" />
            Process Payroll
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<IndianRupeeIcon className="w-6 h-6" />}
          title="Total Payroll"
          value="Rs 24.5L"
          subtitle="September 2024"
          color="purple"
          delay={0.1} />
        
        <StatCard
          icon={<TrendingUpIcon className="w-6 h-6" />}
          title="Avg Salary"
          value="Rs 98,790"
          subtitle="Per employee"
          color="blue"
          delay={0.2} />
        
        <StatCard
          icon={<WalletIcon className="w-6 h-6" />}
          title="Total Bonuses"
          value="Rs 3.2L"
          subtitle="Performance based"
          color="emerald"
          delay={0.3} />
        
        <StatCard
          icon={<FileTextIcon className="w-6 h-6" />}
          title="Deductions"
          value="Rs 4.8L"
          subtitle="Taxes & PF"
          color="amber"
          delay={0.4} />
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trend Chart */}
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
            delay: 0.5
          }}
          className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          
          <h3 className="text-lg font-semibold text-slate-900 mb-6">
            Payroll Trend (Last 6 Months)
          </h3>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={payrollTrend}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 0
                }}>
                
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0" />
                
                <XAxis
                  dataKey="month"
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
                  tickFormatter={(val) => `Rs ${val}L`} />
                
                <Tooltip
                  cursor={{
                    fill: '#f8fafc'
                  }}
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                  formatter={(value: number) => [
                  `Rs ${value} Lakhs`,
                  'Total Payroll']
                  } />
                
                <Bar
                  dataKey="amount"
                  fill="#8b5cf6"
                  radius={[4, 4, 0, 0]}
                  barSize={40} />
                
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Distribution Chart */}
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
            delay: 0.6
          }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Cost by Department
          </h3>
          <div className="h-[240px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deptDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value">
                  
                  {deptDistribution.map((entry, index) =>
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]} />

                  )}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }} />
                
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
              <span className="text-2xl font-bold text-slate-900">Rs 24.5L</span>
              <span className="text-xs text-slate-500">Total</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {deptDistribution.map((dept, i) =>
            <div
              key={dept.name}
              className="flex items-center gap-2 text-xs text-slate-600">
              
                <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: COLORS[i]
                }} />
              
                {dept.name}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Payslip Table */}
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
          delay: 0.7
        }}
        className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">
            Recent Payslips
          </h3>
          <button className="text-sm text-purple-600 font-medium hover:text-purple-700">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4 text-right">Basic</th>
                <th className="px-6 py-4 text-right">HRA</th>
                <th className="px-6 py-4 text-right">Allowances</th>
                <th className="px-6 py-4 text-right">Deductions</th>
                <th className="px-6 py-4 text-right text-slate-900">Net Pay</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {payslips.map((row) =>
              <tr
                key={row.id}
                className="hover:bg-slate-50/50 transition-colors">
                
                  <td className="px-6 py-4 font-medium text-slate-900">
                    {row.name}
                  </td>
                  <td className="px-6 py-4 text-slate-600">{row.dept}</td>
                  <td className="px-6 py-4 text-right text-slate-600">
                    {row.basic}
                  </td>
                  <td className="px-6 py-4 text-right text-slate-600">
                    {row.hra}
                  </td>
                  <td className="px-6 py-4 text-right text-slate-600">
                    {row.allow}
                  </td>
                  <td className="px-6 py-4 text-right text-red-500">
                    {row.ded}
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-emerald-600">
                    {row.net}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-2 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                      <DownloadIcon className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>);

}