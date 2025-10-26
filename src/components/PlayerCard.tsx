import type { Player } from "../data/rosters";

type PlayerCardProps = {
  player: Player;
};

const PlayerCard = ({ player }: PlayerCardProps) => (
  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-carbon/90 p-6 text-center shadow-[0_18px_45px_rgba(255,0,127,0.14)] card-hover">
    {player.photo && (
      <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border border-fuchsia/40">
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia/40 via-transparent to-transparent blur-md" />
        <img src={player.photo} alt={player.handle} className="relative h-full w-full object-cover hero-float" loading="lazy" />
      </div>
    )}
    <p className="mt-4 text-xs uppercase tracking-[0.35em] text-white/40">{player.role}</p>
    <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.25em] text-snow">{player.handle}</h3>
    <p className="text-sm uppercase tracking-[0.3em] text-white/40">{player.name}</p>
  </div>
);

export default PlayerCard;
