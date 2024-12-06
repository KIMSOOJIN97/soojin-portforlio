import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        establishRetrosansOTF: ["establishRetrosansOTF"],
        SF_HambakSnow: ["SF_HambakSnow"],
        MonoplexKRWideNerd_BoldItalic: ["MonoplexKRWideNerd-BoldItalic"],
        SDSamliphopangche_Outline: ["SDSamliphopangche_Outline"],
        GowunBatang_Regular: ["GowunBatang-Regular"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#324A7A", // 원하는 색상 추가
      },
    },
  },
  plugins: [],
} satisfies Config;
