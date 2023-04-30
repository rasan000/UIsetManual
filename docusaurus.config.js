// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "マニュアル置き場",
  favicon: "img/hako.png",

  // Set the production url of your site here
  url: "https://rasan000.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/UIsetManual/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rasan000", // Usually your GitHub org/user name.
  projectName: "UIsetManual", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      // Replace with your project's social card
      image: "img/banner.png",
      navbar: {
        title: "マニュアル置き場",
        logo: {
          alt: "My Site Logo",
          src: "img/hako.png",
        },
        items: [
          {
            href: "https://github.com/rasan000",
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
                label: "不具合問い合わせ等",
                href: "https://discord.gg/bzN9Zw54",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/hakononaka0001",
              },
            ],
          },
          {
            title: "Developpers",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/rasan000",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ハコイリ.Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
