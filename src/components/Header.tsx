import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Adaptive Academic
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/#products" className="text-gray-600 hover:text-primary transition-colors">
              Our Platforms
            </Link>
            <Link href="/#features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}