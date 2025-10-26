import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import NotFoundPage from './pages/NotFoundPage';
import TeamsOverviewPage from './pages/TeamsOverviewPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GDPRPage from './pages/GDPRPage';
import { academyRoster, mainRoster } from './data/rosters';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col bg-void text-snow">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia/15 blur-[140px]" />
        <div className="absolute -bottom-32 right-10 h-72 w-72 rounded-full bg-fuchsia/10 blur-[160px]" />
      </div>
      <Navbar />
      <main className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col gap-20 px-6 pb-16 pt-28 md:px-12 md:pt-36">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/teams" element={<TeamsOverviewPage />} />
          <Route
            path="/teams/main"
            element={
              <TeamPage
                teamName="Main Team"
                tagline="Core lineup competing in European circuits"
                roster={mainRoster}
              />
            }
          />
          <Route
            path="/teams/academy"
            element={
              <TeamPage
                teamName="Academy team"
                tagline="Trials underway for the next wave of talent"
                roster={academyRoster}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gdpr" element={<GDPRPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
