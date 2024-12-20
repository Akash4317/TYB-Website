import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/nav";
import { ModeToggle } from "@/components/ui/toggle-theme";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href='/images/tyb.svg' />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className="content-container">
              {children}
              <div className="absolute bottom-4 right-4">
                <ModeToggle />
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
