import { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Sparkles, 
  CheckSquare, 
  User,
  LogOut,
  Bell
} from 'lucide-react';

// Use the provided logo asset


interface ExecutiveLayoutProps {
  children: ReactNode;
}

export function ExecutiveLayout({ children }: ExecutiveLayoutProps) {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Tổng quan', path: '/executive', exact: true },
    { icon: Users, label: 'Nhân sự', path: '/executive/personnel' },
    { icon: Briefcase, label: 'Dự án', path: '/executive/projects' },
    { icon: Sparkles, label: 'AI Phân tích', path: '/executive/ai-create' },
    { icon: CheckSquare, label: 'Phê duyệt', path: '/executive/approvals' },
    { icon: User, label: 'Cá nhân', path: '/executive/profile' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0B1C2D] flex flex-col fixed inset-y-0 left-0 z-50 shadow-xl">
        {/* Logo Area */}
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src="/src/assets/skillforge-logo.png" alt="SkillForge Logo" className="w-10 h-10 object-contain rounded-lg bg-white/5 p-1" />
            <div>
              <h1 className="text-white font-bold text-lg tracking-tight">SkillForge</h1>
              <p className="text-[#3AE7E1] text-xs font-medium">Leadership Hub</p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 py-6 px-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = item.exact 
              ? location.pathname === item.path
              : location.pathname.startsWith(item.path);
            
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive: active }) => `
                  flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                  ${active 
                    ? 'bg-[#3AE7E1] text-[#0B1C2D] shadow-[0_0_15px_rgba(58,231,225,0.3)]' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'}
                `}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-[#0B1C2D]' : ''}`} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* User / Footer */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3AE7E1] to-[#2563EB] flex items-center justify-center text-[#0B1C2D] font-bold text-xs">
              CEO
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">Nguyễn Văn A</p>
              <p className="text-slate-400 text-xs truncate">Chief Executive</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0B1C2D]">
              {menuItems.find(i => i.path === location.pathname)?.label || 'Dashboard'}
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              {new Date().toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-[#0B1C2D] transition-colors relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-slate-50"></span>
            </button>
          </div>
        </header>
        
        {children}
      </main>
    </div>
  );
}
