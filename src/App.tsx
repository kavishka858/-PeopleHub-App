import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Employees } from './pages/Employees';
import { Attendance } from './pages/Attendance';
import { LeaveManagement } from './pages/LeaveManagement';
import { Payroll } from './pages/Payroll';
import { Performance } from './pages/Performance';

export function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Employees':
        return <Employees />;
      case 'Attendance':
        return <Attendance />;
      case 'Leave':
        return <LeaveManagement />;
      case 'Payroll':
        return <Payroll />;
      case 'Performance':
        return <Performance />;
      case 'Settings':
        return (
          <div className="p-8 max-w-7xl mx-auto flex items-center justify-center h-[60vh]">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Settings
              </h2>
              <p className="text-slate-500 mb-4">
                System configuration and preferences go here.
              </p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />

      <div className="flex-1 ml-[260px] flex flex-col min-h-screen">
        <Header pageTitle={currentPage} />

        <main className="flex-1 overflow-x-hidden">{renderPage()}</main>
      </div>
    </div>
  );
}