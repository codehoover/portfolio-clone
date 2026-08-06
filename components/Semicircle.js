import { useTheme } from "../context/ThemeContext";

export default function Semicircle({ className = "" }) {
  const { darkMode } = useTheme();
  const color = darkMode ? "#557bf8" : "#f85555";

  return (
    <svg
      viewBox="0 0 200 100"
      className={`pointer-events-none absolute top-0 right-0 w-40 md:w-56 ${className}`}
      style={{ transition: "color 300ms ease" }}
      aria-hidden="true"
    >
      <path d="M0,100 A100,100 0 0 1 200,100 Z" fill={color} opacity="0.9" />
    </svg>
  );
}
