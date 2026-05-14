import { PageSeo } from '@/components/common/PageSeo/PageSeo';
import { CommunityChannels } from '@/components/common/CommunityChannels/CommunityChannels';
import styles from './Community.module.scss';

export function Community() {
  return (
    <>
      <PageSeo
        title="Community"
        description="Join the Lundqvist Lightside community. Follow us on social media, join our Discord, and grab official merch."
        path="/community"
      />
      <main>
        <section className={styles['page-hero']} aria-label="Community hero">
          <div className={styles['page-hero__bg']} aria-hidden="true" />
          <div className={styles['page-hero__overlay']} aria-hidden="true" />
          <div className={styles['page-hero__content']}>
            <h1 className={styles['page-hero__title']}>Join the Community</h1>
            <p className={styles['page-hero__sub']}>Follow, connect, and be part of the journey.</p>
          </div>
        </section>

        <a
          href="https://www.manatee.gg/collections/lundqvist-lightside"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['merch-banner']}
          aria-label="Official Merch Store - Shop Now (opens in new tab)"
        >
          <div className={styles['merch-banner__inner']}>
            <div className={styles['merch-banner__left']}>
              <p className={styles['merch-banner__title']}>Official Merch Store</p>
              <p className={styles['merch-banner__sub']}>Jerseys, hoodies & more - powered by Manatee.GG</p>
            </div>
            <span className={styles['merch-banner__cta']} aria-hidden="true">Shop Now →</span>
          </div>
        </a>

        <section className={styles['community']} aria-label="Community channels">
          <div className={styles['community__inner']}>
            <CommunityChannels />
          </div>
        </section>
      </main>
    </>
  );
}
