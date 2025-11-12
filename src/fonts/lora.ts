import localFont from "next/font/local";

export const lora = localFont({
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