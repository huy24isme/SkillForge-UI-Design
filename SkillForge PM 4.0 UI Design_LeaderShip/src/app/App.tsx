import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Use relative path instead of alias
import { LandingPage } from './screens/LandingPage';

// Executive Components - using relative paths
import { ExecutiveLayout } from './components/ExecutiveLayout';
import { ExecutiveDashboard } from './screens/executive/ExecutiveDashboard';
import { ExecutivePersonnel } from './screens/executive/ExecutivePersonnel';
import { ExecutiveProjects } from './screens/executive/ExecutiveProjects';
import { ExecutiveAICreate } from './screens/executive/ExecutiveAICreate';
import { ExecutiveApprovals } from './screens/executive/ExecutiveApprovals';
import { ExecutiveProfile } from './screens/executive/ExecutiveProfile';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Redirects for legacy/broken links */}
        <Route path="/create-project" element={<Navigate to="/executive/ai-create" replace />} />

        {/* Executive / Leadership Routes */}
        <Route path="/executive/*" element={
          <ExecutiveLayout>
            <Routes>
              <Route index element={<ExecutiveDashboard />} />
              <Route path="personnel" element={<ExecutivePersonnel />} />
              <Route path="projects" element={<ExecutiveProjects />} />
              <Route path="ai-create" element={<ExecutiveAICreate />} />
              <Route path="approvals" element={<ExecutiveApprovals />} />
              <Route path="profile" element={<ExecutiveProfile />} />
            </Routes>
          </ExecutiveLayout>
        } />
        
        {/* Catch-all redirect to Landing Page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
