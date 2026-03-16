// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const spdColorTheme = {
  plain: {
    color: "#E3000F",
    backgroundColor: "#f6f8fa"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata"],
    style: {
      color: "#999988",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["string", "attr-value"],
    style: {
      color: "#e3116c"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "#393A34"
    }
  }, {
    types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
    style: {
      color: "#36acaa"
    }
  }, {
    types: ["atrule", "keyword", "attr-name", "selector"],
    style: {
      color: "#00a4db"
    }
  }, {
    types: ["function", "deleted", "tag"],
    style: {
      color: "#d73a49"
    }
  }, {
    types: ["function-variable"],
    style: {
      color: "#6f42c1"
    }
  }, {
    types: ["tag", "selector", "keyword"],
    style: {
      color: "#00009f"
    }
  }]
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Berlin-Mitte / Alexanderplatz',
  tagline: 'Sozialdemokraten für deinen Kiez',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://spd-alex.de',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Johannes Ott', // Usually your GitHub org/user name.
  projectName: 'Abteilungs Page', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/JohannesRu/abteilungs-page-exp/edit/main',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/leaflet.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      metadata: [
        {name: 'description', content: 'SPD Alexanderplatz - Politik aus der Mitte. Für einen lebenswerten Kiez: Für Alle.'},
        {name: 'keywords', content: 'SPD, Berlin Mitte, Alexanderplatz, Politik, Kiez, Sozialdemokraten'},
        // Open Graph
        {property: 'og:title', content: 'SPD Alexanderplatz - Berlin-Mitte'},
        {property: 'og:description', content: 'Politik aus der Mitte. Für einen lebenswerten Kiez: Für Alle.'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://spd-alex.de'},
        {property: 'og:image', content: 'https://spd-alex.de/img/logo.png'},
        {property: 'og:locale', content: 'de_DE'},
        // Twitter Card
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: 'SPD Alexanderplatz - Berlin-Mitte'},
        {name: 'twitter:description', content: 'Politik aus der Mitte. Für einen lebenswerten Kiez: Für Alle.'},
        {name: 'twitter:image', content: 'https://spd-alex.de/img/logo.png'},
      ],
      navbar: {
        title: 'Alexanderplatz / Berlin-Mitte',
        logo: {
          alt: 'SPD Logo',
          src: 'img/SPD-Logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'wir/intro',
            position: 'right',
            label: 'Lern uns kennen',
          },
          {to: 'aktuelles', label: 'Kalender', position: 'right'}, // or position: 'right'
          {to: '/machmit', label: 'Mach mit!', position: 'right'},
          {to: '/spenden', label: 'Spenden', position: 'right'},
          {
            type: 'dropdown',
            label: 'Mehr SPD',
            position: 'right',
            items: [
              {
                href: 'https://www.spd.de',
                label: 'Bundesverband',
              },
              {
                href: 'https://www.spd.berlin',
                label: 'Landesverband Berlin',
              },
              {
                href: 'https://www.spd-berlin-mitte.de',
                label: 'Berlin-Mitte',
              }
            ],
          },
        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `
          <a href="https://www.instagram.com/spdberlin_alex/"><img src="/img/SPD_Instagram_rot-frei_RGB.png"></img></a>
          <b>SPD Abteilung Mitte II Alexanderplatz</b><span>  </span>
          <a href="/docs/impressum">Impressum</a> -
          <a href="/docs/datenschutz">Datenschutz</a>
          `,
      },
      prism: {
        theme: spdColorTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
