// components/header.tsx
'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="navbar bg-base-100 shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/item1">Item 1</Link>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="/submenu1">Submenu 1</Link>
                    </li>
                    <li>
                      <Link href="/submenu2">Submenu 2</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/item3">Item 3</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="text-xl font-bold">
            Madoguchi
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/item1">Item 1</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/submenu1">Submenu 1</Link>
                  </li>
                  <li>
                    <Link href="/submenu2">Submenu 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/item3">Item 3</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/" className="btn btn-secondary">
            Ini tombol CTA
          </Link>
        </div>
      </div>
    </header>
  );
}
