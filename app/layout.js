import { Urbanist } from "next/font/google";
import "./globals.css";
import Global from "@/Contexto/Global";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
const urbanist = Urbanist({ subsets: ["latin"] });
export const metadata = {
  title: "Enee Distribucion",
  description: "Hecho por Carlos Archaga",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      <Global>
      <Header/>
      <Navbar/>
      {children}
      </Global>
      </body>
    </html>
  );
}
