// app/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Doc Converter Logo"
            width={32}
            height={32}
            priority
          />
          <span className="text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
            Doc Converter
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/about">
            <Button variant="ghost" className="text-sm text-foreground hover:bg-muted transition">
              About
            </Button>
          </Link>
          <Link href="/privacy-policy">
            <Button variant="ghost" className="text-sm text-foreground hover:bg-muted transition">
              Privacy Policy
            </Button>
          </Link>
        </nav>

        {/* Theme Toggle */}
        <ModeToggle />
      </div>
    </header>
  );
}
