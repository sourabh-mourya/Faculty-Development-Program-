import { useCallback, useRef, useState } from "react";
import { imageData, navigationData } from "../data.js";
import useOutsideClick from "../hooks/useOutsideClick.js";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useOutsideClick([buttonRef, menuRef], closeMenu, isMenuOpen);

  return (
    <>
      <nav className="navbar">
        <a href="#" className="nav-logo" aria-label={navigationData.ariaLabel}>
          <img
            src={imageData.logo.src}
            alt={imageData.logo.alt}
            className="nav-logo-img"
          />
        </a>

        <div className="nav-right">
          {navigationData.links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href={navigationData.registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="nav-btn"
          >
            {navigationData.buttonLabel}
          </a>
        </div>

        <button
          ref={buttonRef}
          className="nav-hamburger"
          type="button"
          aria-label={navigationData.mobileToggleLabel}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div
        ref={menuRef}
        className={`nav-mobile-menu${isMenuOpen ? " open" : ""}`}
      >
        {navigationData.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a
          href={navigationData.registrationUrl}
          target="_blank"
          rel="noreferrer"
          className="nav-btn"
          onClick={closeMenu}
        >
          {navigationData.buttonLabel}
        </a>
      </div>
    </>
  );
}
