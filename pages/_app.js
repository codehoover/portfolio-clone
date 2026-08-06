import { useCallback } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function App({ Component, pageProps }) {
  // Must be a stable function reference across the app's lifetime, per
  // @tsparticles/react's ParticlesProvider requirements.
  const initEngine = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={initEngine}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ParticlesProvider>
  );
}
