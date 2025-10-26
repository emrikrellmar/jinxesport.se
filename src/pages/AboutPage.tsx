import { useEffect, useState } from 'react';
import braxenPhoto from '../assets/Braxen.png';
import silhouetteMale from '../assets/silhouette.png';
import catrinPhoto from '../assets/catrin.png';

const timelineEvents = [
  {
    date: '15 February 2025',
  title: 'jinx esport founded',
  body: 'Jonas "Braxen" Johansson together with Robin Ekholm launches jinx esport with a pledge to give Swedish Counter-Strike players a professional environment built on dedication and community.',
  },
  {
    date: '28 February 2025',
  title: 'First lineup secured',
  body: 'The first official roster signs on: ovztr, wezsen, kevzozo, zilly, and flaffys - establishing the competitive core of jinx esport.',
  },
  {
    date: '15 July 2025',
  title: 'Bååten joins for ESEA S54',
  body: 'Linus "Bååten" Andersson commits to jinx esport for ESEA League Season 54, adding tier-one experience and leadership in high-pressure matches. Forming the roster with emme1, Baaten, kevvzozo, wezsen and kreppo.',
  },
  {
    date: '31 August 2025',
  title: 'Qualified for Regionalseries west',
  body: 'jinx esport secures a spot in the Swedish Regionalseries west, showcasing rapid progression through the national competitive ladder with the roster of 1kevin, kreppo, emme1, jaybn and 15ak.',
  },
  {
    date: '12 September 2025',
    title: 'Part of Swedish Esports Association',
    body: 'The organization joins SESF, aligning with the national body to continue cultivating sustainable competitive growth.',
  },
];

const leadership = [
  {
    name: 'Jonas Johansson',
    role: 'Founder',
    avatar: braxenPhoto,
  },
  {
    name: 'Robin Ekholm',
    role: 'Co-founder & Secretary',
    avatar: silhouetteMale,
  },
  {
    name: 'Catrin Lidström',
    role: 'Treasurer',
    avatar: catrinPhoto,
  },
];

