// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Third Storage docs",
  tagline: "Storage paradigms for web3 dapps",
  url: "https://docs.thirdstorage.com",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon,ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "thirdstorage", // Usually your GitHub org/user name.
  projectName: "thirdstorage-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/thirdstorage/thirdstorage-docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: "Third Storage",
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            position: "left",
            docId: "about",
            label: "Documentation",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "specs",
            label: "Specifications",
          },
          {
            href: "https://github.com/thirdstorage",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.thirdstorage.com",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/thirdstorage",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/thirdstorage",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Third Storage.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: "support_us",
        content:
          "Third Storage is not yet ready for production. Join our <a href='https://discord.thirdstorage.com'>Discord community</a> for exclusive community updates.",
        backgroundColor: "#2ABA6F",
        textColor: "#1B1B1D",
        isCloseable: true,
      },
    }),
};

module.exports = config;
