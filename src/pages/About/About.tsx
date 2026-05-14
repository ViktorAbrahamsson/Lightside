import { Button } from '@/components/common/Button/Button';
import { PageSeo } from '@/components/common/PageSeo/PageSeo';
import { Reveal } from '@/components/common/Reveal/Reveal';
import { sponsors } from '@/data/sponsors';
import { contactInfo } from '@/data/contact';
import styles from './About.module.scss';

export function About() {
  return (
    <>
    <PageSeo
      title="About Us"
      description="Learn about Lundqvist Lightside - our story, mission, and the values that drive us to compete at the highest level in Swedish esports."
      path="/about"
    />
    <main>
      <section className={styles['page-hero']} aria-label="About us hero">
        <div className={styles['page-hero__bg']} aria-hidden="true" />
        <div className={styles['page-hero__overlay']} aria-hidden="true" />
        <div className={styles['page-hero__content']}>
          <h1 className={styles['page-hero__title']}>About Us</h1>
          <p className={styles['page-hero__sub']}>
            The story behind Lundqvist Lightside.
          </p>
        </div>
      </section>

      <section className={styles['story']} aria-labelledby="story-heading">
        <Reveal><div className={styles['story__inner']}>
          <div className={styles['story__text']}>
            <p className={styles['story__label']} aria-hidden="true">Our story</p>
            <h2 id="story-heading" className={styles['story__heading']}>
              Built to compete. Driven to grow.
            </h2>
            <p className={styles['story__body']}>
              Lundqvist Lightside was founded with a single purpose: to build a competitive
              esports organization that Sweden could be proud of. Starting in League of Legends,
              we set our sights on the Swedish and Nordic competitive scenes - and we haven't
              looked back since.
            </p>
            <p className={styles['story__body']}>
              We operate two teams under our banner. <strong>Lightside</strong> is our flagship
              roster, competing at the highest level we can reach. <strong>Darkside</strong> is
              our development team - a proving ground where raw talent is shaped into competitive
              players ready to step up.
            </p>
            <p className={styles['story__body']}>
              Beyond competition, we are building a community. A place where players, fans, and
              supporters come together around a shared passion for esports. Whether you're a
              player looking to compete or a fan cheering from the sidelines - you belong here.
            </p>
          </div>
        </div></Reveal>
      </section>

      <section className={styles['mission']} aria-label="Our mission">
        <div className={styles['mission__inner']}>
          <Reveal><div className={styles['mission__callout']}>
            <p className={styles['mission__label']} aria-hidden="true">Our mission</p>
            <blockquote className={styles['mission__quote']}>
              To develop competitive talent, foster community, and represent our partners with
              pride on every stage we compete on.
            </blockquote>
          </div></Reveal>
          <div className={styles['mission__values']} role="list">
            {[
              { title: 'Compete', body: 'We show up to win. Every scrim, every match, every tournament - we bring our best.' },
              { title: 'Develop', body: 'We invest in our players. Growth happens on and off the server.' },
              { title: 'Community', body: 'We build bridges between players and fans. Esports is nothing without its people.' },
              { title: 'Represent', body: 'We carry our sponsors and our name with honor. Results speak louder than words.' },
            ].map(({ title, body }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className={styles['mission__value']} role="listitem">
                  <h3 className={styles['mission__value-title']}>{title}</h3>
                  <p className={styles['mission__value-body']}>{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles['sponsor-spotlight']} aria-labelledby="sponsor-heading">
        <Reveal><div className={styles['sponsor-spotlight__inner']}>
          <p className={styles['sponsor-spotlight__label']} aria-hidden="true">Main Sponsor</p>
          <h2 id="sponsor-heading" className={styles['sponsor-spotlight__heading']}>Powered by Lundqvist</h2>
          {sponsors
            .filter((s) => s.tier === 'main')
            .map((sponsor) => (
              <div key={sponsor.id} className={styles['sponsor-spotlight__card']}>
                <div className={styles['sponsor-spotlight__logo']}>
                  {sponsor.logoUrl ? (
                    <img src={sponsor.logoUrl} alt={sponsor.name} />
                  ) : (
                    <span className={styles['sponsor-spotlight__logo-text']}>
                      {sponsor.name}
                    </span>
                  )}
                </div>
                {sponsor.description && (
                  <p className={styles['sponsor-spotlight__desc']}>{sponsor.description}</p>
                )}
                {sponsor.websiteUrl && sponsor.websiteUrl !== '#' && (
                  <a
                    href={sponsor.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['sponsor-spotlight__link']}
                    aria-label={`Visit ${sponsor.name} website (opens in new tab)`}
                  >
                    Visit website <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            ))}
        </div></Reveal>
      </section>

      <section className={styles['cta-section']} aria-labelledby="cta-heading">
        <Reveal><div className={styles['cta-section__inner']}>
          <h2 id="cta-heading" className={styles['cta-section__heading']}>Join the community</h2>
          <p className={styles['cta-section__body']}>
            Follow our journey, support our teams, and be part of something growing.
          </p>
          <div className={styles['cta-section__buttons']}>
            <Button
              as="a"
              href={contactInfo.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="discord"
              size="lg"
            >
              Join Discord
            </Button>
            <Button as="a" href="/contact" variant="ghost" size="lg">
              Contact Us
            </Button>
          </div>
        </div></Reveal>
      </section>
    </main>
    </>
  );
}
