import { useState } from 'react';
import { 
  Send, 
  Paperclip, 
  Bot, 
  User, 
  FileText, 
  Clock, 
  Briefcase, 
  Users, 
  ChevronRight,
  Sparkles,
  MoreVertical,
  Plus
} from 'lucide-react';

export function ExecutiveAICreate() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  
  // Mock Data
  const projects = [
    { id: '1', name: 'Website TMĐT Ver 2.0', status: 'draft', date: 'Vừa xong' },
    { id: '2', name: 'Mobile App Loyalty', status: 'assigned', date: '2 giờ trước' },
    { id: '3', name: 'Internal HR Tool', status: 'completed', date: 'Hôm qua' },
  ];

  const chatMessages = [
    { role: 'ai', content: 'Chào bạn! Tôi có thể giúp gì cho việc khởi tạo dự án mới hôm nay? Bạn có thể upload tài liệu mô tả hoặc chat trực tiếp yêu cầu.' },
    { role: 'user', content: 'Tôi muốn làm một hệ thống CRM cho đội Sales, tập trung vào quản lý Lead và tích hợp Call Center.' },
    { role: 'ai', content: 'Tuyệt vời. Dựa trên yêu cầu "CRM quản lý Lead tích hợp Call Center", tôi đề xuất cấu trúc dự án như bên phải. Bạn có muốn điều chỉnh thêm về công nghệ sử dụng hay deadline không?' },
  ];

  return (
    <div className="h-[calc(100vh-140px)] flex gap-6">
      {/* LEFT COLUMN: Project Context */}
      <div className="w-1/4 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <h3 className="font-bold text-[#0B1C2D]">Danh sách dự án</h3>
          <button className="p-1.5 bg-[#0B1C2D] text-white rounded-lg hover:bg-[#1E3A5F]">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {projects.map((p) => (
            <div 
              key={p.id}
              onClick={() => setActiveProject(p.id)}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                activeProject === p.id 
                  ? 'bg-[#3AE7E1]/10 border-[#3AE7E1] shadow-sm' 
                  : 'bg-white border-transparent hover:bg-slate-50 border-slate-100'
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-[#0B1C2D] truncate">{p.name}</span>
                {p.status === 'draft' && <span className="text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-600">Nháp</span>}
                {p.status === 'assigned' && <span className="text-[10px] bg-blue-100 px-1.5 py-0.5 rounded text-blue-600">Đã giao</span>}
                {p.status === 'completed' && <span className="text-[10px] bg-green-100 px-1.5 py-0.5 rounded text-green-600">Xong</span>}
              </div>
              <div className="text-xs text-slate-400">{p.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MIDDLE COLUMN: AI Chat */}
      <div className="w-2/4 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-gradient-to-r from-[#0B1C2D] to-[#1E3A5F] flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <Sparkles className="w-4 h-4 text-[#3AE7E1]" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Trợ lý AI SkillForge</h3>
              <p className="text-[10px] text-slate-300">Luôn sẵn sàng hỗ trợ</p>
            </div>
          </div>
          <button className="text-white/70 hover:text-white">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
          {chatMessages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === 'ai' ? 'bg-gradient-to-br from-[#0B1C2D] to-[#1E3A5F]' : 'bg-slate-200'
              }`}>
                {msg.role === 'ai' ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-slate-600" />}
              </div>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'ai' 
                  ? 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm' 
                  : 'bg-[#0B1C2D] text-white rounded-tr-none shadow-sm'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t border-slate-100">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Nhập yêu cầu hoặc upload tài liệu..." 
              className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#3AE7E1] focus:ring-1 focus:ring-[#3AE7E1] transition-all text-sm"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <button className="p-1.5 text-slate-400 hover:text-[#0B1C2D] transition-colors">
                <Paperclip className="w-4 h-4" />
              </button>
              <button className="p-1.5 bg-[#3AE7E1] text-[#0B1C2D] rounded-lg hover:bg-[#34d3cd] transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Project Structure Form */}
      <div className="w-1/4 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#0B1C2D]" />
          <h3 className="font-bold text-[#0B1C2D]">Cấu trúc dự án</h3>
          <span className="ml-auto text-[10px] uppercase font-bold text-[#3AE7E1] bg-[#0B1C2D] px-2 py-0.5 rounded">AI Auto-fill</span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-5">
          {/* Project Info */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">Tên dự án</label>
              <input type="text" value="CRM Sales System" className="w-full text-sm font-bold text-[#0B1C2D] border-b border-slate-200 pb-1 focus:outline-none focus:border-[#3AE7E1] bg-transparent" readOnly />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">Mô tả tóm tắt</label>
              <textarea className="w-full text-xs text-slate-600 bg-slate-50 p-2 rounded border border-slate-200 h-20 focus:outline-none focus:border-[#3AE7E1]" readOnly>
                Hệ thống CRM quản lý khách hàng tiềm năng, tích hợp tổng đài VOIP, dashboard báo cáo doanh số realtime.
              </textarea>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
             <div>
               <label className="block text-xs font-semibold text-slate-500 mb-1">Độ ưu tiên</label>
               <div className="flex items-center gap-1.5 text-xs font-bold text-red-600 bg-red-50 px-2 py-1.5 rounded border border-red-100">
                 <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                 Critical
               </div>
             </div>
             <div>
               <label className="block text-xs font-semibold text-slate-500 mb-1">Deadline (AI gợi ý)</label>
               <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-50 px-2 py-1.5 rounded border border-slate-200">
                 <Clock className="w-3 h-3 text-slate-400" />
                 12 tuần
               </div>
             </div>
          </div>

          {/* Team Structure */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-2 flex justify-between">
              <span>Cấu trúc đội ngũ</span>
              <span className="text-slate-400 font-normal">Size: 6</span>
            </label>
            <div className="space-y-2">
              {[
                { role: 'Backend Dev', count: 2, skills: ['NodeJS', 'PostgreSQL'] },
                { role: 'Frontend Dev', count: 2, skills: ['React', 'Tailwind'] },
                { role: 'Business Analyst', count: 1, skills: ['User Stories', 'Flowchart'] },
                { role: 'QC/Tester', count: 1, skills: ['Manual Test'] },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center justify-between group hover:border-[#3AE7E1] transition-colors">
                  <div>
                    <div className="text-xs font-bold text-[#0B1C2D]">{item.role}</div>
                    <div className="text-[10px] text-slate-400">{item.skills.join(', ')}</div>
                  </div>
                  <div className="h-6 w-6 rounded bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-[#0B1C2D] shadow-sm">
                    {item.count}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PM Suggestion */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-2">Quản lý dự án đề xuất</label>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#0B1C2D] to-[#1E3A5F] text-white shadow-md">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 font-bold text-xs">
                LH
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold">Lê Hoàng</div>
                <div className="text-[10px] text-[#3AE7E1] truncate">PM Senior • Load: 60%</div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-slate-200 bg-slate-50">
          <button className="w-full py-3 bg-[#3AE7E1] text-[#0B1C2D] font-bold rounded-lg hover:shadow-lg hover:brightness-110 transition-all text-sm flex items-center justify-center gap-2">
            Xác nhận & Khởi tạo
            <Briefcase className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
