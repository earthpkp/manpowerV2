"use client";

import Link from "next/link";
import { UserCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <UserCircle className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">ManpowerNEXT</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
              หน้าแรก
            </Link>
            <Link href="/about" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
              เกี่ยวกับเรา
            </Link>
            <Link href="/contact" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
              ติดต่อ
            </Link>
            <Button>เข้าสู่ระบบ</Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              >
                หน้าแรก
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              >
                เกี่ยวกับเรา
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              >
                ติดต่อ
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full">เข้าสู่ระบบ</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}