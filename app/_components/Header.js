'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[#182c54]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 border-b">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Image src="/logo.svg" width={50} height={75} alt="Logo" />
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } absolute left-0 right-0 top-16 z-20 bg-[#182c54] md:static md:block`}
            >
              <ul className="flex flex-col items-center gap-6 text-sm md:flex-row">
                {['Home', 'Upload', 'About Us', 'Contact Us', 'Blog'].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === 'Upload' ? '/upload' : '#'}
                      className="text-white transition hover:text-blue-500/75"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/sign-in"
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary"
                    href="/sign-up"
                  >
                    Register
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}