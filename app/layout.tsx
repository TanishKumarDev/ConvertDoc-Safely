import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "File Converter",
  description: "Convert files using FFmpeg.wasm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {/* Allow page to fill remaining space */}
          <div className="flex-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
