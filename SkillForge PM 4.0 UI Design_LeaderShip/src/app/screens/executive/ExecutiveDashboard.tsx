import { 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  UserPlus, 
  Sparkles, 
  ArrowRight,
  Plus,
  FileSearch,
  MoreHorizontal
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Link } from 'react-router-dom';

const PROJECT_DATA = [
  { name: 'Triển khai', value: 12, color: '#3AE7E1' },
  { name: 'Rủi ro', value: 3, color: '#EF4444' },
  { name: 'Hoàn thành', value: 8, color: '#10B981' },
];

const HR_DATA = [
  { department: 'IT', capacity: 85, usage: 92 },
  { department: 'Marketing', capacity: 60, usage: 75 },
  { department: 'Sales', capacity: 90, usage: 45 },
  { department: 'Design', capacity: 40, usage: 88 },
  { department: 'HR', capacity: 20, usage: 30 },
];

export function ExecutiveDashboard() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { 
            label: 'Dự án đang chạy', 
            value: '12', 
            sub: '+2 so với tháng trước', 
            icon: TrendingUp, 
            color: 'text-[#3AE7E1]', 
            bg: 'bg-[#3AE7E1]/10' 
          },
          { 
            label: 'Dự án có rủi ro', 
            value: '3', 
            sub: 'Cần xử lý ngay', 
            icon: AlertTriangle, 
            color: 'text-red-500', 
            bg: 'bg-red-500/10' 
          },
          { 
            label: 'Nhân sự quá tải', 
            value: '15%', 
            sub: 'Chủ yếu ở team Tech', 
            icon: Users, 
            color: 'text-orange-500', 
            bg: 'bg-orange-500/10' 
          },
          { 
            label: 'Chưa được khai thác', 
            value: '8%', 
            sub: 'Có thể nhận thêm việc', 
            icon: UserPlus, 
            color: 'text-green-500', 
            bg: 'bg-green-500/10' 
          },
        ].map((kpi, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${kpi.bg}`}>
                <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
              </div>
              <span className="text-slate-400 cursor-pointer hover:text-slate-600">
                <MoreHorizontal className="w-5 h-5" />
              </span>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0B1C2D] mb-1">{kpi.value}</div>
              <div className="text-sm font-medium text-slate-500">{kpi.label}</div>
              <div className="text-xs text-slate-400 mt-2">{kpi.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* AI Insight Block */}
          <div className="bg-gradient-to-r from-[#0B1C2D] to-[#1E3A5F] rounded-xl p-6 shadow-lg text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4 text-[#3AE7E1]">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold uppercase tracking-wider text-sm">AI Executive Insight</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Tóm tắt hoạt động hôm nay</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300 bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Phòng Marketing đang có dấu hiệu quá tải (92% usage) do 2 dự án "Rebranding" và "Q3 Campaign" cùng chạy nước rút.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3AE7E1] mt-2 shrink-0" />
                  <span>Team Sales đã hoàn thành 85% KPI tháng, dự kiến về đích sớm 5 ngày. Có thể cân nhắc điều chuyển hỗ trợ CSKH.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-[#0B1C2D] mb-6">Tổng quan năng lực nhân sự</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={HR_DATA} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
                    <XAxis type="number" hide />
                    <YAxis dataKey="department" type="category" width={80} tick={{ fill: '#64748B' }} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{ fill: '#F1F5F9' }} />
                    <Bar dataKey="usage" name="Sử dụng (%)" fill="#3AE7E1" radius={[0, 4, 4, 0]} barSize={20} />
                    <Bar dataKey="capacity" name="Tổng lực" fill="#E2E8F0" radius={[0, 4, 4, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-[#0B1C2D] mb-6">Trạng thái dự án</h3>
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={PROJECT_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {PROJECT_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 mt-4 text-sm">
                {PROJECT_DATA.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-600">{item.name} ({item.value})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Actions & Approvals */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#0B1C2D] mb-4">Hành động nhanh</h3>
            <div className="space-y-3">
              <Link to="/executive/ai-create" className="w-full p-4 flex items-center justify-between bg-gradient-to-r from-[#0B1C2D] to-[#1E3A5F] text-white rounded-lg hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Plus className="w-5 h-5 text-[#3AE7E1]" />
                  </div>
                  <span className="font-medium">Tạo dự án mới với AI</span>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
              </Link>
              
              <Link to="/executive/projects" className="w-full p-4 flex items-center justify-between bg-slate-50 text-[#0B1C2D] rounded-lg border border-slate-200 hover:bg-slate-100 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <FileSearch className="w-5 h-5 text-slate-500" />
                  </div>
                  <span className="font-medium">Xem báo cáo chi tiết</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Pending Approvals Preview */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[#0B1C2D]">Cần phê duyệt</h3>
              <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">3 mới</span>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Tăng 2 Backend cho dự án E-com', requester: 'PM. Trần Hùng', time: '2h trước' },
                { title: 'Gia hạn deadline "App Mobile"', requester: 'PM. Lê Lan', time: '5h trước' },
                { title: 'Mua thêm gói API Google Maps', requester: 'Tech Lead', time: '1 ngày trước' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-[#3AE7E1]/30 transition-colors cursor-pointer">
                  <div className="font-medium text-[#0B1C2D] mb-1">{item.title}</div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{item.requester}</span>
                    <span>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/executive/approvals" className="w-full mt-4 py-2 text-sm text-[#3AE7E1] font-medium hover:underline block text-center">
              Xem tất cả yêu cầu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
