import Link from 'next/link';

export const Footer = () => (
  <footer className="bg-deep-brown text-soft-teal py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="text-amber mb-4 text-2xl font-bold md:mb-0">
          Practice Hub
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="hover:text-amber transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-amber transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-amber transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-amber transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">{/* social media icons here */}</div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Practice Hub. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
