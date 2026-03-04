import { useState } from 'react';
import { Sparkles, Users, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

const projects = [
  { id: 1, name: 'E-Commerce Platform v2.0', status: 'active', team: 'Assigned' },
  { id: 2, name: 'Mobile Banking App', status: 'active', team: 'Assigned' },
  { id: 3, name: 'AI Analytics Dashboard', status: 'unassigned', team: 'Pending' },
  { id: 4, name: 'CRM System Upgrade', status: 'active', team: 'Assigned' },
];

const chatMessages = [
  {
    id: 1,
    type: 'user',
    content: 'I need a team for the new AI Analytics Dashboard project',
  },
  {
    id: 2,
    type: 'ai',
    content: 'I\'ve analyzed the project requirements. Here\'s my recommended team composition:',
  },
  {
    id: 3,
    type: 'ai-suggestion',
    members: [
      { name: 'Nguyen Van A', role: 'Frontend Lead', fit: 92, level: 'Senior', avatar: 'NA', skills: ['React', 'TypeScript'], notes: 'Excellent track record with dashboard interfaces' },
      { name: 'Le Hong Duc', role: 'Backend Developer', fit: 85, level: 'Mid-level', avatar: 'LD', skills: ['Go', 'PostgreSQL'], notes: 'Strong in data processing pipelines' },
      { name: 'Tran Thi B', role: 'UI/UX Designer', fit: 88, level: 'Senior', avatar: 'TB', skills: ['Figma', 'Design Systems'], notes: 'Specializes in analytics interfaces' },
      { name: 'Pham Van C', role: 'Data Engineer', fit: 78, level: 'Junior', avatar: 'PC', skills: ['Python', 'ML'], notes: '⚠️ Junior level, needs mentor support' },
    ],
  },
  {
    id: 4,
    type: 'ai-analysis',
    content: `**Project Difficulty Analysis:**
- Complexity: High
- Estimated Duration: 12 weeks
- Risk Factors: Integration with existing systems, real-time data processing
- Recommendation: Strong team match with 85% overall confidence`,
  },
];

export function TeamMatching() {
  const [selectedProject, setSelectedProject] = useState(projects[2]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setInputMessage('');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
      {/* Project List */}
      <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50">
          <h3 className="font-semibold text-gray-900">Projects</h3>
          <div className="flex gap-2 mt-3">
            <button className="px-3 py-1.5 bg-[#3AE7E1] text-white rounded-lg text-sm">
              Unassigned
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm">
              Active
            </button>
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100%-120px)]">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`w-full text-left p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                selectedProject.id === project.id ? 'bg-[#3AE7E1]/5' : ''
              }`}
            >
              <p className="font-medium text-gray-900 text-sm mb-1">{project.name}</p>
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${
                  project.status === 'active'
                    ? 'bg-[#2ECC71]/10 text-[#2ECC71]'
                    : 'bg-[#F5A623]/10 text-[#F5A623]'
                }`}>
                  {project.status === 'active' ? <CheckCircle className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                  {project.team}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* AI Chat Interface */}
      <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col">
        <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-[#0B1C2D] to-[#0B1C2D]/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#3AE7E1]/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#3AE7E1]" />
            </div>
            <div>
              <h3 className="font-semibold text-white">AI Team Matching Assistant</h3>
              <p className="text-xs text-gray-300">Powered by SkillForge AI Engine</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {chatMessages.map((message) => (
            <div key={message.id}>
              {message.type === 'user' && (
                <div className="flex justify-end">
                  <div className="bg-[#0B1C2D] text-white px-4 py-3 rounded-lg max-w-md">
                    {message.content}
                  </div>
                </div>
              )}
              
              {message.type === 'ai' && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3AE7E1]/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-[#3AE7E1]" />
                  </div>
                  <div className="bg-gray-50 px-4 py-3 rounded-lg max-w-2xl">
                    {message.content}
                  </div>
                </div>
              )}

              {message.type === 'ai-suggestion' && message.members && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3AE7E1]/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-[#3AE7E1]" />
                  </div>
                  <div className="flex-1 space-y-3">
                    {message.members.map((member, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#3AE7E1]/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-medium text-[#3AE7E1]">{member.avatar}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="font-semibold text-gray-900">{member.name}</h4>
                                <p className="text-sm text-gray-600">{member.role} • {member.level}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-[#2ECC71]" />
                                <span className="text-lg font-semibold text-[#2ECC71]">{member.fit}%</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {member.skills.map((skill) => (
                                <span key={skill} className="px-2 py-1 bg-[#3AE7E1]/10 text-[#3AE7E1] text-xs rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <p className="text-sm text-gray-600">{member.notes}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="flex gap-3 pt-2">
                      <button className="flex-1 px-4 py-2.5 bg-[#3AE7E1] text-white rounded-lg hover:bg-[#3AE7E1]/90 transition-colors flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Confirm Team
                      </button>
                      <button className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        Ask for Alternative
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {message.type === 'ai-analysis' && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3AE7E1]/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-[#3AE7E1]" />
                  </div>
                  <div className="bg-gradient-to-r from-[#3AE7E1]/5 to-[#0B1C2D]/5 px-4 py-3 rounded-lg max-w-2xl border border-[#3AE7E1]/20">
                    <div className="prose prose-sm">
                      {message.content.split('\n').map((line, idx) => (
                        <p key={idx} className="text-sm text-gray-700 mb-1">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask AI anything about team composition..."
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AE7E1] focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="px-6 py-2.5 bg-[#3AE7E1] text-white rounded-lg hover:bg-[#3AE7E1]/90 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
