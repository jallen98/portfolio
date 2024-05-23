import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/header";
import { spaceGrotesk } from "./ui/fonts";

export const metadata: Metadata = {
  title: "James Allen Portfolio",
  description: "James Allen's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <div className="w-screen flex justify-center">
          <div className="max-w-default min-w-full pl-5 pr-5 pb-5 md:min-w-default">
            <Header/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
