"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, X } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export function Contact() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("Message sent successfully!");
      form.reset();
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <section
        id="contact"
        className="border-t border-zinc-200 px-5 py-24 sm:px-8 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-sm text-blue-600 dark:text-blue-400">
            05 / Contact
          </p>

          <div className="mt-8 max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              I&apos;m open to Software Developer opportunities, particularly
              remote and startup environments where I can contribute across the
              stack.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => {
                setIsContactOpen(true);
                setStatus("");
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-blue-400"
            >
              <Mail size={16} />
              Email me
            </button>

            <a
              href="https://github.com/Joshua-Caranzo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold transition hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-600"
            >
              <SiGithub className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/joshua-caranzo-655474333/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold transition hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-600"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V8.99h3.56v11.46Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {isContactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm"
          onClick={() => setIsContactOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Send me a message</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  I&apos;ll get back to you as soon as I can.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
                aria-label="Close contact form"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-blue-500 dark:border-zinc-700"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-blue-500 dark:border-zinc-700"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-blue-500 dark:border-zinc-700"
                  placeholder="Write your message..."
                />
              </div>

              {status && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {status}
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-zinc-950 dark:hover:bg-blue-400"
              >
                {isSending ? "Sending..." : "Send Message"}
                {!isSending && <ArrowUpRight size={16} />}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}