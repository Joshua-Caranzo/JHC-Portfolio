export function About() {
  return (
    <section
      id="about"
      className="border-t border-zinc-200 px-5 py-24 sm:px-8 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-blue-600 dark:text-blue-400">
          01 / About
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Developer who enjoys turning problems into software.
          </h2>

          <div className="space-y-5 leading-7 text-zinc-600 dark:text-zinc-400">
            <p>
              I'm Joshua H. Caranzo, a software developer who enjoys turning
              problems into software that works and keeps working.
            </p>

            <p>
              My strongest area is backend development: designing APIs,
              structuring databases, and applying solid object-oriented
              principles to build systems that are easy to maintain and scale.
              I've built and maintained software across web, mobile, and backend
              environments, and I'm comfortable owning a feature from database
              to user interface.
            </p>

            <p>
              I hold a Japanese language certification, which lets me
              collaborate with Japanese teams, read technical documentation, and
              bridge communication in cross-cultural projects.
            </p>

            <p>
              I'm currently open to a full-stack or backend opportunities. Let's talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
