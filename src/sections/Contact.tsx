import { useState } from "react";
import type { SyntheticEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSending(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xqpaepby", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-white/5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's build something together.
          </h2>

          <p className="mt-4 text-base leading-7 text-white/50">
            Have a project, opportunity, or just want to say hello? Feel free
            to reach out.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <div className="space-y-4">
            {/* Email */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Mail size={20} />
              </div>

              <h3 className="mt-5 font-semibold text-white">
                Email
              </h3>

              <p className="mt-2 text-sm text-white/40">
                Available for opportunities and collaborations.
              </p>

              <a
                href="mailto:moohamedebrahim14@gmail.com"
                className="mt-4 inline-flex items-center gap-2 break-all text-sm text-cyan-400 transition-colors hover:text-cyan-300"
              >
                moohamedebrahim14@gmail.com
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Phone / WhatsApp */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Phone size={20} />
              </div>

              <h3 className="mt-5 font-semibold text-white">
                Phone / WhatsApp
              </h3>

              <p className="mt-2 text-sm text-white/40">
                Feel free to contact me directly on WhatsApp.
              </p>

              <a
                href="https://wa.me/201015688506"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-400 transition-colors hover:text-cyan-300"
              >
                01015688506
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <MapPin size={20} />
              </div>

              <h3 className="mt-5 font-semibold text-white">
                Location
              </h3>

              <p className="mt-2 text-sm text-white/40">
                Cairo, Egypt
              </p>
            </div>

            {/* Social Profiles */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="font-semibold text-white">
                Social Profiles
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/moohamedebrahim"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm text-white/60 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.004-.404c1.02.005 2.045.138 3.004.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.624-5.475 5.92.43.372.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12Z" />
                  </svg>

                  GitHub
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/mohamed-ebrahim-53a6193a9/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm text-white/60 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.32ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45h3.56V8.99h3.56v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0Z" />
                  </svg>

                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white/70"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-cyan-400/50"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white/70"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-cyan-400/50"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-white/70"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="How can I help?"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-cyan-400/50"
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white/70"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-cyan-400/50"
              />
            </div>

            {/* Status */}
            {status === "success" && (
              <p className="mt-4 text-sm text-green-400">
                Message sent successfully. Thank you!
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSending}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#08090b] transition-all duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
