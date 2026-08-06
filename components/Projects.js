import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Weather App",
    description:
      "Created an application in HTML, CSS, and JavaScript which pulls data from the OpenWeather API to display the current weather of a select city.",
    live: "https://purpl.netlify.app/",
    code: "https://github.com/codehoover/Weather_app",
    color: "#557bf8",
  },
  {
    title: "Astro Athletics",
    description:
      "Astro Athletics is a clothing brand/ecommerce site meant to display my front-end design capabilities. Built using Next.js.",
    live: "https://astro-athletics.vercel.app/",
    code: "https://github.com/codehoover/ecom_page",
    color: "#f85555",
  },
  {
    title: "Peak",
    description:
      "Peak is a fitness app where you can create a routine and schedule your workouts. It is currently in the works and updated regularly.",
    live: "https://peak-seven.vercel.app/",
    code: "https://github.com/codehoover/peak",
    color: "#55f886",
  },
  {
    title: "Relay",
    description:
      "Relay is a blog platform developed using the MERN (MongoDB, Express, React, Node) stack.",
    live: "https://relay-seven.vercel.app/",
    code: "https://github.com/codehoover/Relay",
    color: "#ffbc48",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-5xl mx-auto bg-white dark:bg-darkbg text-[#1f1d1d] dark:text-white"
    >
      <p className="section-subheading text-yellow">Projects</p>
      <h2 className="section-heading mb-12">Here are some things I&apos;ve created!</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl p-6 bg-black/5 dark:bg-white/5 border-t-4 hover:-translate-y-1 transition-transform duration-200"
            style={{ borderColor: p.color }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <div className="flex gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} live link`}
                  className="hover:text-blue"
                >
                  <FiExternalLink size={18} />
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} github link`}
                  className="hover:text-blue"
                >
                  <FiGithub size={18} />
                </a>
              </div>
            </div>
            <p className="opacity-80 text-sm leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
