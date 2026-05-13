import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useScrolled } from '@/hooks/useScrolled';
import { Button } from '@/components/common/Button/Button';
import { SocialIcons } from '@/components/common/SocialIcons/SocialIcons';
import { contactInfo } from '@/data/contact';
import styles from './Header.module.scss';

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/teams', label: 'Teams' },
  { to: '/community', label: 'Community' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const scrolled = useScrolled(20);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles['header--scrolled'] : ''}`}
      role="banner"
    >
      <div className={styles['header__inner']}>
        <Link to="/" className={styles['header__logo']} aria-label="Lightside — Home" onClick={closeMenu}>
          <img src="/lightside-logo--blue-gradient.png" alt="Lightside" height={36} />
        </Link>

        <nav className={styles['header__nav']} aria-label="Main navigation">
          <ul className={styles['header__nav-list']}>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to} className={styles['header__nav-item']}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `${styles['header__nav-link']} ${isActive ? styles['header__nav-link--active'] : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles['header__actions']}>
          <Button
            as="a"
            href={contactInfo.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="discord"
            size="sm"
            className={styles['header__discord-cta']}
          >
            Join Discord
          </Button>
        </div>

        <button
          className={`${styles['header__hamburger']} ${menuOpen ? styles['header__hamburger--open'] : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Rendered via portal so backdrop-filter on the header
          never creates a new containing block for position:fixed */}
      {menuOpen && createPortal(
        <div id="mobile-menu" className={styles['mobile-menu']} aria-label="Mobile navigation">
          <nav>
            <ul className={styles['mobile-menu__list']}>
              {NAV_LINKS.map(({ to, label }, i) => (
                <li
                  key={to}
                  className={styles['mobile-menu__item']}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `${styles['mobile-menu__link']} ${isActive ? styles['mobile-menu__link--active'] : ''}`
                    }
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles['mobile-menu__footer']}>
            <Button
              as="a"
              href={contactInfo.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="discord"
              onClick={closeMenu}
            >
              Join Discord
            </Button>
            <SocialIcons links={contactInfo.socials} size="sm" />
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
