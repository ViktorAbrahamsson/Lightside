import type { ContactInfo, SocialLink } from '@/types';

export const headerSocials: SocialLink[] = [
  { platform: 'twitter', url: 'https://x.com/LightsideSWE' },
];

export const contactInfo: ContactInfo = {
  email: 'business@lightside.pro',
  discordUrl: 'https://discord.gg/vhUSjARa3N',
  location: 'Sweden',
  socials: [
    { platform: 'twitter', url: 'https://x.com/LightsideSWE', handle: '@LightsideSWE' },
    { platform: 'instagram', url: 'https://www.instagram.com/Lundqvistlightside/', handle: '@Lundqvistlightside' },
    { platform: 'twitch', url: 'https://www.twitch.tv/LundqvistLightside', handle: 'LundqvistLightside' },
    { platform: 'youtube', url: 'https://www.youtube.com/@LundqvistLightside', handle: '@LundqvistLightside' },
    { platform: 'tiktok', url: 'https://www.tiktok.com/@Lightsideswe', handle: '@Lightsideswe' },
    { platform: 'facebook', url: 'https://www.facebook.com/LightsideGaming', handle: 'LightsideGaming' },
  ],
};
