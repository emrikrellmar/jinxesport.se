import { Link } from 'react-router-dom';

const GDPRPage = () => {
  return (
    <div className="space-y-6">
      <div className="text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">Privacy & Data</p>
        <h1 className="font-display text-3xl uppercase tracking-[0.25em] text-snow md:text-4xl">GDPR & Data Handling</h1>
      </div>

      <section className="rounded-[1.5rem] border border-white/10 bg-carbon/90 p-6">
        <h2 className="text-lg font-semibold">What we collect</h2>
        <p className="mt-2 text-sm text-white/60">When you apply for membership we collect your name, email, phone number, discord handle, city, and personal number (social security number) as provided in the form. We also store whether you opted in to marketing emails and your GDPR consent status.</p>

        <h2 className="mt-4 text-lg font-semibold">Why we collect it</h2>
        <p className="mt-2 text-sm text-white/60">We use this information to process membership applications, contact applicants, and manage membership records for the association. The personal number helps us uniquely identify members for administrative purposes.</p>

        <h2 className="mt-4 text-lg font-semibold">Where it's stored</h2>
        <p className="mt-2 text-sm text-white/60">Membership data is stored in a Notion database controlled by Jinx Esport. Access is restricted to authorized administrators only.</p>

        <h2 className="mt-4 text-lg font-semibold">How long we keep it</h2>
        <p className="mt-2 text-sm text-white/60">We retain membership records for as long as they are relevant to the association's activities. If you request deletion, we will remove or anonymize your data subject to any legal or administrative retention requirements.</p>

        <h2 className="mt-4 text-lg font-semibold">Your rights</h2>
        <p className="mt-2 text-sm text-white/60">You have the right to access, correct, or request deletion of your personal data. To exercise any of these rights, contact us at <a href="mailto:info@jinxesport.se" className="text-fuchsia">info@jinxesport.se</a>. We will respond to requests in accordance with GDPR timelines.</p>

        <h2 className="mt-4 text-lg font-semibold">Security</h2>
        <p className="mt-2 text-sm text-white/60">We take reasonable measures to protect your data. However, no system is completely secure — if you have concerns about the security of your data, contact us.</p>

        <p className="mt-4 text-sm text-white/60">Back to <Link to="/" className="text-fuchsia">home</Link>.</p>
      </section>
    </div>
  );
};

export default GDPRPage;
