import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Features',
      href: getPermalink('/features'),
    },
    {
      text: 'Nodes',
      href: getPermalink('/nodes'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Get INCA Nodes', href: 'https://threefold.io', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Features',
      links: [
        { text: 'Mycelium Network', href: '/features' },
        { text: 'Quantum Safe Filesystem', href: '/features' },
        { text: 'Self-Healing Zero-OS', href: '/features' },
        { text: 'Open-Source', href: '/features' },
      ],
    },
    {
      title: 'Nodes',
      links: [
        { text: 'Silver', href: '/nodes' },
        { text: 'Platinum', href: '/nodes' },
        { text: 'AI', href: '/nodes' },
      ],
    },
    {
      title: 'About',
      links: [
        { text: 'Meet the Team', href: '/about' },
        { text: 'Our Values', href: '/about' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Let\'s chat', href: '/contact' },
        { text: 'Support', href: 'https://threefoldfaq.crisp.help/en/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/threefold_io' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/threefoldtech' },
  ],
  footNote: `
    A project <a class="text-blue-600 underline dark:text-muted" href="https://github.com/threefoldtech"> ThreeFold</a> · All rights reserved.
  `,
};