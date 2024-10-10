import { Roboto, Protest_Guerrilla } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100"],
  variable: "--font-roboto",
});
const noto = Protest_Guerrilla({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Protest_Guerrilla",
});

export const robotofont = roboto.variable;
export const notofont = noto.variable;
