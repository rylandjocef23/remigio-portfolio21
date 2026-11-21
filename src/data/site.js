// Edit this file to update contact details and links across the whole site.
export const site = {
  name: 'Ryland Jocef Remigio',
  nickname: 'Ry',
  email: 'rylandjocef21@gmail.com',
  location: 'Antipolo, San Antonio, Zambales, Philippines',
  school: 'College of Computer Studies, Gordon College',

  // Add your profile URLs (for example 'https://github.com/your-username').
  // Links only appear on the site when a value is filled in.
  github: 'https://github.com/rylandjocef23',
  linkedin: '',

  // Optional: a form-service URL (for example Formspree: https://formspree.io/f/xxxxxxx).
  // Leave empty to open the visitor's email app instead.
  formEndpoint: '',
};

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

// Social links that are filled in above.
export const socialLinks = [
  { label: 'GitHub', href: site.github },
  { label: 'LinkedIn', href: site.linkedin },
].filter((link) => link.href);
