import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/app/components/Layout';
import { Dashboard } from '@/app/screens/Dashboard';
import { CreateProject } from '@/app/screens/CreateProject';
import { TeamMatching } from '@/app/screens/TeamMatching';
import { ProjectOverview } from '@/app/screens/ProjectOverview';
import { DailyReport } from '@/app/screens/DailyReport';
import { UserProfile } from '@/app/screens/UserProfile';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/team-matching" element={<TeamMatching />} />
          <Route path="/projects" element={<ProjectOverview />} />
          <Route path="/daily-report" element={<DailyReport />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Layout>
    </Router>
  );
}
