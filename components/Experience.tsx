export function Experience() {
  const experiences = [
    {
      period: "September 2025 — Present",
      role: "Research & Development Engineer",
      company: "Advanced World Solutions",
      description:
        "Overhauling and maintaining multiple Japanese hospital desktop applications, working across backend systems and databases to develop new functionality, improve existing features, and modernize technologies for newer versions.",
      skills: ["C++", "C", "Java", "C#", ".NET", "IBM Db2", "Git"],
    },
    {
      period: "January 2025 — May 2025",
      role: "Full-Stack Mobile Developer",
      company: "Exacon Landworth Corporation",
      description:
        "Developed a full-stack mobile application for Balay Panday, an affiliated company, integrating inventory management and point-of-sale (POS) functionality into a unified system.",
      skills: [
        "React Native",
        "TypeScript",
        "Python",
        "REST APIs",
        "MySQL",
        "Git",
      ],
    },
    {
      period: "November 2023 — January 2025",
      role: "Freelance Full-Stack Web Developer",
      company: "Freelance",
      description:
        "Developed and maintained web-based systems for two clients: a school management system covering registrar, enrollment, and departmental operations, and an electrical engineering company's internal business system covering inventory, employee payroll, task management, job tracking, and day-to-day operations.",
      skills: ["TypeScript", "SvelteKit", ".NET", "MSSQL", "Docker", "REST APIs", "Git", "DevOps"],
    },
  ];

  return (
    <section
      id="experience"
      className="border-t border-zinc-200 px-5 py-24 sm:px-8 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-blue-600 dark:text-blue-400">
          02 / Experience
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Professional experience.
        </h2>

        <div className="mt-12 border-l border-zinc-300 pl-6 dark:border-zinc-700">
          <div className="space-y-14">
            {experiences.map((experience, index) => (
              <div key={experience.role} className="relative">
                <span
                  className={`absolute -left-[31px] top-1 h-3 w-3 rounded-full ring-4 ring-zinc-50 dark:ring-zinc-950 ${
                    index === 0 ? "bg-blue-600" : "bg-zinc-400 dark:bg-zinc-600"
                  }`}
                />

                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{experience.role}</h3>

                    <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">
                      {experience.company}
                    </p>
                  </div>

                  <span className="font-mono text-xs text-zinc-500">
                    {experience.period}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-400">
                  {experience.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
