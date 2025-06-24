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
  fastlink: "https://www.github.com/Aevstiel",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "astiel",
      background_url: "src/img/banners/lycia-2.jpg",
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
              name: "Apple",
              url: "https:///account.apple.com/",
              icon: "brand-apple",
              icon_color: palette.mauve,
            },
            {
              name: "Lyra",
              url: "https:///lyra.it.com/",
              icon: "flare",
              icon_color: palette.flamingo,
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
              name: "Proton Mail",
              url: "https://calendar.google.com",
              icon: "mailbox",
              icon_color: palette.mauve,
            },
            {
              name: "Sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.flamingo,
            },
            {
              name: "Filen",
              url: "https://filen.io",
              icon: "cloud-storm",
              icon_color: palette.lavender,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "Defcon",
              url: "https://www.defconlevel.com",
              icon: "alert-hexagon",
              icon_color: palette.red,
            },
            {
              name: "Legion",
              url: "https://ildu.com.ua",
              icon: "tank",
              icon_color: palette.mauve,
            },
            {
              name: "Finance",
              url: "https://finance.yahoo.com",
              icon: "chart-dots-2",
              icon_color: palette.flamingo,
            },
            {
              name: "Грунт",
              url: "https://grnt.media",
              icon: "eye-bolt",
              icon_color: palette.lavender,
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
      background_url: "src/img/banners/lycia-3.jpg",
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
              name: "Debian Wiki",
              url: "https://wiki.debian.org",
              icon: "brand-debian",
              icon_color: palette.red,
            },
            {
              name: "Hacker News",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.mauve,
            },
            {
              name: "Apple Wiki",
              url: "https://theapplewiki.com/wiki",
              icon: "brand-apple",
              icon_color: palette.lavender,
            },
            {
              name: "Champagne",
              url: "https://champagne.pages.dev",
              icon: "skull",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/lycia-1.jpg",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "Instagram",
              url: "https://www.instagram.com",
              icon: "brand-instagram",
              icon_color: palette.red,
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.mauve,
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.flamingo,
            },
            {
              name: "Dread",
              url: "https://www.reddit.com/r/unixporn",
              icon: "shield-checkered",
              icon_color: palette.lavender,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.red,
            },
            {
              name: "Steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.mauve,
            },
            {
              name: "Epic Games",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.flamingo,
            },
            {
              name: "Nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
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
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.red);
