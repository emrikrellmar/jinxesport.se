import { Link } from 'react-router-dom';

const CookiesPage = () => {
  return (
    <div className="space-y-6">
      <div className="text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">Privacy & Data</p>
        <h1 className="font-display text-3xl uppercase tracking-[0.25em] text-snow md:text-4xl">Cookies Policy</h1>
        <p className="mt-2 text-sm text-white/60">Last updated: October 26, 2025</p>
      </div>

      <section className="rounded-[1.5rem] border border-white/10 bg-carbon/90 p-6 space-y-4">
        <p className="text-sm text-white/60">This Cookies Policy explains how jinx esport uses cookies and similar tracking technologies when you visit or interact with our website.</p>

        <h2 className="text-lg font-semibold">What are cookies?</h2>
        <p className="text-sm text-white/60">Cookies are small text files placed on your device to store information and improve your experience. They can be persistent (remain after you close your browser) or session-based (deleted when you close your browser).</p>

        <h2 className="text-lg font-semibold">Why we use cookies</h2>
        <p className="text-sm text-white/60">We use cookies to: enable essential site functionality, remember preferences, analyze traffic and performance, and deliver tailored content. Analytics and advertising cookies are used only when you give your consent.</p>

        <h2 className="text-lg font-semibold">Types of cookies we use</h2>
        <ul className="ml-4 list-disc text-sm text-white/60">
          <li><strong>Strictly necessary cookies</strong> — required for the website to work.</li>
          <li><strong>Functionality cookies</strong> — remember choices you make (language, region).</li>
          <li><strong>Performance and analytics cookies</strong> — help us understand how visitors interact with the site.</li>
          <li><strong>Advertising cookies</strong> — (only with consent) used to serve relevant advertising and measure ads.</li>
        </ul>

        <h2 className="text-lg font-semibold">Managing cookies</h2>
        <p className="text-sm text-white/60">You can control cookie preferences using the cookie banner or through your browser settings. Note that disabling certain cookies may affect functionality.</p>

        <h2 className="text-lg font-semibold">Third-party cookies</h2>
        <p className="text-sm text-white/60">Third parties (like analytics providers or advertising networks) may set cookies on our site. Their use is subject to their own policies.</p>

        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="text-sm text-white/60">If you have questions about our Cookies Policy, contact us via the <Link to="/contact" className="text-fuchsia">contact page</Link> or email <a href="mailto:info@jinxesport.se" className="text-fuchsia">info@jinxesport.se</a>.</p>

        <p className="mt-4 text-sm text-white/60">Back to <Link to="/" className="text-fuchsia">home</Link>.</p>
      </section>
    </div>
  );
};

export default CookiesPage;
