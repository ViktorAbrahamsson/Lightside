import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button/Button';
import { PageSeo } from '@/components/common/PageSeo/PageSeo';
import { teams } from '@/data/teams';
import { sponsors } from '@/data/sponsors';
import styles from './Home.module.scss';

export function Home() {
  return (
    <>
    <PageSeo
      title="Swedish Esports Organization"
      description="Lundqvist Lightside is a competitive esports organization based in Sweden, competing in League of Legends across Swedish and Nordic circuits."
      path="/"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SportsOrganization',
      name: 'Lundqvist Lightside',
      url: 'https://www.lightsideesports.gg',
      logo: 'https://www.lightsideesports.gg/lightside-logo--blue-gradient.png',
      description: 'Swedish esports organization competing in League of Legends across Swedish and Nordic circuits.',
      location: { '@type': 'Country', name: 'Sweden' },
      sport: 'Esports',
      sameAs: [
        'https://x.com/LightsideSWE',
        'https://discord.gg/vhUSjARa3N',
        'https://www.instagram.com/Lundqvistlightside/',
      ],
    }) }} />
    <main>
      <section className={styles['hero']} aria-label="Hero">
        <div className={styles['hero__bg']} aria-hidden="true" />
        <div className={styles['hero__overlay']} aria-hidden="true" />
        <div className={styles['hero__content']}>
          <p className={styles['hero__eyebrow']} aria-hidden="true">Lundqvist</p>
          <h1 className={styles['hero__title']}>
            <span className={styles['hero__title-light']}>LIGHT</span>SIDE
          </h1>
          <p className={styles['hero__sub']}>Competing from the shadows.</p>
          <div className={styles['hero__cta-group']}>
            <Button as="a" href="/contact" variant="primary" size="lg">
              Contact
            </Button>
            <Button as="a" href="/about" variant="ghost" size="lg">
              About Us
            </Button>
          </div>
        </div>
      </section>

      <section className={styles['about-preview']} aria-labelledby="about-preview-heading">
        <div className={styles['about-preview__inner']}>
          <div className={styles['about-preview__text']}>
            <p className={styles['about-preview__label']} aria-hidden="true">Who we are</p>
            <h2 id="about-preview-heading" className={styles['about-preview__heading']}>
              A Swedish esports organization built to compete.
            </h2>
            <p className={styles['about-preview__body']}>
              Lundqvist Lightside is a competitive esports organization based in Sweden. We bring
              together skilled players, dedicated coaches, and passionate supporters under one
              banner — with the shared goal of reaching the top of Swedish and Nordic competition.
            </p>
            <p className={styles['about-preview__body']}>
              We believe in developing talent, building community, and representing our sponsors
              with pride on every stage we compete on.
            </p>
            <Link
              to="/about"
              className={styles['about-preview__link']}
              aria-label="Read more about Lundqvist Lightside"
            >
              Read more <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className={styles['about-preview__visual']} aria-hidden="true">
            <div className={styles['about-preview__logo-mark']}>
              <img src="/logo-white.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles['team-previews']} aria-labelledby="teams-preview-heading">
        <div className={styles['team-previews__inner']}>
          <p className={styles['team-previews__label']} aria-hidden="true">Compete</p>
          <h2 id="teams-preview-heading" className={styles['team-previews__heading']}>Our Teams</h2>
          <div className={styles['team-previews__grid']}>
            {teams.map((team) => (
              <article
                key={team.id}
                className={styles['team-previews__card']}
                style={{ '--team-accent': team.accentColor } as React.CSSProperties}
                aria-label={`${team.name} — ${team.game}`}
              >
                <div className={styles['team-previews__card-accent']} aria-hidden="true" />
                <div className={styles['team-previews__card-body']}>
                  <p className={styles['team-previews__card-game']}>{team.game}</p>
                  <h3 className={styles['team-previews__card-name']}>{team.name}</h3>
                  <p className={styles['team-previews__card-desc']}>{team.description}</p>
                  <Link
                    to="/teams"
                    className={styles['team-previews__card-link']}
                    aria-label={`View ${team.name} roster`}
                  >
                    View Roster <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles['sponsors']} aria-labelledby="sponsors-heading">
        <div className={styles['sponsors__inner']}>
          <p className={styles['sponsors__label']} aria-hidden="true">Partners</p>
          <h2 id="sponsors-heading" className={styles['sponsors__heading']}>Our Sponsors</h2>
          <div className={styles['sponsors__grid']}>
            {sponsors.map((sponsor) => {
              const hasUrl = Boolean(sponsor.websiteUrl && sponsor.websiteUrl !== '#');
              const className = `${styles['sponsors__item']} ${styles[`sponsors__item--${sponsor.tier}`]} ${hasUrl ? styles['sponsors__item--linked'] : ''}`;
              const inner = (
                <>
                  {sponsor.logoUrl ? (
                    <img
                      className={styles['sponsors__logo']}
                      src={sponsor.logoUrl}
                      alt={sponsor.name}
                    />
                  ) : (
                    <div className={styles['sponsors__logo-placeholder']}>
                      <span className={styles['sponsors__name']}>{sponsor.name}</span>
                    </div>
                  )}
                  <span className={styles['sponsors__tier-badge']}>
                    {sponsor.tier === 'main' ? 'Main Sponsor' : sponsor.tier}
                  </span>
                </>
              );

              return hasUrl ? (
                <a
                  key={sponsor.id}
                  href={sponsor.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  aria-label={`${sponsor.name} — visit website (opens in new tab)`}
                >
                  {inner}
                </a>
              ) : (
                <article key={sponsor.id} className={className} aria-label={sponsor.name}>
                  {inner}
                </article>
              );
            })}
          </div>
          <p className={styles['sponsors__cta-text']}>
            Interested in partnering with us?{' '}
            <Link
              to="/contact"
              className={styles['sponsors__cta-link']}
              aria-label="Get in touch about sponsorship opportunities"
            >
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>
    </main>
    </>
  );
}
