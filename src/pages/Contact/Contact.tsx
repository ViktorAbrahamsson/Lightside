import { Button } from '@/components/common/Button/Button';
import { PageSeo } from '@/components/common/PageSeo/PageSeo';
import { Reveal } from '@/components/common/Reveal/Reveal';
import { CommunityChannels } from '@/components/common/CommunityChannels/CommunityChannels';
import { contactInfo } from '@/data/contact';
import styles from './Contact.module.scss';

const PARTNER_PERKS = [
  {
    title: 'Brand Visibility',
    body: 'Your brand featured across our jerseys, social media, and all competition coverage reaching Swedish and Nordic audiences.',
  },
  {
    title: 'Engaged Audience',
    body: 'Direct access to a young, brand-loyal gaming community that follows our teams across platforms.',
  },
  {
    title: 'Growing Presence',
    body: 'We are actively expanding our competitive footprint - get in early as we scale across multiple titles and events.',
  },
];

export function Contact() {
  return (
    <>
      <PageSeo
        title="Work With Us"
        description="Partner with Lundqvist Lightside. Sponsorship opportunities for brands looking to reach a young, engaged Swedish esports audience."
        path="/contact"
      />
      <main>
        <section className={styles['page-hero']} aria-label="Contact hero">
          <div className={styles['page-hero__bg']} aria-hidden="true" />
          <div className={styles['page-hero__overlay']} aria-hidden="true" />
          <div className={styles['page-hero__content']}>
            <h1 className={styles['page-hero__title']}>Work With Us</h1>
            <p className={styles['page-hero__sub']}>
              Partner with a growing Swedish esports organization.
            </p>
          </div>
        </section>

        <section className={styles['partner']} aria-labelledby="partner-heading">
          <div className={styles['partner__inner']}>
            <Reveal><div className={styles['partner__header']}>
              <p className={styles['partner__label']} aria-hidden="true">Sponsorships & Partnerships</p>
              <h2 id="partner-heading" className={styles['partner__heading']}>
                Put your brand at the center of Swedish esports.
              </h2>
              <p className={styles['partner__sub']}>
                Lundqvist Lightside is building one of Sweden's most recognizable competitive esports
                brands. We are looking for partners who share our ambition and want to grow alongside us.
                Whether you're a local business or an established brand - there's a place for you here.
              </p>
              <Button
                as="a"
                href={`mailto:${contactInfo.email}?subject=Partnership Inquiry`}
                variant="primary"
                size="lg"
                className={styles['partner__cta']}
              >
                Get in touch
              </Button>
              <p className={styles['partner__email-hint']}>
                or email us directly at{' '}
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
            </div></Reveal>

            <div className={styles['partner__perks']} role="list" aria-label="Partnership benefits">
              {PARTNER_PERKS.map(({ title, body }, i) => (
                <Reveal key={title} delay={i * 100}>
                  <div className={styles['partner__perk']} role="listitem">
                    <h3 className={styles['partner__perk-title']}>{title}</h3>
                    <p className={styles['partner__perk-body']}>{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles['community']} aria-label="Community channels">
          <Reveal><div className={styles['community__inner']}>
            <CommunityChannels />
          </div></Reveal>
        </section>
      </main>
    </>
  );
}
