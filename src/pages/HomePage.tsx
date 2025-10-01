import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { mainRoster } from '../data/rosters';

const HomePage = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -24 }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
    className="space-y-24"
  >
    <section className="grid gap-10 rounded-[3rem] border border-white/10 bg-gradient-to-br from-graphite/90 via-black/60 to-graphite/80 p-10 shadow-glow md:grid-cols-2 md:gap-16 md:p-16">
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <p className="text-xs uppercase tracking-[0.5em] text-neon/80">Swedish Esports Collective</p>
          <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.4em] text-white md:text-5xl">
            Jinx Esport
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/70">
            Jinx Esport fields competitive Counter-Strike rosters with a focus on disciplined fundamentals, analytics, and a relentless work ethic.
            Follow the main team across European leagues and dive into the academy where the next stars are forged.
          </p>
        </motion.div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/teams/main"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-cobalt via-neon to-sunset px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-black shadow-glow transition hover:shadow-glow"
          >
            Main Team
          </Link>
          <Link
            to="/teams/academy"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:border-neon/60 hover:bg-neon/10 hover:text-neon"
          >
            Academy
          </Link>
        </div>
        <div className="flex items-center gap-5 text-xs uppercase tracking-[0.35em] text-white/40">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neon" />
            Recent Top 4 - Nordic Masters
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sunset" />
            ESEA Advanced 2025
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -top-12 left-8 h-36 w-36 rounded-full bg-neon/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-sunset/20 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="glass-panel relative h-full overflow-hidden rounded-3xl border border-white/10 p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(27,59,255,0.25),_transparent_55%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Next Match</p>
              <p className="mt-3 font-display text-3xl uppercase tracking-[0.35em] text-white">Jinx vs Aurora</p>
              <p className="mt-3 text-sm text-white/60">European League Week 3 - October 18 - 20:00 CET</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">Highlight</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Fresh off a 2-0 sweep over Northern Wolves with a 1.28 team rating and 74% opening duel success.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="glass-panel rounded-3xl p-8"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-white/40">Identity</p>
        <h2 className="mt-3 font-display text-3xl uppercase tracking-[0.35em] text-white">Built For Clutch Rounds</h2>
        <p className="mt-4 text-sm leading-relaxed text-white/70">
          From data-driven prep to relentless individual routines, Jinx Esport commits to disciplined Counter-Strike.
          Our philosophy blends Nordic fundamentals with high-tempo mid-round calls, supported by a performance staff invested in growth.
        </p>
        <ul className="mt-6 grid gap-4 text-sm text-white/70 md:grid-cols-2">
          <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neon/80">Performance Lab</p>
            <p className="mt-2 text-sm text-white/70">In-house analytics pods deliver match prep insights and progression tracking.</p>
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.35em] text-neon/80">Esports Culture</p>
            <p className="mt-2 text-sm text-white/70">Bootcamps in Stockholm with sports psychologists and aim coaching partners.</p>
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="glass-panel flex flex-col justify-between rounded-3xl p-8"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">Academy Pipeline</p>
          <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.35em] text-white">Talent Factory</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            The academy plays weekly Nordic scrims, focusing on comms discipline, utility progressions, and adjustment to stage pressure.
          </p>
        </div>
        <Link
          to="/teams/academy"
          className="mt-6 inline-flex items-center justify-center rounded-full border border-neon/40 bg-neon/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-neon transition hover:bg-neon/20"
        >
          Explore Academy
        </Link>
      </motion.div>
    </section>

    <section className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">Featured Players</p>
          <h2 className="font-display text-3xl uppercase tracking-[0.35em] text-white">Main Roster Spotlight</h2>
        </div>
        <Link
          to="/teams/main"
          className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:border-neon/60 hover:text-neon"
        >
          Full Roster
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {mainRoster.slice(0, 3).map((player, index) => (
          <motion.div
            key={player.handle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.35 }}
            className="glass-panel rounded-3xl p-6"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-neon/80">{player.role}</p>
            <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.4em] text-white">{player.handle}</h3>
            <p className="mt-2 text-sm text-white/60">{player.name}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{player.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </motion.div>
);

export default HomePage;
