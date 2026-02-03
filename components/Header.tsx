'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="來電司康" width={160} height={48} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition">
              首頁
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition">
              關於我們
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary transition">
              服務項目
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition">
              聯絡我們
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="選單"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                首頁
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                關於我們
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                服務項目
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                聯絡我們
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
