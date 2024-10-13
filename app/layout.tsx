import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Montserrat, Lora } from "next/font/google"; // Cambiado a Montserrat

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat" // Cambiado el nombre de la variable
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(montserrat.variable, lora.variable)}> {/* Cambiado a Montserrat */}
    <body className="antialiased text-gray-800 dark:bg-black dark:text-gray-400">
    <Providers>{children}</Providers>
    </body>
    </html>
  );
}