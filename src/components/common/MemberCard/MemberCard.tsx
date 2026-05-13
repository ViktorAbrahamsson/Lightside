import type { TeamMember, LoLRole, SocialPlatform } from '@/types';
import styles from './MemberCard.module.scss';

const ROLE_LABELS: Record<LoLRole, string> = {
  top: 'Top Laner',
  jungle: 'Jungler',
  mid: 'Mid Laner',
  bot: 'Bot Laner',
  support: 'Support',
  coach: 'Head Coach',
  'co-coach': 'Co Head Coach',
  'assistant-coach': 'Assistant Coach',
  manager: 'Manager',
  analyst: 'Analyst',
};

function extractHandle(url: string): string {
  try {
    const parts = new URL(url).pathname.split('/').filter(Boolean);
    const handle = parts[parts.length - 1] ?? '';
    return handle ? `@${handle}` : '';
  } catch {
    return '';
  }
}

function SocialOverlayIcon({ platform }: { platform: SocialPlatform }) {
  switch (platform) {
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    case 'twitch':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
  }
}

const ROLE_ICONS: Record<LoLRole, string> = {
  top:     '/Role=Top.png',
  jungle:  '/Role=Jungle.png',
  mid:     '/Role=Mid.png',
  bot:     '/Role=Bot.png',
  support: '/Role=Support.png',
  coach:             '/shield-white.png',
  'co-coach':        '/shield-white.png',
  'assistant-coach': '/shield-white.png',
  manager:          '/shield-white.png',
  analyst:          '/shield-white.png',
};

function RoleIcon({ role }: { role: LoLRole }) {
  return (
    <img
      src={ROLE_ICONS[role]}
      alt=""
      className={styles['member-card__role-img']}
      aria-hidden="true"
    />
  );
}

function Silhouette({ logoSrc }: { logoSrc: string }) {
  return (
    <div className={styles['member-card__silhouette']} aria-hidden="true">
      <img src={logoSrc} alt="" />
    </div>
  );
}

interface MemberCardProps {
  member: TeamMember;
  accentColor: string;
  logoSrc: string;
}

export function MemberCard({ member, accentColor, logoSrc }: MemberCardProps) {
  const hasSocials = member.socials.length > 0;

  return (
    <article
      className={`${styles['member-card']} ${hasSocials ? styles['member-card--linked'] : ''}`}
      style={{ '--accent': accentColor } as React.CSSProperties}
      tabIndex={hasSocials ? 0 : undefined}
    >
      <div className={styles['member-card__image-wrap']}>
        {member.imageUrl ? (
          <img
            className={styles['member-card__image']}
            src={member.imageUrl}
            alt={member.name}
            loading="lazy"
          />
        ) : (
          <Silhouette logoSrc={logoSrc} />
        )}

        <span
          className={styles['member-card__role-icon']}
          role="img"
          aria-label={ROLE_LABELS[member.role]}
        >
          <RoleIcon role={member.role} />
        </span>

        <div className={styles['member-card__overlay']} aria-hidden="true" />

        {hasSocials && (
          <div className={styles['member-card__social-overlay']} aria-hidden="true">
            {member.socials.map(({ platform, url }) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['member-card__social-link']}
                aria-label={`${member.ign} on ${platform}`}
                onClick={(e) => e.stopPropagation()}
              >
                <SocialOverlayIcon platform={platform} />
                <span className={styles['member-card__social-handle']}>
                  {extractHandle(url)}
                </span>
              </a>
            ))}
          </div>
        )}

        <div className={styles['member-card__info']}>
          <span className={styles['member-card__role-label']}>
            {ROLE_LABELS[member.role]}
          </span>
          <p className={styles['member-card__ign']}>{member.ign}</p>
          {member.name && <p className={styles['member-card__name']}>{member.name}</p>}
        </div>
      </div>
    </article>
  );
}

interface StaffCardProps {
  member: TeamMember;
  accentColor: string;
  logoSrc: string;
}

export function StaffCard({ member, accentColor, logoSrc }: StaffCardProps) {
  const firstSocial = member.socials[0];
  const className = `${styles['staff-card']} ${firstSocial ? styles['staff-card--linked'] : ''}`;
  const style = { '--accent': accentColor } as React.CSSProperties;

  const inner = (
    <>
      <div className={styles['staff-card__thumb']}>
        {member.imageUrl ? (
          <img
            className={styles['staff-card__image']}
            src={member.imageUrl}
            alt={member.name}
            loading="lazy"
          />
        ) : (
          <Silhouette logoSrc={logoSrc} />
        )}
      </div>
      <div className={styles['staff-card__body']}>
        <span className={styles['staff-card__role-label']}>
          {ROLE_LABELS[member.role]}
        </span>
        <p className={styles['staff-card__ign']}>{member.ign}</p>
        {member.name && <p className={styles['staff-card__name']}>{member.name}</p>}
      </div>
      {firstSocial && (
        <div className={styles['staff-card__social-hint']} aria-hidden="true">
          <SocialOverlayIcon platform={firstSocial.platform} />
        </div>
      )}
    </>
  );

  if (firstSocial) {
    return (
      <a
        className={className}
        style={style}
        href={firstSocial.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.ign} on ${firstSocial.platform}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <article className={className} style={style}>
      {inner}
    </article>
  );
}
