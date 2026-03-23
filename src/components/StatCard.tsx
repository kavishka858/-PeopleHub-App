import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
export interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  subtitle: string;
  trend?: string;
  color: 'emerald' | 'blue' | 'amber' | 'purple' | 'red';
  delay?: number;
}
const colorStyles = {
  emerald: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
    trend: 'text-emerald-600'
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    trend: 'text-blue-600'
  },
  amber: {
    bg: 'bg-amber-100',
    text: 'text-amber-600',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    trend: 'text-amber-600'
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
    trend: 'text-purple-600'
  },
  red: {
    bg: 'bg-red-100',
    text: 'text-red-600',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    trend: 'text-red-600'
  }
};
export function StatCard({
  icon,
  title,
  value,
  subtitle,
  trend,
  color,
  delay = 0
}: StatCardProps) {
  const styles = colorStyles[color];
  return (
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
        duration: 0.4,
        delay
      }}
      className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
      
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${styles.iconBg} ${styles.iconColor}`}>
          {icon}
        </div>
        {trend &&
        <span
          className={`text-sm font-medium px-2 py-1 rounded-full ${styles.bg} ${styles.text}`}>
          
            {trend}
          </span>
        }
      </div>
      <div>
        <h3 className="text-slate-500 text-sm font-medium mb-1">{title}</h3>
        <div className="text-2xl font-bold text-slate-900 mb-1">{value}</div>
        <p className="text-slate-400 text-xs">{subtitle}</p>
      </div>
    </motion.div>);

}