import React, { useState } from 'react';
import { Plus, X, Edit, Trash2, Calendar, Briefcase, Building, Clock, ChevronDown } from 'lucide-react';

// Custom Modern Dropdown Component (like LinkedIn, Notion, Figma)
const MonthYearPicker = ({ value, onChange, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOptions = options.filter(option =>
    option.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full px-4 py-3 text-left border-2 border-black rounded-xl transition-all duration-300 flex items-center justify-between
          ${value 
            ? 'bg-transparent text-black' 
            : 'bg-transparent text-gray-500'
          }
          ${isOpen 
            ? 'focus:border-gray-600 focus:ring-4 focus:ring-gray-200' 
            : 'hover:border-gray-600'
          }
        `}
      >
        <span className="truncate">
          {value || placeholder}
        </span>
        <ChevronDown 
          size={16} 
          className={`text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg z-20 max-h-60 overflow-hidden">
            {/* Search Input for Years */}
            {options.length > 12 && (
              <div className="p-2 border-b border-gray-100">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={`Search ${placeholder.toLowerCase()}...`}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded focus:ring-1 focus:ring-black focus:border-transparent"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
            
            {/* Options */}
            <div className="max-h-48 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleSelect(option)}
                    className={`
                      w-full px-4 py-2.5 text-left text-sm transition-colors duration-150
                      ${value === option 
                        ? 'bg-black text-white' 
                        : 'text-gray-700 hover:bg-gray-50'
                      }
                      ${index === 0 ? 'rounded-t' : ''}
                      ${index === filteredOptions.length - 1 ? 'rounded-b' : ''}
                    `}
                  >
                    {option}
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-sm text-black text-center">
                  No {placeholder.toLowerCase()} found
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [currentExperience, setCurrentExperience] = useState({
    role: '',
    company: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
    isCurrentRole: false
  });

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  const addExperience = () => {
    if (currentExperience.role.trim() && currentExperience.company.trim()) {
      setExperiences([...experiences, { ...currentExperience, id: Date.now() }]);
      setCurrentExperience({
        role: '',
        company: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        isCurrentRole: false
      });
    }
  };

  const removeExperience = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const updateCurrentExperience = (field, value) => {
    setCurrentExperience(prev => ({ ...prev, [field]: value }));
  };

  const editExperience = (experience) => {
    setCurrentExperience(experience);
    removeExperience(experience.id);
  };

  const toggleCurrentRole = () => {
    setCurrentExperience(prev => ({
      ...prev,
      isCurrentRole: !prev.isCurrentRole,
      endMonth: !prev.isCurrentRole ? '' : prev.endMonth,
      endYear: !prev.isCurrentRole ? '' : prev.endYear
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center mb-6">
        <Briefcase className="w-5 h-5 text-black mr-2" />
        <h2 className="text-xl font-semibold text-black">Professional Experience</h2>
      </div>
      
      {/* Add Experience Form */}
      <div className="mb-10">
        <div className="grid grid-cols-1 gap-6 mb-6">
          {/* Role */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-black mb-2">Job Title / Role *</label>
            <input
              type="text"
              value={currentExperience.role}
              onChange={(e) => updateCurrentExperience('role', e.target.value)}
              placeholder="e.g. Senior Software Engineer"
              className="w-full px-4 py-3 border-2 border-black rounded-xl focus:border-gray-600 focus:ring-4 focus:ring-gray-200 transition-all duration-300 outline-none"
            />
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-black mb-2">Company *</label>
            <input
              type="text"
              value={currentExperience.company}
              onChange={(e) => updateCurrentExperience('company', e.target.value)}
              placeholder="e.g. Google, Microsoft, Startup Inc."
              className="w-full px-4 py-3 border-2 border-black rounded-xl focus:border-gray-600 focus:ring-4 focus:ring-gray-200 transition-all duration-300 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-6">
          {/* Start Date */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-black mb-2">Start Date</label>
            <div className="grid grid-cols-2 gap-3">
              <MonthYearPicker
                value={currentExperience.startMonth}
                onChange={(value) => updateCurrentExperience('startMonth', value)}
                options={months}
                placeholder="Month"
              />
              <MonthYearPicker
                value={currentExperience.startYear}
                onChange={(value) => updateCurrentExperience('startYear', value)}
                options={years}
                placeholder="Year"
              />
            </div>
          </div>

          {/* End Date */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-black mb-2">End Date</label>
            
            {/* Current Role Toggle */}
            <div className="mb-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={currentExperience.isCurrentRole}
                  onChange={toggleCurrentRole}
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black focus:ring-2"
                />
                <span className="text-sm text-black flex items-center gap-1">
                  <Clock size={14} className="text-gray-500" />
                  I am currently working in this role
                </span>
              </label>
            </div>

            {!currentExperience.isCurrentRole && (
              <div className="grid grid-cols-2 gap-3">
                <MonthYearPicker
                  value={currentExperience.endMonth}
                  onChange={(value) => updateCurrentExperience('endMonth', value)}
                  options={months}
                  placeholder="Month"
                />
                <MonthYearPicker
                  value={currentExperience.endYear}
                  onChange={(value) => updateCurrentExperience('endYear', value)}
                  options={years}
                  placeholder="Year"
                />
              </div>
            )}

            {currentExperience.isCurrentRole && (
              <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 flex items-center gap-2">
                <Clock size={14} className="text-gray-500" />
                Present
              </div>
            )}
          </div>
        </div>
        
        <button 
          onClick={addExperience}
          className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!currentExperience.role.trim() || !currentExperience.company.trim()}
        >
          Add Experience
        </button>
      </div>

      {/* Experiences List */}
      {experiences.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-6 text-black">Your Experience ({experiences.length})</h3>
          <div className="space-y-6">
            {experiences.map((experience) => (
              <div key={experience.id} className="border-2 border-black rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-black">{experience.role}</h4>
                    <p className="text-sm text-gray-600">{experience.company}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => editExperience(experience)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4 text-black" />
                    </button>
                    <button
                      onClick={() => removeExperience(experience.id)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-black" />
                    </button>
                  </div>
                </div>
                
                {(experience.startMonth && experience.startYear) || experience.isCurrentRole && (
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-600">Duration: </span>
                    <span className="text-sm text-black">
                      {experience.startMonth && experience.startYear ? 
                        `${experience.startMonth} ${experience.startYear}` : 'Start date not set'
                      } - {' '}
                      {experience.isCurrentRole 
                        ? 'Present' 
                        : (experience.endMonth && experience.endYear 
                            ? `${experience.endMonth} ${experience.endYear}` 
                            : 'End date not set'
                          )
                      }
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {experiences.length === 0 && (
        <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-xl">
          <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-500">No experience added yet. Add your first experience above!</p>
        </div>
      )}
    </div>
  );
}