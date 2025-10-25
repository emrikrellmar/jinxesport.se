import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  discord: "",
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
  const [missingFields, setMissingFields] = useState<string[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, type, checked, value } = event.target;
    setSubmission((prev) => (prev.status === "success" ? prev : { status: "idle" }));
    setMissingFields((prev) => prev.filter((field) => field !== name));
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const missing: string[] = [];
    if (!form.name.trim()) missing.push("name");
    if (!form.email.trim()) missing.push("email");
    if (!form.discord.trim()) missing.push("discord");
    if (!form.city.trim()) missing.push("city");

    if (missing.length) {
      setMissingFields(missing);
      setSubmission({
        status: "error",
        message: "Please complete all required fields before submitting.",
      });
      return;
    }

    if (!form.gdprConsent) {
      setMissingFields((prev) => (prev.includes("gdprConsent") ? prev : [...prev, "gdprConsent"]));
      setSubmission({ status: "error", message: "Please accept the GDPR consent to join." });
      return;
    }

    setSubmission({ status: "loading" });
    setMissingFields([]);

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
        // Accept several shapes from the server: { error }, { error, detail }, { message }
        const serverMessage = detail?.error ?? detail?.detail ?? detail?.message ?? "Unexpected error while submitting form.";
        throw new Error(serverMessage);
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

  const inputClasses = (field: string) =>
    `w-full rounded-2xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 ${
      missingFields.includes(field)
        ? "border-rose-500 focus:border-rose-400 focus:ring-rose-400/40"
        : "border-white/10 focus:border-fuchsia focus:ring-fuchsia/40"
    }`;

  const checkboxClasses = (field: string) =>
    `h-5 w-5 rounded border focus:outline-none focus:ring-2 ${
      missingFields.includes(field)
        ? "border-rose-500 bg-rose-500/10 text-rose-400 focus:ring-rose-400/40"
        : "border-white/20 bg-white/10 text-fuchsia focus:ring-fuchsia/40"
    }`;

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
              <label htmlFor="name" className="text-xs uppercase tracking-[0.35em] text-white/60">
                Name <span className="ml-1 font-medium text-rose-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={inputClasses("name")}
                aria-invalid={missingFields.includes("name")}
                aria-required="true"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-[0.35em] text-white/60">
                Email Address <span className="ml-1 font-medium text-rose-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClasses("email")}
                aria-invalid={missingFields.includes("email")}
                aria-required="true"
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
                className={inputClasses("phone")}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="discord" className="text-xs uppercase tracking-[0.35em] text-white/60">
                Discord Name <span className="ml-1 font-medium text-rose-400">*</span>
              </label>
              <input
                id="discord"
                name="discord"
                type="text"
                value={form.discord}
                onChange={handleChange}
                className={inputClasses("discord")}
                aria-invalid={missingFields.includes("discord")}
                aria-required="true"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="city" className="text-xs uppercase tracking-[0.35em] text-white/60">
                City / Town <span className="ml-1 font-medium text-rose-400">*</span>
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={form.city}
                onChange={handleChange}
                className={inputClasses("city")}
                aria-invalid={missingFields.includes("city")}
                aria-required="true"
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
                className={checkboxClasses("optInEmails")}
              />
              I agree to receive updates and emails from Jinx Esport (optional).
            </label>
            <label className="inline-flex items-center gap-3 text-sm text-white/70">
              <input
                type="checkbox"
                name="gdprConsent"
                checked={form.gdprConsent}
                onChange={handleChange}
                className={checkboxClasses("gdprConsent")}
                aria-invalid={missingFields.includes("gdprConsent")}
                aria-required="true"
              />
              I consent to Jinx Esport storing my details in accordance with GDPR. <span className="ml-1 font-medium text-rose-400">*</span>
            </label>
          </div>

          {submission.status === "error" ? (
            <div className="rounded-2xl border border-rose-500/60 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
              {submission.message}
            </div>
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


