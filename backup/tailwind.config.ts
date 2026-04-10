import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050508",
        surface: "#0a0a0f",
        card: "rgba(10, 10, 15, 0.6)",
        primary: "#00e5ff", // neon cyan
        secondary: "#b400ff", // neon purple
        textMain: "#ffffff",
        textMuted: "#8e8e9f",
      },
      boxShadow: {
        'holographic': '0 0 15px rgba(0,229,255,0.3), inset 0 0 20px rgba(0,229,255,0.1)',
        'holographic-hover': '0 0 30px rgba(0,229,255,0.6), inset 0 0 30px rgba(0,229,255,0.3)',
        'neon': '0 0 20px rgba(180,0,255,0.5)',
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
