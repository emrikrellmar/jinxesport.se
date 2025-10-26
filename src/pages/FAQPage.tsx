const faqs = [
  {
    q: 'Why do you ask for the last 4 digits of my social security number and my address?',
    a: 'This is a verification step required by our partners to prevent duplicate or fraudulent registrations. We only store what is necessary to verify your identity and membership, full SSNs are never requested.',
  },
  {
    q: "Will I receive advertising or spam after registering?",
    a: 'No. We do not send unsolicited advertising. From time to time we send important updates about the club or membership, usually only a few messages per year.',
  },
  {
    q: "Is there a membership fee for jinx esport?",
    a: "No, membership with jinx esport is free of charge.",
  },
  {
    q: 'How do I apply to be a player, coach or staff member?',
    a: 'Send us an email via the Contact page with a short description of your experience and role of interest. We will follow up with next steps and any trials or interviews.',
  },
  {
    q: 'How do you handle my personal data?',
    a: 'We process personal data only for membership administration and statutory requirements. You can read more on our Privacy page which explains what we store, why, and how long we keep it.',
  },
  {
    q: 'Can I update or delete my membership information?',
    a: 'Yes. Contact us via the Contact page or email and we will update or remove your details in accordance with applicable data protection law.',
  },
  {
    q: 'Who can I contact for support or questions?',
    a: 'Use the Contact page to reach our team. For urgent membership or competition issues please add "Membership" in the subject line so we can prioritise your message.',
  },
];

import { useState } from 'react';

const Question = ({ q, a, index, openIndex, setOpenIndex }: { q: string; a: string; index: number; openIndex: number | null; setOpenIndex: (n: number | null) => void; }) => {
  const open = openIndex === index;
  return (
    <div className="rounded-2xl border border-white/8 bg-carbon/70 shadow-sm">
      <button
        aria-expanded={open}
        aria-controls={`faq-${index}`}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        onClick={() => setOpenIndex(open ? null : index)}
      >
        <span className="block">
          <h3 className="font-display text-lg uppercase tracking-[0.18em] text-snow">{q}</h3>
        </span>
        <svg className={`h-5 w-5 text-white/60 chev-rotate ${open ? 'open' : ''}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div id={`faq-${index}`} className={`px-6 pb-6 collapse-content ${open ? 'collapse-open' : ''}`} role="region" aria-labelledby={`faq-${index}-header`}>
        <p className="text-sm text-white/70">{a}</p>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.45em] text-fuchsia/70">FAQ</p>
        <h1 className="font-display text-4xl uppercase tracking-[0.25em] text-snow">Frequently Asked Questions</h1>
        <p className="max-w-3xl text-base text-white/70">Answers to common questions about membership, privacy and joining jinx esport.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {faqs.map((f, i) => (
          <Question key={f.q} q={f.q} a={f.a} index={i} openIndex={openIndex} setOpenIndex={setOpenIndex} />
        ))}
      </section>

      <section className="text-sm text-white/60">
        <p>If you don't find an answer here, please contact us via the Contact page and we will help you promptly.</p>
      </section>
    </div>
  );
};

export default FAQPage;
