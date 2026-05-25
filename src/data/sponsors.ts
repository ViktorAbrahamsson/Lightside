import type { Sponsor } from '@/types';

export const sponsors: Sponsor[] = [
  {
    id: 'lundqvist',
    name: 'Lundqvist Trävaru',
    logoUrl: '/sponsors/lundqvist-travaru.png',
    tier: 'main',
    websiteUrl: 'https://www.lundqvisttravaru.se/',
    description: '',
  },
  {
    id: 'manategg',
    name: 'Manatee.GG',
    logoUrl: '/manatee.png',
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
