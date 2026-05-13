import { Link, NavLink } from 'react-router-dom';
import { SocialIcons } from '@/components/common/SocialIcons/SocialIcons';
import { contactInfo } from '@/data/contact';
import styles from './Footer.module.scss';

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={styles['footer__ext-icon']}
    >
      <path d="M5 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7" />
      <path d="M8 1h3v3M11 1 6.5 5.5" />
    </svg>
  );
}

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
          <SocialIcons links={contactInfo.socials} size="sm" />
        </div>

        <nav className={styles['footer__col']} aria-label="Organization links">
          <p className={styles['footer__col-heading']}>Organization</p>
          <ul>
            <li>
              <NavLink to="/about" className={styles['footer__col-link']}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={styles['footer__col-link']}>
                Sponsors
              </NavLink>
            </li>
            <li>
              <a
                href="https://www.manatee.gg/collections/lundqvist-lightside"
                target="_blank"
                rel="noopener noreferrer"
                className={styles['footer__col-link']}
              >
                Merch Store <ExternalLinkIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles['footer__legal']}>
        <div className={styles['footer__legal-inner']}>
          <p>© {new Date().getFullYear()} Lundqvist Lightside. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
