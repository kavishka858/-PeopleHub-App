import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUpIcon,
  StarIcon,
  AwardIcon,
  TargetIcon,
  UserCheckIcon } from
'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell } from
'recharts';
import { StatCard } from '../components/StatCard';
const ratingDistribution = [
{
  rating: '1 Star',
  count: 2,
  color: '#ef4444'
},
{
  rating: '2 Stars',
  count: 6,
  color: '#f97316'
},
{
  rating: '3 Stars',
  count: 45,
  color: '#eab308'
},
{
  rating: '4 Stars',
  count: 98,
  color: '#84cc16'
},
{
  rating: '5 Stars',
  count: 35,
  color: '#10b981'
}];

const topPerformers = [
{
  id: 1,
  name: 'Lahiru Welagedara',
  dept: 'Design',
  rating: 5.0,
  achievement: 'Redesigned core app flow increasing conversion by 24%',
  avatar: 'LW',
  color: 'bg-emerald-500'
},
{
  id: 2,
  name: 'Kavishka Dilshan',
  dept: 'Engineering',
  rating: 4.9,
  achievement: 'Optimized database queries reducing load time by 40%',
  avatar: 'KD',
  color: 'bg-blue-600'
},
{
  id: 3,
  name: 'Pasan Gunasinghe',
  dept: 'Sales',
  rating: 4.8,
  achievement: 'Exceeded Q3 quota by 150%, closed enterprise deal',
  avatar: 'PG',
  color: 'bg-purple-500'
},
{
  id: 4,
  name: 'Sandun Priyaranga',
  dept: 'Engineering',
  rating: 4.8,
  achievement:
  'Successfully led the migration to new microservices architecture',
  avatar: 'SP',
  color: 'bg-blue-500'
}];

const StarDisplay = ({ rating }: {rating: number;}) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) =>
      <StarIcon
        key={star}
        className={`w-4 h-4 ${star <= Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'fill-slate-100 text-slate-200'}`} />

      )}
      <span className="ml-1 text-sm font-bold text-slate-700">
        {rating.toFixed(1)}
      </span>
    </div>);

};
export function Performance() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-1">
            Performance Reviews
          </h2>
          <p className="text-slate-500">
            Track employee evaluations and goals.
          </p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="text-sm font-medium text-slate-700">
            Q3 2024 Review Cycle
          </div>
          <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[75%] rounded-full" />
          </div>
          <div className="text-xs font-bold text-emerald-600">75%</div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<UserCheckIcon className="w-6 h-6" />}
          title="Reviews Completed"
          value="186/248"
          subtitle="Current cycle"
          color="blue"
          delay={0.1} />
        
        <StatCard
          icon={<StarIcon className="w-6 h-6" />}
          title="Average Rating"
          value="4.2"
          subtitle="Out of 5.0"
          color="amber"
          delay={0.2} />
        
        <StatCard
          icon={<AwardIcon className="w-6 h-6" />}
          title="Top Performers"
          value="12"
          subtitle="Rating > 4.8"
          color="emerald"
          delay={0.3} />
        
        <StatCard
          icon={<TargetIcon className="w-6 h-6" />}
          title="Needs Improvement"
          value="8"
          subtitle="Rating < 2.5"
          color="red"
          delay={0.4} />
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Rating Distribution Chart */}
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
            Rating Distribution
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ratingDistribution}
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
                  dataKey="rating"
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
                  }} />
                
                <Tooltip
                  cursor={{
                    fill: '#f8fafc'
                  }}
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                  formatter={(value: number) => [`${value} Employees`, 'Count']} />
                
                <Bar dataKey="count" radius={[4, 4, 0, 0]} barSize={50}>
                  {ratingDistribution.map((entry, index) =>
                  <Cell key={`cell-${index}`} fill={entry.color} />
                  )}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Quick Review Form */}
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
          
          <h3 className="text-lg font-semibold text-slate-900 mb-6">
            Quick Review
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Select Employee
              </label>
              <select className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none">
                <option>Select an employee...</option>
                <option>Amit Kumar</option>
                <option>Ananya Gupta</option>
                <option>Karthik Nair</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Overall Rating (1-5)
              </label>
              <input
                type="range"
                min="1"
                max="5"
                step="0.5"
                className="w-full accent-emerald-500" />
              
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Key Strengths
              </label>
              <textarea
                rows={2}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                placeholder="What did they do well?">
              </textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Areas for Improvement
              </label>
              <textarea
                rows={2}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                placeholder="Where can they grow?">
              </textarea>
            </div>
            <button className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm mt-2">
              Submit Review
            </button>
          </div>
        </motion.div>
      </div>

      {/* Top Performers */}
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
        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        
        <div className="flex items-center gap-2 mb-6">
          <AwardIcon className="w-5 h-5 text-emerald-500" />
          <h3 className="text-lg font-semibold text-slate-900">
            Top Performers (Q3)
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topPerformers.map((performer) =>
          <div
            key={performer.id}
            className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
            
              <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${performer.color}`}>
              
                {performer.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h4 className="font-bold text-slate-900">
                      {performer.name}
                    </h4>
                    <p className="text-xs text-slate-500">{performer.dept}</p>
                  </div>
                  <StarDisplay rating={performer.rating} />
                </div>
                <p className="text-sm text-slate-600 mt-2 bg-white p-2.5 rounded-lg border border-slate-100">
                  "{performer.achievement}"
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>);

}