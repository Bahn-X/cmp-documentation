/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DB Consent Management',
  tagline: 'Documentation to integrate DB Consent Layer on your website',
  url: 'https://bahn-x.github.io/',
  baseUrl: '/cmp-documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bahn-X', // Usually your GitHub org/user name.
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
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        //{to: '/docs/guides', label: 'Guides', position: 'left'}
        //{
        //  href: 'https://github.com/facebook/docusaurus',
        //  label: 'GitHub',
        //  position: 'right',
        //},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/bahn-x/',
            },
            {
              label: 'Impressum',
              href: 'https://www.gemeinsamgehtdas.de/imprint',
            },
            {
              label: 'Datenschutzhinweise',
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
        blog: {
          //showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
