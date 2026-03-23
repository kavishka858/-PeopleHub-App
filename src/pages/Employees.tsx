import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SearchIcon,
  PlusIcon,
  MailIcon,
  PhoneIcon,
  FilterIcon,
  XIcon
} from 'lucide-react';

const departments = [
  'All',
  'Engineering',
  'Design',
  'Marketing',
  'Sales',
  'HR',
  'Finance'
];

export function Employees() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: 'Engineering',
    role: '',
    status: 'Active'
  });

  const fetchEmployees = async () => {
    try {
      const res = await fetch('/api/employees');
      if (res.ok) {
        const data = await res.json();
        setEmployees(data);
      }
    } catch (err) {
      console.error('Failed to fetch employees', err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleCreateEmployee = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEmployee),
      });
      if (res.ok) {
        setIsModalOpen(false);
        setNewEmployee({
          firstName: '',
          lastName: '',
          email: '',
          department: 'Engineering',
          role: '',
          status: 'Active'
        });
        fetchEmployees();
      }
    } catch (err) {
      console.error('Error creating employee', err);
    }
  };

  const filteredEmployees = employees.filter((emp) => {
    const matchesDept = activeTab === 'All' || emp.department === activeTab;
    const fullName = `${emp.firstName} ${emp.lastName}`.toLowerCase();
    const searchLow = searchQuery.toLowerCase();
    const matchesSearch = fullName.includes(searchLow) || emp.role.toLowerCase().includes(searchLow);
    return matchesDept && matchesSearch;
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-slate-900">Directory</h2>
          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium">
            {employees.length} total
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
            />
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
          >
            <PlusIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Add Employee</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveTab(dept)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === dept
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Employee Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredEmployees.map((employee) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={employee._id || employee.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
            >
              {/* Status Indicator */}
              <div className="absolute top-6 right-6 flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${employee.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                <span className="text-xs font-medium text-slate-500 capitalize">
                  {employee.status}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm bg-emerald-500">
                  {employee.firstName?.[0]}{employee.lastName?.[0]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {employee.firstName} {employee.lastName}
                  </h3>
                  <p className="text-sm text-slate-500">{employee.role}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <MailIcon className="w-4 h-4 text-slate-400" />
                  <span className="truncate">{employee.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <PhoneIcon className="w-4 h-4 text-slate-400" />
                  <span>+91 99999 99999</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                  {employee.department}
                </span>
                <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredEmployees.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 border-dashed">
          <FilterIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-slate-900">No employees found</h3>
          <p className="text-slate-500 text-sm mt-1">Try adjusting your search or add a new employee.</p>
        </div>
      )}

      {/* Add Employee Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">Add Employee</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                  <XIcon className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleCreateEmployee}>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                      <input 
                        type="text" required 
                        value={newEmployee.firstName} 
                        onChange={e => setNewEmployee({...newEmployee, firstName: e.target.value})}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                      <input 
                        type="text" required
                        value={newEmployee.lastName} 
                        onChange={e => setNewEmployee({...newEmployee, lastName: e.target.value})}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input 
                      type="email" required
                      value={newEmployee.email} 
                      onChange={e => setNewEmployee({...newEmployee, email: e.target.value})}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                    <input 
                      type="text" required
                      value={newEmployee.role} 
                      onChange={e => setNewEmployee({...newEmployee, role: e.target.value})}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Department</label>
                    <select 
                      value={newEmployee.department}
                      onChange={e => setNewEmployee({...newEmployee, department: e.target.value})}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    >
                      {departments.filter(d => d !== 'All').map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded-lg transition-colors">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                    Add Employee
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}