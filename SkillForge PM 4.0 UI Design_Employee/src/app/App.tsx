import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/app/components/Layout';
import { EmployeeLayout } from '@/app/components/EmployeeLayout';
import { LandingPage } from '@/app/screens/LandingPage';
import { Dashboard } from '@/app/screens/Dashboard';
import { CreateProject } from '@/app/screens/CreateProject';
import { TeamMatching } from '@/app/screens/TeamMatching';
import { ProjectOverview } from '@/app/screens/ProjectOverview';
import { DailyReport } from '@/app/screens/DailyReport';
import { UserProfile } from '@/app/screens/UserProfile';
import { EmployeeDashboard } from '@/app/screens/employee/EmployeeDashboard';
import { EmployeeDailyReport } from '@/app/screens/employee/EmployeeDailyReport';
import { EmployeeProjects } from '@/app/screens/employee/EmployeeProjects';
import { EmployeeQuests } from '@/app/screens/employee/EmployeeQuests';
import { EmployeeRewards } from '@/app/screens/employee/EmployeeRewards';
import { EmployeeProfile } from '@/app/screens/employee/EmployeeProfile';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Management/Admin Routes */}
        <Route path="/admin/*" element={
          <Layout>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="create-project" element={<CreateProject />} />
              <Route path="team-matching" element={<TeamMatching />} />
              <Route path="projects" element={<ProjectOverview />} />
              <Route path="daily-report" element={<DailyReport />} />
              <Route path="profile" element={<UserProfile />} />
            </Routes>
          </Layout>
        } />

        {/* Employee Routes */}
        <Route path="/employee/*" element={
          <EmployeeLayout>
            <Routes>
              <Route index element={<EmployeeDashboard />} />
              <Route path="daily-report" element={<EmployeeDailyReport />} />
              <Route path="projects" element={<EmployeeProjects />} />
              <Route path="quests" element={<EmployeeQuests />} />
              <Route path="rewards" element={<EmployeeRewards />} />
              <Route path="profile" element={<EmployeeProfile />} />
            </Routes>
          </EmployeeLayout>
        } />
      </Routes>
    </Router>
  );
}
