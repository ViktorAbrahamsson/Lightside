import { Link, NavLink } from 'react-router-dom';
import { SocialIcons } from '@/components/common/SocialIcons/SocialIcons';
import { headerSocials } from '@/data/contact';
import styles from './Footer.module.scss';

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/teams', label: 'Teams' },
  { to: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__inner']}>
        <div className={styles['footer__brand']}>
          <Link to="/" aria-label="Lightside — Home">
            <img src="/lightside-logo--blue-gradient.png" alt="Lightside" height={32} />
          </Link>
          <p className={styles['footer__tagline']}>
            Lundqvist Lightside — Competing from the shadows.
          </p>
        </div>

        <nav className={styles['footer__links']} aria-label="Footer navigation">
          <ul>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={styles['footer__link']}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles['footer__social']}>
          <SocialIcons links={headerSocials} size="sm" />
        </div>
      </div>

      <div className={styles['footer__legal']}>
        <div className={styles['footer__legal-inner']}>
          <p>© {new Date().getFullYear()} Lundqvist Lightside. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
