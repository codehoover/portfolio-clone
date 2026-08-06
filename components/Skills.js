import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const workplaces = [
  "Peak Fitness (Founder)",
  "Cloud Genie",
  "Nellie Health",
  "Toronto Metropolitan University",
];

const skills = [
  { icon: FaReact, label: "React.js", color: "#557bf8" },
  { icon: FaNodeJs, label: "Node.js", color: "#55f886" },
  { icon: SiExpress, label: "Express.js", color: "#1f1d1d" },
  { icon: SiMysql, label: "MySQL", color: "#f85555" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#557bf8" },
  { icon: FaPython, label: "Python", color: "#ffbc48" },
  { icon: SiJavascript, label: "JavaScript", color: "#ffbc48" },
  { icon: FaHtml5, label: "HTML", color: "#f85555" },
  { icon: FaCss3Alt, label: "CSS", color: "#557bf8" },
  { icon: FaJava, label: "Java", color: "#f85555" },
  { icon: SiTypescript, label: "TypeScript", color: "#557bf8" },
];

export default function Skills() {
  return (
    <section
      id="resume"
      className="py-24 px-6 max-w-5xl mx-auto bg-white dark:bg-darkbg text-[#1f1d1d] dark:text-white"
    >
      <p className="section-subheading text-blue">Skills and Experience</p>
      <h2 className="section-heading">Where I&apos;ve worked</h2>

      <div className="flex flex-wrap gap-3 mt-6 mb-16">
        {workplaces.map((place) => (
          <span
            key={place}
            className="px-4 py-2 rounded-full text-sm font-medium bg-black/5 dark:bg-white/10"
          >
            {place}
          </span>
        ))}
      </div>

      <p className="opacity-80 mb-6">
        Here are a few languages and technologies I use:
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
        {skills.map(({ icon: Icon, label, color }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 group"
            title={label}
          >
            <Icon
              size={40}
              style={{ color }}
              className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-110"
            />
            <span className="text-xs opacity-70">{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <a
          href="/Resume_EsauRahim.pdf"
          download
          className="inline-block px-6 py-3 rounded-full font-semibold text-white bg-blue hover:bg-red transition-colors"
        >
          Grab a copy of my CV
        </a>
      </div>
    </section>
  );
}
