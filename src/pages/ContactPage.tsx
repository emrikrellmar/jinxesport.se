import mailIcon from '../assets/mailicon.webp';
import braxenPhoto from '../assets/Braxen.png';
import silhouetteMale from '../assets/silhouette.png';
import catrinPhoto from '../assets/catrin.png';
import silhouetteFemale from '../assets/womansilhouette.png';

const contacts = [
  {
    name: 'General Contact',
    role: 'All inquiries',
    email: 'info@jinxesport.se',
    avatar: mailIcon,
  },
  {
    name: 'Jonas Johansson',
    role: 'Founder',
    email: 'jonas.johansson@jinxesport.se',
    avatar: braxenPhoto,
  },
  {
    name: 'Robin Ekholm',
    role: 'Co-founder & Secretary',
    email: 'robin.ekholm@jinxesport.se',
    avatar: silhouetteMale,
  },
  {
    name: 'Catrin Lidström',
    role: 'Treasurer',
    email: 'catrin.lidstrom@jinxesport.se',
    avatar: catrinPhoto,
  },
];

const ContactPage = () => (
  <div className="flex flex-col gap-16 pb-12">
    <section className="rounded-[2.75rem] border border-white/10 bg-carbon/90 px-8 py-12 text-center shadow-[0_22px_60px_rgba(255,0,127,0.16)] md:px-16">
      <p className="text-xs uppercase tracking-[0.4em] text-fuchsia/70">Contact</p>
      <h1 className="mt-3 font-display text-4xl uppercase tracking-[0.3em] text-snow md:text-5xl">Connect With J!nX</h1>
      <p className="mx-auto mt-6 max-w-3xl text-base text-white/70 md:text-lg">
        Reach out to the team for competitive opportunities, community partnerships, or support. We welcome every message
        from people who share our passion for esports and a safer space for young players.
      </p>
    </section>

    <section className="rounded-[2.75rem] border border-white/10 bg-carbon/80 px-8 py-12 shadow-[0_22px_60px_rgba(255,0,127,0.16)] md:px-16">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {contacts.map((contact) => (
          <div
            key={contact.email}
            className="flex flex-col items-center rounded-2xl border border-white/10 bg-ash/60 p-6 text-center shadow-[0_18px_45px_rgba(255,0,127,0.14)]"
          >
            {contact.avatar ? (
              <div className="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-carbon/70">
                <img src={contact.avatar} alt={`${contact.name} portrait`} className="h-full w-full object-cover" />
              </div>
            ) : null}
            <p className="text-xs uppercase tracking-[0.35em] text-fuchsia/70">{contact.role}</p>
            <p className="mt-2 font-display text-xl uppercase tracking-[0.2em] text-snow">{contact.name}</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-4 inline-flex items-center text-sm text-white/70 transition hover:text-fuchsia"
            >
              {contact.email}
            </a>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default ContactPage;
