export type SocialPlatform =
  | 'twitter'
  | 'instagram'
  | 'twitch'
  | 'youtube'
  | 'tiktok'
  | 'facebook'
  | 'discord';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  handle?: string;
}

export type LoLRole =
  | 'top'
  | 'jungle'
  | 'mid'
  | 'bot'
  | 'support'
  | 'coach'
  | 'co-coach'
  | 'assistant-coach'
  | 'manager'
  | 'analyst';

export interface TeamMember {
  id: string;
  name: string;
  ign: string;
  role: LoLRole;
  isStaff: boolean;
  imageUrl?: string;
  socials: SocialLink[];
}

export interface Team {
  id: 'lightside' | 'darkside';
  name: string;
  game: string;
  description: string;
  accentColor: string;
  playersComingSoon?: boolean;
  members: TeamMember[];
}

export type SponsorTier = 'main' | 'partner' | 'sponsor' | 'member';

export interface Sponsor {
  id: string;
  name: string;
  logoUrl?: string;
  websiteUrl?: string;
  tier: SponsorTier;
  description?: string;
}

export interface ContactInfo {
  email: string;
  discordUrl: string;
  location: string;
  socials: SocialLink[];
}
