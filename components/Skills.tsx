const skillGroups = {
  Languages: [
    "TypeScript",
    "JavaScript",
    "C#",
    "C++",
    "C",
    "Java",
    "Python",
    "PHP",
  ],
  Frontend: [
    "React",
    "React Native",
    "Next.js",
    "Svelte",
    "SvelteKit",
    "Vue",
    "Angular",
    "Tailwind CSS",
  ],
  Backend: [".NET", "ASP.NET MVC", "Express.js", "Flask", "Django", "Laravel"],
  Databases: [
    "MySQL",
    "PostgreSQL",
    "SQL Server",
    "Oracle SQL",
    "IBM Db2",
    "MongoDB",
  ],
  "CI/CD & DevOps": ["Git", "Docker", "DevOps", "CI/CD", "Azure"],
  "AI & Development": [
    "AI-Assisted Development",
    "Prompt Engineering",
    "Code Generation",
    "AI Debugging", "Claude Vibe-Coding"
  ],
  Tools: ["GitHub", "Postman", "REST APIs", "Vercel", "YouTrack", "Jira"],
};

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-zinc-200 px-5 py-24 sm:px-8 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-blue-600 dark:text-blue-400">
          04 / Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Tools I work with.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skillGroups).map(([category, skills]) => (
            <div
              key={category}
              className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <h3 className="font-mono text-sm font-semibold">{category}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
