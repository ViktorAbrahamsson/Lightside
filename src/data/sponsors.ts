import type { Sponsor } from '@/types';

export const sponsors: Sponsor[] = [
  {
    id: 'lundqvist',
    name: 'Lundqvist Trävaru',
    tier: 'main',
    websiteUrl: 'https://www.lundqvisttravaru.se/',
    description:
      'Lundqvist has been the cornerstone of Lightside since the very beginning. Their belief in the vision of a competitive Swedish esports organization made everything possible. We are proud to carry their name and represent their values on every stage we compete on.',
  },
  {
    id: 'manategg',
    name: 'Manatee.GG',
    tier: 'partner',
    websiteUrl: 'https://www.manatee.gg/collections/lundqvist-lightside',
  },
  {
    id: 'sef',
    name: 'Svenska esportsförbundet',
    tier: 'member',
    websiteUrl: 'https://www.svenskesport.se/',
    description: "Sweden's official esports federation",
  },
];
