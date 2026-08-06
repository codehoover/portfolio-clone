import { useMemo } from "react";
import { Particles } from "@tsparticles/react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Semicircle from "./Semicircle";

const NAME_COLORS = ["#55f886", "#f85555", "#557bf8", "#ffbc48"];

function InteractiveName() {
  const letters = "Esau".split("");
  return (
    <span className="inline-flex">
      {letters.map((letter, i) => (
        <span
          key={i}
          className="transition-transform duration-200 hover:-translate-y-2 hover:scale-125 cursor-pointer"
          style={{ color: NAME_COLORS[i % NAME_COLORS.length] }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.5 } },
          push: { quantity: 3 },
        },
      },
      particles: {
        color: { value: ["#55f886", "#f85555", "#557bf8", "#ffbc48"] },
        links: {
          color: "#557bf8",
          distance: 130,
          enable: true,
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
          outModes: { default: "bounce" },
        },
        number: {
          density: { enable: true, area: 900 },
          value: 60,
        },
        opacity: { value: 0.6 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3.5 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-darkbg text-[#1f1d1d] dark:text-white"
    >
      <Semicircle />

      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-0"
        options={options}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <p className="text-blue font-semibold mb-4 tracking-wide">
          Passionate Developer based in Canada
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Hi! I&apos;m <InteractiveName />, <br /> A Software Developer.
        </h1>
        <div className="flex gap-5">
          <a
            href="https://github.com/codehoover"
            target="_blank"
            rel="noreferrer"
            aria-label="github link"
            className="p-3 rounded-full bg-black/5 dark:bg-white/10 hover:text-green transition-colors"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/esau-rahim-b7905b139/"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin profile link"
            className="p-3 rounded-full bg-black/5 dark:bg-white/10 hover:text-blue transition-colors"
          >
            <FiLinkedin size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
