import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Esau Rahim | Software Developer</title>
        <meta name="description" content="Passionate Developer based in Canada" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Contact />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
