import React from 'react';
import {
  LayoutDashboardIcon,
  UsersIcon,
  ClockIcon,
  CalendarIcon,
  WalletIcon,
  TrendingUpIcon,
  SettingsIcon } from
'lucide-react';
import { motion } from 'framer-motion';
export interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}
const navItems = [
{
  id: 'Dashboard',
  label: 'Dashboard',
  icon: LayoutDashboardIcon
},
{
  id: 'Employees',
  label: 'Employees',
  icon: UsersIcon
},
{
  id: 'Attendance',
  label: 'Attendance',
  icon: ClockIcon
},
{
  id: 'Leave',
  label: 'Leave',
  icon: CalendarIcon
},
{
  id: 'Payroll',
  label: 'Payroll',
  icon: WalletIcon
},
{
  id: 'Performance',
  label: 'Performance',
  icon: TrendingUpIcon
},
{
  id: 'Settings',
  label: 'Settings',
  icon: SettingsIcon
}];

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  return (
    <div className="w-[260px] h-screen bg-slate-900 text-slate-300 flex flex-col fixed left-0 top-0 border-r border-slate-800 z-20">
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          <span className="text-white font-bold text-xl tracking-tight">
            PeopleHub
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative ${isActive ? 'text-emerald-400 bg-emerald-500/10' : 'hover:bg-slate-800 hover:text-white'}`}>
              
              {isActive &&
              <motion.div
                layoutId="activeTab"
                className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-r-full"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }} />

              }
              <Icon
                className={`w-5 h-5 ${isActive ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-300'}`} />
              
              <span className="font-medium text-sm">{item.label}</span>
            </button>);

        })}
      </nav>

      {/* User Profile Bottom */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 p-2 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
            KD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Kavishka Dilshan</p>
            <p className="text-xs text-slate-400 truncate">HR Manager</p>
          </div>
        </div>
      </div>
    </div>);

}