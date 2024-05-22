import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary':              'var(--color-primary)',
        'secondary':            'var(--color-secondary)',
        'tertiary':             'var(--color-tertiary)',
        'hover':                'var(--color-hover)',
        'typography':           'var(--color-typography)',
        'typography-secondary': 'var(--color-typography-secondary)',
        'tooltip':              'var(--color-tooltip)',
        'background':           'var(--color-background)',
      },
      width: {
        'thumbnail': '350px',
      },
      minWidth: {
        'default': '800px',
      },
      maxWidth: {
        'default': '800px',
      },
      height: {
        'project-card': '26rem',
      }
    },
  },
  plugins: [],
};
export default config;
