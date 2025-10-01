import { motion } from 'framer-motion';
import PlayerCard from '../components/PlayerCard';
import type { Player } from '../data/rosters';

type TeamPageProps = {
  teamName: string;
  tagline: string;
  colorAccent: string;
  roster: Player[];
};

const TeamPage = ({ teamName, tagline, colorAccent, roster }: TeamPageProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -24 }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
    className="space-y-16"
  >
    <section className="glass-panel rounded-[3rem] border border-white/10 bg-white/5 p-10 md:p-16">
      <p className="text-xs uppercase tracking-[0.35em] text-white/50">Jinx Esport</p>
      <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.35em] text-white md:text-5xl">{teamName}</h1>
      <p className="mt-4 text-sm uppercase tracking-[0.4em] text-neon/80">{tagline}</p>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70">
        Built on discipline, game theory, and Stockholm-based bootcamps, the roster pushes aggressive tempo without losing structure.
        Each player embraces constant review cycles, data-informed practice goals, and a mentality shaped around clutch resilience.
      </p>
    </section>

    <section className="glass-panel rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="font-display text-2xl uppercase tracking-[0.35em] text-white">Identity Snapshot</h2>
      <div className="mt-6 grid gap-4 text-sm text-white/70 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">Playstyle</p>
          <p className="mt-2 text-sm text-white/70">Fast executes blended with late-round lurks and structured defaults.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">Practice Volume</p>
          <p className="mt-2 text-sm text-white/70">Six scrim blocks weekly plus server reviews and individual VOD lab.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">Performance Staff</p>
          <p className="mt-2 text-sm text-white/70">Coach, analyst, and sports psychology partners on rotation.</p>
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">Roster</p>
          <h2 className="font-display text-3xl uppercase tracking-[0.35em] text-white">Lineup</h2>
        </div>
        <div className="text-xs uppercase tracking-[0.35em] text-white/50">
          Average Rating {(
            roster.reduce((acc, player) => acc + player.stats.rating, 0) / roster.length
          ).toFixed(2)}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {roster.map((player, index) => (
          <PlayerCard key={player.handle} player={player} accent={colorAccent} index={index} />
        ))}
      </div>
    </section>
  </motion.div>
);

export default TeamPage;
