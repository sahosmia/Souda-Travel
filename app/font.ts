import { Lora, Open_Sans } from "next/font/google";

export const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--lora",
});
export const open_sans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--open_sans",
});
