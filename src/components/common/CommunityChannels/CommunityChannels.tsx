import { Reveal } from '@/components/common/Reveal/Reveal';
import { SOCIAL_ICONS, SOCIAL_LABELS } from '@/components/common/SocialIcons/SocialIcons';
import { contactInfo } from '@/data/contact';
import type { SocialPlatform } from '@/types';
import styles from './CommunityChannels.module.scss';

const PLATFORM_COLORS: Record<SocialPlatform, string> = {
  twitter:   '#1a1a1a',
  youtube:   '#FF0000',
  twitch:    '#9146FF',
  tiktok:    '#1a1a1a',
  instagram: '#C13584',
  facebook:  '#1877F2',
  discord:   '#5865F2',
};

function DiscordIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function CommunityChannels() {
  return (
    <div className={styles['channels']}>
      <Reveal>
        <a
          href={contactInfo.discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles['discord-card']}
          aria-label="Join our Discord (opens in new tab)"
        >
          <div className={styles['discord-card__icon-wrap']} aria-hidden="true">
            <DiscordIcon />
          </div>
          <h3 className={styles['discord-card__heading']}>Join Our Discord</h3>
          <p className={styles['discord-card__body']}>
            The Lightside Discord is our home base. Watch matches together, chat with players,
            get announcements first, and reach us directly for any questions. Everyone is
            welcome — fans, players and aspiring pros alike.
          </p>
          <span className={styles['discord-card__cta']}>Join Discord →</span>
        </a>
      </Reveal>

      <div className={styles['socials']} role="list" aria-label="Social media channels">
        {contactInfo.socials.map(({ platform, url, handle }, i) => {
          const Icon = SOCIAL_ICONS[platform];
          return (
            <Reveal key={platform} delay={i * 80}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['social-row']}
                role="listitem"
                aria-label={`${SOCIAL_LABELS[platform]}${handle ? ` — ${handle}` : ''} (opens in new tab)`}
              >
                <div
                  className={styles['social-row__icon-wrap']}
                  style={{ background: PLATFORM_COLORS[platform] }}
                  aria-hidden="true"
                >
                  <Icon />
                </div>
                <div className={styles['social-row__text']}>
                  <p className={styles['social-row__name']}>{SOCIAL_LABELS[platform]}</p>
                  {handle && <p className={styles['social-row__handle']}>{handle}</p>}
                </div>
                <span className={styles['social-row__arrow']} aria-hidden="true">→</span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
