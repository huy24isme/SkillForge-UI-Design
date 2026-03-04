import { useState } from 'react';
import { Sparkles, Calendar, Users, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CreateProject() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    teamSize: '',
    deadline: '',
    deadlineType: 'hard',
    priority: 'medium',
    projectType: 'e-commerce',
    roles: {
      BE: 0,
      FE: 0,
      PM: 0,
      BA: 0,
    },
    techStack: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/team-matching');
  };

  const techOptions = ['React', 'Golang', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-[#3AE7E1]/10 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-[#3AE7E1]" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Create New Project</h2>
            <p className="text-sm text-gray-600">AI will help match the best team for your project</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AE7E1] focus:border-transparent"
              placeholder="E.g., Mobile Banking App v2.0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AE7E1] focus:border-transparent"
              rows={4}
              placeholder="Describe your project goals, requirements, and expected outcomes..."
              required
            />
          </div>

          {/* Team Composition */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Team Roles *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['BE', 'FE', 'PM', 'BA'].map((role) => (
                <div key={role} className="border border-gray-300 rounded-lg p-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {role === 'BE' && 'Backend'}
                    {role === 'FE' && 'Frontend'}
                    {role === 'PM' && 'Project Manager'}
                    {role === 'BA' && 'Business Analyst'}
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.roles[role as keyof typeof formData.roles]}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      roles: { ...formData.roles, [role]: parseInt(e.target.value) || 0 }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AE7E1] focus:border-transparent"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Tech Stack *
            </label>
            <div className="flex flex-wrap gap-2">
              {techOptions.map((tech) => (
                <button
                  key={tech}
                  type="button"
                  onClick={() => {
                    const isSelected = formData.techStack.includes(tech);
                    setFormData({
                      ...formData,
                      techStack: isSelected
                        ? formData.techStack.filter((t) => t !== tech)
                        : [...formData.techStack, tech],
                    });
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    formData.techStack.includes(tech)
                      ? 'bg-[#3AE7E1] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Deadline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deadline *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AE7E1] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deadline Type
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deadlineType"
                    value="hard"
                    checked={formData.deadlineType === 'hard'}
                    onChange={(e) => setFormData({ ...formData, deadlineType: e.target.value })}
                    className="mr-2"
                  />
                  <span className="text-sm">Hard</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deadlineType"
                    value="soft"
                    checked={formData.deadlineType === 'soft'}
                    onChange={(e) => setFormData({ ...formData, deadlineType: e.target.value })}
                    className="mr-2"
                  />
                  <span className="text-sm">Soft</span>
                </label>
              </div>
            </div>
          </div>

          {/* Business Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Priority
              </label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AE7E1] focus:border-transparent"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Type
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AE7E1] focus:border-transparent"
              >
                <option value="e-commerce">E-commerce</option>
                <option value="internal-tool">Internal Tool</option>
                <option value="r-and-d">R&D</option>
                <option value="mobile-app">Mobile App</option>
                <option value="web-app">Web Application</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              className="px-6 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#3AE7E1] text-white rounded-lg hover:bg-[#3AE7E1]/90 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Create Project & Match Team
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
