export default function AboutMe() {
  return (
    <section
      id="aboutme"
      className="py-24 px-6 max-w-4xl mx-auto bg-white dark:bg-darkbg text-[#1f1d1d] dark:text-white"
    >
      <p className="section-subheading text-red">About Me</p>
      <h2 className="section-heading">Dedicated developer based in Canada</h2>
      <p className="mt-6 leading-relaxed opacity-90">
        I&apos;m a full stack developer with multiple years of experience covering
        numerous different projects, technologies and industries as well as a
        graduate from Toronto Metropolitan University (formerly Ryerson
        University) who&apos;s been coding since well before the degree made it
        official.
      </p>
      <p className="mt-4 leading-relaxed opacity-90">
        I&apos;ve worked with teams at{" "}
        <span className="text-green font-semibold">Nellie Health</span> and{" "}
        <span className="text-yellow font-semibold">Cloud Genie</span>, and I&apos;m
        the founder and developer of{" "}
        <span className="text-blue font-semibold">Peak Fitness</span>, a
        cross-platform fitness app currently in closed beta for coaches and
        gym-goers.
      </p>
      <p className="mt-4 leading-relaxed opacity-90">
        Outside of work I&apos;m a film nerd, a proud Raptors fan, and a video
        game player. If you feel like talking tech or have any interesting
        opportunities you think I would be a good fit for, shoot me a message!
      </p>
    </section>
  );
}
