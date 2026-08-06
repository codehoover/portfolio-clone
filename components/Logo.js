import { useTheme } from "../context/ThemeContext";

export default function Logo({ className = "h-10 w-10" }) {
  const { darkMode } = useTheme();
  const color = darkMode ? "#557bf8" : "#f85555";

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      style={{ transition: "color 300ms ease" }}
      aria-label="Esau Rahim logo"
    >
      <circle cx="32" cy="32" r="30" fill="none" stroke={color} strokeWidth="3" />
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fontSize="28"
        fontWeight="800"
        fill={color}
        fontFamily="Poppins, sans-serif"
      >
        ER
      </text>
    </svg>
  );
}
