import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeamsOverviewPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -24 }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
    className="space-y-16"
  >
    <section className="glass-panel rounded-[3rem] border border-white/10 bg-white/5 p-10 md:p-16">
      <p className="text-xs uppercase tracking-[0.4em] text-white/40">Jinx Esport</p>
      <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.35em] text-white md:text-5xl">
        Competitive Divisions
      </h1>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70">
        Two rosters share one culture. Our Counter-Strike program blends the experience of our main team with the hunger of our academy.
        Scroll for a quick overview and dive deep into each roster for lineups, philosophies, and highlight reels.
      </p>
    </section>

    <section className="grid gap-10 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35 }}
        className="glass-panel flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-cobalt/40 via-graphite/80 to-midnight/80 p-8"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Flagship Roster</p>
          <h2 className="mt-3 font-display text-3xl uppercase tracking-[0.35em] text-white">Counter-Strike Main</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            European league veterans pushing playoffs every split. Expect tactical depth, drilled utility, and fearless executes.
          </p>
        </div>
        <ul className="grid gap-3 text-sm text-white/70">
          <li className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-neon" /> Peak HLTV rating 30 in 2025 qualifier season
          </li>
          <li className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-sunset" /> 74% pistol win rate over last 20 maps
          </li>
          <li className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cobalt" /> Double-bootcamp ahead of Copenhagen Major qualifiers
          </li>
        </ul>
        <Link
          to="/teams/main"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:border-neon/60 hover:bg-neon/10 hover:text-neon"
        >
          View Main Team
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1, duration: 0.35 }}
        className="glass-panel flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-neon/30 via-graphite/70 to-midnight/80 p-8"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Development Stage</p>
          <h2 className="mt-3 font-display text-3xl uppercase tracking-[0.35em] text-white">Counter-Strike Academy</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Rising talent in structured programs with analyst support, mental coaching, and frequent scrim blocks with the main roster.
          </p>
        </div>
        <ul className="grid gap-3 text-sm text-white/70">
          <li className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-neon" /> Focus on fundamentals and communication systems
          </li>
          <li className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-sunset" /> Weekly mixed scrims with main roster for experience
          </li>
          <li className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cobalt" /> Pathway agreement with Nordic collegiate leagues
          </li>
        </ul>
        <Link
          to="/teams/academy"
          className="inline-flex items-center justify-center rounded-full border border-neon/40 bg-neon/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-neon transition hover:bg-neon/20"
        >
          View Academy
        </Link>
      </motion.div>
    </section>
  </motion.div>
);

export default TeamsOverviewPage;
