// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato, lycia
const preferredLightTheme = mocha;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Bellinzona",
    scale: "C",
  },
  clock: {
    format: "h:i",
    icon_color: palette.maroon,
  },
  additionalClocks: [
  {
    label: "NYC", // Label for the clock
    timezone: "America/New_York", // IANA timezone name (handles DST automatically)
    format: "h:i", // 12-hour format with leading zero (09:30 PM)
    locale: "en-US", // Locale for date/time formatting
    icon_color: palette.blue // Optional different icon color
  }
],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://www.github.com/Quinta0",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "dai ly",
      background_url: "src/img/banners/banner_05.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "Arch Wiki",
              url: "https://wiki.archlinux.org/",
              icon: "brand-wikipedia",
              icon_color: palette.red,
            },
            {
              name: "iCorsi",
              url: "https://account.apple.com/",
              icon: "book",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "Gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.red,
            },
            {
              name: "Sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.flamingo,
            },
            {
              name: "Claude",
              url: "https://claude.ai/new",
              icon: "brain",
              icon_color: palette.lavender,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "Youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.mauve,
            },
            {
              name: "Finance",
              url: "https://finance.yahoo.com",
              icon: "chart-dots-2",
              icon_color: palette.flamingo,
            },
            {
              name: "Translate",
              url: "https://translate.google.com",
              icon: "language-katakana",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_17.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "Github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.red,
            },
            {
              name: "ChatGPT",
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: palette.mauve,
            },
            {
              name: "Stack Overflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.flamingo,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "Kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.red,
            },
            {
              name: "Leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.mauve,
            },
            {
              name: "Exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.flamingo,
            },
            {
              name: "Chess",
              url: "https://chess.com",
              icon: "chess",
              icon_color: palette.lavender,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "Champagne",
              url: "https://champagne.pages.dev",
              icon: "skull",
              icon_color: palette.peach,
            },
            {
              name: "Coursera",
              url: "https://www.coursera.org/",
              icon: "target",
              icon_color: palette.peach,
            },
            {
              name: "Class Central",
              url: "https://www.classcentral.com/u/5078801",
              icon: "Copyright",
              icon_color: palette.peach,
            },
            {
              name: "Cognitive Class",
              url: "https://courses.cognitiveclass.ai/dashboard1",
              icon: "Mastercard",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_09.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "Reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.flamingo,
            },
            {
              name: "Unix",
              url: "https://www.reddit.com/r/unixporn",
              icon: "shield-checkered",
              icon_color: palette.lavender,
            },
          ],
        },
        {
          name: "multimedia",
          links: [
            {
              name: "1Shows",
              url: "https://www.1shows.live",
              icon: "brand-funimation",
              icon_color: palette.red,
            },
            {
              name: "Youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.mauve,
            },
            {
              name: "Genesis",
              url: "https://libgen.st/",
              icon: "book",
              icon_color: palette.flamingo,
            },
            {
              name: "Anker",
              url: "https://ankergames.net",
              icon: "device-gamepad-2",
              icon_color: palette.lavender,
            },
          ],
        },
      ],
    },
    {
      name: "Homelab ",
      background_url: "src/img/banners/banner_06.gif",
      categories: [
        {
          name: "Proxmox",
          links: [
            {
              name: "PVE",
              url: "https://192.168.1.108:8006/",
              icon: "device-imac-cog",
              icon_color: palette.flamingo,
            },
            {
              name: "Proxmox VE Helper-Scripts",
              url: "https://community-scripts.github.io/ProxmoxVE/",
              icon: "list",
              icon_color: palette.flamingo,
            },
            {
              name: "Homepage",
              url: "http://192.168.1.121:3000/",
              icon: "swipe",
              icon_color: palette.flamingo,
            },
          ],
        },
        {
          name: "Portainer and Docker",
          links: [
            {
              name: "Portainer",
              url: "https://192.168.1.123:9443/#!/auth",
              icon: "crane",
              icon_color: palette.flamingo,
            },
          ],
        },
        {
          name: "Domain page",
          links: [
            {
              name: "Porkbun",
              url: "https://porkbun.com/",
              icon: "pig",
              icon_color: palette.flamingo,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.red);
