import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap"
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avirajsaxena.dev"),
  title: {
    default: "Aviraj Saxena | Full Stack Developer",
    template: "%s | Aviraj Saxena"
  },
  description:
    "Portfolio of Aviraj Saxena, a full stack developer, final-year CS student, open-source community leader, and AI researcher.",
  openGraph: {
    title: "Aviraj Saxena | Full Stack Developer",
    description:
      "I build things for the web, and sometimes things that think.",
    url: "https://avirajsaxena.dev",
    siteName: "Aviraj Saxena",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviraj Saxena | Full Stack Developer",
    description:
      "I build things for the web, and sometimes things that think.",
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetBrainsMono.variable} min-h-screen bg-background font-body text-foreground antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors closeButton position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
