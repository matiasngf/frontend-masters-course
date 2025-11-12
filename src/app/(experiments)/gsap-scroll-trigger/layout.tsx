import localFont from "next/font/local";
import noise from "./noise-overlay-300.png";

const lora = localFont({
  src: [
    {
      path: "./Lora-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "./Lora-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${lora.className} bg-(--background) text-(--font)`}
      style={
        {
          "--dark-green": "#1DB000",
          "--light-green": "#3CDE1B",
          "--font": "#3C3C3C",
          "--line": "#C6C6C6",
          "--background": "#ffffff",
        } as React.CSSProperties
      }
    >
      <div
        className="fixed inset-0 w-full h-full bg-repeat opacity-10 mix-blend-hard-light z-90 pointer-events-none"
        style={{ backgroundImage: `url(${noise.src})` }}
      />
      {children}
    </div>
  );
}
