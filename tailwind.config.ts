import type { Config } from "tailwindcss";

/**
 * Da Vinci Consulting Services — design tokens.
 * "Renaissance precision for behavioral healthcare": gold, ink, parchment.
 * Hex values are the single source of truth; never hardcode colors in components.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // The design's desktop-nav / mobile-overlay switch happens at 940px.
        nav: "941px",
      },
      colors: {
        ink: "#211C18",
        "ink-panel": "#2C2620",
        gold: "#B68B3C",
        "gold-bright": "#CDA14E",
        "gold-deep": "#876728",
        "gold-pale": "#E6C98A",
        forest: "#1F3D32",
        "forest-soft": "#2E5446",
        parchment: "#F6F1E7",
        cream: "#FBF8F1",
        tan: "#EDE3D0",
        "tan-line": "#E6DBC8",
        sand: "#E7DECB",
        line: "#E3D9C6",
        "card-line": "#EBE2D0",
        text: "#3A342C",
        "text-muted": "#6B6155",
        "cream-body": "#E7DECB",
        "cream-muted": "#C9C0B0",
        "footer-ink": "#211C18",
        "footer-muted": "#9B9180",
        "footer-faint": "#7A7164",
        "footer-line": "#332D26",
        success: "#1F8A5B",
        error: "#B4452F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "16px",
        frame: "18px",
        pill: "999px",
      },
      boxShadow: {
        "card-rest": "0 1px 3px rgba(33,28,24,.05)",
        "card-hover": "0 14px 34px rgba(33,28,24,.10)",
        "card-hover-pop": "0 18px 42px rgba(33,28,24,.13)",
        panel: "0 12px 36px rgba(33,28,24,.08)",
        header: "0 4px 24px rgba(33,28,24,.07)",
        step: "0 6px 18px rgba(33,28,24,.07)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        ambient: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
        rise: {
          from: { transform: "translateY(24px)" },
          to: { transform: "translateY(0)" },
        },
      },
      animation: {
        ambient: "ambient 9s ease-in-out infinite",
        rise: "rise .75s cubic-bezier(.22,1,.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