const AboutPage = () => {
  const [membersCount, setMembersCount] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch('/api/notion-members-count')
      .then((r) => r.json())
      .then((data) => {
  if (!mounted) return;
  if (data && typeof data.count === 'number') setMembersCount(data.count);
  else console.warn('Could not read members count', data);
      })
      .catch((err) => {
        console.error('Failed to fetch members count', err);
        if (!mounted) return;
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="flex flex-col gap-20 pb-12">
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-carbon/80 px-8 py-12 shadow-[0_22px_60px_rgba(255,0,127,0.16)] md:flex md:items-stretch md:gap-12 md:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 translate-y-[-40%] rounded-full bg-fuchsia/20 blur-3xl" />
        <div className="absolute bottom-[-25%] right-[-10%] h-56 w-56 rounded-full bg-fuchsia/10 blur-3xl" />
      </div>
      <div className="flex-1 space-y-6">
  <p className="text-sm uppercase tracking-[0.45em] text-fuchsia/70">About jinx esport</p>
        <h1 className="font-display text-4xl uppercase tracking-[0.3em] text-snow md:text-5xl">
          Built On Competition And Care
        </h1>
        {membersCount !== null ? (
          <div className="mt-2 inline-block rounded-full bg-white/5 px-3 py-1 text-sm font-semibold text-snow">Medlemmar: {membersCount}</div>
        ) : (
          <div className="mt-2 inline-block rounded-full bg-white/5 px-3 py-1 text-sm text-white/60">Läser medlemmar…</div>
        )}
        <p className="max-w-2xl text-base text-white/70 md:text-lg">
          Founded in 2025 and based in Avesta, Sweden, jinx esport is a growing esports organization built on two strong
          foundations: competitive excellence and social responsibility. Our mission is to combine elite-level gaming
          with community work that promotes safety, inclusion, and belonging for young people who struggle to fit into
          traditional environments.
        </p>
        <p className="max-w-2xl text-base text-white/60 md:text-lg">
          Every match we play and every program we run is meant to prove that high-level esports and meaningful community
          impact can grow together inside the same club.
        </p>
      </div>
      <div className="mt-10 flex justify-center md:mt-0 md:w-[22rem] md:items-end">
        <div className="relative h-[20rem] w-[16rem] overflow-hidden rounded-[2.75rem] border border-white/10 bg-gradient-to-b from-fuchsia/20 to-transparent shadow-[0_25px_70px_rgba(255,0,127,0.22)] md:h-[26rem] md:w-[19rem]">
          <img
            src={braxenPhoto}
            alt="Braxen, founder of jinx esport"
            className="h-full w-full object-cover object-bottom"
          />
        </div>
      </div>
    </section>

    <section className="space-y-10">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.45em] text-fuchsia/70">Milestones</p>
        <h2 className="font-display text-3xl uppercase tracking-[0.3em] text-snow md:text-4xl">Timeline Of Growth</h2>
        <p className="mt-4 text-base text-white/60">
          Follow the moments that shaped jinx esport from a local idea into a club chasing national competition and
          community impact.
        </p>
      </div>

      <div className="relative mx-auto max-w-3xl pl-12">
        <span
          aria-hidden
          className="pointer-events-none absolute left-6 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-fuchsia via-fuchsia/40 to-transparent"
        />
        <ol className="space-y-10">
          {timelineEvents.map((event) => (
            <li key={event.title} className="relative pl-6">
              <span className="absolute left-[-33px] top-1 h-5 w-5 rounded-full border border-fuchsia bg-carbon shadow-[0_0_20px_rgba(255,0,127,0.65)]" />
              <div className="rounded-2xl border border-white/10 bg-carbon/70 p-6 shadow-[0_22px_60px_rgba(255,0,127,0.16)]">
                <p className="text-xs uppercase tracking-[0.4em] text-fuchsia/80">{event.date}</p>
                <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.2em] text-snow">{event.title}</h3>
                <p className="mt-3 text-sm text-white/70">{event.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="rounded-[2.75rem] border border-white/10 bg-carbon/90 px-8 py-12 shadow-[0_22px_60px_rgba(255,0,127,0.16)] md:px-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-fuchsia/70">Competitive Focus</p>
          <h2 className="font-display text-3xl uppercase tracking-[0.25em] text-snow md:text-4xl">
            Reaching The Top Of Swedish Esports
          </h2>
          <p className="text-base text-white/70 md:text-lg">
            We currently field an active Counter-Strike 2 team competing online with the goal of reaching Elitserien,
            Sweden's premier CS2 league. Our ambition is to establish jinx esport as a respected name in the Swedish esports
            scene through strong structure, long-term development, and a solid team spirit. In the future, we plan to
            expand into more titles and build a professional environment where both players and staff can grow.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-fuchsia/70">Local Engagement</p>
          <h2 className="font-display text-3xl uppercase tracking-[0.25em] text-snow md:text-4xl">
            Community And Belonging
          </h2>
          <p className="text-base text-white/70 md:text-lg">
            Esports can be a powerful tool to support local youth, especially those facing social challenges or living
            with neurodevelopmental conditions such as autism or ADHD. Many young people struggle to find their place in
            traditional sports or social settings - we want to change that.
          </p>
          <p className="text-base text-white/70 md:text-lg">
            At jinx esport, we aim to create a safe and welcoming space where everyone can be themselves, develop at their own
            pace, and feel seen and included.
          </p>
        </div>
      </div>
    </section>

    <section className="rounded-[2.75rem] border border-white/10 bg-carbon/80 px-8 py-12 shadow-[0_22px_60px_rgba(255,0,127,0.16)] md:px-16">
      <div className="space-y-6 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.4em] text-fuchsia/70">Leadership</p>
  <h2 className="font-display text-3xl uppercase tracking-[0.25em] text-snow md:text-4xl">Faces Of jinx esport</h2>
        <p className="mx-auto max-w-3xl text-base text-white/60 md:mx-0 md:text-lg">
          Meet the people shaping our competitive direction and community work every day.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {leadership.map((person) => (
          <div
            key={person.name}
            className="rounded-2xl border border-white/10 bg-ash/60 p-6 text-center shadow-[0_18px_45px_rgba(255,0,127,0.14)]"
          >
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-carbon/70">
              <img src={person.avatar} alt={`${person.name} portrait`} className="h-full w-full object-cover" />
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-fuchsia/70">{person.role}</p>
            <p className="mt-2 font-display text-xl uppercase tracking-[0.2em] text-snow">{person.name}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
  );
};

export default AboutPage;











