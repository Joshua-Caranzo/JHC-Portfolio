export function Projects() {
  const projects = [
    {
      title: "BPIMS",
      name: "Balay Panday Inventory Management System",
      description:
        "A full-stack mobile inventory and point-of-sale system developed for Balay Panday, combining inventory tracking and sales operations in a single application. Served as the first and sole developer of the application during its initial development.",
      type: "Mobile / Full-Stack",
      technologies: ["React Native", "TypeScript", "Python", "MySQL"],
      image: "/projects/bp-ims.png",
      github: "https://github.com/Joshua-Caranzo/BPIMS",
      live: "",
    },
    {
      title: "CARS",
      name: "Centralized Automated Record System",
      description:
        "Originally developed the core functionality of a centralized school management system covering registrar, enrollment, and departmental operations. The system was later overhauled using a newer technology stack.",
      type: "Web / Full-Stack",
      technologies: ["SvelteKit", "C#", ".NET", "MSSQL"],
      image: "/projects/ars-schools.png",
      github: "https://github.com/Joshua-Caranzo/ARS",
      live: "https://arschools.app/",
    },
    {
      title: "LifeFlow",
      name: "Personal Budget Tracker",
      description:
        "A personal finance application for managing income, expenses, savings, borrowing, and financial goals through a simple and organized interface.",
      type: "Web / Personal",
      technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
      image: "/projects/life-flow.png",
      github: "https://github.com/Joshua-Caranzo/LifeFlow",
      live: "https://life-flow-aj.vercel.app/",
    },
    {
      title: "VisTalk",
      name: "Visayan Language Learning Platform",
      description:
        "A language learning platform for Cebuano, Hiligaynon, and Waray-Waray featuring interactive lessons, games, pronunciation practice, and progress tracking.",
      type: "Mobile / Web / Full-Stack",
      technologies: ["React Native", "Flask", "MySQL", "SvelteKit"],
      image: "/projects/Vistalk.png",
      github: "https://github.com/Joshua-Caranzo/VistalkApp",
      live: "",
    },
  ];

  return (
    <section
      id="projects"
      className="border-t border-zinc-200 px-5 py-24 sm:px-8 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-blue-600 dark:text-blue-400">
          03 / Projects
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Selected work.
        </h2>

        <p className="mt-5 max-w-2xl text-zinc-600 dark:text-zinc-400">
          A selection of applications I&apos;ve designed and developed across
          web, mobile, and backend environments.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-black/20"
            >
              {/* Screenshot */}
              <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-blue-600 dark:text-blue-400">
                      {project.type}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">{project.name}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.github || project.live) && (
                  <div className="mt-6 flex gap-4 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-zinc-700 transition hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
                      >
                        GitHub ↗
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-zinc-700 transition hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
                      >
                        Live Site ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
