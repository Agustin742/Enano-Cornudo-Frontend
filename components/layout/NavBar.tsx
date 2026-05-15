'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, type FC } from "react";
import { TbShoppingCartFilled } from "react-icons/tb";
import Hamburger from "hamburger-react";

interface MenuItem {
  readonly name: string;
  readonly href: string;
}

const MENU_ITEMS: readonly MenuItem[] = [
  { name: "Inicio", href: "inicio" },
  { name: "Categorías", href: "categorias" },
  { name: "Catálogo", href: "catalogo" },
  { name: "Minis Personalizadas", href: "minis-personalizadas" },
  { name: "Comunidad", href: "comunidad" }
] as const;

const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (id: string): void => {
    if (pathname === "/") {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }

    setIsOpen(false);
  };

  return (
    <nav
      className="
        flex h-16 w-full items-center justify-between
        px-6 md:px-8
      "
      aria-label="Main navigation"
    >
      <Link href="/" aria-label="Ir al inicio" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Enano Cornudo Logo"
          width={64}
          height={64}
          priority
          className="mr-1"
        />
        <h1 className="hidden md:block font-title text-2xl text-gold">
          EL Enano Cornudo
        </h1>
      </Link>

      <ul className="hidden md:block">
        {MENU_ITEMS.map(({ name, href }) => (
          <li key={href} className="list-none inline-block mr-6 last:mr-0">
            <button
              type="button"
              onClick={() => handleNavigation(href)}
              className="text-white hover:text-gold"
            >
              {name}
            </button>
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-4">
        <li className="list-none">
          <Link
            href="/catalogo"
            aria-label="Ir al catálogo"
          >
            <TbShoppingCartFilled size={24} />
          </Link>
        </li>

        <li className="list-none md:hidden">
          <Hamburger
            size={24}
            color="#d7cfc6"
            toggled={isOpen}
            toggle={setIsOpen}
            label="Abrir menú"
          />
        </li>
      </ul>

      <aside
        className={`
          fixed left-0 top-16
          w-full
          transition-all duration-500 ease-in-out
          md:hidden
          ${isOpen
            ? "visible h-[calc(100vh-4rem)] opacity-100 backdrop-blur"
            : "invisible max-h-0 opacity-0"
          }
        `}
        aria-hidden={!isOpen}
      >
        <ul
          className="
            mx-4 mt-4
            flex flex-col gap-6
            rounded-sm
            bg-gray-red
            px-6 py-6
          "
        >
          {MENU_ITEMS.map(({ name, href }) => (
            <li key={href} className="list-none">
              <button
                type="button"
                onClick={() => handleNavigation(href)}
                className="w-full text-left"
              >
                {name}
              </button>
            </li>
          ))}

          <li className="list-none">
            Soy un buscador en proceso
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default NavBar;