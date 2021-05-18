/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DB Consent Management',
  tagline: 'Documentation to integrate DB Consent Layer on your website',
  url: 'https://bahn-x.github.io',
  baseUrl: '/cmp-documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Bahn-X', // Usually your GitHub org/user name.
  projectName: 'cmp-documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Consent Management Platform',
      logo: {
        alt: 'Deutsche Bahn Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'README',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Bahn-X/cmp-sdk',
            },
            {
              label: 'Imprint',
              href: 'https://www.gemeinsamgehtdas.de/imprint',
            },
            {
              label: 'Privacy',
              href: 'https://www.gemeinsamgehtdas.de/privacy',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Deutsche Bahn AG`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          //sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
