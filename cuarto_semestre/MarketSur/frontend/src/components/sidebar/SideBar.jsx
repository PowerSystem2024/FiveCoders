import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Íconos SVG
import VenderIcon from "../../assets/receipt.svg";
//import InboxIcon from "../../assets/message.svg";
import SettingsIcon from "../../assets/settings.svg";
import LogoutIcon from "../../assets/logout.svg";
import ProfileIcon from "../../assets/user.svg";
import ProductIcon from "../../assets/object.svg";
import DiscoveryIcon from "../../assets/store.svg";
import ShoppingBag  from "../../assets/shopping.svg";

const sidebarItems = [
  { label: "Mi Perfil", hyperlink: "/UserPage", icon: ProfileIcon },
  { label: "Descubrir", hyperlink: "/ProductDiscoveryPage", icon: DiscoveryIcon },
  { label: "Mis Productos", hyperlink: "/ProductPage", icon: ProductIcon },
  { label: "Mis Ventas", hyperlink: "/projects", icon: VenderIcon },
  { label: "Mis Compras", hyperlink: "/purchases", icon: ShoppingBag },
  // { label: "Inbox", hyperlink: "/inbox", icon: InboxIcon, extra: '3' },
  { label: "Configuración", hyperlink: "/settings", icon: SettingsIcon },
  { label: "Cerrar sesión", hyperlink: "/logout", icon: LogoutIcon },
];

function Sidebar() {
  const [open, setOpen] = useState(false);

  // Bloquea el scroll del body cuando el sidebar móvil está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      {/* Botón hamburguesa - visible solo en móvil */}
      <button
        onClick={() => setOpen(true)}
        className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 rounded-md shadow"
        aria-label="Abrir menú"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Backdrop para móvil */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-200 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } sm:hidden`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 w-64 transform transition-transform duration-200
          bg-gray-900 text-white border-r border-gray-800
          ${open ? 'translate-x-0' : '-translate-x-full'}
          sm:translate-x-0 sm:static
          sm:sticky sm:top-0
          h-screen
          sm:overflow-y-auto
        `}
        aria-label="Sidebar"
      >
        <div className="h-full px-4 py-6 flex flex-col">
          {/* Header: logo + close (mobile) */}
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="flex items-center gap-3" onClick={handleLinkClick}>
              <div className="w-8 h-8 bg-orange-500 rounded" />
              <span className="text-lg font-semibold text-white">USUARIO</span>
            </Link>

            {/* Botón cerrar sólo en móvil (sm:hidden) */}
            <button
              onClick={() => setOpen(false)}
              className="sm:hidden p-2 rounded-md bg-gray-800 hover:bg-gray-700"
              aria-label="Cerrar menú"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav: crece y scrollea si es necesario */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-2 text-sm font-medium">
              {sidebarItems.map((item) => {
                const IconURL = item.icon;
                return (
                  <li key={item.hyperlink}>
                    <Link
                      to={item.hyperlink}
                      className="flex items-center p-2 rounded-md text-gray-200 hover:bg-gray-800 hover:text-white transition"
                      onClick={handleLinkClick}
                    >
                      <img
                        src={IconURL}
                        alt={`${item.label} icon`}
                        className="w-5 h-5 invert brightness-200"
                      />
                      <span className="ml-2">{item.label}</span>

                      {item.extra && (item.label === "Inbox") && (
                        <span className="ml-auto inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold bg-orange-500 text-black rounded-full">
                          {item.extra}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer opcional (pequeño espacio para info/contacto) */}
          <div className="mt-6 text-xs text-gray-400">
            <div>v0.1 • Tu app</div>
            <div className="mt-2">soporte@tuapp.local</div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;


