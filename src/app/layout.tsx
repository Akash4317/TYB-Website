import "@/styles/globals.css";
import localFont from "next/font/local";

import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "@/components/nav";
import Footer from "@/components/footer";
import MobileNav from "@/components/MobileNav";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/images/tyb.svg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
          >
            <Navbar />
            <div className="content-container overflow">
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
