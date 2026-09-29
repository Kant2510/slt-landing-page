'use client';

/**
 * Account component
 * Include:
 * - Account avatar
 * - Account name
 * - Dropdown menu for account actions
 * - Account connected apps
 * - Account information
 * - Account settings
 * - Account preferences
 * - Logout button
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface AuthenticatedUser {
  username?: string;
  name?: string;
  image?: string;
}

interface MeResponse {
  data?: {
    user?: AuthenticatedUser;
  };
}

const MOCK_USER: AuthenticatedUser = {
  username: 'johndoe',
  name: 'John Doe',
  image: '/images/user/default-avatar.png',
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export default function Account() {
  const [user, setUser] = useState<AuthenticatedUser | null>(MOCK_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   const controller = new AbortController();

  //   const loadAccount = async () => {
  //     try {
  //       const response = await fetch(`${apiUrl}/auth/me`, {
  //         credentials: 'include',
  //         signal: controller.signal,
  //       });

  //       if (!response.ok) {
  //         if (response.status !== 401 && response.status !== 403) {
  //           throw new Error(`Unable to load account: ${response.status}`);
  //         }
  //         return;
  //       }

  //       const result: MeResponse = await response.json();
  //       setUser(result.data?.user || null);
  //     } catch (error) {
  //       if (error instanceof DOMException && error.name === 'AbortError') {
  //         return;
  //       }
  //       console.error('Unable to load account:', error);
  //     } finally {
  //       if (!controller.signal.aborted) {
  //         setIsLoading(false);
  //       }
  //     }
  //   };

  //   void loadAccount();
  //   return () => controller.abort();
  // }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${apiUrl}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`Unable to log out: ${response.status}`);
      }

      setUser(null);
      setMenuOpen(false);
    } catch (error) {
      console.error('Unable to log out:', error);
    }
  };

  if (isLoading) {
    return <span className="text-sm text-zinc-500">Loading...</span>;
  }

  if (!user) {
    return (
      <Link
        href="/api/auth/signin"
        className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
      >
        Sign In
      </Link>
    );
  }

  const displayName = user.name || user.username || 'Account';

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        className="flex items-center gap-2 focus:outline-none cursor-pointer"
        aria-expanded={menuOpen}
        aria-haspopup="menu"
      >
        <img
          src={user.image || '/default-avatar.png'}
          alt={`${displayName}'s avatar`}
          className="h-8 w-8 rounded-full object-cover"
        />
        {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 z-50 mt-2 w-56 rounded-md border border-zinc-200 bg-white shadow-lg"
            role="menu"
          >
            <div className="border-b border-zinc-100 px-4 py-3">
              <p className="truncate text-sm font-semibold text-zinc-800">{displayName}</p>
              <p className="text-xs text-zinc-500">Account</p>
            </div>
            <ul className="py-1">
              <li>
                <Link href="/" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100" role="menuitem">
                  Account Information
                </Link>
              </li>
              <li>
                <Link href="/" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100" role="menuitem">
                  Account Settings
                </Link>
              </li>
              <li>
                <Link href="/" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100" role="menuitem">
                  Account Preferences
                </Link>
              </li>
              <li>
                <Link href="/" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100" role="menuitem">
                  Connected Apps
                </Link>
              </li>
              <li className="mt-1 border-t border-zinc-100 pt-1">
                <button
                  type="button"
                  onClick={() => void 0}
                  className="block w-full px-4 py-2 text-left text-sm text-zinc-700 hover:bg-zinc-100"
                  role="menuitem"
                >
                  Logout
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
