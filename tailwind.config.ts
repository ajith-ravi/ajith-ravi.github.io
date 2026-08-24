import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#0A0A0A",
        panel: "#121212",
        ink: "#EAEAE6",
        muted: "#9B9B94",
        line: "#262626",
        signal: "#F5F5F2",
        cyan: "#CFCFC8",
        bronze: "#8C8C85",
        silver: "#B5B5AE",
        gold: "#E8E8E2"
      },
      fontFamily: {
        display: ["'Instrument Sans'", "system-ui", "sans-serif"],
        body: ["'Instrument Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"]
      },
      boxShadow: {
        card: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.5)",
        glow: "0 0 40px rgba(255,255,255,0.12)"
      }
    }
  },
  plugins: []
};
export default config;
