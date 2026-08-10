import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeMenuOnEscape);
    return () => window.removeEventListener("keydown", closeMenuOnEscape);
  }, []);

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ${
      isActive
        ? "text-black"
        : "text-neutral-500 hover:text-black"
    }`;

  const mobileLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `border-b border-neutral-100 py-4 text-sm uppercase tracking-[0.16em] transition-colors duration-200 last:border-b-0 ${
      isActive ? "text-black" : "text-neutral-500 hover:text-black"
    }`;

  return (
    <header className="relative z-50 border-b border-neutral-200 bg-white">
      <nav aria-label="Main navigation">
        <div className="flex h-16 w-full items-center justify-between px-5 md:h-20 md:px-6">
          <NavLink
            to="/"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900 sm:text-base md:text-lg md:tracking-[0.25em]"
          >
            Tora Nordhagen Vang
          </NavLink>

          <div className="hidden items-center gap-10 md:flex">
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>

            <NavLink to="/prosjekter" className={linkStyle}>
              Portfolio
            </NavLink>

            <NavLink to="/kontakt" className={linkStyle}>
              Contact
            </NavLink>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 md:hidden"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-px w-5 bg-current transition-transform duration-200 ${
                  isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-px w-5 bg-current transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-px w-5 bg-current transition-transform duration-200 ${
                  isMenuOpen ? "-translate-y-[8px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full border-t border-neutral-200 bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col px-5 py-2">
              <NavLink
                to="/"
                className={mobileLinkStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/prosjekter"
                className={mobileLinkStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </NavLink>

              <NavLink
                to="/kontakt"
                className={mobileLinkStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
