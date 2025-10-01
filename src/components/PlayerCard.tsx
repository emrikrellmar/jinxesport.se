import { motion } from 'framer-motion';
import type { Player } from '../data/rosters';

type PlayerCardProps = {
  player: Player;
  accent: string;
  index: number;
};

const PlayerCard = ({ player, accent, index }: PlayerCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.08, duration: 0.4, ease: 'easeOut' }}
    className="glass-panel relative overflow-hidden rounded-3xl p-6 shadow-lg transition hover:shadow-glow md:p-8"
  >
    <div className={'absolute inset-x-0 top-0 h-1 bg-gradient-to-r ' + accent} />
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="font-display text-2xl uppercase tracking-[0.35em] text-white md:text-3xl">{player.handle}</h3>
        <p className="text-sm text-white/60">
          {player.name} - {player.nationality}
        </p>
      </div>
      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-white/80">
        {player.role}
      </span>
    </div>
    <p className="mt-4 text-sm leading-relaxed text-white/70">{player.bio}</p>
    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/60">
      <div className="flex items-center gap-2">
        <span className="text-xs uppercase tracking-[0.35em] text-white/40">Rating</span>
        <span className="font-semibold text-white/80">{player.stats.rating.toFixed(2)}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs uppercase tracking-[0.35em] text-white/40">K/D</span>
        <span className="font-semibold text-white/80">{player.stats.kd.toFixed(2)}</span>
      </div>
      {player.socials?.twitter && (
        <a
          href={player.socials.twitter}
          target="_blank"
          rel="noreferrer"
          className="ml-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-neon transition hover:text-white"
        >
          Twitter
        </a>
      )}
      {player.socials?.twitch && (
        <a
          href={player.socials.twitch}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-neon transition hover:text-white"
        >
          Twitch
        </a>
      )}
    </div>
  </motion.div>
);

export default PlayerCard;
