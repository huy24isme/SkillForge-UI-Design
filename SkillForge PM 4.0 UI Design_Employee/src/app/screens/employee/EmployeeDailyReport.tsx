import { useState } from 'react';
import { Trophy, Calendar, CheckCircle, Clock } from 'lucide-react';

const reportHistory = [
  { id: 1, date: '2026-01-31', tasks: 'Completed user authentication module', difficulty: 'Medium', xp: 50 },
  { id: 2, date: '2026-01-30', tasks: 'Fixed 3 critical bugs in payment flow', difficulty: 'Hard', xp: 75 },
  { id: 3, date: '2026-01-29', tasks: 'Code review for 2 pull requests', difficulty: 'Easy', xp: 30 },
  { id: 4, date: '2026-01-28', tasks: 'Implemented dashboard analytics', difficulty: 'Hard', xp: 75 },
  { id: 5, date: '2026-01-27', tasks: 'Team meeting and sprint planning', difficulty: 'Easy', xp: 30 },
];

export function EmployeeDailyReport() {
  const [formData, setFormData] = useState({
    tasksCompleted: '',
    challenges: '',
    difficulty: 'medium',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ tasksCompleted: '', challenges: '', difficulty: 'medium' });
    }, 3000);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-[#2ECC71]/10 text-[#2ECC71]';
      case 'medium':
        return 'bg-[#F5A623]/10 text-[#F5A623]';
      case 'hard':
        return 'bg-[#E74C3C]/10 text-[#E74C3C]';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-gradient-to-r from-[#2ECC71] to-[#2ECC71]/90 text-white rounded-xl p-4 flex items-center gap-3 animate-slideDown">
          <CheckCircle className="w-6 h-6" />
          <div>
            <p className="font-semibold">Report Submitted Successfully!</p>
            <p className="text-sm opacity-90">You earned 50 XP and maintained your streak! 🔥</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Report Form */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#3AE7E1]/10 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-[#3AE7E1]" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Daily Report</h2>
              <p className="text-sm text-gray-600">Share your progress and earn XP!</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What tasks did you complete today? *
              </label>
              <textarea
                value={formData.tasksCompleted}
                onChange={(e) => setFormData({ ...formData, tasksCompleted: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AE7E1] focus:border-transparent resize-none"
                rows={5}
                placeholder="e.g., Completed user authentication module, Fixed 2 bugs in checkout flow..."
                required
              />
              <p className="text-xs text-gray-500 mt-1">Be specific about your accomplishments</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Any challenges or blockers?
              </label>
              <textarea
                value={formData.challenges}
                onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AE7E1] focus:border-transparent resize-none"
                rows={3}
                placeholder="e.g., Waiting for API documentation, Need design approval..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                How challenging was today's work? *
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'easy', label: 'Easy', emoji: '😊', xp: 30, color: 'border-[#2ECC71] bg-[#2ECC71]/5 text-[#2ECC71]' },
                  { value: 'medium', label: 'Medium', emoji: '🤔', xp: 50, color: 'border-[#F5A623] bg-[#F5A623]/5 text-[#F5A623]' },
                  { value: 'hard', label: 'Hard', emoji: '💪', xp: 75, color: 'border-[#E74C3C] bg-[#E74C3C]/5 text-[#E74C3C]' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, difficulty: option.value })}
                    className={`p-4 border-2 rounded-xl transition-all ${
                      formData.difficulty === option.value
                        ? option.color + ' shadow-lg scale-105'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="text-3xl mb-2">{option.emoji}</div>
                    <p className="font-semibold text-gray-900 mb-1">{option.label}</p>
                    <p className="text-xs text-gray-600">+{option.xp} XP</p>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-[#3AE7E1] to-[#2ECC71] text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 font-semibold"
            >
              <Trophy className="w-5 h-5" />
              Submit Report & Earn {formData.difficulty === 'easy' ? '30' : formData.difficulty === 'hard' ? '75' : '50'} XP
            </button>
          </form>
        </div>

        {/* Sidebar - Stats & History */}
        <div className="space-y-6">
          {/* Today's Stats */}
          <div className="bg-gradient-to-br from-[#0B1C2D] to-[#0B1C2D]/95 rounded-xl p-6 text-white">
            <h3 className="font-semibold mb-4">Today's Progress</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Reports This Week</span>
                <span className="text-2xl font-bold text-[#3AE7E1]">5/7</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Streak</span>
                <span className="text-2xl font-bold text-[#F5A623]">🔥 7</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">XP This Week</span>
                <span className="text-2xl font-bold text-[#2ECC71]">260</span>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">💡 Quick Tips</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#3AE7E1]">•</span>
                <span>Submit daily to maintain your streak</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3AE7E1]">•</span>
                <span>Hard tasks give more XP!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3AE7E1]">•</span>
                <span>Be honest about challenges - it helps the team</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Report History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Report History</h3>
        <div className="space-y-3">
          {reportHistory.map((report) => (
            <div key={report.id} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg bg-[#3AE7E1]/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#3AE7E1]" />
                </div>
                <div className="w-0.5 h-8 bg-gray-200 mt-2" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{report.tasks}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" />
                      {new Date(report.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(report.difficulty)}`}>
                      {report.difficulty}
                    </span>
                    <span className="text-xs font-medium text-[#F5A623] flex items-center gap-1">
                      +{report.xp} XP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
