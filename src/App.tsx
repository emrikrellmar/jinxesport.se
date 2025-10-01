import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TeamsOverviewPage from './pages/TeamsOverviewPage';
import TeamPage from './pages/TeamPage';
import NotFoundPage from './pages/NotFoundPage';
import { academyRoster, mainRoster } from './data/rosters';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-midnight text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(60,248,255,0.12),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,0,110,0.1),_transparent_55%)]" />
        <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent md:block" />
      </div>
      <Navbar />
      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-24 px-6 pb-16 pt-28 md:px-8 md:pt-36">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/teams" element={<TeamsOverviewPage />} />
            <Route
              path="/teams/main"
              element={
                <TeamPage
                  teamName="Counter-Strike Main Team"
                  tagline="Elite roster competing in top-tier European leagues"
                  colorAccent="from-cobalt to-neon"
                  roster={mainRoster}
                />
              }
            />
            <Route
              path="/teams/academy"
              element={
                <TeamPage
                  teamName="Counter-Strike Academy"
                  tagline="Developing future stars with a focus on mechanics and mindset"
                  colorAccent="from-neon to-sunset"
                  roster={academyRoster}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
