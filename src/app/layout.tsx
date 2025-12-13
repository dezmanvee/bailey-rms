import "~/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Bailey's Bowen College - Result Management System",
  description: "Modern result management system for Bailey\'s Bowen College",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "white",
              border: "2px solid #800020",
            },
          }}
        />
      </body>
    </html>
  );
}
