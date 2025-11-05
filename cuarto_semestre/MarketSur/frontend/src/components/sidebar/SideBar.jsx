import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Backdrop para mobile cuando está abierto */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-200 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } sm:hidden`}
        aria-hidden={!open}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-2 left-0 z-40 w-64 h-screen transform transition-transform duration-200 bg-white border-r dark:bg-gray-800 dark:border-gray-700
          ${open ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:static sm:inset-auto`}
        aria-hidden={!open && window.innerWidth < 640}
        aria-label="Sidebar"
      >
        <div className="h-full px-4 py-6 overflow-y-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mb-6">
            <img src="../src/assets/MarketBolso.png" alt="Logo" className="h-7" />
            <span className="text-lg font-semibold dark:text-white">MiApp</span>
          </Link>

          {/* Nav */}
          <nav>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 3h7v7H3V3zm7 7h7v7H10V10zM3 11h7v7H3v-7z" />
                  </svg>
                  <span>Dashboard</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 3h12v2H4V3zm0 4h12v10H4V7z" />
                  </svg>
                  <span>Vender</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/inbox"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 5h16v10H2z" />
                  </svg>
                  <span>Inbox</span>
                  <span className="ml-auto inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
                    3
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/settings"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a2 2 0 00-2 2v1H6v2h2v1a2 2 0 104 0V7h2V5h-2V4a2 2 0 00-2-2z" />
                  </svg>
                  <span>Configuración</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/logout"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 7v6h6V7H7z" />
                  </svg>
                  <span>Cerrar sesión</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}