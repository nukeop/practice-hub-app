import { KeyboardMusic } from 'lucide-react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="container mx-auto flex items-center justify-between px-4 py-6">
      <div className="text-amber flex flex-row items-center text-2xl font-bold">
        <KeyboardMusic className="mr-2 inline-block h-8 w-8" />
        Practice Hub
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="#features"
              className="hover:text-amber transition-colors"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#how-it-works"
              className="hover:text-amber transition-colors"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              href="#pricing"
              className="hover:text-amber transition-colors"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-amber transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
