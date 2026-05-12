import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useScrolled } from '@/hooks/useScrolled';
import { Button } from '@/components/common/Button/Button';
import { contactInfo, headerSocials } from '@/data/contact';
import { SocialIcons } from '@/components/common/SocialIcons/SocialIcons';
import styles from './Header.module.scss';

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/teams', label: 'Teams' },
];

export function Header() {
  const scrolled = useScrolled(20);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles['header--scrolled'] : ''}`}
      role="banner"
    >
      <div className={styles['header__inner']}>
        <Link to="/" className={styles['header__logo']} aria-label="Lightside — Home" onClick={closeMenu}>
          <img src="/lightside-logo--blue-gradient.png" alt="Lightside" height={36} />
        </Link>

        <nav className={`${styles['header__nav']} ${menuOpen ? styles['header__nav--open'] : ''}`} aria-label="Main navigation">
          <ul className={styles['header__nav-list']}>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to} className={styles['header__nav-item']}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `${styles['header__nav-link']} ${isActive ? styles['header__nav-link--active'] : ''}`
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles['header__actions']}>
          <SocialIcons links={headerSocials} size="sm" />
          <Button
            as="a"
            href={contactInfo.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
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
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className={styles['header__mobile-menu']}>
          <nav aria-label="Mobile navigation">
            <ul className={styles['header__mobile-list']}>
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `${styles['header__mobile-link']} ${isActive ? styles['header__mobile-link--active'] : ''}`
                    }
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles['header__mobile-social']}>
            <SocialIcons links={headerSocials} size="sm" />
          </div>
          <Button
            as="a"
            href={contactInfo.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Join Discord
          </Button>
        </div>
      )}
    </header>
  );
}
