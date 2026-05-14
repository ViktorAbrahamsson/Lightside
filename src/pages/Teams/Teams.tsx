import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { teams } from '@/data/teams';
import { MemberCard, StaffCard } from '@/components/common/MemberCard/MemberCard';
import { PageSeo } from '@/components/common/PageSeo/PageSeo';
import { Reveal } from '@/components/common/Reveal/Reveal';
import type { LoLRole } from '@/types';
import styles from './Teams.module.scss';

const ROLE_ORDER: LoLRole[] = ['top', 'jungle', 'mid', 'bot', 'support', 'head-of-darkside', 'co-head-of-darkside', 'coach', 'co-coach', 'assistant-coach', 'strategic-coach', 'analyst', 'manager'];

function sortByRole<T extends { role: LoLRole }>(members: T[]) {
  return [...members].sort((a, b) => ROLE_ORDER.indexOf(a.role) - ROLE_ORDER.indexOf(b.role));
}

export function Teams() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [hash]);

  return (
    <>
      <PageSeo
        title="Our Teams"
        description="Meet the Lightside and Darkside rosters — Lundqvist Lightside's League of Legends teams competing in Swedish and Nordic circuits."
        path="/teams"
      />
      <main>
        <section className={styles['page-hero']} aria-label="Teams hero">
          <div className={styles['page-hero__bg']} aria-hidden="true" />
          <div className={styles['page-hero__overlay']} aria-hidden="true" />
          <div className={styles['page-hero__content']}>
            <h1 className={styles['page-hero__title']}>Our Teams</h1>
            <p className={styles['page-hero__sub']}>
              Two rosters. One organization. Built to compete.
            </p>
          </div>
        </section>

        {teams.map((team, index) => {
          const players = sortByRole(team.members.filter((m) => !m.isStaff));
          const staff = sortByRole(team.members.filter((m) => m.isStaff));
          const headingId = `team-heading-${team.id}`;
          const logoSrc = team.id === 'lightside'
            ? '/lightside-logo--blue-gradient.png'
            : '/lightside-logo--red-gradient.png';

          return (
            <section
              key={team.id}
              id={team.id}
              className={`${styles['team-roster']} ${index % 2 !== 0 ? styles['team-roster--alt'] : ''}`}
              style={{ '--roster-accent': team.accentColor } as React.CSSProperties}
              aria-labelledby={headingId}
            >
              <div className={styles['team-roster__inner']}>
                <Reveal><header className={styles['team-roster__header']}>
                  <p className={styles['team-roster__game']}>{team.game}</p>
                  <h2
                    id={headingId}
                    className={styles['team-roster__name']}
                    style={{ color: team.accentColor }}
                  >
                    {team.name}
                  </h2>
                  <p className={styles['team-roster__desc']}>{team.description}</p>
                  <div className={styles['team-roster__divider']} aria-hidden="true" />
                </header></Reveal>

                {team.playersComingSoon ? (
                  <Reveal><div className={styles['team-roster__coming-soon']}>
                    <p className={styles['team-roster__coming-soon-text']}>Roster coming soon</p>
                  </div></Reveal>
                ) : (
                  <div
                    className={styles['team-roster__players']}
                    role="list"
                    aria-label={`${team.name} players`}
                  >
                    {players.map((member, i) => (
                      <Reveal key={member.id} delay={i * 100}>
                        <div role="listitem">
                          <MemberCard member={member} accentColor={team.accentColor} logoSrc={logoSrc} />
                        </div>
                      </Reveal>
                    ))}
                  </div>
                )}

                {staff.length > 0 && (
                  <div className={styles['team-roster__staff-section']}>
                    <h3 className={styles['team-roster__staff-label']}>Staff</h3>
                    <div
                      className={styles['team-roster__staff-grid']}
                      role="list"
                      aria-label={`${team.name} staff`}
                    >
                      {staff.map((member, i) => (
                        <Reveal key={member.id} delay={i * 100}>
                          <div role="listitem">
                            <StaffCard member={member} accentColor={team.accentColor} logoSrc={logoSrc} />
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
