import { useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  discord: "",
  personalNumber: "",
  city: "",
  optInEmails: false,
  gdprConsent: false,
};

type FormState = typeof initialForm;

type SubmissionState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; message: string };

const MembershipForm = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, type, checked, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const missingFields: string[] = [];
    if (!form.fullName.trim()) missingFields.push("Full Name");
    if (!form.email.trim()) missingFields.push("Email");
    if (!form.discord.trim()) missingFields.push("Discord Name");
    if (!form.personalNumber.trim()) missingFields.push("Personal Number");
    if (!form.city.trim()) missingFields.push("City / Town");

    if (missingFields.length) {
      setSubmission({
        status: "error",
        message: `Please fill in: ${missingFields.join(", ")}.`,
      });
      return;
    }

    if (!form.gdprConsent) {
      setSubmission({ status: "error", message: "Please accept the GDPR consent to join." });
      return;
    }

    setSubmission({ status: "loading" });

    try {
      const response = await fetch("/api/notion-membership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const detail = await response.json().catch(() => ({}));
        throw new Error(detail?.error ?? "Unexpected error while submitting form.");
      }

      setSubmission({ status: "success" });
      setForm(initialForm);
    } catch (error) {
      setSubmission({
        status: "error",
        message: error instanceof Error ? error.message : "Failed to submit form.",
      });
    }
  };

  return (
    <section className="rounded-[2.75rem] border border-white/10 bg-carbon/95 p-10 shadow-[0_22px_60px_rgba(255,0,127,0.16)] md:p-16">
      <div className="mx-auto max-w-3xl space-y-10">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-fuchsia/70">Join The Club</p>
          <h2 className="font-display text-3xl uppercase tracking-[0.25em] text-snow md:text-4xl">
            Become A Member Of Jinx Esport
          </h2>
          <p className="text-base text-white/60">
            Fill out the form below to apply for membership in the Jinx Esport association. We will review your
            submission and reach out with next steps.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-xs uppercase tracking-[0.35em] text-white/60">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={form.fullName}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-fuchsia focus:outline-none focus:ring-2 focus:ring-fuchsia/40"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-[0.35em] text-white/60">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-fuchsia focus:outline-none focus:ring-2 focus:ring-fuchsia/40"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs uppercase tracking-[0.35em] text-white/60">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-fuchsia focus:outline-none focus:ring-2 focus:ring-fuchsia/40"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="discord" className="text-xs uppercase tracking-[0.35em] text-white/60">
                Discord Name
              </label>
              <input
                id="discord"
                name="discord"
                type="text"
                required
                value={form.discord}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-fuchsia focus:outline-none focus:ring-2 focus:ring-fuchsia/40"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="personalNumber" className="text-xs uppercase tracking-[0.35em] text-white/60">
                Personal Number
              </label>
              <input
                id="personalNumber"
                name="personalNumber"
                type="text"
                required
                value={form.personalNumber}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-fuchsia focus:outline-none focus:ring-2 focus:ring-fuchsia/40"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="city" className="text-xs uppercase tracking-[0.35em] text-white/60">
                City / Town
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                value={form.city}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-fuchsia focus:outline-none focus:ring-2 focus:ring-fuchsia/40"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="inline-flex items-center gap-3 text-sm text-white/70">
              <input
                type="checkbox"
                name="optInEmails"
                checked={form.optInEmails}
                onChange={handleChange}
                className="h-5 w-5 rounded border-white/20 bg-white/10 text-fuchsia focus:ring-fuchsia/40"
              />
              I agree to receive updates and emails from Jinx Esport (optional).
            </label>
            <label className="inline-flex items-center gap-3 text-sm text-white/70">
              <input
                type="checkbox"
                name="gdprConsent"
                checked={form.gdprConsent}
                onChange={handleChange}
                className="h-5 w-5 rounded border-white/20 bg-white/10 text-fuchsia focus:ring-fuchsia/40"
                required
              />
              I consent to Jinx Esport storing my details in accordance with GDPR.
            </label>
          </div>

          {submission.status === "error" ? (
            <p className="text-sm text-red-400">{submission.message}</p>
          ) : null}
          {submission.status === "success" ? (
            <p className="text-sm text-emerald-400">Thank you! Your membership request has been received.</p>
          ) : null}

          <button
            type="submit"
            disabled={submission.status === "loading"}
            className="inline-flex items-center rounded-full bg-fuchsia px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-void transition hover:bg-white disabled:cursor-not-allowed disabled:bg-white/40"
          >
            {submission.status === "loading" ? 'Submitting...' : 'Apply for Membership'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default MembershipForm;
