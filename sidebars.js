/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Introduction",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        "about",
        "why-thirdstorage",
        {
          type: "category",
          label: "Our Projects",
          collapsed: false,
          items: ["projects/localhost", "projects/cloud"],
        },
        "examples",
      ],
    },
    {
      type: "category",
      label: "Getting started",
      className: "menu_outer_list",
      collapsible: false,
      items: [
        "getting-started/creating-a-project",
        "getting-started/storage-paradigms",
      ],
    },
    {
      type: "category",
      label: "Javascript SDK",
      className: "menu_outer_list",
      collapsed: false,
      items: [
        "javascript/quickstart",
        "javascript/installation",
        "javascript/initialize",
        "javascript/api/authentication",
        "javascript/api/user-data",
        "javascript/api/database",
        "javascript/api/storage",
        "javascript/api/blockchain-provider",
        "javascript/api/sdk-suite",
      ],
    },
    {
      type: "category",
      label: "Hosting",
      className: "menu_outer_list",
      collapsed: true,
      items: [
        "hosting/ipfs-hosting",
        "hosting/spheron-hosting",
        "hosting/decentralized-cloud-hosting",
      ],
    },
    {
      type: "category",
      label: "Multi-node scaling",
      className: "menu_outer_list",
      collapsed: true,
      items: [
        "scaling/redundancy-scaling",
        "scaling/expansion-scaling",
        "scaling/sharded-scaling",
      ],
    },
    {
      type: "category",
      label: "Advanced",
      className: "menu_outer_list",
      collapsed: true,
      items: [
        "advanced/cli",
        "advanced/api-references",
        "advanced/response-codes",
        "advanced/creating-paradigms",
      ],
    },
  ],
  specs: [
    "specs/home",
    "specs/architecture",
    "specs/use-cases",
    "specs/technical-roadmap",
    "specs/cli",
    "specs/api-references",
    "specs/creating-paradigms",
    "specs/wallet-providers",
    "specs/blockchain-provider",
    "specs/access-control",
    "specs/decentralized-backups",
    "specs/benchmarks",
    "specs/rate-limits",
    "specs/multinode-scaling",
  ],
};

module.exports = sidebars;
