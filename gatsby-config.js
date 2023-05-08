module.exports = {
  siteMetadata: {
    title: "TestForMe",
    description: "Kubernetes native continues functional testing",
    siteUrl: "https://www.testforme.io/",
    social: {
      twitter: "",
      github: "https://github.com/testforme-io",
      slack: {
        tfmLink: "https://testformeio.slack.com/",
        channels: [
          {name: "general", link: "https://testformeio.slack.com/archives/C02SM55MTJS"},
          {name: "announcements", link: "https://testformeio.slack.com/archives/C056LJTM3D1"}
        ]
      }
    },
    navigation: [
      {
        title: "Orchestration",
        url: "/orchestration",
      },
      {
        title: "Execution",
        url: "/execution",
      },
      {
        title: "Data",
        url: "/data",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-5Z1VTPDL73"],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              backgroundColor: "red",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content-pages",
        path: "./content/pages/",
      },
      __key: "content-pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
