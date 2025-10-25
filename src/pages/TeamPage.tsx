import PlayerCard from "../components/PlayerCard";
import type { Player } from "../data/rosters";

type TeamPageProps = {
  teamName: string;
  tagline: string;
  roster: Player[];
};

const TeamPage = ({ teamName, tagline, roster }: TeamPageProps) => {
  const players = roster.filter((player) => player.role !== "Coach");
  const coach = roster.find((player) => player.role === "Coach");

  return (
    <div className="space-y-16">
      <section className="rounded-[2.75rem] border border-white/10 bg-carbon/95 p-10 shadow-[0_22px_60px_rgba(255,0,127,0.16)] transition hover:border-fuchsia/40 hover:shadow-[0_28px_80px_rgba(255,0,127,0.22)] md:p-16">
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">Jinx Esport</p>
        <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.25em] text-snow md:text-5xl">{teamName}</h1>
        <p className="mt-3 text-sm uppercase tracking-[0.35em] text-fuchsia">{tagline}</p>
      </section>

      <section className="space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Roster</p>
          <h2 className="font-display text-3xl uppercase tracking-[0.25em] text-snow md:text-4xl">Lineup</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5 transition">
          {players.map((player) => (
            <PlayerCard key={`${player.handle}-${player.name}`} player={player} />
          ))}
        </div>
        {coach && (
          <div className="flex justify-center">
            <div className="max-w-sm transition">
              <PlayerCard player={coach} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default TeamPage;



